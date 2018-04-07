function sortTable() {
//Инициализируем переменные
    var filter, table, tr, td, i;
    //Значение, введеное в input
    filter = document.getElementById('myInput').value;
    //Обращение к таблице
    table = document.getElementById('example');
    tr = table.getElementsByTagName('tr');

    //Просмотр всех строк таблицы
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            if (td.innerHTML.indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
        }
    }
}
