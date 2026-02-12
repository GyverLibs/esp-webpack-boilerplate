import './index.css'

if ('serviceWorker' in navigator && typeof USE_SW !== 'undefined') {
    navigator.serviceWorker.register('sw.js');
}

document.addEventListener("DOMContentLoaded", () => {
    let h = document.createElement('h1');
    h.innerText = 'Hello, World! ' + APP_VER;
    document.body.append(h);
});