"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addTodo, deleteTodo } from "@/redux/slices/todoSlice";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [taskName, setTaskName] = useState<string>('')
  const todo = useSelector((state: any) => state.todo);
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(addTodo(taskName));
    setTaskName('')
  }
  const handleDeleteTodo = (id: any) => {
    dispatch(deleteTodo(id));
  };
  const handleEditTodo = (id: any) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="w-1/3 mx-auto h-[100vh] flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex gap-3 p-4 border rounded-lg">
        <Input value={taskName} onChange={e => setTaskName(e.target.value)} type="text" placeholder='Task Name' />
        <Button>Add</Button>
      </form>
      <div className="w-[316.8px]">
        {todo?.map((task: any) => (
          <div className="border rounded-lg p-4 mt-4 flex items-center justify-between " key={task.id}>
            <p>{task.text}</p>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => handleDeleteTodo(task.id)}>Edit</Button>
              <Button variant="destructive" onClick={() => handleEditTodo(task.id)}>X</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
