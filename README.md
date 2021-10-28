# "Cinema-booker"

Pet-проект. SPA-приложение резервирования билетов в кинотеатр

## О приложениии

Демо [Cinema-booker](https://cinema-booker-51e5e.web.app/)

* Приложение написано на ReactJS по [дизайн-макету](https://github.com/KostyanB/cinema/tree/master/design) реального киносайта.
* Реализована работа блока резевирования билетов.
* Адаптивность для мобильных устройств и логика работы спроектированы самостоятельно.
* Имитация загрузки базы данных фильмов с сервера.
* При загрузке приложения отображается страница выбора фильма.
* На странице фильма доступен выбор даты из ближайших 4-х дней, кинотеатра, сеанса и мест в зрительном зале.
* Просмотр трейлера.
* Выбор кинотеатра и сеанса выпадающими списками.
* Выбор/снятие выбора места кликом на место в схеме зрительного зала.
* Выбранные билеты отображаются на "странице оплаты" при нажатии кнопки "перейти к оплате".
* Кнопка блокируется при невыбранных дне, кинотеатре, сеансе или местах в зале.
* Данные зарезервированных мест сохраняются в текущей сессии при возврате из страницы оплаты или переходе на страницу текущего фильма.
* Резерв обнуляется при смене: фильма, даты, кинотеатра или времени сеанса.
* Горизонтальный скролл зрительного зала на экранах маленькой ширины для удобства пользователя.
* Прелоадер загрузки, оповещение при ошибке сервера и вывод 404 ошибки при отсутствии страницы.


## Технологии

* ReactJS, Router, ReactHooks, StyledComponents, ContextProvider, Grid/Flex, RestAPI.
* Настройки приложения в файле `env.json`: стилевое оформление (цвета и шрифты), навигация, url бэкенда, настройки календаря (количество отображаемых ближайших дат и список кинотеатров), настройки схемы зрительного зала (количество рядов и мест), настройки отображения итоговой суммы (цена билета и валюта).
* Конфигурация позволяет получать полный объем данных о сеансах с сервера с минимальной доработкой приложения.
* В приложении имитируется загрузка базы данных фильмов сервера (фактически БД находится JSON-файлах в `public/db`).
* Сборка с помощью [Create React App](https://github.com/facebook/create-react-app).
* Поддержка браузеров Сhrome, Firefox, Safari (1 последняя версия).
* Деплой демо готовой сборки на [Firebase Hosting](https://firebase.google.com).

## Как установить?

* Скопировать содержимое репозитория в рабочую папку
* В терминале выполнить команду `npm install`
* В случае создания проекта с помощью Create React App дополнительно установить пакеты из `add_packages.txt`.
* Проверить соответствие версий установленной `NodeJS` и пакета `node-sass` в [документации](https://www.npmjs.com/package/node-sass).
* Запустить development mode командой `npm start`.
* Открыть `http://localhost:3000` для просмотра в браузере.
* Для поддержки IE9/11 использовать [Полифиллы](https://github.com/facebook/create-react-app/blob/main/packages/react-app-polyfill).
* Для сборки приложения команда `npm run build`. Готовый проект будет в папке `build` рабочей директории.