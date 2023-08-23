document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const passwordInput = document.getElementById('password');
  const passwordAlert = document.getElementById('passwordAlert');

  loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = passwordInput.value;

    
console.log(`Username: ${username}\nPassword: ${password}`);

    // Simulasi data dari database
    const mockDatabase = {
      validUsername: 'aaron',
      validPassword: '123456'
    };
    

    if (username && password) {
      if (username === mockDatabase.validUsername && password === mockDatabase.validPassword) {
        // Data cocok, tampilkan alert sukses (simulasi)
        alert('Login Berhasil');
      } else {
        // Data tidak cocok
        passwordAlert.textContent = 'Email atau Password Salah.';
        passwordAlert.style.color = 'red';
      }
    } else {
      passwordAlert.textContent = 'Isi form email dan password';
      passwordAlert.style.color = 'red';
    }
  });
});
