const NamingEngine = {
    // 오행 상생 (Wood -> Fire -> Earth -> Metal -> Water)
    elements: ['wood', 'fire', 'earth', 'metal', 'water'],

    // 성씨별 오행 (간략화)
    surnames: {
        '김': 'wood', '이': 'wood', '박': 'wood', '최': 'metal', '정': 'fire',
        '강': 'wood', '조': 'fire', '윤': 'earth', '장': 'fire', '임': 'water',
        '한': 'water', '오': 'earth', '서': 'metal', '신': 'metal', '권': 'wood',
        '황': 'earth', '안': 'earth', '송': 'wood', '류': 'wood', '홍': 'water'
    },

    // 추천 이름 데이터베이스 (오행별, 성별 분류)
    recommendations: {
        wood: {
            male: [
                { hanja: '건우 (建宇)', meaning: '집을 세우다 (큰 인물)', strokes: [9, 6] },
                { hanja: '동현 (東賢)', meaning: '동쪽의 현인', strokes: [8, 15] },
                { hanja: '민재 (敏宰)', meaning: '민첩한 재상', strokes: [11, 10] }
            ],
            female: [
                { hanja: '가연 (佳娟)', meaning: '아름답고 예쁘다', strokes: [8, 10] },
                { hanja: '규리 (奎利)', meaning: '별처럼 빛나고 이롭다', strokes: [9, 7] },
                { hanja: '다은 (多恩)', meaning: '은혜가 많다', strokes: [6, 10] }
            ]
        },
        fire: {
            male: [
                { hanja: '도현 (道賢)', meaning: '도리를 아는 현인', strokes: [12, 15] },
                { hanja: '서준 (瑞俊)', meaning: '상서롭고 준수하다', strokes: [13, 9] },
                { hanja: '태양 (太陽)', meaning: '큰 빛', strokes: [4, 12] }
            ],
            female: [
                { hanja: '나윤 (娜允)', meaning: '아름답고 진실되다', strokes: [9, 4] },
                { hanja: '지아 (智雅)', meaning: '지혜롭고 우아하다', strokes: [12, 12] },
                { hanja: '서윤 (瑞允)', meaning: '상서롭고 진실되다', strokes: [13, 4] }
            ]
        },
        earth: {
            male: [
                { hanja: '민재 (敏宰)', meaning: '민첩한 재상', strokes: [11, 10] },
                { hanja: '시우 (時雨)', meaning: '때맞춰 내리는 비', strokes: [10, 8] },
                { hanja: '준우 (俊宇)', meaning: '준수하고 큰 집', strokes: [9, 6] }
            ],
            female: [
                { hanja: '다은 (多恩)', meaning: '은혜가 많다', strokes: [6, 10] },
                { hanja: '유진 (有珍)', meaning: '보배가 있다', strokes: [6, 10] },
                { hanja: '아인 (雅仁)', meaning: '우아하고 어질다', strokes: [12, 4] }
            ]
        },
        metal: {
            male: [
                { hanja: '시현 (施賢)', meaning: '베푸는 현인', strokes: [9, 15] },
                { hanja: '지호 (智浩)', meaning: '지혜롭고 호탕하다', strokes: [12, 10] },
                { hanja: '은우 (銀宇)', meaning: '은처럼 빛나는 집', strokes: [14, 6] }
            ],
            female: [
                { hanja: '서연 (瑞然)', meaning: '상서로운 기운', strokes: [13, 12] },
                { hanja: '채원 (采源)', meaning: '근원이 풍요롭다', strokes: [8, 13] },
                { hanja: '수빈 (秀彬)', meaning: '빼어나고 빛나다', strokes: [7, 11] }
            ]
        },
        water: {
            male: [
                { hanja: '민준 (珉俊)', meaning: '옥돌처럼 준수하다', strokes: [9, 9] },
                { hanja: '우진 (宇眞)', meaning: '우주의 진리', strokes: [6, 10] },
                { hanja: '하준 (河俊)', meaning: '물처럼 넓고 준수하다', strokes: [8, 9] }
            ],
            female: [
                { hanja: '수아 (秀雅)', meaning: '빼어나고 우아하다', strokes: [7, 12] },
                { hanja: '지우 (智雨)', meaning: '지혜로운 비', strokes: [12, 8] },
                { hanja: '하은 (河恩)', meaning: '물처럼 넓은 은혜', strokes: [8, 10] }
            ]
        }
    },

    // 81수리 길흉 (일부 발췌)
    luckyStrokes: [1, 3, 5, 6, 7, 8, 11, 13, 15, 16, 17, 18, 21, 23, 24, 25, 29, 31, 32, 33, 35, 37, 38, 39, 41, 45, 47, 48, 52, 57, 61, 63, 65, 67, 68, 81],

    // 작명 로직
    generateNames: function (surname, birthDate, birthTime, gender) {
        // 1. 사주 분석하여 부족한 오행(Missing Element) 찾기
        let missingElement = 'wood'; // 기본값
        let dominantElement = 'fire';

        if (typeof SajuEngine !== 'undefined') {
            const date = new Date(birthDate);
            const pillars = SajuEngine.calculatePillars(date.getFullYear(), date.getMonth() + 1, date.getDate());
            const analysis = SajuEngine.analyzeElements(pillars);

            if (analysis.missing.length > 0) {
                missingElement = SajuEngine.elements[analysis.missing[0]].name.split(' ')[0].toLowerCase();
            } else {
                dominantElement = analysis.dominant.name.split(' ')[0].toLowerCase();
                const idx = this.elements.indexOf(dominantElement);
                missingElement = this.elements[(idx + 1) % 5];
            }
        }

        // 2. 추천 이름 목록 가져오기 (성별 필터링 적용)
        let candidates = [];
        const genderKey = gender === 'male' ? 'male' : 'female';

        // 부족한 오행 이름 2개
        const primaryList = this.recommendations[missingElement][genderKey] || this.recommendations['wood'][genderKey];
        candidates.push(...primaryList.slice(0, 2).map(n => ({ ...n, type: 'Yongsin (Balance)' })));

        // 랜덤 오행 이름 1개 (다양성)
        const randomElement = this.elements[Math.floor(Math.random() * 5)];
        const secondaryList = this.recommendations[randomElement][genderKey];
        candidates.push({ ...secondaryList[0], type: 'Harmony' });

        // 3. 결과 포맷팅
        return {
            surname: surname,
            sajuSummary: `사주 분석 결과, [${missingElement.toUpperCase()}] 기운을 보완하는 ${gender === 'male' ? '남자' : '여자'} 이름을 추천합니다.`,
            recommendations: candidates.map(name => {
                const totalStrokes = name.strokes[0] + name.strokes[1];
                const isLucky = this.luckyStrokes.includes(totalStrokes);

                return {
                    fullName: surname + name.hanja.split(' ')[0],
                    hanja: surname + ' ' + name.hanja,
                    meaning: name.meaning,
                    reason: name.type === 'Yongsin (Balance)'
                        ? `부족한 ${missingElement} 기운을 보완하여 사주의 균형을 맞춥니다.`
                        : `음양오행의 조화가 뛰어나고 부르기 좋은 이름입니다.`,
                    score: isLucky ? 95 + Math.floor(Math.random() * 5) : 85 + Math.floor(Math.random() * 10)
                };
            })
        };
    }
};
