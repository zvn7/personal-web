import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Resume from "@/pages/Resume";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/resume",
		element: <Resume />,
	},
	{
		path: "/projects",
		element: <Portfolio />,
	},
	{
		path: "/blog",
		element: <Blog />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
];

export default routes;
