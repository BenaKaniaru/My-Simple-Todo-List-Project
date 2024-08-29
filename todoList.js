let myTodoList = JSON.parse(localStorage.getItem('todoList')) || [];

let addButton = document.querySelector('.js-todo-button');

addButton.addEventListener('click', () => {
    addToDo()
})


renderTodoList();

function renderTodoList(){
    let myTodoListHTML = '';

    myTodoList.forEach((todoObject, index) => {
        /*const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const dueTime = todoObject.dueTime;*/

        const { name, dueDate, dueTime } = todoObject;
        
        const html = `
            <div> 
                ${name}
            </div>
            <div>
                ${dueDate}
            </div>

            <div>
                ${dueTime}
            </div>
            <button class="delete-button" onclick="
                myTodoList.splice(${index}, 1);
                renderTodoList()"
            >Delete</button>
          `;
        myTodoListHTML += html;

    });

    localStorage.setItem('todoList', JSON.stringify(myTodoList));

    let todoActivities = document.querySelector('.js-todo-html'); 
    todoActivities.innerHTML = myTodoListHTML;
}

function addToDo(){
    let inputName = document.querySelector('.js-todo-name');
    const name = inputName.value;

    let inputDate = document.querySelector('.js-todo-date');
    const dueDate = inputDate.value;

    let inputTime = document.querySelector('.js-todo-time');
    const dueTime = inputTime.value;


    if (name && dueDate && dueTime){
        myTodoList.push({
            name: name,
            dueDate: dueDate,
            dueTime: dueTime
            }
        );

        inputName.value = '';
        inputDate.value = '';
        inputTime.value = '';

        renderTodoList();
    } else {
        alert('Enter a name, a due date and due time for your activity')
    }
};
