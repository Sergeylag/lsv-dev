import React from 'react';
import DepartmentHeadCard from "./brief/DepartmentHeadCard";
import DepartmentContact from "./brief/DepartmentContact";
import DepartmentMedia from "./brief/DepartmentMedia";
import DepartmentAbout from "./about/DepartmentAbout";
import ServicesSpecializations from "./about/ServicesSpecializations";
import ServicesForPatients from "./about/ServicesForPatients";
import ExpandingList from "./about/ExpandingList";

const DepartmentInfoCart = ({headCard,headContact,about,services,textForServices,specializations,
                                servicesForPatients,media,expandingList}) => {
    return (
        <section className='department-info'>
            <section className='department-brief'>
                <DepartmentHeadCard headCard={headCard}/>
                <DepartmentContact headContact={headContact}/>
                {media.length ? <DepartmentMedia media={media}/> : null}

            </section>
            <section className='department-about'>
                {about.length != 0 ? <DepartmentAbout list={about}/> : null}
                {services.active ? <ServicesSpecializations servicesList={services}/> : null}
                {textForServices.length != 0 ? <DepartmentAbout list={textForServices}/> : null}
                {specializations.active ? <ServicesSpecializations servicesList={specializations}/> : null}
                {servicesForPatients.active ? <ServicesForPatients services={servicesForPatients}/> : null}
                {expandingList.active ? <ExpandingList list={expandingList.list}/> : null}
            </section>
        </section>
    );
};

export default DepartmentInfoCart;