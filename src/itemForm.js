import React, {useState} from "react";

const ItemForm = ({ addItem }) => {
    const initialState = {
        item: "",
        name: ""
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
        addItem({ ...formData });
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Add food or drink</label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Item Name"
                value={formData.name}
                onChange={handleChange}
            />
            <button>Add Item</button>
        </form>
    )

}

export default ItemForm;