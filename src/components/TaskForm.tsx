import type React from "react";
import { useState } from "react";

interface TaskFormProps {
  onAddTask: (title: string, status: string) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo"); // default is todo

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    onAddTask(title, status);

    setTitle("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />

      <select name="status" onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="in-progress">In progress</option>
        <option value="done">Done</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default TaskForm;
