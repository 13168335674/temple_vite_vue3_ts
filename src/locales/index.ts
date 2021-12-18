import { createI18n } from 'vue-i18n';
import enUS from './en_US';
import zhCN from './zh_CN';

const lang = 'zh_CN';

const i18n = createI18n({
  legacy: false,
  locale: lang,
  fallbackLocale: 'zh_CN',
  messages: {
    zh_CN: zhCN,
    en_US: enUS,
  },
});

export default i18n;
