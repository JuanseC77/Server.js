const taskManager = new TaskManager();

taskManager.createTask({ id: 1, title: 'Tarea 1', completed: false })
  .then(task => {
    console.log('Tarea creada:', task);
    return taskManager.createTask({ id: 2, title: 'Tarea 2', completed: false });
  })
  .then(task => {
    console.log('Tarea creada:', task);
    return taskManager.completeTask(task);
  })
  .then(task => {
    console.log('Tarea completada:', task);
    return taskManager.deleteTask(task);
  })
  .then(task => {
    console.log('Tarea eliminada:', task);
  })
  .catch(error => {
    console.error(error.message);
  });
