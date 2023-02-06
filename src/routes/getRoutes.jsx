import { createBrowserRouter } from "react-router-dom";
import { AnimeList } from "../AnimeList";
import ErrorPage from "../components/ErrorPage";
import { Search } from "../components/Search";

export const getRoutes = () => createBrowserRouter([
    {
      path: "/",
      element:  <AnimeList/>, 
      errorElement: <ErrorPage/>
    
    },
    {
        path: 'search',
        element: <Search/>
    },
    {
      path:"/*",
      element: <AnimeList/>
    }
  ]);
