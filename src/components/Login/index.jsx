import React, { useState, useContext, useEffect } from 'react';


import axios from 'axios'
import { useHistory, Link } from 'react-router-dom';
import StoreContext from '../Store/Context';
import UIButton from '../styles/Button/Button';
import Modal from 'react-modal';
import {
  Div,
  UserLoginFormControlLabel,
  UserLoginFormControl,
  UserLoginFormControlInput,
  UserLoginError,
  CreateOrReturn
} from './style'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function initialState() {
  return { user: '', password: '' };
}
let Logintoken = []
let Loginemail = []

async function login({ user, password }) {
  if (user === "", password === "") {
    return Logintoken.splice(0), Loginemail.splice(1), { error: 'Usuário ou senha inválido' }

  }
  else if (user && password) {

    try {
      const result = new Promise((resolve, reject) => {
        let data = { email: user }
        resolve(data)
      })
      result.then((value) => {
        Logintoken.splice(0)
        Loginemail.splice(0)

        Logintoken.push('fakeToken 123')
        Loginemail.push(`${value.email}`)

      })

    } catch (e) {
      Logintoken.splice(0)
      Loginemail.splice(0)
      return { error: 'Usuário ou senha inválido' }
    }
  }

  return { error: 'Usuário ou senha inválido' };



}

const UserLogin = ({ closeModal }) => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);

  const { email, setEmail } = useContext(StoreContext);
  const [modalIsOpen, setIsOpen] = useState(true);
  const history = useHistory();
  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  }
  useEffect(() => {
    if (email) {
      closeModal()
    }
  }, [email])

  async function onSubmit(event) {
    event.preventDefault();
    const { token, error } = await login(values);

    if (Logintoken[0]) {
      setEmail()
      setToken()


      setToken(Logintoken[0]);
      setEmail(Loginemail[0]);
      return history.push('/');
    }
    setError(error);
    setValues(initialState);
  }

  return (
    <div style={{ zIndex: 99 }}>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}

        contentLabel="ok"
      >
        <Div>
          <div className="user-login">

            <form onSubmit={onSubmit}>
              <UserLoginFormControl className="userLoginFormControl">
                <UserLoginFormControlLabel htmlFor="user">Usuário</UserLoginFormControlLabel>
                <UserLoginFormControlInput
                  id="user"
                  type="text"
                  name="user"
                  onChange={onChange}
                  value={values.user}
                  placeholder="Email"
                />
              </UserLoginFormControl>
              <UserLoginFormControl className="userLoginFormControl">
                <UserLoginFormControlLabel htmlFor="password">Senha</UserLoginFormControlLabel>
                <UserLoginFormControlInput
                  id="password"
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={values.password}
                  placeholder="Password: admin"
                />
              </UserLoginFormControl>
              {error && (
                <UserLoginError className="user-login__error">{error}</UserLoginError>
              )}
              <UIButton
                type="submit"
                theme="contained-green"
                className="user-login__submit-button"
                rounded
              >
                Entrar
        </UIButton>
            </form>
            <CreateOrReturn>
              <button style={{
                color: "rgb(124, 124, 124)",
                textDecoration: 'none',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
                // to={"/"}
                onClick={closeModal}
              >Voltar</button>
            </CreateOrReturn>
          </div>
        </Div>
      </Modal>
    </div>

  );
};

export default UserLogin;
