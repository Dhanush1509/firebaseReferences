import React, { useState } from "react";
import firebase from "./firebase";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";
import UpdateItem from "./components/UpdateItem";
import "./App.css";
 const App= () => {
  const initialItemState = [
    { id: null, name: "", type: "", qty: "", description: "" },
  ];

  const [editing, setEditing] = useState(false);

  const [currentItem, setCurrentItem] = useState(initialItemState);

  const editItem = (item) => {
    setEditing(true);
    setCurrentItem({
      id: item.id,
      name: item.name,
      type: item.type,
      qty: item.qty,
      description: item.description,
    });
  };

  const updateItem = ({ currentItem }, updatedItem) => {
    console.log(
      "It send the item to the updated item function:",
      updatedItem,
      currentItem.id
    );
    setEditing(false);
    firebase
    
      .collection("Person")
      .doc(currentItem.id)
      .update(updatedItem);
  };

  return (
    <div>
      <h1>Firestore CRUD App</h1>
      <h2>Item List</h2>
      <ItemList editItem={editItem} />
      <h2>Add Item</h2>
      {editing ? (
        <UpdateItem
          setEditing={setEditing}
          currentItem={currentItem}
          updateItem={updateItem}
        />
      ) : (
        <AddItemForm />
      )}
    </div>
  );
};
export default App;