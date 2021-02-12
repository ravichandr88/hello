import PropTypes from 'prop-types'
import Button from './Button'
const header = (props) => {
    return (
        <header className='header'>
          <h1>Task Tracker</h1>
   <Button title='Add Task'></Button>
   <Button title='Delete Task'></Button>
        </header>
    )
}

header.defaultProps={
    title:'Good',
}
 

header.propTypes={
    title:PropTypes.string.isRequired
}
export default header
