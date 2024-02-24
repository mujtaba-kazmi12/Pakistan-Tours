import React from "react";

const sizeClasses = {
  txtLatoSemiBold26: "font-lato font-semibold",
  txtLatoBold16: "font-bold font-lato",
  txtLatoBold14: "font-bold font-lato",
  txtLatoMedium16WhiteA700: "font-lato font-medium",
  txtLatoRegular16Bluegray90002: "font-lato font-normal",
  txtLatoBold52: "font-bold font-lato",
  txtLatoBold32Gray900: "font-bold font-lato",
  txtLatoBold20Black900: "font-bold font-lato",
  txtLatoSemiBold18Black900: "font-lato font-semibold",
  txtLatoRegular14: "font-lato font-normal",
  txtInterSemiBold30: "font-inter font-semibold",
  txtLatoMedium24: "font-lato font-medium",
  txtLatoMedium20: "font-lato font-medium",
  txtLatoSemiBold14: "font-lato font-semibold",
  txtLatoSemiBold12: "font-lato font-semibold",
  txtLatoRegular16Gray90002: "font-lato font-normal",
  txtLatoRegular16Gray90001: "font-lato font-normal",
  txtLatoBold20: "font-bold font-lato",
  txtLatoRegular18: "font-lato font-normal",
  txtLatoBold20Gray90001: "font-bold font-lato",
  txtLatoRegular16: "font-lato font-normal",
  txtLatoSemiBold18WhiteA700: "font-lato font-semibold",
  txtLatoExtraBold40Gray900: "font-extrabold font-lato",
  txtLatoBold24: "font-bold font-lato",
  txtLatoSemiBold18: "font-lato font-semibold",
  txtInterMedium17: "font-inter font-medium",
  txtLatoExtraBold28: "font-extrabold font-lato",
  txtLatoBold14Gray90001: "font-bold font-lato",
  txtLatoSemiBold32Black900: "font-lato font-semibold",
  txtLatoExtraBold26: "font-extrabold font-lato",
  txtRubikRomanRegular16: "font-normal font-rubik",
  txtLatoRegular18Black900: "font-lato font-normal",
  txtRubikRomanRegular12: "font-normal font-rubik",
  txtLatoMedium18Gray90001: "font-lato font-medium",
  txtLatoBold30: "font-bold font-lato",
  txtLatoMedium18Bluegray90002: "font-lato font-medium",
  txtLatoBold32: "font-bold font-lato",
  txtLatoRegular16Lightblue900: "font-lato font-normal",
  txtLatoRegular16WhiteA700: "font-lato font-normal",
  txtLatoExtraBold40Bluegray900: "font-extrabold font-lato",
  txtLatoSemiBold40: "font-lato font-semibold",
  txtLatoExtraBold40Gray90001: "font-extrabold font-lato",
  txtJostRomanRegular16: "font-jost font-normal",
  txtLatoMedium18Black900: "font-lato font-medium",
  txtLatoSemiBold32: "font-lato font-semibold",
  txtLatoRegular16Bluegray400: "font-lato font-normal",
  txtLatoMedium18: "font-lato font-medium",
  txtLatoMedium18Black90090: "font-lato font-medium",
  txtLatoMedium20Gray900: "font-lato font-medium",
  txtLatoMedium16: "font-lato font-medium",
  txtLatoExtraBold40: "font-extrabold font-lato",
  txtLatoSemiBold26Black90087: "font-lato font-semibold",
  txtLatoMedium24Gray90001: "font-lato font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
