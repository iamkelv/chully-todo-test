import { EmptyToDoList } from './components/EmptyToDoList'
import { Header } from './components/Header'
import { ToDoCard } from './components/ToDoCard'
import { ToDoCounter } from './components/ToDoCounter'
import { ToDoForm } from './components/ToDoForm'
import { useDispatch, useSelector } from 'react-redux'



import './reset.css'
import './global.css'
import styles from './App.module.css'
import { RootState } from './app/store'
import { addToDo, editToDo, removeToDo, toggleToDoCompletion } from './app/slices/todo'

export function App() {
  const dispatch = useDispatch();
  const toDoList = useSelector((state: RootState) => state.todo.toDoList);
  function handleEditToDoTask(toDoTaskId: string, updatedName: string) {
    dispatch(editToDo({ id: toDoTaskId, updatedName }));
  }

  return (
    <div>
      <Header />
      <div className={styles.mainContent}>
        <ToDoForm onAddNewToDoTask={(task) => dispatch(addToDo(task))} />
        <ToDoCounter
          totalItems={toDoList.length}
          completedItems={toDoList.filter(task => task.isCompleted).length}
        />
        {toDoList.length ? (
          <ul className={styles.toDoList}>
            {toDoList.map((toDoTask) => (
              <ToDoCard
                key={toDoTask.id}
                dataSource={toDoTask}
                onCompleteStatusChange={() => dispatch(toggleToDoCompletion(toDoTask.id))}
                onDelete={() => dispatch(removeToDo(toDoTask.id))}
                onEdit={handleEditToDoTask}
              />
            ))}
          </ul>
        ) : (
          <EmptyToDoList />
        )}
      </div>
    </div>
  );
}
