import React, { useState } from "react";

const Checkbox = ({ categories, handleFilters }) => {
    const [checked, setCheked] = useState([]);

    const handleToggle = category => () => {
        const currentCategoryId = checked.indexOf(category);
        const newCheckedCategoryId = [...checked];

        if (currentCategoryId === -1) {
            newCheckedCategoryId.push(category);
        } else {
            newCheckedCategoryId.splice(currentCategoryId, 1);
        }
        setCheked(newCheckedCategoryId);
        handleFilters(newCheckedCategoryId);
    };

    return categories.map((category, i) => (
        <li key={i} className="list-unstyled">
            <input
                onChange={handleToggle(category._id)}
                value={checked.indexOf(category._id === -1)}
                type="checkbox"
                className="form-check-input"
            />
            <label className="form-check-label">{category}</label>
        </li>
    ));
};

export default Checkbox;
