"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react"

export default function Home() {
  const [tasks, setTasks] = useState<{ name: string }[]>(([]));
  const [taskName, setTaskName] = useState<string>('')
  const handleSubmit = (e: any) => {
    e.preventDefault()
    axios.post("http://localhost:5000/todoList", { name: taskName }).then(res => {
      setTasks([...tasks, { name: taskName }])
      setTaskName('')
    })
  }

  return (
    <div className="w-1/3 mx-auto h-[100vh] flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex gap-3 p-4 border rounded-lg">
        <Input value={taskName} onChange={e => setTaskName(e.target.value)} type="text" placeholder='Task Name' />
        <Button>Add</Button>
      </form>
      <div className="w-[316.8px]">
        {tasks.map((task, i) => (
          <div className="border rounded-lg p-4 mt-4 flex items-center justify-between " key={i}>
            <p>{task.name}</p>
            <Button variant="destructive" onClick={() => setTasks(tasks.filter(t => t.name !== task.name))}>x</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
