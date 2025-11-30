// firebase.js (또는 <script> 태그 내부)

// 1. 필요한 기능(Auth: 로그인, Firestore: DB) 불러오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 2. [프로젝트 설정]에서 복사한 키 값 (당신의 프로젝트 정보)
const firebaseConfig = {
    apiKey: "당신의_apiKey_값", 
    authDomain: "당신의_authDomain_값",
    projectId: "당신의_projectId_값",
    // 나머지 값들도 모두 채워주세요
};

// 3. 앱 초기화 및 전역 변수 설정
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // 로그인 기능을 쓸 준비
const db = getFirestore(app); // DB 기능을 쓸 준비

// 이 변수들을 다른 JS 파일에서도 쓸 수 있도록 내보내거나 (export),
// 전역 객체(window)에 넣어둡니다.
window.auth = auth;
window.db = db;