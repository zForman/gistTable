"use strict";
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/gists/public', false);
xhr.send();
if (xhr.status != 200) {
} else {
    var gotJsonData = (xhr.responseText);
}


//Массив для добавления свойств методом push
let myData = [];

//Парсим данные
gotJsonData = JSON.parse(gotJsonData);

//получаем неободимые свойства и значения: filename, language, language для сортировки
function gettingRelevantData(data) {
    data.forEach(function (key) {
            let fileName = key.files;
            for (key in fileName) {
                let newObj = {
                    filename: fileName[key]['filename'],
                    language: fileName[key]['language'],
                    raw_url: fileName[key]['raw_url']
                };
                myData.push(newObj);
            }
        }
    )
}

//Перебераем отсортированый массив и выводим в HTML
function displayData(obj) {
    for (let sortedKey in obj) {
        var allData;
        allData += '<tr><td>' + obj[sortedKey].filename + '</td>'
            + '<td>' + obj[sortedKey].language + '</td>' +
            '<td><a href="' + obj[sortedKey].raw_url + '">' + "url" + '</a></td></tr>';
    }
    $('#fetchedData').append(allData.toLowerCase());
}

gettingRelevantData(gotJsonData);

//Сортируем данные и помещаем в sortedArray
let sortedArray = myData.sort(compare);

//Передаем для function displayData отсортированные данные для вывода в html
displayData(sortedArray);

function filterTable() {

//Инициализируем переменные
    let input, filter, table, tr, td, i;
    //Значение, введеное в input
    input = document.getElementById("myInput");
    filter = input.value;
    // console.log(filter = input.value);
    //Обращение к таблице
    table = document.getElementById('fetchedData');
    //Обращение к столбцам
    tr = table.getElementsByTagName('tr');

    //Просмотр всех строк таблицы
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            if (td.innerHTML.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//Функция для сортировки по filename
function compare(a, b) {
    if (a.filename < b.filename)
        return -1;
    if (a.filename > b.filename)
        return 1;
    return 0;
}

// Pagination