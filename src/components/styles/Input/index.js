import React, { useContext, useState } from 'react';
import StoreContext from '../../Store/Context';
import { InputComponent, Container, Container2 } from './styles';


function InputContainer({ placeHolder, btnTitle, type }) {
    const [errorMessage, setErrorMessage] = useState('')
    const { email, setEmail } = useContext(StoreContext);
    let inputValue = ''

    const handleClick = () => {
        if (inputValue == "") {
            setErrorMessage("Campo Vazio")
        }
        if (type == "register" && inputValue != "") {
            return setEmail(inputValue)
        }

    }

    return (
        <Container>
            <Container2>
                <p>{placeHolder}</p>
                <button onClick={() => { handleClick() }}> {btnTitle}</button>
            </Container2>
            <InputComponent placeholder={errorMessage}
                onChange={(e) => { inputValue = e.target.value }}
                onFocus={() => { setErrorMessage('') }}
            />
        </ Container>
    )
}

export default InputContainer;