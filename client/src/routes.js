import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import Home from "./views/Dashboard/Home"

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: <RocketIcon color='inherit' />,
    component: Home,
    layout: "/home",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/stats",
    name: "Stats",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/connect",
    name: "Connect",
    icon: <CreditIcon color='inherit' />,
    component: Billing,
    layout: "/admin",
  },
  
  {
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon color='inherit' />,
    component: Profile,
    layout: "/admin",
  },
      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color='inherit' />,
        secondaryNavbar: true,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color='inherit' />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ]
export default routes;
