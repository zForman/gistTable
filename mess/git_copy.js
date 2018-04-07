"use strict";
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/gists/public', false);
xhr.send();
if (xhr.status != 200) {
} else {
    var gotJsonData = (xhr.responseText);
}


function fillTable(aData) {
    //В sortedArray помещаем отсортированный массив
    var sortedArray = aData.sort(compare);

    //Перебераем отсортированый массив и выводим в HTML
    for (var sortedKey in sortedArray) {
        var allData;
        allData += '<tr><td>' + sortedArray[sortedKey].filename + '</td>'
            + '<td>' + sortedArray[sortedKey].language + '</td>' +
            '<td><a href="' + sortedArray[sortedKey].raw_url + '">' + "url" + '</a></td></tr>';
    }
    $('#fetchedData').append(allData);
}

//сортировка таблицы
function sortTable() {
//Инициализируем переменные
    var input, filter, table, tr, td, i;
    //Значение, введеное в input
    input = document.getElementById("myInput");
    // console.log(filter = input.value);
    console.log(filter = input.value);


    fillTable(/*отфильтрованнй массив*/)


    /*//Обращение к таблице
    table = document.getElementById('fetchedData');
     //Обращение к столбцам
    tr = table.getElementsByTagName('tr');

    //Просмотр всех строк таблицы
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            if (td.innerHTML.indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
        } else {
            tr[i].style.display = "none";
        }
    } */
}


//Массив для добавления свойств методом push
var myData = [];

//Парсим данные
gotJsonData = JSON.parse(gotJsonData);

//получаем неободимые свойства и значения: filename, language, language для сортировки
gotJsonData.forEach(function (key) {
        var fileName = key.files;
        for (key in fileName) {
            var newObj = {
                filename: fileName[key]['filename'],
                language: fileName[key]['language'],
                raw_url: fileName[key]['raw_url']
            };
            myData.push(newObj);
        }
    }
);


fillTable(myData)


//Функция для сортировки по filename
function compare(a, b) {
    if (a.filename < b.filename)
        return -1;
    if (a.filename > b.filename)
        return 1;
    return 0;
}