# Rails Pokemon Challenge

Ruby on Rails starter project (Rails 8.1, no database — this app only talks to PokeAPI).

See the [repo root README](../../README.md) for how to duplicate this repo and submit your work — this file only covers this challenge's setup and requirements.

## Prerequisites

- **[rbenv](https://github.com/rbenv/rbenv)** + **[ruby-build](https://github.com/rbenv/ruby-build)** to install and select the right Ruby version
- **Bundler** (`gem install bundler` once you have the right Ruby installed)

### Installing the required Ruby version with rbenv

This project pins its Ruby version in `.ruby-version` (currently **4.0.5**). If you don't already have rbenv set up:

```bash
# macOS
brew install rbenv ruby-build

# Ubuntu/Debian
sudo apt update && sudo apt install -y rbenv
```

Then, one-time, hook rbenv into your shell (the installer prints the exact lines to add to your `~/.zshrc`/`~/.bashrc`):

```bash
rbenv init
```

Restart your shell, then from this directory (`challenges/rails-pokemon`) install the pinned version and confirm rbenv picked it up from `.ruby-version`:

```bash
cd challenges/rails-pokemon
rbenv install "$(cat .ruby-version)"
ruby -v   # should print the version from .ruby-version
```

If you use a different Ruby version manager (asdf, chruby, etc.), just make sure it resolves to the version in `.ruby-version` instead.

## Getting Started

From this directory (`challenges/rails-pokemon`):

### 1. Install Dependencies

```bash
bundle install
```

### 2. Run the Development Server

```bash
bin/rails server
```

This will start the development server. Open your browser and navigate to `http://localhost:3000`.

### 3. Start Coding!

The main application code is located in:
- `app/controllers/pokemons_controller.rb` - The main controller action
- `app/services/pokeapi_client.rb` - Basic client to make requests to PokeAPI
- `app/views/pokemons/index.html.erb` - The main view template
- `public/pokemons.css` - Styles for the page

Make your changes and refresh the browser to see your updates.

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
