import React from "react";
import Navbar from './components/Navbar'
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/home";
import Content from "./pages/Content/content";
import Category from "./pages/Category/category";
import Author from "./pages/Author/author";
import AuthorById from "./pages/Author/authorbyid";

const App = () => {
    let routes = useRoutes([
        { path: "/Home", element: <Home /> },
        { path: "/content", element: <Content /> },
        { path: "/categories", element: <Category /> },
        { path: "/author", element: <Author /> },
        { path: "/author/:id", element: <AuthorById /> },
    ]);
    return routes;
};

const realApp = () => {
    return (
        <Router>
            <Navbar />
            <App />
        </Router>
    )
}
export default realApp;
