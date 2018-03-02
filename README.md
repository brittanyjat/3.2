# Simulation 3 Helo

## Using 
* React
* Node with Express
* Express Sessions with Passport-Auth0
* Postgres
* React Router

---

#### February 20, 2018
1. Set up Auth0 on server.js
    - successful redirect to React app front end.
2. Created basic structure for front-end routes.
    - Had a problem with the front end running on the back end port which made the auth redirect not want to work. Solved it by renaming the port variable in the .env file to SERVER_PORT instead of PORT.

---

#### February 21, 2018
1. Could not get Auth0 redirect to work and display correct route. :rage:
    - I switched from Hashrouter to BrowserRouter which somehow did the trick.
2. Styled Auth login page.
3. Initialized User table in database.

---

#### February 22, 2018
1. Created and styled header.
    - Need to add functionality to **search** icon.
2. Connected auth0 to database either finding or creating new user.
3. Set up redux store and reducer.
4. Added endpoint on server /auth/me and made request from reducer to get user data.
5. Used ComponentDidMount on Dashboard Component to gather user data and it worked!!

---

#### February 23, 2018
1. Styled dashboard component.
2. Styled Profile top section. 
    - Need to add functionality to **update** and **cancel** button.
3. Created and styled the edit section of profile. 
4. Started adding handlers for inputs in edit section.
    - Need to finish setting up redux to handle the update request.
    - Haven't even touched server side of put request.
        - (Created the sql edit_user but have not tested it.)

---

#### February 24, 2018
1. Spent all day unsuccessfully trying to get redux working on this project. :persevere:
    - Back to the drawing board...

---

#### February 25, 2018
1. Dashboard component. 
    - It now makes the axios call to the server to get user data instead of going through redux.
    - The 'Edit Profile' button sends the user id to the Profile component
2. Profile Component
    - Uses id from props.match.params to get user info from database then sets to state.
    - No longer uses redux
    - I used setState in a new way! This way allows you to change objects on state:
        ```javascript
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [prop]: value
            }
        }))
        ```
    - it would be better to use the nickname from google instaed of id.

---

#### February 26, 2018
1. Changed project to use the nickname from google instead of id.
2. Update profile is now functional. 
3. Cancel button is now functional.
4. Feeling defeated by search pagination....

---

#### February 27, 2018
1. Created componentDidMount on Search component to get all users who aren't the current user. 
2. FINALLY GOT PAGINATION ON SEARCH PAGE!
3. Styled friends on search page. 
    - need to add functionality to 'Add Friend' button.

---

#### February 28, 2018
1. Dashboard Component
    - Made db query to display recommended friends on dashboard (people not already the user's friend).
    - Add friend button is functional
2. Worked again on Search component.
    - tried implementing _.where to search through users but may need to make the search requests through the db.

---

#### March 1, 2018
1. Search Component
    - Used ternary to either add or delete friend.
    - add and delete buttons live update.
    - Styled delete button.
    - Need to fine-tune reset button.
2. Realized the create user on server is a little buggy. Need to fix.
3. Need to add alert on edit component if birthday is not entered.

---

#### March 2, 2018
1. Fixed bug in server that wasn't redirecting after new user created
2. Finished edit profile 
    - it now alerts user that birthday is require to edit profile.

    
