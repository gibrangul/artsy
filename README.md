# Artsy

Live demo: [Artsy - Find Music Events](https://artsyapp.herokuapp.com)

## Execution Instructions

Bootstrapped using `npx create-react-app`

### Prerequisites

1. NodeJS
2. Yarn or NPM

### Launch Development Server

1. Open the root directory in a terminal window.
2. Run `yarn install` or `npm install` to install the dependencies.
3. Run `yarn start` to launch the development server.
4. Navigate to `localhost:3000` to open the app.

### Run Tests

Run `yarn test` to launch the test runner in `watch mode`

## Application UI Design

### Concept

Artsy is essentially a music app, resulting in colorful imagery based on the varying profile pictures by Musicians on the platform. The imagery needed to standout to make it easier for the user to make choices across the application. This required a neutral tone for the application color scheme leading to two very choices, **black** and **white**.

### Inspiration

Based on the concept and color scheme requirement, I took to [Dribbble](https://dribbble.com/) to find existing music app and concept designs by top ranked designers to find inspiration. My research led me to the following designs which aligned with my end goals for Artsy:

1. [Dark Mode: Music Player Web App](https://dribbble.com/shots/11139802-Dark-Mode-Music-Player-Web-App/attachments/2742740?mode=media)
2. [Music Player Web Application](https://dribbble.com/shots/11019630-Music-Player-Web-Application/attachments/2613913?mode=media)

Background Images for the pages:

1. [Dark BG](https://unsplash.com/photos/hTv8aaPziOQ)
2. [Light BG](https://unsplash.com/photos/hTv8aaPziOQ)

### Initial Application flow

Based on the color palettes and UI structure from the dribbble shots, I started working on the initial structure. The userflow from the mockups was relatively simple i.e

1. Display a search bar.
2. Display a resultant artist based on the search.
3. Click on the artist to view their events.

### Additional Flow Complexities

To make the app worthwhile it was necessary to store and display the history of the user's searches as well as giving them the ability to bookmark their favorites. This made the application more practical as the user could now make their required queries again with minimal effort and comeback to the app incase they need a quick reference.

### Resultant Design

The combination of the initial application flow and the add ons resulted in the final design which caters to these requirements. The search, search result, history and favorites are immediately available to the user on launch. The resultant flow is simple:

1. Search / Select From Quick Views (history/favorites)
2. View Events
3. Bookmark Artist for future reference

## Architecture Design

### Premise

Scalability and a growing list features are some of the most important factors in todays Progressive Web Apps(PWAs). Applications need to be designed for rapid deployment and testing across cloud based platforms such as Heroku and AWS. Codebases are viewed by several developers with a range of expertise, and features must constantly be improved and tested across an ever growing number of internet connected devices with various requirements. The simplest of projects must account for these factors in the initial stages to avoid becoming a hassle down the line as it continues to grow.

### System Architecture

Keeping the initial premise in mind, i decided to choose the React + Redux approach instead of just React. The application would be querying for data from a Backend API and `localstorage`, leading to a need for application level state to manage this data efficiently in one place.

**Pros:**

1. Allowed CRUD ops down the line easier to manage through action creators and reducers.
2. React does provide its on own context system for state management, however it lacks in comparison to Redux and its tooling.
3. The Redux State changes remain hidden unless required by a specific components using the `useSelector` hook or `connect` HOC e.g the home page can re-render itself and update an element if that elements dataset changes.
4. Reducers isolate their code i.e changes made to one part of the state (e.g the search history) wont affect another part (e.g favorites)

**Cons:**

1. This made the initial setup cumbersome.
2. Slight overhead because of Redux.
3. Bloated state if filled unnecessarily i.e data required in only one component stored in the global state (hence artist events are fetched in the component instead of being stored in the state)

**Takeaway:** Plan ahead to know how often data will be used to avoid unnecessary bloating of the state.

**Architecture Flow:**
The application architecture follows the following flow:

1. Render Components based on the initial Redux state
2. Query Data using the action creators.
3. Update the Redux state based on the action results.
4. Render Components on screen based on the latest state.

## Folder Structure

The application can be divided into 3 parts:

1. Pages
2. State Management
3. Utilities

### Pages

The application pages can be further divided into 5 parts:

1. **Page Containers**:\
   Holds all the components together and gives them page specific styling using the style file with it. (`pages` in the src directory)
2. **Components**:\
   Smaller reusable bits such as the header, grids and card that build up a page. (`components` in the src directory)\
   Each component has its own style file along with some generic styles.
3. **Styles**:\
   General styles to be used across the application such as the themes, colors, margins or typography. (`styles` in the src directory)
4. **Images**:\
   Images to be used across the Application. (`images` in the src directory)
5. **AppRouter**\
   Routing for the entire application, rendering the right page based on the current path in the address bar. (`routers\AppRouter` in the src directory)

### State Management

State management can be divided into 2 parts:

1. **Action Creators**\
   Send data queried by the application to the store. E.g fetching the Artist from the API or the history from the local storage and sending it of to the store. (`actions` in the src directory)
2. **Reducers**\
   Pure functions that update the store based on the data received from the action creators. (`reducers` in the src directory)

### Utilities

The utilities are a combination of different functions and objects required by the application such as the store setup, API settings or helper functions.

## Testing

### Unit Tests

The App consists of 24 test suites with 69 individual unit tests using Jest and a combination of different tools, reinforcing the stability of the app throughout every build. These tests aim to ensure that all the Architectural requirements are working.\
These tests can be further divided into 4 categories:

1. **Component Level Tests**\
   Ensure that each component renders the correct data using `enzyme`.
2. **Page Level Tests**\
   Ensure that all the pages display the components they need to display using a combination `ezyme` and `redux-mock-store` to mock the application level store to get data.
3. **Action Creator Tests**\
   All the actions dispatch the correct data generated from app queries using `moxios` to intercept `axios1 requests and serve mock data.
4. **Reducer Tests**\
   The Reducer updates the state according to the data received.

### Browser Tests

The app has been tested on the following browsers:\
**PC** (Mac, no Windows device)

1. Chrome
2. Mozilla Firefox
3. Safari
   **Phone** (iOS)
4. Safari
5. Chrome

## Deployment Strategy

Building on the Architectural premise of rapid deployments being a key factor in App development, the app has been deployed to Heroku with CircleCI being used for continuous integration and development. CircleCI connects to the master branch using Github, constantly checking for new commits. Every time a commit is made, CircleCI kicks in, deploying the application in a docker container to ensure that it is running correctly. CircleCI follows up by running all the Jest tests to ensure that the app doesn't break any requirements. Once the building and testing phase is successful, CircleCI pushes the app to Heroku which builds and deploys the application on a dyno. The demo link is the result of this deployment strategy.\
This process blocks a broken build from being deployed, creating a safeguard where users wont have to deal with an erroneous Application along with ensuring rapid deployments with every commit.
