import {redirect} from "@remix-run/node";

export const loader = () => redirect("/profile");

// You can remove the `meta` export as it's not needed here.
