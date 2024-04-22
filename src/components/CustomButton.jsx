import PropTypes from 'prop-types';
import state from '../store';
import { useSnapshot } from 'valtio';



const CustomButton = ({type, title, customStyles, handleClick}) => {
  

    const snape = useSnapshot(state)

    const generateStyle = (type) => {
        if(type === 'filled'){
            return {
                backgroundColor: snape.color,
                color: '#fff',
            }
        }
    }
  
    return (
    <button 
        className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
        style={generateStyle(type)}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton

CustomButton.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    customStyles: PropTypes.string,
    handleClick: PropTypes.func,
}