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

    document.querySelector('.addNote').addEventListener('click', function () {
        var noteInput = document.querySelector('.notes input').value.trim();
        if (noteInput !== '') {
            var noteList = document.querySelector('.noteList');
            var newNoteItem = document.createElement('li');
            newNoteItem.innerHTML = noteInput + ' <a href="#" title="Remove note" class="removeNote animate">x</a>';
            noteList.appendChild(newNoteItem);
            document.querySelector('.notes input').value = '';

        
            var selectedDate = document.querySelector('.days li.selected');
            if (selectedDate) {
                selectedDate.classList.add('note-added');
            }
        }
    });
    
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('removeNote')) {
            var parentLi = event.target.parentElement;
            if (!parentLi.classList.contains('permanent-note')) {
                parentLi.remove();

                var selectedDate = document.querySelector('.days li.selected');
                if (selectedDate && document.querySelectorAll('.noteList li').length === 0) {
                    selectedDate.classList.remove('note-added');
                }
            }
        }
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

        if ((month === 2 && i === 15) || (month === 2 && i === 20) || (month === 3 && i === 15) || (month === 3 && i === 16)) {
            li.classList.add('special-date');
            addPermanentNote(li, month, i); 
        }

        li.appendChild(a);
        daysList.appendChild(li);
    }

    var monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });
    document.querySelector('.date .dmy').textContent = monthName + ' ' + year;


    daysList.querySelectorAll('li').forEach(function (li) {
        li.addEventListener('click', function () {
            daysList.querySelectorAll('li').forEach(function (li) {
                li.classList.remove('selected');
            });
            li.classList.add('selected');


            document.querySelector('.noteList').innerHTML = '';
            document.querySelector('.notes input').value = '';

            var selectedDate = document.querySelector('.days li.selected');
            if (selectedDate && selectedDate.classList.contains('special-date')) {
                var notes = selectedDate.getAttribute('data-notes');
                if (notes) {
                    var noteList = document.querySelector('.noteList');
                    var newNoteItem = document.createElement('li');
                    newNoteItem.textContent = notes;
                    noteList.appendChild(newNoteItem);
                }
            }
        });
    });
}

function addPermanentNote(element, month, day) {
    var noteText = '';
    if (month === 2 && day === 15) {
        noteText = 'GDSC hackathon';
    } else if (month === 2 && day === 20) {
        noteText = 'IMPETHON';
    } else if (month === 3 && day === 15) {
        noteText = 'BitNBuild';
    } else if (month === 3 && day === 16) {
        noteText = 'IMPETUS 24.0';
    }
    element.setAttribute('data-notes', noteText);
    element.classList.add('permanent-note');
}




