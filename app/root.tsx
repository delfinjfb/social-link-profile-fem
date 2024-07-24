import {Links, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";
import "./tailwind.css";

export function Layout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Social Networks - Delfin Fernandez</title> {/* Title */}
				<meta
					name="description"
					content="Welcome to my social networks!"
				/>{" "}
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
