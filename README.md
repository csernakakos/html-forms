# HTML form validation

This project is an example of HTML form data validation both on the client- and on the server-side.

## Get started
1. In the terminal, run `npm start`
2. In a browser, navigate to `127.0.0.1:3001`.

## Next steps
DONE steps 1, 2, 3.
Carry on with step 4.

## Full process
1. Create HTML form with built-in validation
   1. Made use of `optgroup`, `fieldset`, `legend`, and different button types
   2. Used `required`, `min`, `max`, `minLength`, `maxLength`, `pattern`, `aria-label`
2. Validate data on the client side using JavaScript Constraint Validation API.
   1. Disabled HTML form validation by adding `novalidate` to `<form>`
   2. In script.js, we called `showError()` if `!email.validity.valid;`. The function `showError()` checks for:
      1. `tooShort`
      2. `valueMissing`
      3. `typeMismatch`
   3. Our HTML accommodated users who use screen readers by making the error message `aria-live="polite"`.
3. Validate data on the server side using `express-validator`.
4. Back on the client side, add styles to make the form palatable. :)

