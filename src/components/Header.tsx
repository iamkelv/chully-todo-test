import ToDoLogo from '../assets/images/todoLogo.svg'
import {logo} from '../assets/images'
import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logo} alt="ToDo Logo" />
    </div>
  )
}