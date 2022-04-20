import React from 'react';

import Link from "next/link";
import Navigation from "../../Navigation";
import {PlugVisitorsContent} from "../../../styles/services/plug_pages/plugVisitors";
import punkt from '../../../public/img/patients/visitors/punkt.jpg'
import spisok from '../../../public/img/patients/visitors/SPISOK.jpg'

const PlugVisitors = () => {
    return (
        <div>
            <Navigation>
                <Link href={`/`}>
                    <a>Главная</a>
                </Link>
                <Link href={`/patients`}>
                    <a>Пациентам</a>
                </Link>
                <span>Информация для посетителей</span>
                <PlugVisitorsContent>
                        <article className="content__show">
                            <h1>
                                Информация для близких и родственников пациентов, госпитализированных
                                в «ГКБ им. С.И. Спасокукоцкого ДЗМ»
                            </h1>

                            <p>
                                Мы понимаем обеспокоенность за ваших родных, но в связи с принятыми мерами
                                по недопущению распространения коронавирусной инфекции введен запрет
                                на посещение пациентов - в соответствии с Постановлением главного
                                государственного санитарного врача по городу Москве №1 от 12 марта 2020
                                года.
                            </p>
                            <p>
                                Для получения информации создан круглосуточный центр информационной
                                поддержки для пациентов и их близких
                                — <a href="tel:+74958703612">+7-495-870-36-12</a> — операторы постараются ответить
                                на все ваши вопросы.
                            </p>
                            <p>
                                Вы можете принести и оставить необходимое в «пункте передач», который
                                организован для родственников —
                                <strong>ежедневно с 08.30 до 19:30</strong>
                            </p>
                            <p className="important-notice">
                                Передачи для пациентов из пункта приёма передач доставляются в отделения
                                три раза в день: в 12:00, 16:00, 20:00.
                            </p>

                            <figure className="fit-image">
                                <div className="image">
                                    <img alt="" src={punkt.src}/>
                                </div>
                                <figcaption>Время и место приёма передач</figcaption>
                            </figure>

                            <p>
                                Обязательно ознакомьтесь со списком разрешенных и запрещенных продуктов
                                и вещей для передачи:
                            </p>
                            <figure className="fit-image">
                                <div className="image">
                                    <img alt="" src={spisok.src}/>
                                </div>
                                <figcaption>Список разрешённых и запрещённых продуктов</figcaption>
                            </figure>

                            <p>Передачи должны быть подписаны:</p>
                            <ul>
                                <li>ФИО пациента,</li>
                                <li>№ отделения,</li>
                                <li>№ палаты.</li>
                            </ul>

                            <p>
                                Адрес «ГКБ им. С.И. Спасокукоцкого ДЗМ»:<br/>
                                127206, Россия, Москва, ул. Вучетича, д. 21
                            </p>

                            <p>Проезд:</p>
                            <ul>
                                <li>м. Тимирязевская - авт. 319, 574, 466, Т29</li>
                                <li>м. Дмитровская - авт. Т29</li>
                                <li>м. Петровско-Разумовская - авт. 466, 692, Т29</li>
                                <li>
                                    МЦД Гражданская от остановки &#8243;Проезд Соломенной Сторожки&#8243; - авт. 319,
                                    22, 466, 595, 692, 801, Т29
                                </li>
                                <li>м. Петровский парк - авт. 22, 692, 466, Т29</li>
                                <li>м. Лихоборы - авт. 22</li>
                                <li>м. Верхние Лихоборы - авт. 466</li>
                                <li>м. Коптево - авт. 22, 801</li>
                                <li>ж/д Дегунино - авт. 466, 677, 170, 677к, 692</li>
                                <li>м. Савеловская - авт. 692, Т29</li>
                                <li>м. Войковская - авт. 27</li>
                                <li>м. Водный стадион - авт. 595</li>
                                <li>м. Бутырская - авт. Т29</li>
                                <li>м. Фонвизинская - авт. Т29</li>
                                <li>м. Владыкино - авт. Т29</li>
                            </ul>

                            <footer>
                                <p>
                                    Благодарим за понимание,<br/>
                                    Администрация
                                </p>
                            </footer>
                        </article>

                        <aside className="sidebar">
                            <section className="posts__sidebar">
                                <ul className="posts__list cards-list">
                                </ul>

                            </section>

                        </aside>
                </PlugVisitorsContent>

            </Navigation>
        </div>
    );
};

export default PlugVisitors;