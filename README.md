# Task - Y_MARKETPLACE
## Description:
The application has been completed as per requested to list respective '**jobs**' based on the username selection. I have mapped the bussinesses with the username having classifications and location grouped together to create a desired final structure. I'm not using any state management to store the values, just storing on component level. Also, I have handled all possible errors and exceptions that can occur, for example incorrect API entity.

## Technologies:
* ReactJS functional components in the Frontend
* NodeJS with native http in the backend. I have introduced a delay for GET request in the backend to showcase the loading effect in the frontend page on initial load.
* Complete unit and component tests.

### Styles:
* SASS
* Tailwind CSS

## Structure
- root folder (y_marketplace)
  - client folder
      - ReactJS Components - listening to port 3000
  - server folder
      - NodeJS - listening to port 9001

Here in the root folder, run the below code which will install all the dependencies required for the application, also will spin-up local backend server on 9001 port and frontend server on 3000 port.

`npm start`

## Testing:
* Run `npm test` from root folder or inside 'Client' folder

## Working Page:

![Screenshot 2023-11-23 at 00 09 46](https://github.com/jestinzac/y_marketplace/assets/4215450/745bce6c-3d93-4b6f-b34a-416a7c4f74a3)
