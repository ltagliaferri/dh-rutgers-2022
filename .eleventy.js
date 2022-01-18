module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./dh-rutgers-2022/src/sass/");
  eleventyConfig.addPassthroughCopy("./dh-rutgers-2022/src/css");
  eleventyConfig.addPassthroughCopy("./dh-rutgers-2022/src/js");
  
  return {
    dir: {
      input: "src",
      output: "docs"
    },
  };
};
