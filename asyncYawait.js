async function main() {
    const taskManager = new TaskManager();
  
    try {
      const task1 = await taskManager.createTask({ id: 1, title: 'Tarea 1', completed: false });
      console.log('Tarea creada:', task1);
  
      const task2 = await taskManager.createTask({ id: 2, title: 'Tarea 2', completed: false });
      console.log('Tarea creada:', task2);
  
      await taskManager.completeTask(task1);
      console.log('Tarea completada:', task1);
  
      await taskManager.deleteTask(task2);
      console.log('Tarea eliminada:', task2);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  main();
  