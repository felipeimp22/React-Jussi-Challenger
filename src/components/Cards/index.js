import React from 'react';

import { Card } from './styles';

function Cards({ press, photo, title }) {
    return (
        <>
            <Card>
                <img style={{ height: '60%' }} src={photo}></img>
                <button onClick={() => press()}>{title}</button>
            </Card>
        </>
    )
}

export default Cards;