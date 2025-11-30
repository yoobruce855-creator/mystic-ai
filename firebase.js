// firebase.js 파일: Firebase 초기화 및 필요한 서비스 설정

// 필요한 Firebase 기능들을 CDN URL로 직접 불러옵니다.
// Auth (인증/로그인), Firestore (데이터베이스)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// [프로젝트 설정]에서 복사한 유효한 키 값입니다.
const firebaseConfig = {
    apiKey: "AIzaSyC-rtcBAckCFBjZ6TjWDxgVf5OFzUKBupA", 
    authDomain: "mystic-ai-backend.firebaseapp.com",
    projectId: "mystic-ai-backend",
    storageBucket: "mystic-ai-backend.firebasestorage.app",
    messagingSenderId: "872277725850",
    appId: "1:872277725850:web:50f613e39f6fb148930523",
    // measurementId는 Analytics용이므로 여기서는 제외해도 됩니다.
};

// 1. 앱 초기화 (Firebase 연결)
const app = initializeApp(firebaseConfig);

// 2. 서비스 인스턴스 생성 및 전역 변수화
// 이 변수들을 window 객체에 넣어 다른 JS 파일에서 사용할 수 있게 합니다.
const auth = getAuth(app);    // 로그인 기능
const db = getFirestore(app); // 데이터베이스 기능

window.auth = auth;
window.db = db;


