An app made with Astro!

Since I loan a lot of Magic the Gathering decks to friends who want to play high powered formats, I decided to make a site full of primers so it's easier for them to play and understand.
It's always nice to know what combos and remind themselves of the general gameplan when piloting a new and unfamiliar deck, especially in a new format.

## Goals
- Have decks I own in all competitive formats/games (priority in order)
  - cEDH, Legacy, Pauper, Modern, casual edh, Yu-Gi-Oh (Edison, GOATS), Dan Dan
- Create good primers so rather than explaining every deck and the gameplan every so often, the user can pilot the deck somewhat successfully on their own
- Have primers for decks I don't own as a way to remind myself of opposing gameplans during tournaments
- Have primers for all my friends' decks so they can loan out decks and also keep a living document of their combos and gameplans

## Potential Future Features
- More refined search (like by category or archetype)
- Implement backend to be more DRY and move off of md files
- Dark mode
- Better styling lol
    - Thematic pages
    - Nicer homepage
    - Better responsiveness to screens
- Decklists
- Implement Scryfall API to have actual card info
- Header on all pages (or a search bar on every page) for better navigation

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Inspiration for the Search Bar component: 

https://danidiaztech.com/create-astro-search-component/
