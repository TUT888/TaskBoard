import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskSearch from "./components/TaskSearch";

const initialTasks = [
  { id: 1, title: "Learn React", status: "todo" },
  { id: 2, title: "Build Todo App", status: "in-progress" },
  { id: 3, title: "Review PR", status: "done" },
];

function App() {
  const [lastId, setLastId] = useState(3);
  const [tasks, setTasks] = useState(initialTasks);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchStatus, setSearchStatus] = useState("all");

  const handleAddTask = (title: string, status: string) => {
    const newTask = {
      id: lastId + 1,
      title,
      status,
    };
    setTasks([...tasks, newTask]);
    setLastId(lastId + 1);
  };

  const handleDeleteTask = (id: number) => {
    const newTaskList = tasks.filter((task) => task.id != id);
    setTasks(newTaskList);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesStatus = searchStatus === "all" || task.status === searchStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <section>
        <div>
          <h1>Task Board</h1>
        </div>
      </section>

      <section id="content">
        <div>
          <h2>Task List</h2>
          <TaskSearch
            searchKeyword={searchKeyword}
            handleKeywordChange={setSearchKeyword}
            searchStatus={searchStatus}
            handleStatusChange={setSearchStatus}
          />
          <TaskList tasks={filteredTasks} handleDeleteTask={handleDeleteTask} />
        </div>

        <div>
          <h2>Task Form</h2>
          <TaskForm handleAddTask={handleAddTask} />
        </div>
      </section>

      <section id="spacer"></section>
    </>
  );
}

export default App;
