import React  from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';


const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>          
        </Link>
        <div className='options'>
            <Link className='option' to='/Shop'> SHOP </Link>
            <Link className='option' to='/Shop'> CONTACT US </Link>
            {
                currentUser ? 
                    <div className='option' onClick={()=> auth.signOut()} >SIGN OUT</div>:
                    <Link className='option' to='/Signin'>SIGN IN</Link>
            }
            <CartIcon className='option'/>
        </div>
        {hidden ? null: <CartDropDown />}
    </div>
)

const mapStatetoProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStatetoProps)(Header);
