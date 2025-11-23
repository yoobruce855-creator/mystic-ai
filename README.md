# Mystic AI - AI 사주 & 타로 서비스

## 🎯 프로젝트 개요
AI 기반 운세 서비스로 타로, 사주팔자, 꿈해몽, 궁합, 작명/개명, 오늘의 운세 등을 제공합니다.

## 💳 수익화 모델

### 크레딧 시스템
- 무료 사용자: 3 크레딧 제공
- 타로: 1 크레딧
- 사주팔자: 2 크레딧  
- 꿈해몽: 1 크레딧
- 궁합: 2 크레딧
- 작명/개명: 1 크레딧
- 오늘의 운세: 무료

### 프리미엄 멤버십
1. **월간 플랜**: 9,900원/월
   - 모든 서비스 무제한 이용
   - AI 맞춤 상담
   - 상세 분석 리포트
   - 광고 제거

2. **연간 플랜**: 99,000원/년 (17% 할인)
   - 월간 플랜의 모든 혜택
   - 평생 운세 분석
   - 우선 고객 지원
   - 매월 신규 콘텐츠

3. **크레딧 충전**: 4,900원/10 크레딧
   - 원하는 만큼만 사용
   - 유효기간 1년
   - 환불 가능

## 🚀 실행 방법

### 프론트엔드만 실행 (현재 작동 중)
1. `index.html` 파일을 브라우저에서 열기
2. 모든 기능이 프론트엔드에서 작동합니다

### 서버 포함 실행 (Node.js 필요)
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 또는 일반 실행
npm start
```

서버 실행 후:
- 메인 앱: http://localhost:3000
- 관리자 대시보드: http://localhost:3000/admin

## 📊 관리자 화면 접속 방법

### 방법 1: 직접 파일 열기 (서버 없이)
```
file:///C:/Users/yoost/.gemini/antigravity/playground/vast-sagan/admin.html
```
브라우저 주소창에 위 경로를 입력하거나, `admin.html` 파일을 더블클릭

### 방법 2: 서버 실행 후 (Node.js 필요)
```
http://localhost:3000/admin
```

### 관리자 기본 계정
- 이메일: admin@mysticai.com
- 비밀번호: admin123

## 📁 파일 구조
```
vast-sagan/
├── index.html          # 메인 앱
├── admin.html          # 관리자 대시보드
├── script.js           # 메인 JavaScript
├── styles.css          # 스타일시트
├── server.js           # Express 서버
├── package.json        # 의존성 관리
├── .env                # 환경 변수
└── backend/
    ├── database.js     # 인메모리 데이터베이스
    ├── middleware/
    │   └── auth.js     # 인증 미들웨어
    └── routes/
        ├── auth.js     # 인증 라우트
        ├── payment.js  # 결제 라우트
        ├── user.js     # 사용자 라우트
        └── admin.js    # 관리자 라우트
```

## 🎨 주요 기능

### 사용자 기능
- ✅ 타로 카드 리딩 (3장 스프레드)
- ✅ 사주팔자 분석
- ✅ 꿈해몽 (5,000+ 데이터베이스)
- ✅ 궁합 보기 (연애/결혼/사업)
- ✅ 작명/개명 (성명학 기반)
- ✅ 오늘의 운세 (무료)
- ✅ 크레딧 시스템
- ✅ 프리미엄 멤버십

### 관리자 기능
- ✅ 사용자 관리
- ✅ 결제 내역 조회
- ✅ 통계 대시보드
- ✅ 크레딧 수정
- ✅ 프리미엄 상태 관리
- ✅ 매출 차트

## 💰 수익화 전략

### 1단계: 무료 체험
- 신규 사용자에게 3 크레딧 무료 제공
- 오늘의 운세는 항상 무료
- 서비스 품질로 신뢰 구축

### 2단계: 크레딧 판매
- 소액 결제로 부담 없이 시작
- 4,900원/10 크레딧
- 유효기간 1년으로 안심

### 3단계: 프리미엄 전환
- 자주 사용하는 사용자는 프리미엄으로 전환
- 월 9,900원으로 무제한 이용
- 연간 플랜으로 장기 고객 확보

## 🔐 보안 설정

### 환경 변수 (.env)
```
PORT=3000
NODE_ENV=development
JWT_SECRET=mystic-ai-super-secret-jwt-key-2024
TOSS_CLIENT_KEY=test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq
TOSS_SECRET_KEY=test_sk_zXLkKEypNArWmo50nX3lmeaxYG5R
ADMIN_EMAIL=admin@mysticai.com
ADMIN_PASSWORD=admin123
```

**⚠️ 실제 배포 시 반드시 변경하세요!**

## 📱 결제 연동

### Toss Payments
현재 테스트 키로 설정되어 있습니다.
실제 서비스 시:
1. https://developers.tosspayments.com/ 에서 가입
2. 실제 API 키 발급
3. `.env` 파일의 `TOSS_CLIENT_KEY`와 `TOSS_SECRET_KEY` 업데이트

## 🎯 다음 단계

### 즉시 가능
- [x] 모든 서비스 기능 완성
- [x] 결제 시스템 구현
- [x] 관리자 대시보드 완성
- [x] 프리미엄 모달 추가

### 배포 전 필요
- [ ] 실제 Toss Payments API 키 설정
- [ ] 데이터베이스 연동 (현재 인메모리)
- [ ] 실제 AI API 연동 (OpenAI, Claude 등)
- [ ] 도메인 및 호스팅 설정
- [ ] SSL 인증서 설정

### 마케팅
- [ ] SEO 최적화
- [ ] 소셜 미디어 연동
- [ ] 리뷰 시스템 추가
- [ ] 추천인 프로그램

## 📞 지원

문제가 발생하면 다음을 확인하세요:
1. Node.js가 설치되어 있는지 확인
2. `npm install` 실행 여부 확인
3. `.env` 파일이 있는지 확인
4. 포트 3000이 사용 가능한지 확인

## 📄 라이선스
MIT License
