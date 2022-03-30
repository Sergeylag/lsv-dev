import React from 'react';
import {AboutInfo} from "../../styles/about/about_info";
import {AboutContentInfoList} from "./about_content_info_list";
import AboutContentInfoItem from "./AboutContentInfoItem";

const AboutContentInfo = () => {
    return (
        <AboutInfo>
            <h2>ГКБ им. С. И. Спасокукоцкого сегодня</h2>
            <ul>
                {AboutContentInfoList.map((e, id) => {
                    return (AboutContentInfoItem(e, id))
                })}
            </ul>
            <p>
                Врачи ГКБ им. Спасокукоцкого оказывают помощь пациентам с урологическими
                и гинекологическими заболеваниями, заболеваниями органов дыхания,
                инфарктом миокарда, хроническими формами ишемической болезни сердца
                на самом современном оборудовании экспертного класса. Также здесь
                представлен полный спектр хирургии органов брюшной полости.
            </p>
            <p>
                Для диагностики и лечения в стационаре используется высококлассное
                оборудование включая роботизированный комплекс DaVinci Xi HD, который
                был поставлен в больницу в декабре 2020 года, роботизированная установка
                «Focal One» (единственную в России), эндоскопические системы, КТ, МРТ,
                аппараты УЗИ и др.
            </p>
        </AboutInfo>
    );
};

export default AboutContentInfo;