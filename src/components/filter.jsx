import React from 'react';
import PropTypes from 'prop-types'; 
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { nanoid } from '@reduxjs/toolkit';


export const Filter = () => {
    const dispach = useDispatch();
    const filterId = nanoid()

    const onChange = (event) => {
        dispach(setFilter(event.target.value));
    };

return (
    <div>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        id={filterId}
        type="search"
        onChange={event => onChange(event)}
      ></input>
    </div>
  );
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};