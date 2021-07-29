import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import StoryblokVue from "storyblok-vue";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(StoryblokVue);

export default new Vuetify({
    options: {
        customProperties: true,
    },
    icons: {
        iconfont: 'md',
    },
    themes: {
        light: {
            primary: '#007BFF',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            colorPrimary: '#01579B'
        },
    },
});