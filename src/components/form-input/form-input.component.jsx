import React from 'react';
import './form-input.styles.scss';

const FormInput = ({label, handleChange, ...otherInputs }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherInputs} />
        {
            label ? (
                <label className= {`${
                    otherInputs.value.length ? 'shrink' : ''
                } form-input-label `} >
                    {label}
                </label>
            ): null
        }
    </div>
)

export default FormInput;