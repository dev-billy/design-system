import {
  AddShoppingCartRounded as AddCart,
  ArrowForwardRounded as ArrowR,
  ArrowBackRounded as ArrowL,
  BrushRounded as Brush,
  AddRounded as Add,
  BookmarkBorderOutlined as Bookmark,
} from "@material-ui/icons";

function Icon(props) {
  const { name, style } = props;
  return (
    <>
      {name === "local_grocery_store" && (
        <AddCart fontSize="small" style={style} />
      )}
      {name === "arrow_forward" && <ArrowR fontSize="small" style={style} />}
      {name === "arrow_back" && <ArrowL fontSize="small" style={style} />}
      {name === "designer_brush" && <Brush fontSize="small" style={style} />}
      {name === "add" && <Add fontSize="small" style={style} />}
      {name === "bookmark" && <Bookmark fontSize="small" style={style} />}
    </>
  );
}

export default Icon;
