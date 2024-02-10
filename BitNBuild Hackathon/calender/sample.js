document.addEventListener('DOMContentLoaded', function () {
    var currDate = new Date();
    var currMonth = currDate.getMonth() + 1;
    var currYear = currDate.getFullYear();

    displayCalendar(currMonth, currYear);

    document.getElementById('prev').addEventListener('click', function () {
        currMonth--;
        if (currMonth < 1) {
            currMonth = 12;
            currYear--;
        }
        displayCalendar(currMonth, currYear);
    });

    document.getElementById('next').addEventListener('click', function () {
        currMonth++;
        if (currMonth > 12) {
            currMonth = 1;
            currYear++;
        }
        displayCalendar(currMonth, currYear);
    });
});

function displayCalendar(month, year) {
    var daysInMonth = new Date(year, month, 0).getDate();
    var firstDay = new Date(year, month - 1, 1).getDay(); 
    var daysList = document.querySelector('.days');
    daysList.innerHTML = ''; 

    for (var i = 1; i <= daysInMonth; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#';
        a.textContent = i;
        a.title = i;
        li.appendChild(a);
        daysList.appendChild(li);
    }

    
    var monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });
    document.querySelector('.date .dmy').textContent = monthName + ' ' + year;
}