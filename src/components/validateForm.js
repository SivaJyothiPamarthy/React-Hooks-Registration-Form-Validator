export default function validateForm(values) {
  let errors = {};

  const fieldArr = Object.entries(values);

  // Validate the empty check
  const checkRequired = fieldArr => {
    fieldArr.forEach(function(input) {
      if (input[1] === '') {
        showError(errors, input[0], `${getFieldName(input[0])} is required`);
      } else {
        showSuccess(errors, input[0]);
        if (input[0] === 'username') {
          checkLength(input, input[1], 3, 15);
        } else if (input[0] === 'password') {
          checkLength(input, input[1], 6, 25);
        } else if (input[0] === 'email') {
          checkEmail(input, input[1]);
        } else {
          checkPasswordsMatch(input, values.password, input[1]);
        }
      }
    });
  };

  //Check input length
  const checkLength = (input, value, min, max) => {
    if (value.length < min) {
      showError(
        errors,
        input[0],
        `${getFieldName(input[0])} must be at least ${min} characters`
      );
    } else if (value.length > max) {
      showError(
        errors,
        input[0],
        `${getFieldName(input[0])} must be less than ${max} characters`
      );
    }
  };

  //Convert letter to uppercase
  const getFieldName = input => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };

  //Show input error message
  const showError = (errors, input, message) => {
    if (errors.className === undefined) {
      errors.className = {};
    }
    errors.className[input] = 'form-control error';
    errors[input] = message;
  };

  //Show success Outline
  const showSuccess = (errors, input) => {
    if (errors.className === undefined) {
      errors.className = {};
    }
    errors.className[input] = 'form-control success';
  };

  //Email Check
  const checkEmail = (input, value) => {
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(value.trim())) {
      showSuccess(errors, input[0]);
    } else {
      showError(errors, input[0], 'Email is not valid');
    }
  };

  //Check passwords match
  const checkPasswordsMatch = (input, input1, input2) => {
    if (input1 !== input2) {
      showError(errors, input[0], 'Passwords do not match');
    }
  };

  checkRequired(fieldArr);

  return errors;
}
