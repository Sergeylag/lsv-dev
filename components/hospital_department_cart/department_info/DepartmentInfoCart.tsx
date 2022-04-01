import React from 'react';
import DepartmentHeadCard from "./brief/DepartmentHeadCard";
import DepartmentContact from "./brief/DepartmentContact";
import DepartmentMedia from "./brief/DepartmentMedia";
import DepartmentAbout from "./about/DepartmentAbout";
import ServicesSpecializations from "./about/ServicesSpecializations";
import ListOfEmployees from "./ListOfEmployees";
import ServicesForPatients from "./about/ServicesForPatients";

const DepartmentInfoCart = ({headCard,headContact,about,services,textForServices,specializations,
                                servicesForPatients}) => {
    return (
        <section className='department-info'>
            <section className='department-brief'>
                <DepartmentHeadCard headCard={headCard}/>
                <DepartmentContact headContact={headContact}/>
                <DepartmentMedia/>
            </section>
            <section className='department-about'>
                {about.length != 0 ? <DepartmentAbout list={about}/> : null}
                {services.active ? <ServicesSpecializations servicesList={services}/> : null}
                {textForServices.length != 0 ? <DepartmentAbout list={textForServices}/> : null}
                {specializations.active ? <ServicesSpecializations servicesList={specializations}/> : null}
                {servicesForPatients.active ? <ServicesForPatients services={servicesForPatients}/> : null}
            </section>
            <ListOfEmployees/>
        </section>
    );
};

export default DepartmentInfoCart;