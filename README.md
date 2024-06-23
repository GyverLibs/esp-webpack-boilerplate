# esp-webpack-boilerplate
Шаблон проекта для разработки веб-приложений с компиляцией для ESP Arduino
- Сборка средствами Webpack
- Минификация HTML, JS, CSS
- Добавление hash компиляции для автоматической очистки кэша браузера
- Экспорт в одиночный html файл
- Экспорт в три файла (html, js, css)
- Упаковка в gzip в три файла для загрузки в FS
- Экспорт gzip в бинарном виде в .h файл для вставки в программу

## Как собрать
- Установить [VS Code](https://code.visualstudio.com/download)
- Установить [Node JS](https://nodejs.org/en/download/prebuilt-installer)
- Открыть папку в VS Code
- Консоль **Ctrl + `**
- `npm install`, дождаться установки зависимостей
- `npm run build` или запустить скрипт *build.bat*
- Проект соберётся в папку dist
- Имя проекта (имя файла и префикс данных) настраивается в `package.json`

## Разработка и отладка
`npm run dev` или скрипт *dev.bat* запустит dev сервер и откроет браузер, будет обновлять сайт при изменениях в коде. Чтобы закрыть - `Ctrl+C` в консоли, затем `y`

## Как использовать
- Кеширование: `index` не кешировать, `js` и `css` кешировать для ускорения загрузки
- Указать gzip header
- Смотри пример