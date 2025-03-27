# 🏠 Knerd Dashboard

## Overview

Knerd Dashboard is a customizable, modern web-based homepage/startpage that provides a clean, functional interface with multiple features including:
- Real-time clock and greeting
- Weather information
- Customizable quick links
- Theme switching
- Responsive design

## 🌟 Features

### 1. Time and Greeting
- Displays current time in 12-hour or 24-hour format
- Dynamic greeting based on time of day
- Configurable greeting messages

### 2. Weather Widget
- Real-time weather information using OpenWeatherMap API
- Supports location tracking
- Configurable temperature unit (Celsius/Fahrenheit)
- Multiple weather icon themes

### 3. Quick Access Links
- Two configurable containers for links
- Organized into sections with icons
- Supports opening links in new tabs

### 4. Theme Management
- Light and dark mode
- Automatic theme switching based on:
  - Operating system preference
  - Time of day
- Manual theme toggle button

## 🛠 Tech Stack
- HTML5
- CSS3 (with CSS variables for theming)
- JavaScript
- Lucide Icons
- OpenWeatherMap API

## 📦 Project Structure
```
knerd-dashboard/
│
├── index.html         # Main HTML structure
├── app.css            # Styling and theme definitions
├── config.js          # Centralized configuration
│
├── assets/
│   ├── icons/         # Weather and UI icons
│   ├── background.png # Optional background image
│   └── js/
│       ├── layout.js
│       ├── theme.js
│       ├── time.js
│       ├── greeting.js
│       ├── weather.js
│       ├── buttons.js
│       └── lists.js
```

## 🔧 Configuration

Edit `config.js` to personalize your dashboard:

### General Settings
- `name`: Your name/identifier
- `imageBackground`: Enable/disable background image
- `openInNewTab`: Links open in new tab
- `twelveHourFormat`: 12/24-hour time display
- `timeZone`: Set your timezone

### Greeting Messages
- Customize greetings for morning, afternoon, evening, night

### Weather Configuration
- `weatherKey`: OpenWeatherMap API key
- `weatherIcons`: Icon theme (Nord, Onedark, Dark, White)
- `weatherUnit`: Temperature unit
- `trackLocation`: Auto-detect or use default coordinates

### Theme Settings
- `autoChangeTheme`: Automatic theme switching
- `changeThemeByOS`: Follow system theme
- `changeThemeByHour`: Time-based theme switching

### Customizable Sections
- `firstButtonsContainer`: Quick access buttons
- `secondButtonsContainer`: Additional buttons
- `firstlistsContainer`: First links section
- `secondListsContainer`: Second links section

## 🚀 Setup

1. Clone the repository
2. Replace `weatherKey` in `config.js` with your OpenWeatherMap API key
3. Customize `config.js` to your preferences
4. Open `index.html` in a web browser

## 🌈 Customization

### Theming
- Modify CSS variables in `app.css` for custom colors
- Adjust `--fg`, `--accent`, `--background` for personalized look

### Links
- Edit `config.js` to add/modify quick links and buttons

## 📱 Responsive Design
- Adapts to different screen sizes
- Collapses layout on smaller screens
- Hides weather widget on narrow displays

