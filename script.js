const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

// Initialize Firebase (replace with your project's configuration from the main branch)
const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCefe1-ckCSC8m8CW-Ou10Hrb09IO8VIsc",
  authDomain: "beasmeraraab-wasda.firebaseapp.com",
  projectId: "beasmeraraab-wasda",
  storageBucket: "beasmeraraab-wasda.appspot.com",
  messagingSenderId: "689959151747",
  appId: "1:689959151747:web:e9f35e79c6899f157013b6",
  measurementId: "G-2LC3W6ZEXB"
};
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log('User created:', cred.user);

      // Redirect to login branch website after successful signup
      window.location.href = "https://beasmeraraabwasda.github.io/beasmeraraabwasda/login"; // Replace with your login branch URL
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
    });
});
