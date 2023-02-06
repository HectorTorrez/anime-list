import { createBrowserRouter } from "react-router-dom";
import { AnimeList } from "../AnimeList";
import ErrorPage from "../components/ErrorPage";

export const getRoutes = () => createBrowserRouter([
    {
      path: "/",
      element:  <AnimeList/>, 
      errorElement: <ErrorPage/>
    
    },
    {
      path:"/*",
      element: <AnimeList/>
    }
  ]);
