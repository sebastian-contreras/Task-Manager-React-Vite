import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskUseContext";

function TaskPage() {
  const { tasks, loadTask } = useTasks();
  useEffect(() => {
    loadTask();
  }, []);

  const RenderMain = () => {
    if (tasks.length === 0) return <h3>Not tasks yet</h3>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  };

  return (
    <>
      <div>
        <h1 className="text-4xl text-white text-center py-4 font-bold">Tasks</h1>
        <div className="grid grid-cols-3 gap-2">
          {RenderMain()}
          </div>
      </div>
    </>
  );
}

export default TaskPage;
