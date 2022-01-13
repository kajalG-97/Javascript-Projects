
  async function Register(event) {
    try {
      event.preventDefault();
      var register_data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        mobile: document.getElementById("mobile").value,
        description: "github login",
      };
      register_data = JSON.stringify(register_data);
      console.log("register_data", register_data);
    } catch (e) {
      console.log("e", e);
    }
    let reg_url = `https://masai-api-mocker.herokuapp.com/auth/register`;
    let response = await fetch(reg_url, {
      method: "POST",
      body: register_data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log("data", data);

    if (data.error === true) {
      alert("User already exist");
    }
    if (data.error === false) {
      alert("Register successfull");
      window.location.href = "signin.html";
    }
  }
