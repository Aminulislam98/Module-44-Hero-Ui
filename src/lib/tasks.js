import tasks from "../data/tasks.json";
import { addNewTask1 } from "./actions";
export const getTasks = async () => {
  return tasks;
};

export const postTask = async (addNewTask) => {
  addNewTask.id = tasks.length + 1;
  tasks.unshift(addNewTask);
  return { ok: true, message: "task added Successfully" };
};

export const postNewTask = async (newData) => {
  newData.id = tasks.length + 1;
  tasks.unshift(newData);
  return { ok: true, message: "successful" };
};
