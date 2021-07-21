import React from 'react';

const BreedFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
    return (
    <div>
        <div>
        <label>Filter by breed</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
            {props.breedNames.map((breed) => (
            <option key={breed.id} value={breed.breedName}>{breed.breedName}</option>
            ))}
        </select>
        </div>
    </div>
    );
};

export default BreedFilter;
