import React from 'react';

const BreedFilter = (props) => {
     /*
          After when a user chooses the option from the breedName, 
          we will pass the data from child to parent. 
          In our case from BreedFilter component--> Breeds component.
          We can do that by forwarding the data in onChangeFilter function that we got from Breeds
     */
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
