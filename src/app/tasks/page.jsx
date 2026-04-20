import { AddTaskForm } from "@/components/TasksCard/AddTaskForm/AddTaskForm";
import { TasksCard } from "@/components/TasksCard/TasksCard";
import { getTasks } from "@/lib/tasks";
import React from "react";

const TasksPage = async () => {
  const tasks = await getTasks();

  return (
    <div className="p-4">
      <h1 className="text-center font-semibold text-5xl pb-4"> Tasks Data</h1>
      <div className="pb-5">
        <AddTaskForm></AddTaskForm>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 ">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task}></TasksCard>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
