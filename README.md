# Jukebox Health - Coding Interview

Welcome to the Jukebox Health coding interview challenge! This is a React TypeScript starter project running with Vite.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

You will also need a GitHub account to make a private repository with.

## Getting Started

Follow these steps to set up and run the application:

### 1. Duplicate Repository

In GitHub create your own private repository that is a duplicate of this repo: [Duplicate a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository)

Then create a new branch for your work.

### 2. Install Dependencies

From your new local repo:
```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

This will start the development server. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`).

### 4. Start Coding!

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

### Submitting your work

1. You should have received a few GitHub usernames for Jukebox engineers who will be reviewing your work. Grant them access to your repo in GitHub.
2. Create a new pull request to merge your work into the main branch
    - Add the Jukebox engineers as reviewers
    - Write a description of anything we should know and describing the work you did
3. Let your interview coordinator know you are all done!