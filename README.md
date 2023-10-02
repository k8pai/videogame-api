# Video Games API React Project

This is a React project that utilizes the CheapShark API to fetch information about video game deals and specific games based on their title.

## Project Overview

The project consists of a single component named `App`, which serves as the main entry point of the application. Here's a breakdown of the key features:

- The component uses the `useState` and `useEffect` hooks from React for managing component state and side effects.
- It also employs the `useSWR` hook for data fetching, which simplifies the process of making API requests.
- The `fetcher` function is a custom function used for making API requests and parsing the JSON response.
- The component renders a user interface with two sections:
  1. A search bar to input a game title, and a "Search" button to trigger the search.
  2. Two sections for displaying game information:
      - "Search Results" section displays information about specific games based on the user's search.
      - "Latest Deals" section shows information about the latest video game deals.

## Usage

To run the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and go to `http://localhost:3000` to view the application.

## How it Works

1. Upon loading, the component makes an API request to CheapShark to fetch the latest video game deals using the `useSWR` hook. The response is stored in the `data` variable.

2. Users can enter a game title in the search bar and click the "Search" button. This triggers a request to CheapShark to search for games with the specified title. The results are displayed in the "Search Results" section.

3. In both sections, the retrieved game information is displayed, including the game ID, title, normal price, sale price, savings percentage, and a link to visit the game on the Steam platform (if applicable).

## Project Structure

- `App.js`: The main component of the application.
- `fetcher.js`: Contains a custom function for making API requests and parsing JSON responses.

## Dependencies

- `react`: The core library for building the user interface.
- `swr`: A React hook for data fetching.
- `fetch`: A web API for making HTTP requests.

## Additional Notes

- This project assumes that there is an active internet connection for fetching data from the CheapShark API.

Feel free to explore and extend the project as needed for your specific use case!

---
