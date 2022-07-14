import Vue from "vue";
import VueI18n from "vue-i18n";

import viLocale from "element-ui/lib/locale/lang/vi";
import enLocale from "element-ui/lib/locale/lang/en";

import viLang from "./vn";
import enLang from "./en";

Vue.use(VueI18n);

const messages = {
	vi: {
		...viLocale,
		...viLang,
	},
	en: {
		...enLocale,
		...enLang,
	},
};

const getLocale = () => {
	return "vi";
};

const i18n = new VueI18n({
	locale: getLocale(),
	messages,
});

export default i18n;
