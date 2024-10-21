function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day'

        var a_list = document.querySelectorAll('a');
        var i = 0;
        while (i < a_list.length) {
            a_list[i].style.color = 'powderblue';
            console.log(a_list[i]);
            i = i + 1;
        }
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night'

        var a_list = document.querySelectorAll('a');
        var i = 0;
        while (i < a_list.length) {
            a_list[i].style.color = 'blue';
            console.log(a_list[i]);
            i = i + 1;
        }
    }
}