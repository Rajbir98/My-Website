burger = document.getElementById("ham");
txt = document.getElementById("txtback");




function func(x) {
    if (x.matches) {
        txt.className = `flex justify-end space-x-12`;
    } else {
        txt.classList.toggle('hidden');
        burger.addEventListener('click', () => {
            txt.classList.toggle('hidden');
        });
    }
}


var x = window.matchMedia("(min-width: 768px)");
func(x);