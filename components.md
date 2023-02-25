# Data

## Data layer

- List of users:

  - id
  - image
  - username
  - isFriend
  - isEnemy

- User data:
  - id
  - image
  - username
  - password
  - email
  - enemies
  - friends
  - isLogged

## Data modifications

- Toggle isFriend from users
- Toggle isEnemy from users
- Modify username from user data
- Modify password from user data
- Modify email from user data
- Modify image from user data

# Components

## App

- Shows layout component

## Layout

- Shows header component
- Shows Users List component

## Header

- Shows app title "Social network" with heading
- Shows navbar component

## Navbar

- Shows text with 'Edit profile'

## Users counter

- Receives a list of users
- Shows total number of users

## Users List

- Receives a list of users
- Shows a user card component for every user in the list of users.
- Shows users counter component
- Sends a user to each User card component

## User card

- Recieves a user
- Recieves toggle user isFriend action
- Recieves toggle user isEnemy action
- Shows user username inside heading
- Shows user image
- Shows button component to toggle friend
- Shows button component to toggle enemy
- Sends text 'Friend' with red background to button component if is a friend
- Sends text 'Friend' with grey background to button component if is not a friend
- Sends text 'Enemy' with red background to button component if is not an enemy
- Sends text 'Enemy' with grey background to button component if is an enemy
- Sends toggle user isFriend action to button component that shows if is a friend
- Sends toggle user isEnemy action to button component that shows if is an enemy

## Button

- Recieves a text and a background colour
- Receives an action
- Shows the received text and background colour inside a button
- On click executes the recieved action

## Filter form

- Receives a list of users
- Shows text with 'My friends'
- Shows text with 'My enemies'
- Shows text with 'All users'

## Log in user form

- Receives the login user action
- Shows an input for the user username with label "username"
- Shows an input for the new user password with label "password"
- Shows a button "Log in" to submit the form
- Shows a button
- On submit executes the received log in user action

## Modify user form

- Receives the modify user action
- Shows an input for the new user username with label "username"
- Shows an input for the new user image with label "image"
- Shows an input for the new user password with label "password"
- Shows an input for the new user email with label "email"
- Shows a button "Modify" to submit the form
- On submit executes the received modify user action
