import { FETCH_TREE_FAIL, 
    FETCH_TREE_REQUEST,
     FETCH_TREE_SUCCESS
     } from "../../actions/actionTypes";

const treeListReducer = ( state=[], action) => {
    switch(action.type){
        case FETCH_TREE_REQUEST:
            return{
                loading:true,
            };
            case FETCH_TREE_SUCCESS:
                return{
                    trees: action.payload,
                };
                case FETCH_TREE_FAIL:
                    return { 
                        
                        loading:false,
                        error:action.payload,
                    };
                    default:
                        return state;
    }

};
export {treeListReducer};