import React, { useState } from 'react';

import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';



const AddUser = (props) => {

  const [enteredUserName, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [error, setError] = useState();



  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 || enteredEmail.trim().length === 0) {
        setError({
          title: 'Invalid input',
          message: 'Please enter a valid name and age (non-empty values).'
        });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a validage.'
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
    setEnteredEmail('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />)}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={enteredEmail} onChange={emailChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card> 
    </div>
  );
};

export default AddUser;