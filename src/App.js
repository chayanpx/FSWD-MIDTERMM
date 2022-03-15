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
import CategoryById from "./pages/Category/categorybyid";

const App = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/content", element: <Content /> },
        { path: "/categories", element: <Category /> },
        { path: "/categories/:id", element: <CategoryById /> },
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
