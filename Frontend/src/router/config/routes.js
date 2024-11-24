import routes from "../constants/routes";
import Home from "../../pages/Home";
import Data from "../../pages/Data";
import P404 from "../../pages/P404";

export const appRoutes = [
  {
    path: routes.home,
    Element: Home,
  },
  {
    path: routes.data,
    Element: Data,
  },
  {
    path: "*",
    Element: P404,
  },
];
