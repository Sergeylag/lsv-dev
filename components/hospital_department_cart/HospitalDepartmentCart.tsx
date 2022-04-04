import React from 'react';
import {HospitalDepartmentCartWrapper} from "../../styles/hospital_department_cart";
import HeaderCart from "./HeaderCart";
import AsideCart from "./AsideCart";
import DepartmentInfoCart from "./department_info/DepartmentInfoCart";
import DepartmentDoctors from "./department_info/DepartmentDoctors";

const HospitalDepartmentCart = ({children,title,headerLinks,asideBg,headCard,headContact,about,services,
                                    textForServices,specializations,servicesForPatients,doctors}) => {
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
            {doctors.length ? <DepartmentDoctors doctors={doctors}/> : null}
        </HospitalDepartmentCartWrapper>
    );
};

export default HospitalDepartmentCart;