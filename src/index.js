import React from "react";
import { createRoot } from "react-dom/client";

const myElement = <h1>My Contacts</h1>;

const root = createRoot(document.getElementById("root"));
root.render(myElement);
