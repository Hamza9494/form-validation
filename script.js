const form = document.querySelector('.form');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

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
function checkEmail(email) {
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  if (regex.test(email.value)) {
    checkSuccess(email);
  } else {
    checkError(email, 'invalid email please check again');
  }
}

//check password match
function checkMatch(input1, input2) {
  if (input1.value !== input2.value) {
    checkError(input2, 'passwords do not match');
  }
}
//validate fields
const checkFields = (elementArr) => {
  elementArr.forEach((element) => {
    if (element.value === '') {
      checkError(element, `${getId(element)} cannot be empty`);
    } else if (element.id === 'email') {
      checkEmail(element);
    } else {
      checkSuccess(element);
    }
  });

  function getId(element) {
    return element.id.charAt(0).toUpperCase() + element.id.slice(1);
  }
};

//check length
const checkLength = (element, min, max) => {
  if (element.value.length <= min) {
    checkError(element, `${element.id} cannot be less than ${min} characters`);
  } else if (element.value.length > max) {
    checkError(
      element,
      `${element.id} cannot be longer than ${max} characters`
    );
  }
};

//event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkFields([userName, email, password, password2]);
  checkLength(userName, 3, 15);
  checkLength(password, 8, 20);
  checkMatch(password, password2);
});
