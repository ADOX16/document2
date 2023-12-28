const text = document.getElementById('inp');
const button = document.getElementById('butt');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');

button.addEventListener('click', function() {
    let inp = text.value;
    if (inp == 'yem14'){
        button.style.display = 'none'
        text.style.display = 'none';
        a1.style.display = 'block';
    }
    else if (inp == 'ya15_'){
        button.style.display = 'none'
        text.style.display = 'none';
        a2.style.display = 'block';
    }
    else if (inp == 'marexd'){
        button.style.display = 'none'
        text.style.display = 'none';
        a3.style.display = 'block';
    }
});