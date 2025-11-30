
#### **JavaScript (로그인 로직)**

```javascript
// login.js (또는 위 1단계 코드 아래에 이어서 작성)

import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('google-login-btn');
const userDisplay = document.getElementById('user-display');

// 1. 로그인 버튼 클릭 시 실행될 함수
loginBtn.addEventListener('click', () => {
    signInWithPopup(window.auth, provider)
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
onAuthStateChanged(window.auth, (user) => {
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
    const userRef = doc(window.db, "users", user.uid);
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