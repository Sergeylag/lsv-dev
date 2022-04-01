import React from 'react';
import {HospitalDepartmentCartWrapper} from "../../styles/hospital_department_cart";
import HeaderCart from "./HeaderCart";
import AsideCart from "./AsideCart";
import DepartmentInfoCart from "./department_info/DepartmentInfoCart";

const HospitalDepartmentCart = ({children,title,headerLinks,asideBg,headCard,headContact}) => {
    console.log(headCard)
    return (
        <HospitalDepartmentCartWrapper>
            <HeaderCart title={title} headerLinks={headerLinks}/>
            <AsideCart bg={asideBg}>
                {children}
            </AsideCart>
            <DepartmentInfoCart headCard={headCard} headContact={headContact}/>
        </HospitalDepartmentCartWrapper>
    );
};

export default HospitalDepartmentCart;