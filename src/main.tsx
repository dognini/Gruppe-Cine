import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.tsx'
import Home from './pages/home.tsx'
import Movie from './pages/movie.tsx'
import Search from './pages/search.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/search' element={<Search />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
