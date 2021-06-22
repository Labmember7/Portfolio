var checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
        var element = document.body;
         element.classList.toggle("dark-mode");
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        var element = document.body;
         element.classList.toggle("dark-mode");
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 10)
}