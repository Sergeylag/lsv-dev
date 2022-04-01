import React from 'react';
import DepartmentHeadCard from "./brief/DepartmentHeadCard";
import DepartmentContact from "./brief/DepartmentContact";
import DepartmentMedia from "./brief/DepartmentMedia";

const DepartmentInfoCart = ({headCard,headContact}) => {
    console.log(headContact)
    return (
        <section className='department-info'>
            <section className='department-brief'>
                <DepartmentHeadCard headCard={headCard}/>
                <DepartmentContact headContact={headContact}/>
                <DepartmentMedia/>
            </section>
            <section className='department-about'>

            </section>
        </section>
    );
};

export default DepartmentInfoCart;