let myTodoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'finish my code',
    dueDate: '2024-08-28',
    dueTime: '18:00'

}];


renderTodoList();

function renderTodoList(){
    let myTodoListHTML = '';

    for (let i=0; i < myTodoList.length; i++) {
        const todoObject = myTodoList [i];

        //below code destructures the object
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const dueTime = todoObject.dueTime;

        //const { name, dueDate, dueTime } = todoObject;
        
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
