import React, { useContext, useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import StoreContext from '../../components/Store/Context';
import { HeaderBar, Image, SearchDiv, SearchComponent } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Logo from '../../assets/logoJussiVectorGreen.png'
import UserLogin from '../Login'
// import { Container } from './styles';

const result = [
    "Jussi",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "GitHub",
    "Java-Script",
    "React",
    "Node"
];

function Header({ scroll, scroll2, title }) {
    const [modalLogin, setModalLogin] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const { setToken, token } = useContext(StoreContext);
    const { email, setEmail } = useContext(StoreContext);
    const { items, setItems } = useContext(StoreContext);

    useEffect(() => {
        axios.get('http://localhost:3333/data').then(res =>
            res.data.forEach(e => result.push(e.solution))
        )

    }, [])
    function setStates() {
        return setToken(null), setEmail(null), setItems([])
    }

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const results = !searchTerm
        ? result
        : result.filter(el =>
            el.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );

    return (
        <>
            {modalLogin == true ? (
                <UserLogin closeModal={() => setModalLogin(false)}></UserLogin>
            ) : null}
            <HeaderBar>
                <div>
                    <Image src={Logo}></Image>
                    <button onClick={() => scroll()}>{title.scroll}</button>
                    <button onClick={() => scroll2()}> {title.scroll2} </button>

                </div>
                <div>
                    <SearchDiv>
                        <button style={{ marginLeft: '-20vw', zIndex: 10 }}>Buscar</button>
                        <SearchComponent >

                            <input
                                value={searchTerm}
                                onChange={handleChange}
                            ></input>
                            {searchTerm ? <ul>
                                {results.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul> : null}
                        </SearchComponent>

                        <button style={{ width: '2vw', marginLeft: '10vw' }}>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>

                        </button>

                    </SearchDiv>

                    <h4 style={{ marginRight: '-1vw' }}>{email ? email : null}</h4>

                    {email ?
                        <Link onClick={setStates}><button style={{ marginRight: '-4vw' }}> Sair </button></Link> :
                        <Link
                        // to={'/login'}
                        > <button onClick={() => {
                            setModalLogin(true)
                        }}
                            style={{ marginRight: '-4vw' }} > Login </button></Link>
                    }
                    <Link to={'/purchase'}>

                        <button onClick={() => {
                            if (!email) alert('Você precisa logar para acessar o carrinho')
                        }}>
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </button> </Link>
                </div>

            </HeaderBar>
        </>
    );
}

export default Header;