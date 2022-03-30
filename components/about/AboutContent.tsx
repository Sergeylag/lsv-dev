import React from 'react';
import {AboutContentWrapper} from "../../styles/about/about_content";
import AboutContentInfo from "./AboutContentInfo";
import AboutContentAreas from "./AboutContentAreas";

const AboutContent = () => {
    return (
        <AboutContentWrapper>
            <article className="content__show about__hospital">
                <h1>О больнице</h1>
                <p>
                    Городская клиническая больница имени С.И. Спасокукоцкого — одно
                    из крупнейших многопрофильных лечебных учреждений г. Москвы.
                </p>
                <p>
                    65 лет назад, 25 августа 1955 года больница №50 приняла первого пациента.
                    С этого момента открылась новая страница медицинской истории города
                    Москвы. Первый стационар, расположенный по адресу: Старое шоссе 19-21 мог
                    принять только 200 пациентов.
                </p>
                <p>
                    Шли годы, росло медицинское мастерство, увеличивался коечный фонд,
                    больница получила постоянный адрес: ул. Вучетича 21, стационар стал
                    клинической базой кафедр ведущих медицинских университетов страны.
                    В 2015 году больница получила имя Сергея Ивановича Спасокукоцкого —
                    академика, который внес значительный вклад в развитие здравоохранения.
                </p>
                <AboutContentInfo/>
                <AboutContentAreas/>
            </article>
        </AboutContentWrapper>
    );
};

export default AboutContent;