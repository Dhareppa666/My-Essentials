import PropTypes from 'prop-types';
import Button from './Button';
import '../index.css'

//  --- multiple args {} passsing directly..----
const Header = ({title, onAdd}) => {

    // const onClick = () => {
    //     console.log('clicked')
    //   }    

    return (
        <header className='header'>
            {/* <h1 style={headingStyle}>{title + ' :: '}</h1> */}
            <h1>{title + ' :: '}</h1>
            <Button color='green' text='hello' onClick={onAdd}/>
        </header>
    )
}

//  --- One var for passing the args ----
// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

Header.defaultProps = {
    title: 'Default Task Tracker',
    name: 'From Default'
}

Header.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string
}

//---CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor:'black'
// }

export default Header