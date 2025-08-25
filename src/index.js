import './index.css'

document.addEventListener("DOMContentLoaded", () => {
    if ('serviceWorker' in navigator && USE_SW) {
        navigator.serviceWorker.register('sw.js');
    }

    let h = document.createElement('h1');
    h.innerText = 'Hello, World! ' + APP_VER;
    document.body.append(h);
});