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

    // 추천 이름 데이터베이스 (성공과 번영을 위한 프리미엄 한자)
    recommendations: {
        wood: {
            male: [
                { hanja: '건우 (建宇)', meaning: '세상을 세우는 큰 집 (대업을 이룸)', strokes: [9, 6] },
                { hanja: '동현 (東賢)', meaning: '동방의 어진 성인 (존경받는 리더)', strokes: [8, 15] },
                { hanja: '규민 (奎珉)', meaning: '별처럼 빛나는 옥돌 (만인의 추앙)', strokes: [9, 10] }
            ],
            female: [
                { hanja: '가연 (佳娟)', meaning: '아름답고 빼어난 자태 (최고의 영예)', strokes: [8, 10] },
                { hanja: '규리 (奎利)', meaning: '별처럼 빛나며 세상을 이롭게 함', strokes: [9, 7] },
                { hanja: '다은 (多恩)', meaning: '세상에 큰 은혜를 베풂', strokes: [6, 10] }
            ]
        },
        fire: {
            male: [
                { hanja: '도현 (道賢)', meaning: '큰 도를 깨우친 현인 (지혜의 정점)', strokes: [12, 15] },
                { hanja: '태양 (太陽)', meaning: '세상을 비추는 가장 큰 빛 (절대적 존재)', strokes: [4, 12] },
                { hanja: '준혁 (俊赫)', meaning: '준수하고 붉게 빛남 (혁혁한 공을 세움)', strokes: [9, 14] }
            ],
            female: [
                { hanja: '나윤 (娜允)', meaning: '아름답고 진실된 리더', strokes: [9, 4] },
                { hanja: '지아 (智雅)', meaning: '지혜롭고 고귀한 기품', strokes: [12, 12] },
                { hanja: '서윤 (瑞允)', meaning: '상서로운 기운으로 믿음을 줌', strokes: [13, 4] }
            ]
        },
        earth: {
            male: [
                { hanja: '민재 (敏宰)', meaning: '총명하게 세상을 다스리는 재상 (권력과 지위)', strokes: [11, 10] },
                { hanja: '준우 (俊宇)', meaning: '우주를 품을 만큼 큰 그릇', strokes: [9, 6] },
                { hanja: '현준 (賢俊)', meaning: '어질고 뛰어난 영웅', strokes: [15, 9] }
            ],
            female: [
                { hanja: '서현 (瑞賢)', meaning: '상서롭고 어진 성품 (덕망 높은 지도자)', strokes: [13, 15] },
                { hanja: '유진 (有珍)', meaning: '세상에 드문 귀한 보배', strokes: [6, 10] },
                { hanja: '아인 (雅仁)', meaning: '우아하고 어진 덕을 갖춤', strokes: [12, 4] }
            ]
        },
        metal: {
            male: [
                { hanja: '시현 (施賢)', meaning: '베풂을 실천하는 현인 (존경받는 부자)', strokes: [9, 15] },
                { hanja: '지호 (智浩)', meaning: '지혜가 넓고 호탕함 (대범한 리더십)', strokes: [12, 10] },
                { hanja: '은우 (銀宇)', meaning: '은처럼 빛나는 거대한 집 (부귀영화)', strokes: [14, 6] }
            ],
            female: [
                { hanja: '서연 (瑞然)', meaning: '상서로운 기운이 자연스럽게 따름', strokes: [13, 12] },
                { hanja: '채원 (采源)', meaning: '풍요의 근원 (마르지 않는 재물)', strokes: [8, 13] },
                { hanja: '수빈 (秀彬)', meaning: '빼어나게 빛나는 인물', strokes: [7, 11] }
            ]
        },
        water: {
            male: [
                { hanja: '민준 (珉俊)', meaning: '옥돌처럼 귀하고 준수한 인재', strokes: [9, 9] },
                { hanja: '우진 (宇眞)', meaning: '우주의 참된 이치를 깨달음', strokes: [6, 10] },
                { hanja: '하준 (河俊)', meaning: '큰 강처럼 넓고 깊은 덕망', strokes: [8, 9] }
            ],
            female: [
                { hanja: '수아 (秀雅)', meaning: '빼어나고 고귀한 아름다움', strokes: [7, 12] },
                { hanja: '지우 (智雨)', meaning: '세상을 적시는 지혜의 비', strokes: [12, 8] },
                { hanja: '하은 (河恩)', meaning: '강물처럼 넓은 은혜와 덕', strokes: [8, 10] }
            ]
        }
    },

    // 81수리 길흉 (대길수 위주)
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

        // 부족한 오행 이름 2개 (용신)
        const primaryList = this.recommendations[missingElement][genderKey] || this.recommendations['wood'][genderKey];
        candidates.push(...primaryList.slice(0, 2).map(n => ({ ...n, type: 'Yongsin (Balance)' })));

        // 랜덤 오행 이름 1개 (조화)
        const randomElement = this.elements[Math.floor(Math.random() * 5)];
        const secondaryList = this.recommendations[randomElement][genderKey];
        candidates.push({ ...secondaryList[0], type: 'Harmony' });

        // 3. 결과 포맷팅
        return {
            surname: surname,
            sajuSummary: `사주 분석 결과, 귀하의 자녀가 최고의 자리에 오를 수 있도록 [${missingElement.toUpperCase()}] 기운을 보완하는 대길(大吉)한 이름을 추천합니다.`,
            recommendations: candidates.map(name => {
                const totalStrokes = name.strokes[0] + name.strokes[1];
                const isLucky = this.luckyStrokes.includes(totalStrokes);

                return {
                    fullName: surname + name.hanja.split(' ')[0],
                    hanja: surname + ' ' + name.hanja,
                    meaning: name.meaning,
                    reason: name.type === 'Yongsin (Balance)'
                        ? `부족한 ${missingElement} 기운을 채워 사주의 균형을 맞추고, 성공과 명예를 부르는 이름입니다.`
                        : `음양오행의 조화가 완벽하며, 부귀영화를 누릴 수 있는 기운을 담고 있습니다.`,
                    score: isLucky ? 98 + Math.floor(Math.random() * 3) : 90 + Math.floor(Math.random() * 5) // 점수 상향 평준화
                };
            })
        };
    }
};
