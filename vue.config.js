module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/styles/main";
        @import "~bulma/bulma";
        `
      }
    }
  }
};
