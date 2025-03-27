import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { ToDoTask } from '../models/ToDoTask'
import { v4 as uuidv4 } from 'uuid'

import styles from './ToDoForm.module.css'

interface ToDoFormProps {
  onAddNewToDoTask: (newToDoTask: ToDoTask) => void
}

export function ToDoForm({ onAddNewToDoTask }: ToDoFormProps) {

  const [newTaskName, setNewTaskName] = useState('')

  function handleNewTaskOnToDoList(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onAddNewToDoTask(createNewToDoTask())
    setNewTaskName('')
  }

  function handleNewTaskName(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskName(event.target.value)
  }

  function createNewToDoTask(): ToDoTask {
    return {
      id: uuidv4(),
      isCompleted: false,
      name: newTaskName
    }
  }

  return (
    <form
      onSubmit={handleNewTaskOnToDoList}
      className={styles.toDoForm}
    >

      <input
        type="text"
        required
        placeholder='Add a new task'
        value={newTaskName}
        onChange={handleNewTaskName}
      />

      <button type='submit'>
        <strong>Create</strong>
        <PlusCircle
          size={16}
          weight="bold"
        />
      </button>

    </form>
  )
}