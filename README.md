# Habit Tracker

A focused daily habit tracker built with Floot. The project pairs a premium journal-like interface with a precise daily progress dashboard.

## Live app

https://paulroberts.floot.app

## Features

- Daily habit checklist
- Completion percentage and progress bar
- Per-habit streak display
- Best-streak summary
- Add-a-habit interaction
- Reset-day action
- Browser localStorage persistence
- Responsive mobile and desktop interface

## Design direction

The interface uses a dark-first “Momentum Ledger” system: warm near-black surfaces, parchment text, an electric-lime completion signal, expressive Newsreader headings, IBM Plex Sans UI copy, and IBM Plex Mono numerals.

## How it works

The current v1 stores habits in the browser using `localStorage` under `habit-tracker-v1`. This keeps the first release focused on the core loop: create a habit, mark it complete, and see daily progress.

Starter habits include Deep work, Move, Read, and Create.

## Tech

- React / TypeScript
- CSS Modules
- Floot hosting
- lucide-react icons
- Browser localStorage

## Project structure

- `pages/_index.tsx` — habit tracker UI and interactions
- `pages/_index.module.css` — responsive dashboard styling
- `base.css` — design tokens, typography, light/dark theme values
- `docs/BUILD_LOG.md` — development milestones
- `docs/ARCHITECTURE.md` — v1 architecture and future direction

## Roadmap

Future releases can add habit editing/deletion, weekly history, calendar views, streak history, categories, authentication, database/cloud sync, reminders, analytics, and multi-device persistence.

## Status

v1 is live and functional. The Floot deployment remains the production host; this GitHub repository documents and mirrors the project for development and portfolio visibility.
