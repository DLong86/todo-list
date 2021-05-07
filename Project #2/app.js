const addForm = document.querySelector('.add');  
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// Function we want to use for when a user passes in a new todo
const generateTemplate = todo => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html; // this will add the new todo to the html document the += will add not override

}

addForm.addEventListener('submit', e => { // listening for a submit event
    e.preventDefault();
    const todo = addForm.add.value.trim(); // trim will clear any spaces before or after text

    if(todo.length){ // todo.length means that there needs to be text, no text will not submit the new todo!
        generateTemplate(todo); // calling the function
        addForm.reset(); // Resets all text inside the todo submit
    }
});

// delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// keyup event
const filterTodos = term => {
    
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'))

};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})