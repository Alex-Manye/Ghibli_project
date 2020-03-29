# Studio Ghibli fan DB

Description
This APP allows the user to find information about all studio Ghibli* films and creators.
*A Japanese animation film studio based in Koganei, Tokyo, Japan.[1] The studio is best known for its anime feature films, and has also produced several short films, television commercials, and one television film. It was founded on 15 June 1985, after the success of Nausicaä of the Valley of the Wind (1984), with funding by Tokuma Shoten. Studio Ghibli has also collaborated with video game studios on the visual development of several video games.
https://en.wikipedia.org/wiki/Studio_Ghibli

# MVP 

Website: www.studioghiblifandb.com
Definition: Studio Ghibli Fan database is a website where the user can find useful information about Ghibli and their anime films: English film name, screenwriters, running time, year, synopsis…

# About the JSON object
Due that Studio Ghibli has all the film metadata but they don't have the movie posters, I modified the JASON including the url from a different website linking the film with its poster with an Id.

# Tasks
Main tasks for the user in this project:
- The user can register on the website 
- The user can log in on the website
- The user can find a list with all the films from Studio Ghibli
- The user can navigate easily with the navbar,

There a validation functions for log in and sign up:
a) The user can't type more than 6 characters on the password.
b) The user can't repeat emails.

The website connects with Studio Ghibli's public API

# Methodology
The web is responsive for mobile, desktop and table.
I have tried to apply SOLID principles and Clean Code in the refactoring.

# Backlog

- That the user can order the films by:
a) year
b) author
c) duration
- When the user click the film image he is redirected to an url with all the film information
- Use swagger to create the documentation needed.
- Create a new "delightful" design

# Screens /Screenshots:

Website / app

Sign up
Log in
FAQ
Movies list


# Links

Trello: https://trello.com/b/0cnPdGRb/studio-ghibli-app
API url: https://ghibliapi.herokuapp.com/#
Studio Ghibli website: http://www.ghibli.jp/
Github url:
Slides url: https://docs.google.com/presentation/d/1FtfVuPdFGvPHBvQHGPU_XKfZUDxCdnKKTKZlkIYmK7k/edit?usp=sharing

# Technological stack

- JS  - HTML - CSS - BOOTSTRAP - GIT - GITHUB - JQUERY - POPPER.JS
