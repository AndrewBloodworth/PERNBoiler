export const theme = {
  primaryDark: "#40424a",
  primaryLight: "white",
  primaryHover: "#f8b750",
  mobile: "576px",
  colors: {
    lightGray: "#7e7f84",
    darkGray: "#40424a",
    green: "#66bf2b",
    blue: "#85cdec",
    orange: "#f8b750",
    red: "#ff3c3c",
  },
  status: function (status) {
    const { green, blue, orange, red } = this.colors;
    switch (status) {
      case "Active":
        return green;
      case "Under Contract":
        return blue;
      case "Withdrawn":
        return orange;
      case "Closed":
        return red;
      default:
        return this.primaryDark;
    }
  },
  dimensions: {
    main: {
      height: "130px",
    },
    nav: {
      height: "80px",
    },
    footer: {
      height: "50px",
    },
  },
  transitions: {
    burger: "width 0.1s linear",
  },
};
