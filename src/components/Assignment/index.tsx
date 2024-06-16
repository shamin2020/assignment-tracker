import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type AssignmentPropsv = {
  assignment: {
    id: string;
    title: string;
    completed: boolean;
  };
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export function Assignment({
  assignment,
  onDelete,
  onToggle,
}: AssignmentPropsv) {
  return (
    <div className={styles.assignment}>
      <button
        className={styles.checkContainer}
        onClick={() => onToggle(assignment.id)}
      >
        <div className={assignment.completed ? styles.filled : ""}>
          {assignment.completed && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 10L3.5 7.5L2.5 8.5L6 12L14 4L13 3L6 10Z"
                fill="currentColor"
              />
            </svg>
          )}
        </div>
      </button>

      <p className={assignment.completed ? styles.textCompleted : ""}>
        {assignment.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => onDelete(assignment.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
