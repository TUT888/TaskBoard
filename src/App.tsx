import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
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
          <TaskList />
        </div>

        <div>
          <h2>Task Form</h2>
          <TaskForm />
        </div>
      </section>

      <section id="spacer"></section>
    </>
  );
}

export default App;
