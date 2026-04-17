import type { Task } from "../types";

interface TaskListProps {
  tasks: Task[]
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li id={String(task.id)}>
          {task.title} - {task.status}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
