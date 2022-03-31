import React from 'react';
import {PatientsContentWrapper} from "../../styles/patients/patients_content";
import banner from '../../public/img/patients/banner_vac-01.jpg'
import graft from '../../public/img/patients/A4-Privivka_1.jpg'
import question from '../../public/img/patients/A4-Vakz-vopros-otvet.jpg'

const PatientsContent = () => {
    return (
        <PatientsContentWrapper>
                <h1>Пациентам</h1>

                <figure>
                    <img src={banner.src} alt="Проводится вакцинация"/>
                </figure>

                <p>
                    В <em>КДЦ в Корпусе №1</em>, работает <em>кабинет вакцинации</em> против
                    коронавирусной инфекции.
                </p>
                <p>Пройти вакцинацию может каждый житель Российской Федерации.</p>
                <p>
                    Перед процедурой вас осмотрит врач, соберет анамнез и даст разрешение
                    на проведение прививки.
                </p>
                <p>При себе нужно иметь: паспорт, СНИЛС и полис ОМС.</p>
                <p>Работа кабинета: понедельник–пятница с 8:00 до 15:30.</p>
                <p>Вакцинация проходит в порядке живой очереди.</p>
                <p>
                    Вакцинация проходит препаратом <em>«Спутник-V»</em> в два этапа c разницей
                    в 21 день.
                </p>
                <p>
                    Сертификат вы получаете после первой вакцинации, а QR-код будет выдан после
                    получения второй дозы препарата.
                </p>

                <figure>
                    <div className="image">
                        <img src={graft.src}
                             alt="Как подготовиться к прививке"/>
                    </div>
                    <div className="image">
                        <img src={question.src} alt="Вопросы и ответы"/>
                    </div>
                </figure>
        </PatientsContentWrapper>
    );
};

export default PatientsContent;