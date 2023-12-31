//这个文件夹是用来vitepress自定以主题
import DefaultTheme from 'vitepress/theme';

import orangeui from '@or-ui/orangeui';
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(orangeui);
  }
};
