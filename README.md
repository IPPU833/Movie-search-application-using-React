# 🎬 Movie Search Application

A simple and responsive movie search application built with **React**. Search for movies, view their posters, and open a dedicated page to see more information such as the release date, genre, country, IMDb rating, actors, and awards.

🔗 **Live Demo:** [Movie Search Application](https://movie-search-application-using-reac-seven.vercel.app/)

## ✨ Features

- Search for movies using the OMDb API
- Search results update automatically as you type
- Debounced API requests to reduce unnecessary calls
- View movie posters and titles in a responsive grid
- Open a detailed page for each movie
- Display movie information including:
  - Release date
  - Genre
  - Country
  - IMDb rating
  - Actors
  - Awards
- Loading states while data is being fetched
- Error messages when a movie cannot be found
- Responsive layout for desktop, tablet, and mobile screens
- Custom 404 page for unknown routes

## 🛠️ Built With

- **React**
- **Vite**
- **React Router**
- **React Context API**
- **JavaScript**
- **CSS**
- **OMDb API**

## 📁 Project Structure

```text
src/
├── assets/          # Images and SVG assets
├── component/
│   ├── MovieCard.jsx    # Displays one movie card
│   ├── MovieList.jsx    # Displays the search results
│   └── Searchbar.jsx    # Handles movie search input
├── context/
│   └── AppContext.jsx   # Global movie state and API requests
├── pages/
│   ├── Home.jsx         # Search page
│   ├── SingleMovie.jsx  # Movie details page
│   └── Error.jsx        # Fallback page for invalid routes
├── App.css              # Application styles
├── index.css            # Reusable layout styles
├── App.jsx              # Routes and application setup
└── main.jsx             # React application entry point
```

## 🔄 How It Works

1. The user enters a movie title in the search bar.
2. `AppContext.jsx` waits briefly before making an API request.
3. Movie results from the OMDb API are stored in the global Context state.
4. `MovieList.jsx` displays the results using movie cards.
5. Selecting a movie opens the `/movie/:id` route.
6. `SingleMovie.jsx` fetches and displays the full movie details.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- An OMDb API key

### Installation

Clone the repository:

```bash
git clone https://github.com/IPPU833/Movie-search-application-using-React.git
```

Move into the project directory:

```bash
cd Movie-search-application-using-React
```

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_KEY=your_omdb_api_key
```

You can request an API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).

> Do not commit your `.env` file or expose private keys in your source code.

### Run the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 📦 Available Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build
npm run lint      # Check the project with ESLint
```

## 🧠 Skills Demonstrated

This project showcases my ability to:

- Build user interfaces with React
- Split an application into reusable components
- Manage shared state with React Context
- Work with REST APIs using `fetch`
- Use environment variables with Vite
- Create client-side routes with React Router
- Add loading and error handling
- Improve API performance with debounced requests
- Build responsive layouts with CSS Grid and media queries
- Configure and use ESLint
- Prepare a React application for deployment

## 🗺️ Application Routes

| Route | Description |
|---|---|
| `/` | Search movies and view results |
| `/movie/:id` | View detailed information about a movie |
| `*` | Display the fallback error page |

## 🔮 Possible Improvements

- Add pagination for larger search results
- Add favorite movies using local storage
- Improve the error page design
- Add skeleton loading cards
- Add more detailed accessibility support
- Add automated tests
- Improve handling for missing movie posters
- Add filtering by year or genre

## 📄 License

This project is available for learning and portfolio purposes.