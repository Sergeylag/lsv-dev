import React from 'react';

const AsideCart = ({children,bg}) => {
    const style = {
        background: `url("${bg}") no-repeat center/cover`
    }

    return (
        <aside style={style} className='section-image'>
                {children}
        </aside>
    );
};

export default AsideCart;