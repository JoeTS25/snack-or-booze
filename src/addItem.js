import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemForm from "./itemForm";

function AddItem() {
    const [item, setItem]= useState("");

    return (
        <div>
            <p>{item.name} has been added</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default AddItem;