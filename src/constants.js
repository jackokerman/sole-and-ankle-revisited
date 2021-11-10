export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  laptopAndSmaller: `@media(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
  tabletAndSmaller: `@media(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  phoneAndSmaller: `@media(max-width: ${BREAKPOINTS.phone / 16}rem)`,
};
