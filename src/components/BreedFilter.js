import React from 'react';

const BreedFilter = ({ breedNames, selected, onChangeFilter }) => {
     /*
     Goal of BreedFilter component:
        Find out which dogBreed name the user selected. 

          After when a user chooses from the option, 
          we will pass that data from child component to parent component by 
          forwarding the data in onChangeFilter function.
     */
    const dropdownChangeHandler = (event) => {
        onChangeFilter(event.target.value);
    };
    return (
    <div>
        <div>
        <label>Filter by breed</label>
        <select value={selected} onChange={dropdownChangeHandler}>
            <option value='all'>All breeds</option>
            {breedNames.map((breed) => (
            <option key={breed} value={breed}>{breed}</option>
            ))}
        </select>
        </div>
    </div>
    );
};

export default BreedFilter;
