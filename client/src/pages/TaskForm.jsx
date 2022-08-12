import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskUseContext.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [tasks, setTask] = useState({
    title: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  });
  return (
    <>
      <div>
        <Formik
          initialValues={tasks}
          enableReinitialize={true}
          onSubmit={async (values, action) => {
            console.log(values);
            if (params.id) {
              await updateTask(params.id, values);
            } else {
              await createTask(values);
            }
            action.resetForm();
            navigate("/");
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className="bg-slate-200 max-w-sm rounded-md p-4 mx-auto mt-10">
              <h1 className="text-xl font-bold uppercase text-center">{params.id ? "Edit Task" : "New Task"}</h1>
              <label className="block">Title</label>
              <input
              className="px-2 py-1 w-full"
                onChange={handleChange}
                type="title"
                name="title"
                placeholder="Write a title"
                value={values.title}
              />

              <label className="block">Description</label>
              <textarea
              className="px-2 py-1 w-full"
                name="description"
                placeholder="Write a description"
                rows="3"
                onChange={handleChange}
                value={values.description}
              />
              <button className="block bg-indigo-500 px-2 py-1 text-white w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default TaskForm;
