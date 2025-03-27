import styles from './ToDoCounter.module.css'

interface ToDoCounterProps {
  totalItems: number
  completedItems: number
}

export function ToDoCounter({ totalItems, completedItems }: ToDoCounterProps) {
  return (
    <div className={totalItems > 0 ?
      styles.contentWrapper :
      styles.emptyContentWrapper}>

      <div className={styles.totalTasksCounter}>
        <span>Created tasks</span>
        <span>{totalItems}</span>
      </div>

      <div className={styles.concludedTasksCounter}>
        <span>Concluded</span>
        <span>{completedItems}</span>
      </div>

    </div>
  )
}