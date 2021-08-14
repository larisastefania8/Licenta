import {
    CREATE_TREE_FAIL,
    CREATE_TREE_REQUEST,
    CREATE_TREE_SUCCESS,
  } from '../../actions/actionTypes';
  
  const createTreeReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_TREE_REQUEST:
        return {
          loading: true,
        };
      case CREATE_TREE_SUCCESS:
        return {
          tree: action.payload,
        };
  
      case CREATE_TREE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export { createTreeReducer };