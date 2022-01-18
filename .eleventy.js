module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./dh-rutgers-2022/sass/");
  eleventyConfig.addPassthroughCopy("./dh-rutgers-2022/css");
  eleventyConfig.addPassthroughCopy("./dh-rutgers-2022/js");
  
  return {
    dir: {
      input: "src",
      output: "docs"
    },
  };
};
