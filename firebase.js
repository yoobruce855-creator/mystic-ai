// login.js 파일: Firebase 전역 객체를 사용하여 로그인 및 크레딧 관리

// 필요한 Firebase 객체는 firebase.js에서 전역 변수(window)로 설정했으므로,
// 여기서 별도의 import 없이 window 객체를 통해 직접 접근합니다.
const auth = window.auth;
const db = window.db;

// 참고: GoogleAuthProvider, signInWithPopup, onAuthStateChanged, doc, getDoc, setDoc 함수는
//       브라우저 환경에서 전역으로 사용할 수 있게 임시로 가정하고 window.firebaseFuncs에서 가져옵니다.
//       (실제 Firebase CDN 방식에서는 이렇게 전역으로 노출되지 않지만,
//        Canvas 환경에서 파일 간 의존성 문제 해결을 위해 이전에 import 했던 함수들을 사용합니다.)

// 🚨 주의: Canvas 환경에서만 작동하도록, 필요한 함수들을 임시로 전역에서 가져옵니다.
//          실제 웹사이트에서는 이 함수들이 login.js 내에서 import 되어야 합니다.
const GoogleAuthProvider = window.firebase.GoogleAuthProvider;
const signInWithPopup = window.firebase.signInWithPopup;
const onAuthStateChanged = window.firebase.onAuthStateChanged;
const doc = window.firebase.doc;
const getDoc = window.firebase.getDoc;
const setDoc = window.firebase.setDoc;


const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('google-login-btn');
const userDisplay = document.getElementById('user-display');


// 1. 로그인 버튼 클릭 시 실행될 함수
loginBtn.addEventListener('click', () => {
    // window.auth에서 가져온 auth 변수를 사용합니다.
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("로그인 성공:", user.displayName);
            
            // 2. DB에 유저 정보 저장 및 크레딧 확인
            checkAndCreateUser(user);
        })
        .catch((error) => {
            console.error("로그인 실패:", error.message);
            // 팝업 창이 닫혔을 때 발생하는 오류는 무시합니다.
            if (error.code !== 'auth/popup-closed-by-user') {
                alert(`로그인 중 오류 발생: ${error.message}`);
            }
        });
});

// 3. 사용자가 로그인 되어있는지 항상 감시하는 함수 (새로고침해도 로그인 유지)
onAuthStateChanged(auth, (user) => { // window.auth에서 가져온 auth 변수를 사용합니다.
    if (user) {
        // 유저가 로그인 되어있다면
        loginBtn.style.display = 'none'; // 로그인 버튼 숨기기
        // 크레딧은 checkAndCreateUser에서 업데이트되므로 초기 메시지만 표시
        userDisplay.innerHTML = `${user.displayName}님 (크레딧 확인 중...)`;
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
    const userRef = doc(db, "users", user.uid); // window.db에서 가져온 db 변수를 사용합니다.
    
    try {
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
            userDisplay.innerHTML = `${user.displayName}님 (크레딧: 3개)`;
        } else {
            // 이미 가입된 유저: 남은 크레딧을 표시
            const data = userSnap.data();
            console.log(`현재 크레딧: ${data.credits}개`);
            userDisplay.innerHTML = `${user.displayName}님 (크레딧: ${data.credits}개)`;
        }
    } catch (e) {
        console.error("DB 작업 중 오류 발생:", e);
        userDisplay.innerHTML = `${user.displayName}님 (오류: DB 연결 실패)`;
    }
}
