
import Main from '../pages/Main/index'







const publicRoutes=[
    { path: "/", exact: true, component: Main },
]

const authProtectedRoutes=[
    { path: "/", exact: true, component: Main },
]

export {authProtectedRoutes, publicRoutes}