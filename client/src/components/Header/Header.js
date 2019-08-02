import React from 'react'
import './Header.sass'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import SearchBox from './SearchBox/SearchBox'
import DesktopAccount from './Account/DesktopAccount/DesktopAccount'
import DesktopMenu from './DesktopMenu/DesktopMenu'
import MobileMenu from './MobileMenu/MobileMenu'
import ShoppingBasket from './ShoppingBasket/ShoppingBasket'
import logo from '../../logo.png'

const CustomAppBar = withStyles({
  root: {
    background: '#fff',
    boxShadow: 'none',
    borderBottom: '1px solid #e5e5e5',
    boxSizing: 'border-box',
    flexGrow: 1
  }
})(AppBar)

function Header(props) {
  return (
    <CustomAppBar position='fixed' className='Header'>
      <Toolbar className='toolbar'>
        <div className='leftSide'>
          <Link to='/' className='logoButton' children={<img src={logo} alt='logo' className='logo'/>} />
          <div className='desktopMenu'>
            {props.categories.map(item => <DesktopMenu key={item.title} title={item.title} menu={item.categories} /> )}
          </div>
        </div>
        <div className='rightSide'>
          <SearchBox />
          <DesktopAccount />
          <ShoppingBasket />
          <MobileMenu />
        </div>
      </Toolbar>
    </CustomAppBar>
  );
}


const mapStateToProps = state => ({
  categories: state.products.categories
})

export default connect(mapStateToProps, null)(Header)