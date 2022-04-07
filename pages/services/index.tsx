import React from 'react';
import {ServicesMain} from "../../styles/services/services";
import ServicesNavigation from "../../components/services/ServicesNavigation";
import HospitalDepartmentCart from "../../components/hospital_department_cart/HospitalDepartmentCart";
import ServicesAside from "../../components/services/ServicesAside";
import cdcBg from '../../public/img/services/srv-bg.jpg'
import {
    headCard,
    about,
    headContact,
    headerLinks,
    headerTitle,
    services,
    textForServices,
    specializations,
    servicesForPatients,
    doctors,
    testimonials,
    media,
    expandingList
} from "../../components/services/services_info_list";


const Services = () => {
    return (
        <ServicesMain>
            <ServicesNavigation/>
            <HospitalDepartmentCart
                title={headerTitle}
                headerLinks={headerLinks}
                asideBg={cdcBg.src}
                headCard={headCard}
                headContact={headContact}
                about={about}
                services={services}
                textForServices={textForServices}
                specializations={specializations}
                servicesForPatients={servicesForPatients}
                doctors={doctors}
                testimonials={testimonials}
                media={media}
                expandingList={expandingList}
            >
                <ServicesAside/>
            </HospitalDepartmentCart>
        </ServicesMain>
    );
};

export default Services;