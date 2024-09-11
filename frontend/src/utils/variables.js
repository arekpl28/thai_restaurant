const size = {
  mobileS: "320px", // Małe telefony
  mobileM: "375px", // Średnie telefony (np. iPhone 6/7/8)
  mobileL: "425px", // Duże telefony (np. Pixel 2 XL)
  tablet: "768px", // Tablety (np. iPad mini)
  laptopS: "1024px", // Małe laptopy / większe tablety w poziomie
  laptopM: "1280px", // Średnie laptopy
  laptopL: "1440px", // Duże laptopy
  desktop: "1920px", // Małe desktopy
  desktopL: "2560px", // Duże desktopy
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopS: `(min-width: ${size.laptopS})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};
