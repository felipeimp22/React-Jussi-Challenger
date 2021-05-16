import React, { useState, useContext } from 'react';
import StoreContext from '../../components/Store/Context';
import { Button, Container, Container2 } from './styles';
import Modal from 'react-modal';

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

// Modal.setAppElement('#yourAppElement')
function ModalComponent({ type, closeModal, photo, title, desc, list }) {
    const { items, setItems } = useContext(StoreContext);
    const { email, setEmail } = useContext(StoreContext);

    // var subtitle;
    const [modalIsOpen, setIsOpen] = useState(true);

    const handleAddToPurchase = ({ type, title, photo, }) => {
        if (!email) return alert('Você precisa estar logado para adicionar um item ao carrinho')
        setItems([...items, { id: items.length, title: title, type: type, photo: photo }])
        closeModal()
    }

    return (
        <div>
            {type == "Product" ? (

                <Modal
                    isOpen={modalIsOpen}

                    // onAfterOpen={afterOpenModal}
                    // onRequestClose={closeModal}
                    style={customStyles}

                    contentLabel="Example Modal"
                >
                    <Container>
                        {title ? (<h1>{title}</h1>) : null}
                        {photo ? (
                            <img src={photo}></img>
                        ) : null}

                        <Button onClick={() => handleAddToPurchase({ type: type, title: title, photo: photo })}> Adicionar ao Carrinho</Button>

                        {closeModal ? <button onClick={() => closeModal()}>close</button> : null}
                    </Container>


                </Modal>


            ) : (<>
                <Modal
                    isOpen={modalIsOpen}

                    style={customStyles}

                    contentLabel="Example Modal"
                >
                    <Container2>
                        <h1>{title}</h1>
                        <h2> {desc}</h2>
                        <ul>

                            {list?.map(e => (<li>{e}</li>))}
                        </ul>


                        {closeModal ? <button onClick={() => closeModal()}>close</button> : null}
                    </Container2>
                </Modal>
            </>)}
        </div>
    );


}

export default ModalComponent;