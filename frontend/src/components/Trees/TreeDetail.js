import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTreesAction, updateTree} from '../../redux/actions/trees/treeActions';

const TreeDetail = ({ history }) => {
  const { id} = useParams();

  //Get the tree details and fill it in the form
  const treeDetails = useSelector(state => state.treeDetails);

  const { tree, loading } = bookDetails;

  const [category, setCategory] = useState(tree && !loading && tree.category);
  const [plantedBy, setPlantedBy] = useState(tree && !loading && tree.plantedBy);
  const [location, setLocation] = useState(tree && tree.location);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTreesAction(id));
  }, [dispatch, id]);

  //dispatch action

  const formSubmitHandler = e => {
    const data = {
      category,
      plantedBy,
      location,
    };
    e.preventDefault();
    dispatch(updateTree(id, data));
    history.push('/trees');
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {tree ? (
            <>
              <h1 className='text-center'>Update</h1>
              <form onSubmit={formSubmitHandler}>
                <fieldset>
                  <div className='form-group'>
                    <select
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                      className='custom-select'>
                      <option defaultValue='programming'>fag</option>
                      <option value='religion'>stejar</option>
                      <option value='life'>arbore</option>
                      <option value='culture'>fructifer</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>plantedBy </label>
                    <input
                      value={plantedBy}
                      onChange={e => setPlantedBy(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Your name'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>Location</label>
                    <input
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputPassword1'
                      placeholder='Location'
                    />
                  </div>
                  <button type='submit' className='btn btn-dark m-auto'>
                    Create APP
                  </button>
                </fieldset>
              </form>
            </>
          ) : (
            'No'
          )}
        </div>
      </div>
    </div>
  );
};

export default treeDetails;