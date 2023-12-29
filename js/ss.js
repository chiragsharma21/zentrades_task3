      function CheckPassword(inputtxt) 
      { 
        var decimal=  /^(?=.*[@])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        if(inputtxt.value.match(decimal)) 
        { 
          return true;
        }
        else
        { 
        alert('Password should contain atleast 1 Capital, 1 Small letter, Numerical value and only @ as special character.')
        return false;
        }
      }

      function checkEmail() {

      var email = document.getElementById('email');
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!filter.test(email.value)) {
      alert('Please provide a valid username in form of E-Mail');
      email.focus;
      return false;
      }
      }
