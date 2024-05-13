const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim();

  if (newTask) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    const completeCheckbox = document.createElement('input');
    const deleteButton = document.createElement('button');

    taskText.textContent = newTask;
    completeCheckbox.type = 'checkbox';
    deleteButton.textContent = 'Delete';

    listItem.appendChild(completeCheckbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    newTaskInput.value = ''; // Clear input field

    // Add functionality for checkbox and delete button
    completeCheckbox.addEventListener('change', function() {
      listItem.classList.toggle('completed');
    });

    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });
  }
});
