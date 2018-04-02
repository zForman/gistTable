"use strict";
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/gists/public', false);
xhr.send();
if (xhr.status != 200) {
} else {
    var gotData = (xhr.responseText);
}
// создаем массив, для распарсенного объекта, в который поместим необходимые значения через arrayData.push
var arrayData = [];
//парсим объект и помещаем в массив arrayData
var parsedData = JSON.parse(gotData);
parsedData.forEach(function (item) {
    var filesData = item.files; //сюда помещаем свойство с именем ключа files, т.е. имя файла

    var propertyName = Object.keys(filesData); //возращаем массив из переданого объекта

    propertyName.forEach(function (item) { //перебираем массив
        var fields = filesData[item]; // для свойств filename, language, url
        // в newObject с помощью метода push помещаем значение свойств
        var newObject = {
            filename: fields.filename,
            language: fields.language,
            url: fields.raw_url
        };
        arrayData.push(newObject);
    })
});
//плагин пагинации,
$('.pagination').pagination({
    dataSource: arrayData,
    pageSize: 5,
    showPageNumbers: false,
    showNavigator: true,

    //вызываем колбэк функцию, для отрисовки в index.html
    callback: function (data) {
        var html = myData(data);
        $('#fetchedData').html(html);
    }
});
// функция для пагинации
function myData(data) {
    var fetchedData;
    data.forEach(function (item) {

        fetchedData += '<tr><td>' + item.filename + '</td><td>' + item.language + '</td><td>' + item.url + '</td></tr>';
    });
    return fetchedData;
}