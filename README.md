# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

Implement an User Authentication System. Hash user's passwords before saving the user to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.

- They are both used to add authentication to a Web API. 
- In session based authentication, the server creates a session for the user after the user logs in (thus after being authenticated). The session id is stored on a cookie on the user’s browser, which will be sent to the server upon every request while the user is logged in, and the server will verify the cookie every time it sends a response back to that user. However, in JSON Web Tokens authentication, the server creates the JWT with a secret, and sends the token to the client, which stores the token and sends the token back in the header with every request it makes to the server.
- The user’s state is stored on the server in a session, whereas the user’s state is stored in the token on the client side with a JWT.

2. What does `bcrypt` do to help us store passwords in a secure manner.

- Bcryptjs hashes passwords and stores them in a secure way. Hashing is only 1-way, it cannot be reversed, so the stored password will be very hard to hack or read for an attacker, it will not be able to be decrypted back to its original value (the way that encrypted passwords can be). Bcrypt takes the password that’s typed in, and its library adds a random string of characters (salt) to the password and hashes it multiple times (rounds). It stores the hashed password, and then we can verify that the typed in password by the user matches the stored hashed password, and the typed in password will never be stored or readable.

3. How are unit tests different from integration and end-to-end testing.

- Unit tests only test one small piece of software in isolation, usually a function or a method. They are fast and simple to write and execute. Unit tests will test the application logic.
- However, integration tests test different parts of the system and make sure they work together. For example, integration testing tests the route handlers and middleware - they test the endpoints.
- End-to-end testing is used to run queries against a database similar to the one used in production, they are going to test the whole application and make sure everything is working. They are much slower, thus more expensive. 

4. How _Test Driven Development_ changes the way we write applications and tests.

- You start with the end (the tests) in mind. That way, you write much higher quality code. You will write code that you are more confident with, because you will think about all possible ways the code could fail potential tests, and you will want to avoid vulnerabilities that could fail and cause bugs.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [ ] An authentication workflow with functionality for account creation and login implemented inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [ ] Middleware used to restrict access to resources for non authenticated requests. Use the file: `./auth/authenticate-middleware.js` as a starting point.
- [ ] Configuration for running tests using `Jest`.
- [ ] A **minimum o 2 tests** per API endpoint.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Write at least 4 tests per endpoint.
- [ ] Extract user validation into a separate method and write unit tests for it.
- [ ] Use a separate testing database for the endpoint tests.
- [ ] Implement authentication with the other method, if you used JWTs for MVP use sessions for stretch and vice versa.

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request
