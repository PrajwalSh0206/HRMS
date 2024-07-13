import Button from "@mui/material/Button";
import React from "react";

export default function PrimaryButton(props) {
  const {
    value,
    onClick,
    startIcon,
    endIcon,
    className,
    backgroundColor,
    height,
    fontSize,
    padding,
    fontWeight,
    disabled = false,
    textcolor,
    borderRadius,
    width,
    marginRight,
    customStyle,
    type,
    minWidth,
    btnClass,
    maxHeight,
    alignItems,
    display,
    marginTop,
    boxShadow,
    border,
    letterSpacing,
    ...other
  } = props;

  const buttonStyle = {
    width: width || "auto",
    height: height || "auto",
    fontSize: fontSize || "",
    fontWeight: fontWeight || "",
    marginRight: marginRight || "none",
    borderRadius: borderRadius || "",
    bgcolor: backgroundColor || "transparent",
    color: textcolor || "inherit",
    padding: padding,
    textTransform: "none",
    minWidth: minWidth || "none",
    maxHeight: maxHeight || "none",
    display: display || "",
    alignItems: alignItems || "none",
    marginTop: marginTop || "none",
    border: border || "none",
    letterSpacing:letterSpacing ||"none",
    ...customStyle,
    "&:hover": {
      bgcolor: backgroundColor,
    },
    "&.Mui-disabled": {
      backgroundColor: "#D9D9D9",
      opacity: "0.7",
    },
    boxShadow: boxShadow || "none",
  };

  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      className={btnClass}
      sx={{ ...buttonStyle }}
      disabled={disabled}
      type={type}
      {...other}
    >
      <span className={className}>{value}</span>
    </Button>
  );
}
