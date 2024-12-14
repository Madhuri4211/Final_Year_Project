document.addEventListener('DOMContentLoaded', () => {
  const signinSection = document.getElementById('signin-section');
  const signupSection = document.getElementById('signup-section');

  const goToSignup = document.getElementById('go-to-signup');
  const goToSignin = document.getElementById('go-to-signin');

  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');

  // Redirect to dashboard
  const redirectToDashboard = () => {
      window.location.href = 'dashboard.html';
  };

  // Show signup page
  goToSignup.addEventListener('click', () => {
      signinSection.classList.add('hidden');
      signupSection.classList.remove('hidden');
  });

  // Show signin page
  goToSignin.addEventListener('click', () => {
      signupSection.classList.add('hidden');
      signinSection.classList.remove('hidden');
  });

  // Handle sign-in form submission
  signinForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Validate login logic here
      redirectToDashboard();
  });

  // Handle sign-up form submission
  signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Validate signup logic here (e.g., confirm password matches)
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
      }
      redirectToDashboard();
  });
});
