(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


var form = document.getElementById("login-validation")

function onSubmit (e) {
  e.preventDefault();
  let password = document.getElementById("validationPassword")
  let user = document.getElementById("validationCustomUsername")
  if(password.value && user.value){
    window.history.pushState(false,"","/home")
    window.history.go(0)
  }
}

form.addEventListener("submit",onSubmit,true)