import React from 'react';

import classes from './AddUser.module.css';
import Card from '../UI/Card';



const AddUser = (props) => {

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
  <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" />
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <button type="submit">Email address</button>
    </form>
  </Card>
  );
};

export default AddUser;