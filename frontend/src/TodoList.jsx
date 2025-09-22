import React, { useEffect, useState } from "react";

function TodoList({ token }) {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch tasks");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });
      if (res.ok) {
        const newTask = await res.json();
        setTasks([...tasks, newTask]); // ✅ no need to re-fetch
        setText("");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ completed: !completed }),
      });
      if (res.ok) {
        const updatedTask = await res.json();
        setTasks(tasks.map((t) => (t._id === id ? updatedTask : t)));
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setTasks(tasks.filter((t) => t._id !== id));
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [token]); // ✅ only runs once when mounted or when token changes

  return (
    <div className="card">
      <h2>Your Tasks</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="New task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button className="btn" type="submit">Add</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(task._id, task.completed)}>
              {task.text}
            </span>
            <button className="btn delete" onClick={() => deleteTask(task._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
