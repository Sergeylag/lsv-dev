import React from 'react';
import {CdcAsideStyle} from '../../styles/cdc/cdc_aside_style'

const CdcAside = () => {

    return (
        <CdcAsideStyle className="text">
            <div className="phone">+7 (495) 870-36-12</div>
            <div className="address">ул Вучетича, 21 корпус 1</div>
            <a className="button button-ghost altered" href="#">Записаться на приём</a>
        </CdcAsideStyle>
    );
};

export default CdcAside;