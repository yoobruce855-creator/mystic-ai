// login.js 파일

// 🚨🚨🚨 이 두 줄은 삭제해야 합니다! (firebase.js에서 이미 전역으로 설정했기 때문) 🚨🚨🚨
// import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// import { doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// 1. 필요한 Firebase 객체는 전역 변수(window)에서 가져옵니다.
const auth = window.auth;
const db = window.db;

// 2. Auth 기능과 Firestore 기능은 URL import 방식이 아닌, 직접 호출 방식으로 바꿉니다.
//    (로그인 함수를 실행하는 `signInWithPopup` 같은 함수는 직접 import 해야 합니다.)
//    다시 import 해야 하는 함수는 이전에 안내드린 코드를 사용합니다.
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('google-login-btn');
const userDisplay = document.getElementById('user-display');

// 1. 로그인 버튼 클릭 시 실행될 함수
loginBtn.addEventListener('click', () => {
    // window.auth 대신 auth 변수를 사용하며, signInWithPopup 함수는 직접 import된 것을 사용합니다.
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("로그인 성공:", user.displayName);
            
            // 2. DB에 유저 정보 저장 및 크레딧 확인
            checkAndCreateUser(user);
        })
        .catch((error) => {
            console.error("로그인 실패:", error.message);
        });
});

// 3. 사용자가 로그인 되어있는지 항상 감시하는 함수 (새로고침해도 로그인 유지)
onAuthStateChanged(auth, (user) => { // window.auth 대신 auth 변수를 사용합니다.
    if (user) {
        // 유저가 로그인 되어있다면
        loginBtn.style.display = 'none'; // 로그인 버튼 숨기기
        userDisplay.innerHTML = `${user.displayName}님 환영합니다!`;
        checkAndCreateUser(user); // 크레딧 확인
    } else {
        // 로그아웃 상태라면
        loginBtn.style.display = 'block';
        userDisplay.innerHTML = '로그인해주세요.';
    }
});


// 4. Firestore DB에 유저가 있는지 확인하고, 없으면 크레딧 3개 주고 생성
async function checkAndCreateUser(user) {
    // doc 함수를 사용하여 DB 참조를 만듭니다.
    const userRef = doc(db, "users", user.uid); // window.db 대신 db 변수를 사용합니다.
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
        // DB에 처음 오는 유저: 초기 크레딧(3개)을 지급하고 문서 생성
        await setDoc(userRef, {
            name: user.displayName,
            email: user.email,
            credits: 3, // 초기 보너스 크레딧 지급!
            createdAt: new Date()
        });
        console.log("신규 유저 DB 생성 완료. 크레딧 3개 지급.");
    } else {
        // 이미 가입된 유저: 남은 크레딧을 콘솔에 표시
        const data = userSnap.data();
        console.log(`현재 크레딧: ${data.credits}개`);
        userDisplay.innerHTML = `${user.displayName}님 (크레딧: ${data.credits}개)`;
    }
}
