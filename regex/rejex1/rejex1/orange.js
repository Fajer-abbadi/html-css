sub.addEventListener("click", function(e){
  e.preventDefault();

  let unameinput = uname.value;
  let validateu = /^(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])[\w.-]{5,20}$/;
  let validateuresult = validateu.test(unameinput);
  if (validateuresult) {
      uhelp.innerHTML = "valid";
      uhelp.style.color = "black";
      fullNameFlag = true;
  } else {
      uhelp.innerHTML = "not valid";
      uhelp.style.color = "red";
      fullNameFlag = false;
  }

  let email1input = email1.value;
  let validate = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
  let validateresult = validate.test(email1input);
  if (validateresult) {
      help.innerHTML = "valid";
      emailFlag = true;
  } else {
      help.innerHTML = "not valid";
      help.style.color = "red";
      emailFlag = false;
  }

  let mobailinput = mobile.value;
  let validatem = /^077\d{7}$/;
  let validateresultm = validatem.test(mobailinput);
  if (validateresultm) {
      help1.innerHTML = "valid";
      phoneFlag = true;
  } else {
      help1.innerHTML = "not valid";
      help1.style.color = "red";
      phoneFlag = false;
  }

  let pass1input = pass1.value;
  let validatep = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()])[A-Za-z\d!@#$%^&()]{6,18}$/;
  let validateresultp = validatep.test(pass1input);
  if (validateresultp) {
      helppass.innerHTML = "valid";
      passwordFlag = true;
  } else {
      helppass.innerHTML = "not valid";
      helppass.style.color = "red";
      passwordFlag = false;
  }

  let pass2input = pass2.value;
  if (pass1input === pass2input) {
      helppass2.innerHTML = "correct password";
      helppass2.style.color = "black";
      passwordFlagConfirm = true;
  } else {
      helppass2.innerHTML = "not match password";
      helppass2.style.color = "red";
      passwordFlagConfirm = false;  
  }

  if (!checkb1.checked) {
      p.innerText = "required";
      p.style.color = "red";
      check1Flag = true;
  } else {
      p.innerText = "";
      check1Flag = false;
  }

  if (!checkb2.checked) {
      pp.innerText = "required";
      pp.style.color = "red";
      check2Flag = true;
  } else {
      pp.innerText = "";
      check2Flag = false;
  }

  

  // Check if any field is empty
  if (!unameinput || !email1input || !mobailinput) {
      alert("Please fill in all fields");
      return;
  }

  // Store form data in local storage
  localStorage.setItem('username', unameinput);
  localStorage.setItem('email', email1input);
  localStorage.setItem('mobile', mobailinput);

  // Redirect to login page
  window.location.href = "/login.html";
});
