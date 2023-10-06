import React from "react";
import Homepage from './pages/Homepage';
import Root from "./pages/Root";

import { RouterProvider, createBrowserRouter,createRoutesFromElements, Route } from 'react-router-dom';

import LaContainer from "./compoments/RECENTLY-ADDED-ANIME/LaContainer";
import UaContainer from "./compoments/UP-COMING-ANIME/UaContainer";
import AnimeContainer from "./compoments/Anime-Page/AnimeContainer";
import MangaContainer from "./compoments/Manga-Page/MangaContainer";
import CardMore from "./compoments/Card/CardMore";
import PageNotFound from "./pages/PageNotFound";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }  >
      <Route index element={ <Homepage/> }/>
      <Route path="/anime" element={ <AnimeContainer/> }/>
      <Route path="/manga" element={ <MangaContainer/> }/>
      <Route path='/anime/recently-added-anime' element={ <LaContainer pageon={true}/> }/> 
      <Route path='/anime/up-coming-anime' element={ <UaContainer pageon={true}/> }/> 
      <Route path='/anime/:title' element={<CardMore />} />
      <Route path='/manga/:title' element={<CardMore />} />
      <Route path="*" element={<Homepage/>} />
      

  </Route>
));
function App() {
  return (
    <RouterProvider router={ router } />
  );
}

export default App;
