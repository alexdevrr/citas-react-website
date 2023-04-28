import { useState } from 'react';
import styled from 'styled-components';

import { dbApi } from '../../api/dbApi';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  height: 38px;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #f25287;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  transition: 400ms;
  width: 100%;

  &:focus {
    outline: none;
    background-color: #f9f3f3;
  }
`;

export const BtnSubmit = styled.button`
  background-color: #f25287;
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  margin-top: 1rem;
  color: white;
  transition: 400ms;
  width: 100%;

  &:hover {
    background-color: #c54771;
  }
`;

const Formulario = () => {
  const [error, setError] = useState(false);
  console.log("🚀 ~ file: Formulario.js:65 ~ Formulario ~ error:", error)

  const [cita, setCita] = useState({
    password: '',
    email: '',
    // email: '',
    // rol: 'USER_ROLE',
    // password: '123456',
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { password, email } = cita;

  const submitCita = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    if (
      email.trim() === '' ||
      password.trim() === ''
    ) {
      setError(true);
    } else {
      setError(false);

      const { data } = await dbApi.post('/api/auth/login', cita);
      
      localStorage.setItem('token', data.token);

      console.log(data);

      setCita({
        email: '',
        password: '',
        // rol: ""
      });
    }
  };

  return (
    <Form onSubmit={submitCita}>
      <Label>Email</Label>
      <Input
        type="text"
        placeholder="Digita tu email"
        name="email"
        value={email}
        onChange={handleChange}
        />
      <Label>Password</Label>
      <Input
        type="text"
        placeholder="Escribe tu password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      
      <BtnSubmit type="submit">Submit</BtnSubmit>
    </Form>
  );
};

export default Formulario;
