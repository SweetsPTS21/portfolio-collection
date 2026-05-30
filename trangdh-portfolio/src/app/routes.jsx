import React from "react";
import TropicalHeroPage from "../pages/TropicalHeroPage.jsx";
import PostcardProjectsPage from "../pages/PostcardProjectsPage.jsx";
import PassportAboutPage from "../pages/PassportAboutPage.jsx";

export const routes = [
    {
        path: "/",
        label: "Home",
        shortLabel: "H",
        element: <TropicalHeroPage />,
    },
    {
        path: "/postcards",
        label: "Postcards",
        shortLabel: "P",
        element: <PostcardProjectsPage />,
    },
    {
        path: "/passport",
        label: "Passport",
        shortLabel: "ID",
        element: <PassportAboutPage />,
    },
];
