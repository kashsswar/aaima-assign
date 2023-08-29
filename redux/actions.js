// actions.js
import {
    FETCH_DATA,
    CREATE_DATA,
    UPDATE_DATA,
    DELETE_DATA
  } from './actions/actionTypes';
  
  export const fetchData = () => ({ type: FETCH_DATA });
  export const createData = (data) => ({ type: CREATE_DATA, payload: data });
  export const updateData = (data) => ({ type: UPDATE_DATA, payload: data });
  export const deleteData = (id) => ({ type: DELETE_DATA, payload: id });
  