import React, { useState } from 'react';
import ModalComponent from '../Modal'
import { Container, AboutContainer, Button } from './styles';
import Jussi from '../../assets/image-jussi.png'
import { Link } from 'react-router-dom';
function About() {

    const [openModal, setOpenModal] = useState(false)
    return (
        <Container>
            {openModal == true ? <ModalComponent type="About" closeModal={() => setOpenModal(false)} />
                : null}
            <AboutContainer>
                <div>
                    <h1>OLÁ, SOMOS <br />
                    A JÜSSI
                    </h1>

                    <p>
                        A Jüssi é uma agência integrante <br />
                     do grupo global WPP que vem há <br />
                     10 anos consolidando o <br />
                     pensamento voltado para<br />
                      produtos e resolução de <br />
                      problemas. Nosso área dedicada<br />
                       exclusivamente para Produtos<br />
                       Digitais é organizada em 6<br />
                        especialidades: Product <br />
                        Managamenet, User Experience<br />
                         Design, SEO, Tecnologia, Agile e<br />
                          User Behavior Analytics.<br />
                    </p>
                    <Button

                        onClick={() => { window.location.href = 'https://jussi.com.br/' }}
                    // onClick={() => setOpenModal(true)}
                    >
                        Conheça a Jüssi
                    </Button>
                </div>
                <div>
                    <img src={Jussi}></img>
                </div>
            </AboutContainer>
        </Container>
    )
}

export default About;