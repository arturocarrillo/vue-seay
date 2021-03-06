import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';


Vue.use(Vuetify);

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