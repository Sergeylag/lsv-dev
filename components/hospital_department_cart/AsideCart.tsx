import React from 'react';
import styled from "styled-components";

const AsideCart = ({children,bg}) => {
    const AsiedBg = styled.aside`
    background-image: url("${bg}");
    `;
    console.log(bg)
    return (
        <AsiedBg>
                {children}
        </AsiedBg>
    );
};

export default AsideCart;