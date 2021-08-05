import { AddShoppingCartRounded as AddCart } from "@material-ui/icons";

function Icon(props) {
  const { name, style } = props;
  return (
    <>
      {name === "local_grocery_store" && (
        <AddCart fontSize="small" style={style} />
      )}
    </>
  );
}

export default Icon;
