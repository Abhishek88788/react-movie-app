# 📽️ React Movie App

[![React](https://img.shields.io/badge/⚛️%20React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/⚡%20Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=yellow)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/📜%20License-MIT-2ea44f?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![TMDB](https://img.shields.io/badge/🎬%20TMDB-API-01b4e4?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/documentation/api)


A simple and interactive movie browsing app built with **React + Vite**, powered by the [TMDB (The Movie Database)](https://www.themoviedb.org/) API.  
Users can **search for the latest movies**, explore movie details, and **add favorites** to their personal watchlist.

---

## 🚀 Features

- 🔍 **Search Movies** – Find the latest and trending movies using the TMDB API.
- ❤️ **Favorites Section** – Save movies you like by clicking the ❤️ button on the poster.
- 🎬 **Movie Posters** – Browse through high-quality posters fetched directly from TMDB.
- ⚡ **Fast & Modern UI** – Built with React + Vite for speed and smooth experience.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/react-movie-app.git  
cd react-movie-app
```
### 2️⃣ Install dependencies
```sh
npm install
```
### 3️⃣ Get a TMDB API key
- Sign up at TMDB  
- Go to your API settings and generate an API key  

### 4️⃣ Add your API key
In the project, locate the file where the API key is required ([services/api.js](https://github.com/Abhishek88788/react-movie-app/blob/779aa11d127295b00ea618598d0f82225c1a79ca/src/services/api.js#L1C18-L1C35)).  
Replace the placeholder with your key:

```sh
const API_KEY = "YOUR_API_KEY_HERE"; // 🔴 IMPORTANT: Replace with your TMDB API key
```

### 5️⃣ Run the app locally
```sh
npm run dev
```

### 6️⃣ Build for production
```sh
npm run build
```
---

## 🎥 Live Demo

Check out the app live here: [https://react-movie-app-six-xi.vercel.app/](https://react-movie-app-six-xi.vercel.app/) 🚀


---

## 🙏 Credits
- Movie data & images powered by TMDB API  
- Built with ❤️ using React and Vite  

---

## 📜 License
This project is licensed under the MIT License – feel free to use, modify, and share it.
