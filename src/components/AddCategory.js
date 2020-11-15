import React,{useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange =(e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(inputValue.trim().length >2){
            //setCategories(cats=>[inputValue,...cats]);
            setCategories(cats=>[inputValue]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            ></input>
        </form>
    );

}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired

}

export default AddCategory
