import React from 'react';
import PatientNavigation from "../../components/patients/PatientNavigation";
import {PatientsMain} from "../../styles/patients/patients";
import PatientsContent from "../../components/patients/PatientsContent";

const Patients = () => {
    return (
        <PatientsMain>
            <PatientNavigation/>
            <PatientsContent/>
        </PatientsMain>
    );
};

export default Patients;