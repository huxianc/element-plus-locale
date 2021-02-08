/*
 * @Description:
 * @Author: huxianc
 * @Date: 2021-01-11 11:26:25
 * @LastEditors: huxianc
 * @LastEditTime: 2021-01-11 17:28:33
 */
import "dayjs/locale/zh-cn";
import locale from "element-plus/lib/locale";
import {
  ElTransfer,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElButton,
  ElDialog,
  ElPopconfirm
} from "element-plus";
import lang from "element-plus/lib/locale/lang/zh-cn";

const components = [
  ElTransfer,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElButton,
  ElDialog,
  ElPopconfirm
];

export default app => {
  // app.config.globalProperties.$ELEMENT = { locale };

  locale.use(lang);
  console.log(lang);
  app.config.globalProperties.$ELEMENT = { size: "mini", zIndex: 2100 };

  components.forEach(component => {
    app.component(component.name, component);
  });

  // plugins.forEach(plugin => {
  //   app.use(plugin);
  // });
};
