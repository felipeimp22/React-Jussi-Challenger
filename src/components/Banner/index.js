import React, { useState } from 'react';

import {
    Div,
    Bottom,
    BackGroundBanner,
    Content,
    TextContent,
    Content2,
    Content3,
    Container,
    CardContainer

} from './style';
import ModalComponent from '../Modal'

import brand1 from '../../assets/brands/logo-brastemp.png'
import brand2 from '../../assets/brands/logo-consul.png'
import brand3 from '../../assets/brands/logo-consul1.png'
import brand4 from '../../assets/brands/logo-thebar.png'




import geladeira from '../../assets/Rectangle.png'
import batedeira from '../../assets/Rectangle3.png'
import drink from '../../assets/Rectangleb.png'



import Cards from '../Cards'

let photoProduct;
let titleModal;
function Baner() {
    const [openModal, setOpenModal] = useState(false)


    const handleCallModal = ({ photo, title }) => {
        photoProduct = photo
        titleModal = title
        setOpenModal(true)
    }
    return (
        <Div>
            {openModal == true ? (
                <ModalComponent title={titleModal} photo={photoProduct} type="Product" closeModal={() => setOpenModal(false)}></ModalComponent>
            ) : null}

            <BackGroundBanner>
                <Content>
                    <TextContent>
                        <div>
                            <h1 style={{ color: 'white', marginTop: '40px' }}>/ /</h1>
                        </div>
                        <Container>
                            <Content3 >
                                <div>
                                    <h1 > CRIAMOS <br />
                                    LOJAS QUE<br />
                                    VENDEM MAIS.</h1>
                                </div>
                                <Content2>
                                    <p style={{ fontSize: '12px', lineHeight: '18px' }}>A Jüssi é especialista na descrição de lojas <br />
                                usando a plataforma VTEX. Precisa criar sua <br />
                                loja ou migrar de plataforma ?
                                </p>

                                    <button>Veja Nossas Soluções </button>

                                </Content2>
                            </Content3>
                        </Container>
                    </TextContent>
                    <CardContainer>
                        <div style={{ zIndex: 0, marginTop: '18vh', marginRight: '-5vw' }}>
                            <Cards press={() => { handleCallModal({ photo: geladeira, title: "Geladeira" }) }} photo={geladeira} title="Mais Detalhes"></Cards>
                        </div >
                        <div style={{ zIndex: 1, height: '0' }}>
                            <Cards press={() => { handleCallModal({ photo: batedeira, title: 'Batedeira' }) }} photo={batedeira} title="Comprar em 12x"></Cards>
                        </div>
                        <div style={{ zIndex: 0, marginTop: '24vh', marginLeft: '-5.5vw' }}>
                            <Cards press={() => { handleCallModal({ photo: drink, title: 'Drink' }) }} photo={drink} title="Adicionar à Sacola"></Cards>
                        </div>


                    </CardContainer>

                </Content>
            </BackGroundBanner>
            <Bottom>
                <div>
                    <p style={{ marginLeft: '7.4vw', fontSize: '12px', fontWeight: 'bold' }}>Nossas principais lojas VTEX</p>
                    <p>→</p>
                    <img src={brand1} />
                    <img src={brand3} />
                    <img style={{ width: '6%', height: '50%' }} src={brand2} />
                    <img src={brand4} />
                </div>

            </Bottom>
        </Div >
    );
}

export default Baner;