// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyCBWyTDYBoENIoDs8Lb2U2O9PaVoP9V1wE",
//     authDomain: "applemarket-69217.firebaseapp.com",
//     projectId: "applemarket-69217",
//     storageBucket: "applemarket-69217.appspot.com",
//     messagingSenderId: "240357081996",
//     appId: "1:240357081996:web:05841127afa46772060ca9"
//   };

// // Инициализация Firebase
// const app = initializeApp(firebaseConfig);

// // Получение экземпляра Auth
// const auth = getAuth();

// // Получение элементов страницы
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
// const loginButton = document.querySelector('#login');

// // Обработчик нажатия на кнопку "Войти"
// loginButton.addEventListener('click', (e) => {
//   e.preventDefault();

//   const email = emailInput.value;
//   const password = passwordInput.value;

//   // Авторизация пользователя
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Успешная авторизация
//       const user = userCredential.user;
//       console.log('User signed in:', user);
//     })
//     .catch((error) => {
//       // Ошибка при авторизации
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log('Error signing in:', errorMessage);
//     });
// });


const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = document.querySelector('#password').value;

  if (password === 'mypassword') {
    window.location.href = 'admin-panel.html';
  } else {
    alert('Неверный пароль');
  }
});


