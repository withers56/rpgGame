import Home, {HomeEvent} from "./views/Home.js";
import PostIndex from "./views/PostIndex.js";
import {PostsEvent} from "./views/PostIndex.js";
import About from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import logout, {logoutEvent} from "./views/logout.js";
import Admin, {AdminEvents} from "./views/AdminIndex.js";
import PersonInfo, {PersonInfoEvents} from "./views/PersonInfo.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/home': {
            returnView: Home,
            state: {
                me: '/rpg/accounts/me'
            },
            uri: '/',
            title: 'Home',
            viewEvent: HomeEvent
        },
        '/': {
            returnView: Login,
            state: {
            },
            uri: '/',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/personInfo': {
            returnView: PersonInfo,
            state: {
                person: '/backendChallenge/persons/personInfo'
            },
            uri: '/PersonInfo',
            title: "PersonInfo",
            viewEvent: PersonInfoEvents
        },
        '/logout': {
            returnView: logout,
            state: {},
            uri: '/logout',
            title: "Logout",
            viewEvent: logoutEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        '/admin': {
            returnView: Admin,
            state: {
                users: '/api/users',
                posts: '/api/posts'

            },
            uri: '/admin',
            title: 'Admin',
            viewEvent: AdminEvents
        }

    };

    return routes[URI];
}

