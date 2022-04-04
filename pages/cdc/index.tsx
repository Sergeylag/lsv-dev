import React from 'react';
import Plug from "../../components/Plug";
import {CdcMain} from "../../styles/cdc/cdc";
import CdcNavigation from "../../components/cdc/CdcNavigation";
import HospitalDepartmentCart from "../../components/hospital_department_cart/HospitalDepartmentCart";
import cdcBg from '../../public/img/cdc/cdc_bg.svg'
import CdcAside from "../../components/cdc/CdcAside";
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
    doctors
} from "../../components/cdc/cdc_info_list";

const Cdc = () => {
    return (
        <CdcMain>
            <CdcNavigation/>
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
            >
                <CdcAside/>
            </HospitalDepartmentCart>
            <Plug/>
        </CdcMain>
    );
};

export default Cdc;