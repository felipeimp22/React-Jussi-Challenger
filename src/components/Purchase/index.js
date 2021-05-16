import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import { Container, Card, Container2, BTN } from './styles';

function PurchaseComponent() {
    const { items, setItems } = useContext(StoreContext);
    const { email, setEmail } = useContext(StoreContext);

    const handleCleanShoppingCart = () => {
        setItems([])
    }
    return (
        <Container>
            <div style={{
                width: '100%',
                backgroundColor: 'white',
                height: '14vh',
                display: 'flex', alignItems: 'center'
            }}>

                <Link to="/" style={{ marginLeft: '2vw', marginRight: '10vw' }}>Voltar</Link>
                <BTN onClick={() => handleCleanShoppingCart()}>Limpar Carrinho</BTN>
            </div>

            <h1>Items : </h1>
            <Container2>

                {items?.map(e => (<Card>
                    {e.photo ? (
                        <img src={e.photo}></img>
                    ) : null}
                    <h4>Item: {e.title}</h4>
                    {/* <h1>{e.type}</h1> */}

                    <h4>ID: {e.id}</h4></Card>))}
            </Container2>


        </Container>
    )
}

export default PurchaseComponent;