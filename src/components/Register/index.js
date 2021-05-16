import React, { useContext } from 'react';
import StoreContext from '../Store/Context';
import { Container, Container2 } from './styles';
import InputContainer from '../styles/Input'
function Register() {
    const { email, setEmail } = useContext(StoreContext);
    return (
        <Container>
            <Container2>
                <h1 style={{ color: '#03ffa5', marginRight: '2vw' }}>//</h1>
                <h1> RECEBA NOVIDADES DA NOSSA ÁREA<br />
                 DE PRODUTOS DIGITAIS.</h1>
            </Container2>

            <InputContainer placeHolder="Digite seu Email" btnTitle="CADASTRAR"
                type="register"
            />
        </Container>
    )
}

export default Register;