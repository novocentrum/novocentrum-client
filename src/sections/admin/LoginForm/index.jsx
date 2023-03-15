import React, {useState} from 'react';
import axios from 'axios';
import {Box, Typography} from "@mui/material";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";

const LoginForm = ({setIsLoggedIn}) => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isDisabledButton = isLoading ||
    !user.username.trim() ||
    !user.password.trim();

  const onLoginClick = async () => {
    try {
      setIsLoading(true);
      const isAbleToLogin = await axios.post('http://localhost:8080/users/login', user);
      setIsLoggedIn(isAbleToLogin.data.isLoggedIn);
      localStorage.setItem('isLoggedIn', isAbleToLogin.data.isLoggedIn);
    } catch (e) {
      setError(true);
      console.error('Error', e);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeUserInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      margin="100px auto"
      sx={{ width: 450, input: {width: '100%'} }}
    >
      <InputField
        value={user.username}
        name="username"
        onChange={(e) => onChangeUserInput(e)}
        placeholder="Имя пользователя"
      />
      <InputField
        value={user.password}
        name="password"
        onChange={(e) => onChangeUserInput(e)}
        placeholder="Пароль"
      />
      <Button
        isLoading={isLoading}
        disabled={isDisabledButton}
        onClick={onLoginClick}
      />
      {error && (
        <Typography variant="text14m" color="red">
          Неправильный логин или пароль
        </Typography>
      )}
    </Box>
  );
};

export default LoginForm;