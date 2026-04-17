import type { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
  handleDeleteTask: (id: number) => void;
}

const statusColor: Record<string, string> = {
  "todo": "grey",
  "in-progress": "blue",
  "done": "green",
};

function TaskList({ tasks, handleDeleteTask }: TaskListProps) {
  return (
    // Display list using table for better alignment
    <table className="task-table">
      <tbody>
        {tasks.map((task, index) => (
          <tr key={String(task.id)}>
            <td>{index + 1}</td>
            <td>{task.title}</td>
            <td style={{ color: statusColor[task.status] || "black" }}>
              {task.status}
            </td>
            <td>
              <button type="button" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    // Display list using unordered list
    // <ul className="task-list">
    //   {tasks.map((task) => (
    //     <li key={String(task.id)}>
    //       {task.title} - {task.status}
    //       <button type="button" onClick={() => handleDeleteTask(task.id)}>
    //         Delete
    //       </button>
    //     </li>
    //   ))}
    // </ul>
  );
}

export default TaskList;
