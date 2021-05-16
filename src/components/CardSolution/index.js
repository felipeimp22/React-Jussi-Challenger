import React, { useState } from 'react';

import { Container, Icon, Title, Buttom, Desc, List } from './styles';
import ModalComponent from '../Modal'

function CardSolution({ icon, title, desc, list }) {
    const [openModal, setOpenModal] = useState(false)
    let titleModal = title
    const handleCallModal = async () => {

        setOpenModal(true)
    }
    return (
        <>
            {openModal == true ? (
                <ModalComponent title={titleModal} desc={desc} list={list} type="Solutions" closeModal={() => setOpenModal(false)}></ModalComponent>
            ) : null}
            <Container>

                <Icon>
                    <div>
                        <h1>{icon}</h1>

                    </div>
                </Icon>
                <Title>
                    <h2>{title}</h2>

                </Title>
                <Desc>
                    {
                        icon || title ? (<h3>{desc}</h3>) : null
                    }

                </Desc>
                <List>
                    {icon || title ?
                        <ul>
                            {list?.map(e => (<li>{e}</li>))}

                        </ul> : null}

                </List>

                {icon || title ? (
                    <Buttom onClick={() => {
                        handleCallModal()
                    }}>
                        Ver Solução
                    </Buttom>
                ) : null}

            </Container>
        </>
    )
}

export default CardSolution;