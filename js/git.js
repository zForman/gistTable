"use strict";
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/gists/public', false);
xhr.send();
if (xhr.status != 200) {
} else {
    var gotJsonData = (xhr.responseText);
}


//Массив для добавления свойств методом push
var myData = [];

//Парсим данные
gotJsonData = JSON.parse(gotJsonData);

//получаем неободимые свойства и значения: filename, language, language для сортировки
gotJsonData.forEach(function (key) {
        var fileName = key.files;
        for (var key in fileName) {
            var newObj = {
                filename: fileName[key]['filename'],
                language: fileName[key]['language'],
                raw_url: fileName[key]['raw_url']
            };
            myData.push(newObj);
        }
    }
);
//В sortedArray помещаем отсортированный массив
var sortedArray = myData.sort(compare);

//Перебераем отсортированый массив и выводим в HTML
for (var sortedKey in sortedArray) {
    var allData;
    allData += '<tr><td>' + sortedArray[sortedKey].filename + '</td>'
        + '<td>' + sortedArray[sortedKey].language + '</td>' +
        '<td><a href="' + sortedArray[sortedKey].raw_url + '">' + "url" + '</a></td></tr>';
}
$('#fetchedData').append(allData);


//Функция для сортировки по filename
function compare(a, b) {
    if (a.filename < b.filename)
        return -1;
    if (a.filename > b.filename)
        return 1;
    return 0;
}
