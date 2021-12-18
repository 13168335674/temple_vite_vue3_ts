// hack: unplugin-vue-components/resolvers bug
import 'ant-design-vue/lib/message/style/index.less';
import 'ant-design-vue/lib/notification/style/index.less';

import { createApp } from 'vue';
import App from './App.vue';

if (process.env.NODE_ENV === 'development') {
  // 启动 msw
}

createApp(App).mount('#app');
