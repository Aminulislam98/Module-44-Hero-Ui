import tasks from "../data/tasks.json";
export const getTasks = async () => {
  return tasks;
};

export const postTask = async (addNewTask) => {
  addNewTask.id = tasks.length + 1;
  tasks.push(addNewTask);
  return { ok: true, message: "task added Successfully" };
};
