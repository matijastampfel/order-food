import React, {Fragment} from 'react';
import foodImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = ({onShowCart}) => {
  return <Fragment>
      <header className={classes.header}>
          <h1>React Meals</h1>
          <HeaderCartButton onShowCart={onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={foodImage} alt="food on table"/>
      </div>
  </Fragment>
};

export default Header;
