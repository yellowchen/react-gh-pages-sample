import App from "../App.jsx";
import { Home, About, NotFound, AlbumLayout, AlbumIndex, AlbumSearch, AlbumPhoto } from "../pages";

//Plain Object Route
import { createHashRouter } from "react-router-dom";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				// path: "/",
				index: true,
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "album",
				element: <AlbumLayout />,
				children: [
					{
						index: true,
						element: <AlbumIndex />,
					},
					{
						path: "search",
						element: <AlbumSearch />,
					},
					{
						path: ":id",
						element: <AlbumPhoto />,
					},
				],
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
];

export const router = createHashRouter(routes);


