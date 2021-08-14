import axios from 'axios'
const { CREATE_TREE_REQUEST, CREATE_TREE_SUCCESS, CREATE_TREE_FAIL, FETCH_USERS_REQUEST, FETCH_TREE_SUCCESS, FETCH_TREE_FAIL, DELETE_TREE_REQUEST, DELETE_TREE_SUCCESS, DELETE_TREE_FAIL } = require("../actionTypes");

const createTreeAction = treeData => {
    
return async (dispatch) => {
try {
    
    dispatch({
        type:CREATE_TREE_REQUEST,

    });
    const config = {
        'Content-Type':'application/json',
    };
    console.log(treeData);
    const {data} = await axios.post('http://localhost:9000/api/trees',treeData,config);
    
   
dispatch({
   type: CREATE_TREE_SUCCESS,
   payload: data, 
});

} catch (error) {
    dispatch({
        type:CREATE_TREE_FAIL,
        payload: error.response && error.response.data.message,

    });
    
}
};
};

//fetch all tree action

const fetchTreesAction = () => {

    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_USERS_REQUEST,
            });

            const config = {
                headers:{
                    'Content-Type': 'application/json'
                },
            };
// make httpp call to our back end

const {data} = await axios.get('http://localhost:9000/api/trees', config);
dispatch({
    type: FETCH_TREE_SUCCESS,
    payload:data,
});  
console.log(data);
        } catch (error) {
            dispatch({
                type:FETCH_TREE_FAIL,
                payload: error.response && error.response.data.message,
            }) 
        }

    };

};

//delete tree action

const deleteTreesAction = () => {

    return async (dispatch) => {
        try {
            dispatch({
                type: DELETE_TREE_REQUEST,
            });

            const config = {
                headers:{
                    'Content-Type': 'application/json'
                },
            };
// make httpp call to our back end

const {data} = await axios.delete('http://localhost:9000/api/trees/:id', config);
dispatch({
    type: DELETE_TREE_SUCCESS,
    payload:data,
});  
console.log(data);
        } catch (error) {
            dispatch({
                type:DELETE_TREE_FAIL,
                payload: error.response && error.response.data.message,
            }) 
        }

    };

};

export {createTreeAction,fetchTreesAction,deleteTreesAction}