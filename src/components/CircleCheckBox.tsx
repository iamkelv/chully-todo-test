import styles from './CircleCheckBox.module.css'

interface CircleCheckBoxProps {
  id: string
  isChecked: boolean
  onClick: (id: string) => void
}

export function CircleCheckBox({ id, isChecked, onClick }: CircleCheckBoxProps) {

  function handleCheckBoxClick() {
    onClick(id)
  }

  return (
    <div className={styles.container}>
      <div className={styles.round}>
        <input
          type="checkbox"
          checked={isChecked}
          id={id}
          onChange={handleCheckBoxClick}
        />
        <label htmlFor={id}></label>
      </div>
    </div>
  )
}