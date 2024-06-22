document.addEventListener('DOMContentLoaded', function () {
  let uname = document.getElementById('user1');
  let uhelp = document.getElementById("userHelp");
  let email1 = document.getElementById('exampleInputEmail1');
  let help = document.getElementById("emailHelp");
  let mobile = document.getElementById('exampleInputmobail1');
  let help1 = document.getElementById("mobilehelp");
  let pass1 = document.getElementById('exampleInputPassword1');
  let helppass = document.getElementById("passHelp");
  let pass2 = document.getElementById('exampleInputPassword2');
  let helppass2 = document.getElementById("pass2Help");
  let sub = document.getElementById('submitt');
  let checkb1 = document.getElementById("exampleCheck1");
  let checkb2 = document.getElementById("exampleCheck2");
  let p = document.getElementById("p1");
  let pp = document.getElementById("p2");

  uname.value = localStorage.getItem('username') || sessionStorage.getItem('username') || '';
  email1.value = localStorage.getItem('email') || sessionStorage.getItem('email') || '';
  mobile.value = localStorage.getItem('mobile') || sessionStorage.getItem('mobile') || '';
  pass1.value = localStorage.getItem('password1') || sessionStorage.getItem('password1') || '';
  pass2.value = localStorage.getItem('password2') || sessionStorage.getItem('password2') || '';
  checkb1.checked = JSON.parse(localStorage.getItem('checkb1')) || JSON.parse(sessionStorage.getItem('checkb1')) || false;
  checkb2.checked = JSON.parse(localStorage.getItem('checkb2')) || JSON.parse(sessionStorage.getItem('checkb2')) || false;

  sub.addEventListener("click", function (e) {
      e.preventDefault();
      let isValid = true;

      let unameinput = uname.value.trim();
      let validateu = /^(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])[\w.-]{5,20}$/;
      let validateuresult = validateu.test(unameinput);
      if (validateuresult) {
          uhelp.innerHTML = "valid";
          uhelp.style.color = "black";
      } else {
          uhelp.innerHTML = "not valid";
          uhelp.style.color = "red";
          isValid = false;
      }

      let email1input = email1.value.trim();
      let validate = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
      let validateresult = validate.test(email1input);
      if (validateresult) {
          help.innerHTML = "valid";
          help.style.color = "black";
      } else {
          help.innerHTML = "not valid";
          help.style.color = "red";
          isValid = false;
      }

      let mobailinput = mobile.value.trim();
      let validatem = /^077\d{7}$/;
      let validateresultm = validatem.test(mobailinput);
      if (validateresultm) {
          help1.innerHTML = "valid";
          help1.style.color="black";
      } else {
          help1.innerHTML = "not valid";
          help1.style.color = "red";
          isValid = false;
      }

      let pass1input = pass1.value.trim();
      let validatep = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()])[A-Za-z\d!@#$%^&()]{6,18}$/;
      let validateresultp = validatep.test(pass1input);
      if (validateresultp) {
          helppass.innerHTML = "valid";
          helppass.style.color="black";
      } else {
          helppass.innerHTML = "not valid";
          helppass.style.color = "red";
          isValid = false;
      }

      let pass2input = pass2.value.trim();
      if (pass1input === pass2input) {
          helppass2.innerHTML = "";
          helppass2.style.color = "black";
      } else {
          helppass2.innerHTML = "not match password";
          helppass2.style.color = "red";
          isValid = false;
      }

      if (!checkb1.checked) {
          p.innerText = "required";
          p.style.color = "red";
          isValid = false;
      } else {
          p.innerText = "";
      }

      if (!checkb2.checked) {
          pp.innerText = "required";
          pp.style.color = "red";
          isValid = false;
      } else {
          pp.innerText = "";
      }

      if (isValid) {
          localStorage.setItem('username', unameinput);
          localStorage.setItem('email', email1input);
          localStorage.setItem('mobile', mobailinput);
          localStorage.setItem('password1', pass1input);
          localStorage.setItem('password2', pass2input);
          localStorage.setItem('checkb1', checkb1.checked);
          localStorage.setItem('checkb2', checkb2.checked);

          sessionStorage.setItem('username', unameinput);
          sessionStorage.setItem('email', email1input);
          sessionStorage.setItem('mobile', mobailinput);
          sessionStorage.setItem('password1', pass1input);
          sessionStorage.setItem('password2', pass2input);
          sessionStorage.setItem('checkb1', checkb1.checked);
          sessionStorage.setItem('checkb2', checkb2.checked);
          window.location.href = 'welcome.html';

      }
  });
});

