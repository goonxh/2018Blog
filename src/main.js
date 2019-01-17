// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  VueResource  from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'viewerjs/dist/viewer.css';
import Viewer from 'v-viewer';
Vue.use(Viewer);
Viewer.setDefaults({
  "inline": false,
  "button": true,
  "navbar": false,
  "title": false,
  "toolbar": {
    zoomIn: 4,
    zoomOut: 4,
    oneToOne: 4,
    reset: 4,
    prev: 0,
    play: 0,
    next: 0,
    rotateLeft: 4,
    rotateRight: 4,
    flipHorizontal: 4,
    flipVertical: 4,
  },
  "tooltip": true,
  "movable": true,
  "zoomable": true,
  "zoomRatio": 0.4,
  "rotatable": true,
  "scalable": true,
  "transition": true,
  "fullscreen": true,
  "keyboard": true,
})
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
