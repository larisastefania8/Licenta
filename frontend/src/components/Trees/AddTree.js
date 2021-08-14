
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTreeAction } from '../../redux/actions/trees/treeActions';

const AddTree = () => {
  const [category, setCategory] = useState('fag');
  const [plantedBy, setPlantedBy] = useState('');
  const [location, setLocation] = useState('');

  //dispatch
  const dispatch = useDispatch();

  //Handle form submit

  const handleFormSubmit = e => {
    e.preventDefault();


    const data = {
     category,
     plantedBy,
     location,
    };
  
    dispatch(createTreeAction(data));
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'>
            Click to add an appointement ^_^.
          </button>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Create appointement
                  </h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                
                <div className='modal-body'>
                  <h1 className='text-center'>Add appointement</h1>
                  <form onSubmit={handleFormSubmit}>
                    <fieldset>
                      <div className='form-group'>
                        <select
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                          className='custom-select'>
                          <option defaultValue='fag'>
                            fag
                          </option>
                          <option value='stejar'>stejar</option>
                          <option value='arbore'>arbore</option>
                          <option value='fructifer'>fructifer</option>
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
                          placeholder='Where do you want to plan?'
                        />
                      </div>
                      <button type='submit' className='btn btn-warning m-auto'>
                        Create appointement
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-dismiss='modal'>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTree;
