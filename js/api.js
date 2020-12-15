const formRegister = document.getElementById('register-form');
formRegister.addEventListener('submit', register);

const formLogin = document.getElementById("login-form");
formLogin.addEventListener('submit', login);


async function register(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const passwordRegister = document.getElementById('password-register').value;
  const passwordConfirm = document.getElementById('password-confirm').value;
  let emailExist = [];
  event.preventDefault();
  const newUser = await fetch('https://users-register.herokuapp.com').then((data) => {
    return data.json()
  });
  const found = newUser.map(user => {
    if (user.email == email) {
      emailExist.push(user.name);
    }
  });
  console.log(emailExist);
  if (emailExist.length > 0) {
    alert(`This email has been registered by ${emailExist[0]} `);

  } else {
    console.log('OK')

    if (passwordRegister == passwordConfirm) {
      const data = {
        name,
        email,
        password: passwordRegister
      };

      const options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      await fetch('https://users-register.herokuapp.com/users', options)
      alert('Registration done successfully');
      window.location.href = "index.html";
    } else {
      alert('The passwords do not match');
    }
  }

}

async function login(event) {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('password').value;
  event.preventDefault();
  const res = await fetch('https://users-register.herokuapp.com');
  const users = await res.json();

  console.log(users);

  let matches = users.map(user => {

    if (user.email == email) {
      if (user.password == password) {
        alert(`Welcome to Beautify ${user.name}`);
        window.location.href = "index.html";

      } else {
        alert('Incorrect Password');

      }
    }

  });

}