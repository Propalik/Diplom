## Что используем

* [Гибкие величины](https://doka.guide/css/rem-em/) для размеров шрифта, отступов и т.д. Используем rem.
* [Css переменные](https://doka.guide/css/custom-properties/) для смены темы.
* Размеры кратные 4, 8, 12, 16. Размеры шрифта, отступов должны быть консистентными. Высота компонентов 4rem (40px)
* Варианты кнопок реализованы через [data-attribute](https://doka.guide/js/element-dataset/) (гибкость в обращении, приоритет селектора, удобство пользования через `js`)


## Где смотреть

Компоненты `css` находятся в отдельных модулях:
* папка blocks для компонентов
* папка vendor для настроек
* `style.css`: содержит импорт отдельных компонентов/модулей
* `main.css`: содержит нормализацию стилей `body, html, h1-h6, p`


## Ссылки на макеты и демо

**[Светлая тема](https://www.figma.com/file/DfbVNbXapWcjapbwVu7nGd/IBM-Carbon-Design-System-(Community)?node-id=988%3A23459&mode=dev)
[Темная тема](https://www.figma.com/file/hlIDSZ4CV9BjJmll4Sk53L/IBM-Carbon-Design-System-(Gray-100-theme)-(Community)?node-id=0%3A1566&mode=dev)
[Демо компонентов](https://carbondesignsystem.com/components/button/usage/)**