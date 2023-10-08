const Button = (props) => {
  const { varient, title, color, onClick, ...prop } = props;
  let vairentDesign;
  if (!varient || varient == "contained") {
    vairentDesign = "text-white y";
  } else if (varient == "outlined") {
    vairentDesign = "outline outline-2 bg-white font-semibold";
  } else {
    vairentDesign = "font-semibold";
  }

  return (
    <>
      <button
        className={`px-5 py-2 ${
          color ? `bg-${color}` : `bg-primary`
        } ${vairentDesign} rounded-md disabled:bg-gray-300
      }`}
        onClick={onClick}
        {...prop}
      >
        {title}
      </button>
    </>
  );
};
export default Button;
