import {
  AddShoppingCartRounded as AddCart,
  ArrowForwardRounded as ArrowR,
  ArrowBackRounded as ArrowL,
  BrushRounded as Brush,
  AddRounded as Add,
  CallRounded as Call,
  LockRounded as Lock,
  BookmarkBorderOutlined as Bookmark,
} from "@material-ui/icons";

function Icon(props) {
  const { name, style, className } = props;
  return (
    <>
      {name === "local_grocery_store" && (
        <AddCart fontSize="small" style={style} className={className} />
      )}
      {name === "arrow_forward" && (
        <ArrowR fontSize="small" style={style} className={className} />
      )}
      {name === "arrow_back" && (
        <ArrowL fontSize="small" style={style} className={className} />
      )}
      {name === "designer_brush" && (
        <Brush fontSize="small" style={style} className={className} />
      )}
      {name === "add" && (
        <Add fontSize="small" style={style} className={className} />
      )}
      {name === "bookmark" && (
        <Bookmark fontSize="small" style={style} className={className} />
      )}
      {name === "phone" && (
        <Call fontSize="small" style={style} className={className} />
      )}
      {name === "password" && (
        <Lock fontSize="small" style={style} className={className} />
      )}
    </>
  );
}

export default Icon;
