import { useState } from "react";
import { CircleCheckBox } from "./CircleCheckBox";
import { ToDoTask } from "../models/ToDoTask";
import { Pen, Trash, Check } from 'phosphor-react';

import styles from './ToDoCard.module.css';

interface ToDoCardProps {
  dataSource: ToDoTask;
  onCompleteStatusChange: (toDoTaskId: string) => void;
  onDelete: (toDoTaskId: string) => void;
  onEdit: (toDoTaskId: string, updatedName: string) => void;
}

export function ToDoCard({ dataSource, onCompleteStatusChange, onDelete, onEdit }: ToDoCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(dataSource.name);

  function handleRemoveToDoCard() {
    onDelete(dataSource.id);
  }

  function toggleToDoCardCheckbox() {
    onCompleteStatusChange(dataSource.id);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEditedText(event.target.value);
  }

  function handleSaveEdit() {
    onEdit(dataSource.id, editedText);
    setIsEditing(false);
  }

  return (
    <li className={styles.toDoCard} key={dataSource.id}>
      <CircleCheckBox
        id={dataSource.id}
        isChecked={dataSource.isCompleted}
        onClick={toggleToDoCardCheckbox}
      />

      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          className={styles.editInput}
          autoFocus
        />
      ) : (
        <p
          className={dataSource.isCompleted ? styles.completedToDoCardText : styles.notCompletedToDoCardText}
        >
          {dataSource.name}
        </p>
      )}

      <div className={styles.iconWrapper} onClick={handleRemoveToDoCard}>
        <Trash size={16} weight="bold" />
      </div>

      <div className={styles.iconWrapper} onClick={isEditing ? handleSaveEdit : handleEditClick}>
        {isEditing ? <Check size={16} weight="bold" /> : <Pen size={16} weight="bold" />}
      </div>
    </li>
  );
}
