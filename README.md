# NumberGame React Component

This project involves creating a React component called `NumberGame` that allows users to guess a random integer between 1 and 100, inclusive.

## Requirements

- Display a random integer between 1 and 100.
- Provide an input field for users to enter their guess.
- Include a submit button to submit the user's guess.
- If the guess is correct, display the message "You win!".
- If the guess is incorrect, display the message "Try again!" along with information about whether the guess was too high or too low.
- Allow users to keep guessing until they find the correct answer.

## Instructions

1. **Initialize a new React project** using a suitable boilerplate or by running `npx create-react-app number-game`.

2. **Create a functional component** called `NumberGame` with the necessary structure and initial state for the random number, user's guess, and displayed message.

3. **Generate a random number** between 1 and 100 using a helper function and set the initial state of the random number.

4. **Implement the input field** for the user's guess:

   - Create a controlled input field.
   - Bind the input field's value to the user's guess state.
   - Add an event handler to update the user's guess state when the input field value changes.

5. **Implement the submit button**:

   - Add a button element with an onClick event handler.
   - Write a function to handle the button click event.

6. **Check the user's guess upon clicking the submit button**:

   - Compare the user's guess with the random number.
   - Update the displayed message state based on the comparison.

7. **Display the corresponding message based on the user's guess**:

   - Conditionally render the "You win!" message if the user's guess is correct.
   - If the guess is incorrect, render the "Try again!" message along with information about the guess being too high or too low.

8. **Allow continuous guessing** until the user finds the correct answer.

9. **Organize and optimize the code** by dividing it into separate functions or custom hooks and using descriptive names for variables and functions.

10. **Style the component** using CSS or a CSS framework like Tailwind CSS to make the component visually appealing and responsive.

11. **Test the component** for various use cases and edge cases to ensure it works as expected and is responsive on different screen sizes.
