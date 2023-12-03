const sizes = {
  small: "320px",
  smallMedium: "420px",
  medium: "428px",
  mediumLarge: "890px",
  large: "1024px",
};

export const devices = {
  small: `(max-width: ${sizes.small})`,
  smallMedium: `(max-width: ${sizes.smallMedium})`,
  medium: `(max-width: ${sizes.medium})`,
  mediumLarge: `(max-width: ${sizes.mediumLarge})`,
  large: `(max-width: ${sizes.large})`,
  betweenSmallAndMedium: `(min-width: ${sizes.small}) and (max-width: ${sizes.mediumLarge})`,
};
