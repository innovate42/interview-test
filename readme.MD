## Innovate42

Welcome to the Innovate42 coding interview.

## Our tech stack

Innovate42 is a early-stage startup and our stack will evolve as we seek to find the best tools for the job. Currently, we are working or introducing the following:

 * ES6 and ES7 to keep up with new features
 * React with Redux, with logic in Redux and view in React.
 * Backend with Serverless or Docker/Express, databases with MongoDB or DynamoDB
 * We build with Webpack
 * Jest for unit testing
 
Our philosophy is to build modular, with separate modules published them. We will introduce new frameworks, for example we like the look of Observables and will experiment with them.
 

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please either zip up your files and send them to me daniel@innovate42.com via http://wetransfer.com (GMail blocks ZIP attachments).  

We can then discuss the changes that you have made.

### Overview

The directories contain 3 sample apps.  They are  based on the the tic-tac-toe react tutorial, which you can find at [https://reactjs.org/tutorial/tutorial.html].

The directories are :


| Directory     | Contents      |
| ------------- |-------------| 
| app-original      | The original app from the tutorial |
| app-standalone      | The same app, but re-written slightly. |
| app-redux      | The same app,using redux. |

### Questions

Please answer the following questions:
    
1.  Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.   
    * Why do you think that was done, what are the advantages / disadvantages?

Having each components in a separate file makes the app more readable (easy to understand just by looking at the file structure) and reusable (we can reuse components for other projects).
It also allow the work to be shared within the team.

2. Thinking about a production ready app, what do you think is missing from all the example. *hint: the square component in the standalone app has one* ?
Unit tests

3. Are you familiar with Redux ?  If so what is the basic idea behind it ?
I'm not familiar with Redux but I understand that it helps us managing the state of our application.
    
4. *If you are interested in the full-stack role* Please take a look at the partial implementation of an express routes in backend/router.js.
    * Thinking of a production application, what issues do you see with this code ? 
- Use of `var`
- Use of `console.log`
- The code should be modular (router/controller/adapter) and not in one file.
- Use of `next` (no middleware involve)
- `dbName` should be stored in environment variables
- Incorrect indentation and spacing
- Mongodb allows async await, we may want to use it instead of promise chain.
- no tests

### Coding Challenges

With either the  app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that is highlights the winning move.
2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.
3. If you get time, implement something that you think that the app could do and is cool.  What other things would you change.


### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience. 
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it. 
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of ES6 syntax.




    
      
    
    

 





