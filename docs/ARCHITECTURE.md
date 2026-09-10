# Architecture

## Overview

Habit Tracker v1 is intentionally client-focused. It prioritizes a fast daily habit loop before introducing accounts, databases, or cloud infrastructure.

## State model

Each habit contains:

- `id` — numeric identifier
- `name` — habit label
- `cue` — short daily target or instruction
- `streak` — displayed streak count
- `done` — current-day completion state

The React page owns the habit array with `useState`.

## Persistence

A `useEffect` reads saved habits from `localStorage` when the page loads. A second effect serializes the current habit array back to `localStorage` whenever it changes.

Storage key: `habit-tracker-v1`

This means v1 data is device/browser-specific and does not yet sync between devices.

## Derived progress

The dashboard calculates:

- completed habit count
- daily completion percentage
- best streak across the current habits

The completion percentage controls the visual progress bar.

## User actions

### Toggle habit
Clicking a habit flips its `done` state.

### Add habit
The current v1 uses `window.prompt` to capture a new habit name and creates a new item with a timestamp ID, `Daily` cue, zero streak, and incomplete state.

### Reset day
Reset Day marks every habit incomplete while retaining the habit list.

## Styling

The app uses CSS Modules for page-specific layout and global CSS custom properties for design tokens. Both light and dark token sets exist, while the current page activates dark mode by default.

## Hosting

Production hosting is handled by Floot. GitHub is used as a project/source documentation mirror rather than a second deployment target.

## Future architecture

A later release can introduce a backend data model for users, habits, daily completion records, streak calculations, reminders, and analytics. Authentication plus database persistence would allow multi-device synchronization without changing the core daily interaction model.
