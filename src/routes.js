import ButtonDisplayPage from "./pages/Buttons";
import ColorsDisplayPage from "./pages/Colors";
import TypographyDisplayPage from "./pages/Typography";
import GridDisplayPage from "./pages/Grid";
import InputsDisplayPage from "./pages/Inputs";

const routes = [
  {
    path: "/",
    exact: true,
    component: ButtonDisplayPage,
  },
  {
    path: "/buttons",
    exact: true,
    component: ButtonDisplayPage,
  },
  {
    path: "/colors",
    exact: true,
    component: ColorsDisplayPage,
  },
  {
    path: "/inputs",
    exact: true,
    component: InputsDisplayPage,
  },
  {
    path: "/typography",
    exact: true,
    component: TypographyDisplayPage,
  },
  {
    path: "/grid",
    exact: true,
    component: GridDisplayPage,
  },
];

export default routes;
