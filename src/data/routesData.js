import React from "react";

// lazy load the components => this is code splitting
const Questions = React.lazy(() => import("../components/Questions/Questions"));
const Main = React.lazy(() => import("../components/Menu/Main"));
const BirthdayReminder = React.lazy(() => import("../components/BirthdayReminder"));
const Reviews = React.lazy(() => import("../components/Reviews/Reviews"));
const Tours = React.lazy(() => import("../components/Tours"));
const TicTacToe = React.lazy(() => import("../components/ticTacToe/Game"));
// routes object that helps to map differnt routes of projects in react router
const routes = [
    {
        path: '/questions',
        exact: false,
        Component: Questions
    },
    {
        path: '/menu',
        exact: false,
        Component: Main
    },
    {
        path: '/birthday-reminders',
        exact: false,
        Component: BirthdayReminder
    },
    {
        path: '/reviews',
        exact: false,
        Component: Reviews
    },
    {
        path: '/tours',
        exact: false,
        Component: Tours
    },
    {
        path: '/ticTacToe',
        exact: false,
        Component: TicTacToe
    },

]
export default routes;

// paths object is used to map the links to projects
export const paths = [
    {
        title: 'Questions',
        path: '/questions',
        image: './images/projects/questions.PNG',
        git: 'https://www.github.com',
    },
    {
        title: 'Menu',
        path: '/menu',
        image: './images/projects/menu.PNG',
        git: 'https://www.github.com',
    },
    {
        title: 'Birthday Reminders',
        path: '/birthday-reminders',
        image: './images/projects/birthday.PNG',
        git: 'https://www.github.com',
    },
    {
        title: 'Reviews',
        path: '/reviews',
        image: './images/projects/reviews.PNG',
        git: 'https://www.github.com',
    },
    {
        title: 'Tours',
        path: '/tours',
        image: './images/projects/tours.PNG',
        git: 'https://www.github.com',
    },
    {
        title: 'TicTacToe',
        path: '/ticTacToe',
        image: './images/projects/TicTacToe.PNG',
        git: 'https://www.github.com',
    },
]