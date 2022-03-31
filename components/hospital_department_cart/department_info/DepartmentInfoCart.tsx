import React from 'react';
import DepartmentHeadCard from "./DepartmentHeadCard";

const DepartmentInfoCart = ({headCard}) => {
    console.log(headCard)
    return (
        <section className='department-info'>
            <section className='department-brief'>
                <DepartmentHeadCard headCard={headCard}/>
            </section>
            <section className='department-about'>

            </section>
        </section>
    );
};

export default DepartmentInfoCart;