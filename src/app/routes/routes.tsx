import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
    { path: "/iron-key/", element: <Home /> },
    { path: "/iron-key/*", element: <NotFound /> }
]);

export default routes;