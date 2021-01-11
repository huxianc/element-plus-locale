/*
 * @Description:
 * @Author: huxianc
 * @Date: 2021-01-11 11:26:25
 * @LastEditors: huxianc
 * @LastEditTime: 2021-01-11 11:51:35
 */
import "dayjs/locale/zh-cn";
import locale from "element-plus/lib/locale/lang/zh-cn";
import { ElTransfer, ElTable, ElTableColumn, ElPagination } from "element-plus";

const components = [ElTransfer, ElTable, ElTableColumn, ElPagination];

export default app => {
  app.config.globalProperties.$ELEMENT = { locale };

  components.forEach(component => {
    app.component(component.name, component);
  });

  // plugins.forEach(plugin => {
  //   app.use(plugin);
  // });
};
