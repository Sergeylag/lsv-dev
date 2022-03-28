import React from 'react';
import {MainDepartments} from "../../../styles/main/departments-style";

export default function Departments () {
    return (
        <MainDepartments>
            <h2>Отделения</h2>
            <div className='content-wrapper'>
                <ul className='departments_list'></ul>
            </div>

        </MainDepartments>
    );
};
