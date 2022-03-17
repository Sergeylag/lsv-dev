import React from 'react';
import {CallCen} from '../../styles/header_styles/header-styles'

const CallCenter = () => {
    return (
        <CallCen>
            <li>
                <a href='tel:+74958703612'>+7 (495) 870-36-12</a>
                <span>многоканальный</span>
            </li>
            <li>
                <a href='tel:+74951977777'>+7 (495) 870-36-12</a>
                <span>платные услуги</span>
            </li>
        </CallCen>
    );
};

export default CallCenter;