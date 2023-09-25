const form = document.querySelector('form');

const enterTodo = document.querySelector('#enterTodo');
const submit = document.querySelector('#submit');
const ul = document.querySelector('#todoList')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(enterTodo.value);
    const newLi = document.createElement('li');
    newLi.innerText = enterTodo.value;
    console.log(newLi.innerText);
    if (!newLi.innerText) {
        return;
    }
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.innerText = 'Remove';
    removeButton.classList.add('remove-button')
    newLi.appendChild(removeButton)
    newLi.classList.add('lis')
    ul.append(newLi);
    removeButton.addEventListener('click', function () {
        const deleteLi = removeButton.parentElement;
        deleteLi.remove();
    })
    newLi.addEventListener('click', function () {
        newLi.classList.add('crossText');
    })

    const innerLiElements = ul.querySelectorAll('li')
    // console.log(innerLiElements);
    enterTodo.value = ""
}
)


