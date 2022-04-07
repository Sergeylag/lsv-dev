import React from 'react';
import {CdcMain} from "../../styles/cdc/cdc";
import PressNavigation from "../../components/press/PressNavigation";
import HospitalDepartmentCart from "../../components/hospital_department_cart/HospitalDepartmentCart";
import pressBg from '../../public/img/press/press_bg.svg'
import PressAside from "../../components/press/PressAside";
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
} from "../../components/press/press_info_list";

const Press = () => {
    return (
        <CdcMain>
            <PressNavigation/>
            <HospitalDepartmentCart
                title={headerTitle}
                headerLinks={headerLinks}
                asideBg={pressBg.src}
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
                <PressAside/>
            </HospitalDepartmentCart>
        </CdcMain>
    );
};

export default Press;