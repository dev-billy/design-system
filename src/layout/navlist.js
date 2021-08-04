/* eslint-disable eqeqeq */
const navList = (location, history) => {
  return [
    {
      text: "Colors",
      active: "/colors" == location.pathname,
      onClick: () => history.push("/colors"),
    },
    {
      text: "Typography",
      active: "/typography" == location.pathname,
      onClick: () => history.push("/typography"),
    },
    {
      text: "Buttons",
      active: "/buttons" == location.pathname,
      onClick: () => history.push("/buttons"),
    },
    {
      text: "Inputs",
      active: "/inputs" == location.pathname,
      onClick: () => history.push("/inputs"),
    },
    {
      text: "Grid",
      active: "/grid" == location.pathname,
      onClick: () => history.push("/grid"),
    },
  ];
};

export default navList;
