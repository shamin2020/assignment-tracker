import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface AssignmentType {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<AssignmentType[]>([]);

  const addAssignment = (title: string) => {
    const newAssignment = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setAssignments([...assignments, newAssignment]);
  };

  const deleteAssignment = (id: string) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  const toggleCompletion = (id: string) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment.id === id
          ? { ...assignment, completed: !assignment.completed }
          : assignment
      )
    );
  };

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments
        assignments={assignments}
        deleteAssignment={deleteAssignment}
        toggleCompletion={toggleCompletion}
      />
    </>
  );
}

export default App;
