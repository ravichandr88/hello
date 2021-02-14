import PropTypes from 'prop-types'
import Button from './Button'

const header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
          <h1>Task Tracker</h1>

   <Button title={showAdd ? 'Close' : 'Add Task'} onClick = {onAdd}  color={showAdd ? 'red' : 'black'}></Button>
  
        </header>
    )
}

header.defaultProps={
    title:'Add Task',
}
 

header.propTypes={
    title:PropTypes.string.isRequired
}
export default header
