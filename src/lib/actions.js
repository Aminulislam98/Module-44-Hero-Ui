import { revalidatePath } from "next/cache";
import { postNewTask, postTask } from "./tasks";
import { redirect } from "next/navigation";

export const addNewTask = async (formData) => {
  "use server";
  // const title = formData.get("title");
  // const description = formData.get("description");
  // const status = formData.get("status");
  // const priority = formData.get("priority");
  // const assignedTo = formData.get("assignedTo");
  // const newTaskData {title, description, status, priority, assignedTo}

  // ===============formData.entries()==============================
  // formData.entries() transfer all Data into key value pairs, like
  // ============From====================
  //  <input name="name" value="Aminur" />
  // <input name="age" value="25" />
  // ==============To===============
  // [
  //   ["name", "Aminur"],
  //   ["age", "25"]
  // ]

  // then Object.fromEntries() mean,  converts all pairs into a normal JavaScript object like
  // ==========From========
  // Object.fromEntries([
  //   ["name", "Aminur"],
  //   ["age", "25"]
  // ])
  // ===========To===========
  // {
  //   name: "Aminur",
  //   age: "25"
  // }
  const newTaskData = Object.fromEntries(formData.entries());
  const res = await postTask(newTaskData);
  if (res.ok) {
    revalidatePath("/tasks");
  }
  return res;
};

export const addNewTask1 = async (formData1) => {
  "use server";
  const newData = Object.fromEntries(formData1.entries());
  const res = await postNewTask(newData);
  if (res.ok) {
    revalidatePath("/tasks");
    redirect("/tasks");
  }
};
