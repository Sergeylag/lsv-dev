import React from 'react';
import Link from "next/link";
import Navigation from "../../components/Navigation";
import {ScheduleMain} from "../../styles/cdc/schedule";
import Avgust2021 from '../../public/img/cdc/schedule/Avgust2021.jpg';

const Schedule = () => {
    return (
        <ScheduleMain>
            <Navigation>
                <Link href='/'>
                    <a>Главная</a>
                </Link>
                <Link href='/'>
                    <a>КДЦ</a>
                </Link>
                <span>Расписание приёма и запись</span>
            </Navigation>
            <article className="cdc__schedule content-wrapper">
                <h1>Расписание приёма в КДЦ</h1>

                <figure className="fit-image">
                    <img alt="" src={Avgust2021.src}/>
                </figure>

                <section>
                    <h2>Запись на бесплатный приём</h2>

                    <p>
                        Данные на пациента для оформления медицинской карты амбулаторного больного
                        (ф. 025/у) (все строки обязательны к заполнению, в соответствии с требованиями
                        приказа МЗ РФ от 15.12.2014г. № 834)
                    </p>
                </section>
            </article>
        </ScheduleMain>
    );
};

export default Schedule;