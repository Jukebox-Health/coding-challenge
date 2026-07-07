# JS Pokemon Challenge

React + TypeScript starter project running with Vite.

See the [repo root README](../../README.md) for how to duplicate this repo and submit your work — this file only covers this challenge's setup and requirements.

## Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## Getting Started

From this directory (`challenges/js-pokemon`):

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

This will start the development server. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`).

### 3. Start Coding!

The main application code is located in:
- `src/App.tsx` - The main application component
- `src/App.css` - Styles for the App component
- `src/apiClient.ts` - Basic client to make API requests

Make your changes and the browser will automatically reload to show your updates.

## Instructions

As an important business need we want to make a web application to display a list of Pokemon. Using [PokeApi](https://pokeapi.co/) we want you to grab a list of pokemon, display certain information about them, and have a few basic features on the page. The task should take 1-2 hours and make sure not to work on this for more than 2 hours. We also ask that you do not use AI for this challenge.

### Requirements

* Display a list of pokemon with the following pieces of information for each:
    - Name
    - Image of the pokemon
    - Some Pokemon can evolve into or from different pokemon. Display the evolution chain for that pokemon. For example: if the pokemon is charmander, charmeleon, or charizard it would display `Evolution chain: charmander -> charmeleon -> charizard` but kangaskhan which has no evolutions would just display `Evolution chain: kangaskhan`
* The pokemon list should only display 5 items at a time. There should be basic buttons to go to the next page of pokemon and one to go back to the previous page.

If you encounter any issues setting up the project, please reach out to your interview coordinator.

Good luck and looking forward to meeting with you!
