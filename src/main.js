import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/themes/translucent.css';


const app = createApp(App)
app.use(router)
app.use(
    VueTippy,
    // optional
    {
      directive: 'tippy', // => v-tippy
      component: 'tippy', // => <tippy/>
      defaultProps: {
        placement: 'top',
        animation: 'scale',
      }, // => Global default options * see all props
    }
  )
app.mount('#app')


//createApp(App).use(router).mount('#app')
