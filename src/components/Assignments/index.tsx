import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface AssignmentType {
  id: string;
  title: string;
  completed: boolean;
}

interface AssignmentsProps {
  assignments: AssignmentType[];
  deleteAssignment: (id: string) => void;
  toggleCompletion: (id: string) => void;
}

export function Assignments({
  assignments,
  deleteAssignment,
  toggleCompletion,
}: AssignmentsProps) {
  const completedCount = assignments.filter((a) => a.completed).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {completedCount} of {assignments.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment) => (
          <Assignment
            key={assignment.id}
            assignment={assignment}
            onDelete={deleteAssignment}
            onToggle={toggleCompletion}
          />
        ))}
      </div>
    </section>
  );
}
