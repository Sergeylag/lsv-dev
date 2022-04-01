import React from 'react';
import styled from "styled-components";

const AsideCart = ({children,bg}) => {
    const AsiedBg = styled.aside`
    background-image: url("${bg}");
    `;

    return (
        <AsiedBg className='section-image'>
                {children}
        </AsiedBg>
    );
};

export default AsideCart;