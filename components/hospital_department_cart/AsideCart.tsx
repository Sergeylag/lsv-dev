import React from 'react';
import styled from "styled-components";

const AsideCart = ({children,bg}) => {
    const AsiedBg = styled.aside`
    background: url("${bg}") no-repeat center/cover;
    `;

    return (
        <AsiedBg className='section-image'>
                {children}
        </AsiedBg>
    );
};

export default AsideCart;