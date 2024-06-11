document.addEventListener('DOMContentLoaded', function () {
    let email1 = document.getElementById('exampleInputEmail1');
    let help=document.getElementById("emailHelp");
    let mobile = document.getElementById('exampleInputmobail1');
    let help1=document.getElementById("mobilehelp");
    let pass1 = document.getElementById('exampleInputPassword1');
    let helppass=document.getElementById("passHelp");
    let form =document.getElementById("fom1");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        let email1input=  email1.value;
        let validate =/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;

       let  validateresult=validate.test(email1input);
       if (validateresult){
        help.innerHTML="valid";
       }else{
        help.innerHTML="not valid";
    }

        let mobailinput=  mobile.value;
        let validatem= /^077\d{7}$/;

       let  validateresultm=validatem.test(mobailinput);
       if (validateresultm){
        help1.innerHTML="valid";
       }else{
        help1.innerHTML="not valid";
       }
       
       let pass1input=pass1.value;
       let validatep=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()])[A-Za-z\d!@#$%^&()]{6,18}$/;

      let  validateresultp=validatep.test(pass1input);
      if (validateresultp){
       helppass.innerHTML="valid";
      }else{
       helppass.innerHTML="not valid";
      }
    });
    });
    
