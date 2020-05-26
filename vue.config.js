module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "~bulma/bulma";
        @import "@/assets/styles/main.scss";
        `
      }
    }
  }
};
