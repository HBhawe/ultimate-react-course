import { useState } from "react";
import { Button } from "./Button";

export function FormAddToDoList({ onAddToDoList }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      list: [],
      id: id,
    };

    onAddToDoList(newFriend);
    setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label>👯 ToDo name:</label>
      <input
        type="text"
        name={"name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
