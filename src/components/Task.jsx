// Task.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../App/actions";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedDescription.trim() !== "") {
      dispatch(updateTask({ ...task, description: editedDescription }));
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <p>{task.description}</p>
      )}
      <p>{task.isDone ? "Done" : "Not Done"}</p>
      <button onClick={handleEdit}>Edit</button>
      {isEditing && (
        <button onClick={handleSave} disabled={editedDescription.trim() === ""}>
          Save
        </button>
      )}
    </div>
  );
};

export default Task;
