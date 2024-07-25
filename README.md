# St John's School Website

This is the official website for St John's School, built using React, Tailwind CSS, and Redux.

## Features

- Responsive design using Tailwind CSS
- Carousel for showcasing images and events
- Gallery with filters for date and occasion
- Redux for managing state, especially for the gallery filters

## Technologies Used

- React
- Tailwind CSS
- Redux
- React Router

## Installation

1. Clone the repository:
```bash
git clone https://github.com/EdwardoEkka/school-website
```

2. Navigate to the project directory:
```bash
cd school-website
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and visit `http://localhost:3000` to see the website.

## Gallery Filters

The website features a gallery section with filters for date and occasion. These filters are managed using Redux. The actions and reducers are located in the `src/store` directory.


## Components

- `Navbar`: Renders the navigation bar with responsive design using Tailwind CSS
- `Footer`: Renders the footer with school information and social media links
- `Gallery`: Renders the gallery section with filters and image grid
- `Carousel`: Renders the carousel for showcasing images and events

## Styling

The website uses Tailwind CSS for styling. The CSS classes are defined in the `tailwind.config.js` file and imported into the components as needed.

## State Management

Redux is used for managing the state, especially for tracking the current page and the selected navbar link.

