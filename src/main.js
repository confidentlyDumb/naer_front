import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

function showModal(error) {
    let aWrap = document.querySelector("#alerts"),
    alerts    = aWrap.querySelector("ul");

    aWrap.classList.replace("opacity-0", "opacity-100");
    aWrap.classList.replace("pointer-events-none", "pointer-events-auto");

    setTimeout(() => {
        let errors     = error.response.data.errors;

        errors.forEach((error) => {
            alerts.insertAdjacentHTML(
                "beforeend",
                `<li class="text-sm text-red-100">${error}</li>`
            );
        });

        setTimeout(() => {
            aWrap.classList.replace("opacity-100", "opacity-0");
            aWrap.classList.replace("pointer-events-auto", "pointer-events-none");
            setTimeout(() => {
                alerts.innerHTML = "";
            }, 10);
        }, 5000);

    }, 10);
}

app.mount('#app')
