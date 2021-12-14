const list = document.querySelector('.list');
const plusIcon = document.querySelector('.plusIcon');
const input = document.querySelector('input');
const reset = document.querySelector('.resetIcon');

reset.addEventListener('click', ()=> {
    list.innerHTML = '';
})

input.addEventListener('keydown', (e)=> {
    if(window.event.keyCode == 13 && input.value === '') {
        e.preventDefault();
        alert("아무것도 입력하지 않았어요!");
    } else if(window.event.keyCode == 13) {
        e.preventDefault();
        onPlusBtnClick();
    }
})

plusIcon.addEventListener('click', onPlusBtnClick);

function onPlusBtnClick() {
    if(input.value === '') return;
    console.log(input.value);
    let inputWord = input.value;

    if(inputWord) {
        input.value = '';
        input.textContent = '';
    }
    addList(inputWord);
}

function addList(word) {
    const span = document.createElement('span');
    span.innerHTML = `${word}<img class="trashIcon" src="https://img.icons8.com/cotton/64/000000/trash--v2.png"/>`;
    list.appendChild(span);
    const trashIcon = document.querySelectorAll('.trashIcon');
    for(let i=0; i < trashIcon.length; i++) {
        trashIcon.item(i).addEventListener('click', () => {
            trashIcon.item(i).parentElement.remove();
        })
    }
    
}

