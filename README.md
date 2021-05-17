 <img src="https://lh3.googleusercontent.com/proxy/RKiPq6CfVGGD47fOrHEXuGPcoFo8GeGoSkBo0BuxyKfmJcTOSZQohpA9DaAyzsPJ1LiThF1P3Mi7qxc3gHNCiFw_q9jBTmsbZCLJQHokyquz79ScjDA4FNg">

# Hello JUSSI 
## First configuration:
### Automated process
In the root route there will be the file: <br/>
> Install.bat <br/>
> run.bat <br/>
<br/>
To use the scripts it is necessary to have yarn installed:<br/>
https://classic.yarnpkg.com/en/docs/install/#windows-stable

There are two files I made to automate the application installation process.<br/>
Just run the installation file (Install.bat) and then run.bat <br/>
and magic ! the application will be running
___
### Manual Process 
Enter the root folder, and run the command:<br/>
> To install: <br/>
> : > yarn install or  npm install <br/>
to run: <br/>
> : > json-server -p 3333 server.json <br/>
> : > yarn start or >npm run start <br/>
<br/>
and magic the application will be running

##### Observation: <br/>
you need the react and Json-Server process  keep running. <br/>
and need change the Json Server port to avoid port conflicts.

___
# Summary
This application is based on components and its style in flexbox.<br/>
There are two kind of routes in the application, normal routes and private routes.<br/>
### Normal routes
It is the route to which any user has access even if they are not logged in<br/>
however if he is not logged in, he will not be able to access some features<br/>
### Private routes
These are routes that require a token that can be obtained by logging into the application<br/>
#### Observation: <span color: red> Important! </span> <br/>
The application logins do not have validations, as they are made to simulate a real login through a <br/>
fake promisse that is any email or word and password it will enter as right.<br/>
___
# feature

### Login
In this functionality you can login and log out, this will generate a fake token and your login will appear in the header<br/>
some features require login<br/>
---
### Search
The filtered items are provided by JSON SERVER, however some items already exist by default even without JSON Server, for testing purposes.<br/>
standard items for testing: <br/>
```js
data=[
    "Jussi",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "GitHub",
    "Java-Script",
    "React",
    "Node"
    ]
```

items provided by JSON SERVER:<br/>
```json
"data": [
        {
            "solution": "P1"
        },
        {
            "solution": "P2"
        },
        {
            "solution": "P3"
        },
        {
            "solution": "A1"
        },
        {
            "solution": "A2"
        },
        {
            "solution": "A3"
        },
        {
            "solution": "Cutom1"
        },
        {
            "solution": "Cutom2"
        },
        {
            "solution": "Cutom3"
        }
    ]
```
You can filter all of these items by the search input of the header, as long as the json server is running, <br/>
otherwise, you will be able to filter only the test items.


---
### Purchase page
characterized by the shopping cart icon in the header. You can add items and then see the items added to your list <br/>

Where can I add items? <br/>
Right on the first page, you will see three floating cards that is a refrigerator, electric mixer and drink, <br/>
you can add the three as many times as you want. <br/>
then just click on the shopping cart icon in the header and this will redirect you to the purchase page.

---
### About
this will summarize about the company and if you click on the button it will redirect you to the main page of the company
---

### Solutions cards
Clicking on the card will open a modal with the description of the solution.
---

### Register
you can register an email or word and will not require a password and your behavior is similar to login







---

## Figma:
Figma
https://www.figma.com/file/O9AEeYB6ZWyMTZzMZhvjaY/loja-vtex-jussi?node-id=0%3A1

