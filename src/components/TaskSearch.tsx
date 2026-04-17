interface TaskSearchProps {
  searchKeyword: string;
  handleKeywordChange: (keyword: string) => void;
  searchStatus: string;
  handleStatusChange: (status: string) => void;
}

function TaskSearch({ searchKeyword, handleKeywordChange, searchStatus, handleStatusChange }: TaskSearchProps) {
  return (
    <div className="search-form">
      <input
        name="search"
        type="text"
        value={searchKeyword}
        onChange={(e) => handleKeywordChange(e.target.value)}
        placeholder="Enter search keywords..."
      />

      <select
        name="status"
        value={searchStatus}
        onChange={(e) => handleStatusChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="todo">Todo</option>
        <option value="in-progress">In progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}

export default TaskSearch;
