 <img src="https://lh3.googleusercontent.com/proxy/COwucfl2Zoar-VVa-U76A5qLXEmosMGmwDB3WrAZSVp7raKi7SGlDkdQgSo_jhZKfBjjGzWoT9E1h-b7L90ap_TdvzCK_TeoIRJPqzX9dRR4lGnuWC8pCOQ">

# Hello JUSSI 
# First configuration:
## Automated process
In the root route there will be the file: <br/>
> Install.bat <br/>
> run.bat <br/>
<br/>
To use the scripts it is necessary to have yarn installed:<br/>
https://classic.yarnpkg.com/en/docs/install/#windows-stable

There are two files I made to automate the application installation process.<br/>
Just run the installation file (Install.bat) and then run.bat <br/>
and magic the application will be running
___
## Manual Process 
Enter the root folder, and run the command:<br/>
> To install: <br/>
> : > yarn install or  npm install <br/>
to run: <br/>
> : > json-server -p 3333 server.json <br/>
> : > yarn start or >npm run start <br/>
<br/>
and magic the application will be running

#### Observation: <br/>
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
The application logins do not have validations, as they are made to simulate a login through a <br/>
fake promisse, that is, any login and password it will enter as right.<br/>


## Figma:
Figma
https://www.figma.com/file/O9AEeYB6ZWyMTZzMZhvjaY/loja-vtex-jussi?node-id=0%3A1

