import React, {useState} from "react";
import axios from "axios";

const snackURL = "http://localhost:3030/snacks";
const drinkURL = "http://localhost:3030/drinks";

const ItemForm = () => {
    const initialState = {
        item: "",
        name: "",
        description: "",
        recipe: "",
        serve: "",
    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { item, name, description, recipe, serve } = formData;
        if (item === 'drink'.toLowerCase()) {
            axios.post(drinkURL, {name, description, recipe, serve})
        } else {
            axios.post(snackURL, {name, description, recipe, serve})
        }

        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="item" style={{color: "black"}}>Snack or Drink?</label>
            <input
                id="item"
                type="text"
                name="item"
                placeholder="Snack or Drink"
                value={formData.item}
                onChange={handleChange}
            />
            <label htmlFor="Item" style={{color: "black"}}>Item Name</label>
            <input 
                id="name"
                type="text"
                name="name"
                placeholder="Item name"
                value={formData.name}
                onChange={handleChange}/>
            
            <label htmlFor="description" style={{color: "black"}}>Description</label>
            <input 
                id="description"
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}/>
            
            <label htmlFor="Recipe" style={{color: "black"}}>Recipe</label>
            <input 
                id="recipe"
                type="text"
                name="recipe"
                placeholder="Recipe"
                value={formData.recipe}
                onChange={handleChange}/>

            <label htmlFor="Serve" style={{color: "black"}}>Serve</label>
            <input 
                id="serve"
                type="text"
                name="serve"
                placeholder="Serve"
                value={formData.serve}
                onChange={handleChange}/>

            <button >Add Item</button>
        </form>
    )

}

export default ItemForm;