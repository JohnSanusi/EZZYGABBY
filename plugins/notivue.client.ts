import {createNotivue} from 'notivue'
import 'notivue/notification.css'
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const notivue = createNotivue()
  nuxtApp.vueApp.use(notivue);
});
