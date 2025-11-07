let head = document.querySelector('h1');

head.addEventListener('click', function(){
    head.textContent = "MEOW";
    head.style.color = 'red';
    head.style.fontSize = '6rem';
    head.style.backgroundColor = 'yellow';
});

