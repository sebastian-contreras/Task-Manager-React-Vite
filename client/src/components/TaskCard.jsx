import { useTasks } from "../context/TaskUseContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleDone } = useTasks();
  const navigate = useNavigate();
  const handleDone = async () => {
    await toggleDone(task.id);
  };
  return (
    <div className="bg-zinc-700 rounded-md p-4">
      <header className="flex justify-between">
        <h3 className="text-sm text-white font-bold">{task.title}</h3>
        <span>{task.done ? "✔️" : "❌"}</span>
      </header>
      <p className="text-xs text-white">{task.description}</p>
      <span className="text-xs text-white">{task.createAt}</span>
      <div className="flex gap-1">
        <button className="bg-slate-500 px-2 py-1 text-white" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
        <button className="bg-red-500 px-2 py-1 text-white" onClick={() => deleteTask(task.id)}>Delete</button>
        <button className="bg-green-500 px-2 py-1 text-white"
          onClick={() => {
            handleDone();
          }}
        >
          Toggle task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
