
  // login = https://masai-api-mocker.herokuapp.com/auth/login
  async function login() {
    event.preventDefault();
    setTimeout(function () {
      alert("Invalid login ID or Password");
    }, 3000);
    try {
      var login_data = {
        username: document.getElementById("user").value,
        password: document.getElementById("pass").value,
      };
      login_data = JSON.stringify(login_data);
      console.log("login_data", login_data);
    } catch (err) {
      console.log("err", err);
    }

    var url = "https://masai-api-mocker.herokuapp.com/auth/login";
    let response = await fetch(url, {
      method: "POST",
      body: login_data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log("data", data);
    var token = data.token;
    var value = document.getElementById("user").value;
    getId(value, token);
    window.location.href = "navbar.html";
  }

  async function getId(value, token) {
    let api = `https://masai-api-mocker.herokuapp.com/user/${value}`;

    let res = await fetch(api, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data = await res.json();

    console.log("data", data);
  }
