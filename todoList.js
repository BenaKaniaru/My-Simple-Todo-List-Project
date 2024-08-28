let myTodoList = JSON.parse(localStorage.getItem('todoList')) || [];


renderTodoList();

function renderTodoList(){
    let myTodoListHTML = '';

    for (let i=0; i < myTodoList.length; i++) {
        const todoObject = myTodoList [i];

        //below code destructures the object
        const { name, dueDate } = todoObject;
        
        const html = `
            <div> 
                ${name}
            </div>
            <div>
                ${dueDate}
            </div>
            <button onclick="
                myTodoList.splice(${i}, 1);
                renderTodoList()"
            >Delete</button>
          `;
        myTodoListHTML += html;
    };

    localStorage.setItem('todoList', JSON.stringify(myTodoList));

    let todoActivities = document.querySelector('.js-todo-html'); 
    todoActivities.innerHTML = myTodoListHTML;
}

function addToDo(){
    let inputName = document.querySelector('.js-todo-name');
    const name = inputName.value;

    let inputDate = document.querySelector('.js-todo-date');
    const dueDate = inputDate.value;

    if (name && dueDate){
        myTodoList.push({
            name: name,
            dueDate: dueDate
            }
        );

        inputName.value = '';
        inputDate.value = '';

        renderTodoList();
    } else {
        alert('Enter both a name and a due date for your activity')
    }
};
