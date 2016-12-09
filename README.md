# Quiz-Application

Quiz Application Documentation

Requirements:
The application should contain a list of question and correct answers to the questions
The application should present the user with their final scores at the end of the quiz
Extra Credit
Use firebase to persist data (as a datastore). For leaderboards and quiz questions/answers.

Technologies:
Firebase: This was used to store all user(s) information, the questions and answers and also the leaderboards.


Front End Dependencies:

Index.html - This is the page that requires users to sign in. Only registered users can sign in. The details of the user is stored in Firebase database and the username of the user uniquely identifies the user. 

Register.html - Here, a new user registers his/her details such as Username, email address and password. After registration, the user is directed to the homePage. The user details is automatically sent to firebase.

Homepage.html  - This is the quiz app page and here , a user can either start a quiz, View Leaderboard or logout. 

SelectQuiz.html - The quiz is divided into two sections: English and mathematics. The user can select any of the sections.
MathQuiz.html -  A list of mathematics questions and answers (fetched from firebase) is displayed to the user to be answered by the user. When the user submits a test, a javascript function is called that compares the selected answers with the right answer and then computes the score of the user.

EngQuiz.html - this contains aAlist of English questions and answers to be answered by the user.

leaderBoards.html - This contains a board showing scores of previous users

score.html: Here, the score of the user is displayed to the user

Back-End dependencies:

Main.js : When a user logs in, the userame is checked to determine if the user exists.




