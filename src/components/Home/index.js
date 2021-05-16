import React, { useContext, useEffect, useState, useRef } from 'react';
import Baner from '../Banner'
import Header from '../../components/Header'
import CardSolution from '../CardSolution'
import About from '../About'
import Contact from '../Contact'
import Register from '../Register'
import { CardContainer, CardContainerDiv, DivRef1, CardContainerDiv2, DivRef2 } from './styles';
import ModalComponent from '../Modal'
function Home() {
    const [ref, setRef] = useState()
    const aboutRef = useRef()
    const solutionsRef = useRef()


    const handleScrollAbout = (place) => {
        place.current.scrollIntoView({ inline: "start", block: "start", behavior: 'smooth' })
    }
    return (
        <>

            <Header title={{ scroll: 'Nossas Soluções', scroll2: 'Conheça a Jüssi', button: 'purchase' }} scroll={() => { handleScrollAbout(solutionsRef) }} scroll2={() => { handleScrollAbout(aboutRef) }} />
            <Baner />
            <DivRef1 ref={solutionsRef} />
            <CardContainer>
                <CardContainerDiv2 >
                    <h1 >// </h1>
                    <h1 style={{ color: 'black' }}>NOSSAS SOLUÇÕES</h1>
                </CardContainerDiv2>
                <CardContainerDiv>
                    <CardSolution icon="P1" title="NOME DO PRODUTO #1" desc="Descrição do produto #1" list={['Feature 1', 'Feature 2', 'Feature 3']} />
                    <CardSolution icon="P2" title="NOME DO PRODUTO #2" desc="Descrição do produto #2" list={['Feature 1', 'Feature 2', 'Feature 3']} />
                    <CardSolution icon="P3" title="NOME DO PRODUTO #3" desc="Descrição do produto #3" list={['Feature 1', 'Feature 2', 'Feature 3']} />
                    <CardSolution icon="P4" title="NOME DO PRODUTO #4" desc="Descrição do produto #4" list={['Feature 1', 'Feature 2', 'Feature 3']} />

                </CardContainerDiv>
            </CardContainer>
            <DivRef2 ref={aboutRef} />
            <About />
            <Contact />
            <Register />

        </>
    )
}

export default Home;