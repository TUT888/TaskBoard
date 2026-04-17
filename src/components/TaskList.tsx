import type { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
  handleDeleteTask: (id: number) => void;
}

function TaskList({ tasks, handleDeleteTask }: TaskListProps) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={String(task.id)}>
          {task.title} - {task.status}
          <button type="button" onClick={() => handleDeleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
