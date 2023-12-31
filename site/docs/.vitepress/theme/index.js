//这个文件夹是用来vitepress自定以主题
import DefaultTheme from 'vitepress/theme';

import vorangeui from 'vorangeui';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(vorangeui);
  }
};
