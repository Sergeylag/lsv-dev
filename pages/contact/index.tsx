import React from 'react';
import ContactNavigation from "../../components/contact/ContactNavigation";
import ContactMap from "../../components/contact/ContactMap";
import {ContactMain} from "../../styles/contact/contact";

const Contact = () => {
    return (
        <ContactMain>
            <ContactNavigation/>
            <div className='with-sidebar'>
                <article className='infrastructure__branch'>
                <h1>Контактная информация</h1>
                <h2>ГКБ им. С. И. Спасокукоцкого</h2>
                    <dl>
                        <div>
                            <dt>Адрес</dt>
                            <dd>127206, Россия, Москва, ул. Вучетича, д. 21</dd>
                        </div>
                    </dl>
                <ContactMap/>
                    <dl>
                        <div>
                            <dt>Справочный стол стационара</dt>
                            <dd>
                                <a href="tel:+74958703612">+7 (495) 870-36-12</a>
                                <p className="phone-detail">с 8:00 до 20:00 ежедневно</p>
                            </dd>
                        </div>
                        <div>
                            <dt>Консультативно-диагностический центр</dt>
                            <dd>
                                <a href="tel:+74958703612">+7 (495) 870-36-12</a>
                                <p className="phone-detail">
                                    многоканальный, с 8:00 до 20:00 понедельник–пятница
                                </p>
                            </dd>
                        </div>
                        <div>
                            <dt>Платные услуги</dt>
                            <dd>
                                <a href="tel:+74951977777">+7 (495) 197-77-77</a>
                                <p className="phone-detail">с 8:00 до 18:00 понедельник-пятница</p>
                            </dd>
                        </div>
                        <div>
                            <dt>Факс</dt>
                            <dd>+7 (499) 760-81-99</dd>
                        </div>
                        <div>
                            <dt>Email</dt>
                            <dd><a href="mailto:gkb50@zdrav.mos.ru">gkb50@zdrav.mos.ru</a></dd>
                        </div>
                        <div>
                            <dt>Проезд</dt>
                            <dd>
                                <ul>
                                    <li>м. Тимирязевская - авт. 319, 574, 466</li>
                                    <li>м. Петровско-Разумовская - авт. 466, 692</li>
                                    <li>
                                        МЦД Гражданская от остановки &#8243;Проезд Соломенной Сторожки&#8243; -
                                        авт. 319, 22, 466, 595, 692, 801,
                                    </li>
                                    <li>м. Петровский парк - авт. 22, 692, 466</li>
                                    <li>м. Лихоборы - авт. 22</li>
                                    <li>м. Верхние Лихоборы - авт. 466</li>
                                    <li>м. Коптево - авт. 22, 801</li>
                                    <li>ж/д Дегунино - авт. 466, 677, 170, 677к, 692</li>
                                    <li>м. Савеловская - авт. 692</li>
                                    <li>м. Водный стадион - авт. 595</li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </article>
                <aside className='sidebar'/>
            </div>
        </ContactMain>
    );
};

export default Contact;