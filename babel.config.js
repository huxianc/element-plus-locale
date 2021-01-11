/*
 * @Description:
 * @Author: huxianc
 * @Date: 2020-12-25 17:46:47
 * @LastEditors: huxianc
 * @LastEditTime: 2021-01-11 11:28:47
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-plus",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
