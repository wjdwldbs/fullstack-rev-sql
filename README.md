# fullstack-rev-sql
an app to help you review building a fullstack appliation with a sql database

## Before Starting
If possible, do your best to emulate the environment in which you will be taking your technical assessment. This means:
 - Do not refer to old code

 - Do not worry about css. Just make it work. Remember, MVP first.

 - Make sure each step is fully functional prior to moving on to the next step

 - Try to maintain and use the file/folder structure as given. You may be able to change it now but if what's given on the actual exam is different, changing it may not bode well for you.

 - You may need to add some more dependencies to get your application functional. Do not assume everything given to you is all you need.

 - Try to "limit" yourself to about 4-5 hours (depending on your comfort level when taking this).

 - Do not look at any blogs, medium articles, or sites that would not be approved for use during the technical assessment

 - If possible, try to work on this solo. You will not have access to help desk, your partners, or your cohort during the technical assessment, so try to work through this without help. If you do get stuck for too long, pseudocode it and do your best to get it to work even if it's in a hack-y way. Make a note of what you got stuck doing, and either fix it or study up on it after the time limit.

 - You don't have to make commits for this since it is purly meant to be a full stack practice, but keep in mind that you will have to make frequent commits during the real TA. Just keep this in mind as I'm sure you all don't commit as frequently as you should. If you want to practice writing clean commits as well, work on this from a forked and cloned repo.

 - there are more instructions after the step-by-step instructions for the application. Once you completed the mock exam/run out of time, please scroll down and read the remaining instructions
 
 * If you would like, globally install an npm package called ["timestampnotes"]. The way it works is you run the program by typing "timestamp" into your terminal. Now, you can type a "commit message" and hit enter; this will store a time stampped note. Once you're finished, you can exit by using control+c on mac (sorry Windows users, I dont know what it would be...maybe control+c?). Once you exit, you can now right-click and paste/command+v/control+v to anywhere to see all your timestamped notes for this current session.



## Premise:
In a half baked attempt to make a full stack application that simulates the functionality of a popular online auction site, EBay, an amateur web-developer set out on GitHub to start building. Unfortunately, this developer was not a Hack Reactor grad and was not proficient in building full-stack applications. He has now come to you through LinkedIn to ask you for help with the following specifications:

  - Must use a SQL Database (if you are comfortable with noSQL, feel free to refactor to make it work)
  - Must be working with mock data
  - Must have all routes functional
    - [ ] make sure to write/fix the routes and queries such that a postman request will still perform the desired action
    - [ ] minimally, the get and update requests must work from the front-end so that we can get products rendered on our page from the back-end and bid on specific items (post and delete should still work from postman)

Being the amazing engineer you are, you break down the provided specs into the following steps:

  1. Build out and debug your server and database connection so that on postman requests to the proper endpoints, you will get an expected response (i.e - "Hello from GET")
    1. note: you may have to refactor some of the existing code
  2. In the path [/db/models.js] write a schema for Products that includes the necessary keys. (hint: refer to the seed file)
  3. In the path [/db/seed.js] write code that will seed the database with at least 10 random products.
    1. a random product generator has been provided. You will not need to modify it.
  4. In the path [/db/dbhelpers.js] write code to handle your database queries. 
    1. make sure they are connected to your server so that with postman, each request works the way they should.
  
  Now that your server and database is hooked up, move on to the front-end

  5. Build out your front end so that minimally, it behaves like the following:

  ![](EBid.gif)

  (Do not worry if your classnames do not necessary match the stylesheet's. As previously stated, make the app functional. Only make it look better if you finish everything before your own set time-limit.)

    > Ensure the following functionalities:
      - [ ] on page load - make sure that 10 products render on the side, and one product renders in the product view.
      - [ ] view product - implement a click function that allows the client to click and view the details for each product
      - [ ] bidding - make sure a user can bid on a product so that their current bid updates it
  
  6. Let's go a few steps further. Refactor your code to implement the following:
    - [ ] search - implement a search functionality so that a product you search for is rendered into the product view (you may take creative liberties for how your search algorithm works. hint: filter?)
    - [ ] add another schema for users that holds username, password as columns (remember what you've learned, this is NOT secure)
    - [ ] using the already existing product generator as reference, write a random user generator to generate at least 3 users
    - [ ] log-in form - have a simple log-in form in the top that the client can use to sign-in 
      - once signed in, a button should conditionally render. on click, a user should be able to add a new product to the database
      - exercise your freedom and implement a new product form in whatever way you see fit. 
        + If you want the practice, think about how you can build a modal! (don't know what that is? google it)



## Last Instruction
  - [ ] Write a set of instructions for the next developer to be able to start up and run your code. For example, do you have any scripts or seeding functions needed to be run for the application to work?

Congratualations, you completed your mock exam. With the completion of this, you should now have an idea of where you lack understanding. Take about 10 mins to write a list for yourself about what you struggled with most on and what you felt most confident about. Review the areas you had the most trouble with and start building simpler full-stack applications while trying to focus on those weaker points so you can familiarize yourself with that aspect.

Keep in mind that this mock exam is not reflective of Hack Reactor nor of its Technical Assesement. It is merely a full-stack application with a premise and instructions that are meant to assist in preparation for the assessment. Being unable to complete this does not mean you are not ready (it is likely that this was poorly written and I apologize if some aspects are confusing.)