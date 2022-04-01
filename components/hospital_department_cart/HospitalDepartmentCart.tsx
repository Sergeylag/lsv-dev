import React from 'react';
import {HospitalDepartmentCartWrapper} from "../../styles/hospital_department_cart";
import HeaderCart from "./HeaderCart";
import AsideCart from "./AsideCart";
import DepartmentInfoCart from "./department_info/DepartmentInfoCart";

const HospitalDepartmentCart = ({children,title,headerLinks,asideBg,headCard,headContact,about,services,
                                    textForServices,specializations,servicesForPatients}) => {
    return (
        <HospitalDepartmentCartWrapper>
            <HeaderCart title={title} headerLinks={headerLinks}/>
            <AsideCart bg={asideBg}>
                {children}
            </AsideCart>
            <DepartmentInfoCart headCard={headCard}
                                headContact={headContact}
                                about={about}
                                services={services}
                                textForServices={textForServices}
                                specializations={specializations}
                                servicesForPatients={servicesForPatients}
            />
        </HospitalDepartmentCartWrapper>
    );
};

export default HospitalDepartmentCart;