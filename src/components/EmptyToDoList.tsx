import ClipboardIcon from '../assets/icons/clipboard.svg'

import styles from './EmptyToDoList.module.css'

export function EmptyToDoList() {
  return (
    <div className={styles.mainContent}>
      <img
        src={ClipboardIcon}
        alt="Gray Clipboard Icon"
      />
      <p>
        <strong>No tasks added yet.</strong>
      </p>
      <p>Add tasks to organize all the items you need to do.</p>
    </div>
  )
}