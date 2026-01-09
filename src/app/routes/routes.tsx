import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
    { path: "/iron-key/", element: <Home /> },
    { path: "*", element: <NotFound /> }
]);

export default routes;