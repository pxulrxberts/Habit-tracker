# Habit Tracker Build Log

## v1 — Foundation

### Product goal
Build a working daily habit tracker that is simple enough to use every day and polished enough to serve as a portfolio project.

### Design system
Created the “Momentum Ledger” direction: dark-first warm near-black background, parchment text, electric-lime progress accent, restrained surfaces and borders, Newsreader display typography, IBM Plex Sans UI typography, and IBM Plex Mono progress numerals.

### Core dashboard
Built a responsive daily dashboard with a large completion score, progress bar, best-streak summary, and habit list.

### Habit interactions
Added click-to-complete behavior, an Add Habit flow, and Reset Day action.

### Persistence
Added browser `localStorage` persistence using the key `habit-tracker-v1`, allowing the habit list and completion state to survive page reloads on the same device.

### Responsive layout
Added mobile behavior for the header, score area, habit rows, streak labels, and footer.

### Deployment
Published the working application through Floot at:

https://paulroberts.floot.app

### GitHub documentation
Added this repository as the source/documentation mirror for the project and portfolio development history.

## Next milestones

1. Replace the browser prompt with a polished add-habit dialog.
2. Add edit and delete actions.
3. Track completion history by date.
4. Add weekly/monthly analytics.
5. Add authentication and database-backed sync.
6. Add reminders and multi-device persistence.
