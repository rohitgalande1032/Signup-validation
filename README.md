Deploy link - https://task9-signup-form.netlify.app/

1. Create the Form: Create a form with the following inputs:
Email
Password

2. Email Validation: Implement an onChange function for the email input that checks if:
The input value has more than 3 characters.
The input contains "@" and ".".

3. Password Validation: Implement an onChange function for the password input that checks if the input value has more than 8 characters.
Show Validation Messages: If the email and password inputs pass the checks, remove any red error messages and display a green message saying "All good to go".

4. Handle Form Submission: Implement the submit button functionality:
On clicking the submit button, show a confirmation window.
If the user presses "OK", display an alert saying "Successful signup!"
If the user presses "Cancel", redirect them to the same page and clear all input values.
