// app/routes/_index.tsx
import type {MetaFunction} from "@remix-run/node";
import {redirect} from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{title: "Social Networks - Delfin Fernandez"},
		{name: "description", content: "Welcome to Remix!"}
	];
};

export const loader = () => redirect("/profile");
