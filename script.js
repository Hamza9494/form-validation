const form = document.querySelector('.form');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

console.log(email.id);

// show error
const checkError = (element, text) => {
  const formInput = element.parentElement;
  formInput.className = 'form-control error';
  const label = formInput.querySelector('small');
  label.textContent = text;
};

// show success
const checkSuccess = (element) => {
  const formInput = element.parentElement;
  formInput.className = 'form-control success';
};

//validate email
function validEmail(email) {
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email);
}

//validate fields
const checkFields = (elementArr) => {
  elementArr.forEach((element) => {
    if (element.value === '') {
      checkError(element, `${getId(element)} cannot be empty`);
    } else {
      checkSuccess(element);
    }
  });

  function getId(element) {
    return element.id.charAt(0).toUpperCase() + element.id.slice(1);
  }
};

//event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkFields([userName, email, password, password2]);
});
