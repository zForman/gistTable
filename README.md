# gistTable

Задание:
Таблица gist файлов с github с постраничной навигацией

Описание:
Данные грузить с https://api.github.com/gists/public. Для получения данных можно использовать либо XHR запросы (https://learn.javascript.ru/ajax-xmlhttprequest), либо методами jQuery (https://api.jquery.com/jquery.get/)
Необходимо создать таблицу, которая заполняется данными. Колонки таблицы "Название файла", "Язык", "Ссылка" (filename, language, raw_url).
Стилизовать таблицу как в примере http://getbootstrap.com/css/#tables-striped. Можно использовать стили bootstrap.
Таблица должна быть ограничена выводом определённого количества записей и обладать возможностью постраничного перелистывания вперёд и назад.

1. Загрузить данные из источника. 
2. Создать таблицу  
3. Заполнить таблицу  
4. Ограничить вывод таблицы 5 записями  
5. Сделать две кнопки: "Назад" и "Вперёд" 
6. С помощью кнопок осуществлять навигацию между записями 
7. Сделать фильтрацию 
