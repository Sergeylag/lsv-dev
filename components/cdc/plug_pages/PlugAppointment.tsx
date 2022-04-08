import React from 'react';
import {PlugAppointmentMain} from "../../../styles/cdc/plug_pages/plugAppointmentMain";
import Link from "next/link";
import Navigation from "../../Navigation";

const PlugAppointment = () => {
    return (
        <PlugAppointmentMain>
            <Navigation>
                <Link href='/'>
                    <a>Главная</a>
                </Link>
                <Link href='/cdc'>
                    <a>КДЦ</a>
                </Link>
                <span>Предварительная запись</span>
            </Navigation>
            <div className="content-wrapper with-sidebar">
                <article className="content__show">
                    <h1>Предварительная запись на бесплатный приём</h1>

                    <form className="feedback__testimonials-form">
                        <dl>
                            <div className="wide">
                                <dt><label>Представьтесь, пожалуйста</label></dt>
                                <dd>
                                    <input type="text" name="name" id="name" defaultValue="" className="input-text"
                                           placeholder="ФИО"/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Телефон</label></dt>
                                <dd>
                                    <input type="tel" name="phone" id="phone" defaultValue="" className="input-text"
                                           placeholder="+7(___)___-__-__"/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Email</label></dt>
                                <dd>
                                    <input type="email" name="email" id="email" defaultValue="" className="input-text"
                                           placeholder="user@example.com"/>
                                </dd>
                            </div>

                            <div className="wide">
                                <dt><label>Место регистрации (по паспорту)</label></dt>
                                <dd>
                                    <input type="text" name="reg_addr" id="reg_addr" defaultValue="" className="input-text"
                                           placeholder="123456, Москва, …"/>
                                </dd>
                            </div>

                            <div className="wide">
                                <dt><label>Место проживания (фактическое)</label></dt>
                                <dd>
                                    <input type="text" name="fact_addr" id="fact_addr" defaultValue="" className="input-text"
                                           placeholder="123456, Москва, …"/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Номер полиса ОМС</label></dt>
                                <dd>
                                    <input type="text" name="policy_number" id="policy_number" defaultValue=""
                                           className="input-text" placeholder=""/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Страховая компания ОМС</label></dt>
                                <dd>
                                    <input type="text" name="policy_company" id="policy_company" defaultValue=""
                                           className="input-text" placeholder=""/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Серия и номер паспорта</label></dt>
                                <dd>
                                    <input type="text" name="passport_number" id="passport_number" defaultValue=""
                                           className="input-text" placeholder="00 00 №000000"/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Дата выдачи паспорта</label></dt>
                                <dd>
                                    <input type="date" name="passport_date" id="passport_date" defaultValue=""
                                           className="input-text" placeholder="00 00 №000000"/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Дата рождения</label></dt>
                                <dd>
                                    <input type="date" name="birthday" id="birthday" defaultValue="" className="input-text"/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Место рождения</label></dt>
                                <dd>
                                    <input type="text" name="birth_place" id="birth_place" defaultValue=""
                                           className="input-text" placeholder="Населённый пункт"/>
                                </dd>
                            </div>

                            <div className="wide">
                                <dt><label>Название направившей организации</label></dt>
                                <dd>
                                    <input type="text" name="sender_name" id="sender_name" defaultValue=""
                                           className="input-text" placeholder=""/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Номер направления</label></dt>
                                <dd>
                                    <input type="text" name="doc_num" id="doc_num" defaultValue="" className="input-text"
                                           placeholder=""/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Дата направления</label></dt>
                                <dd>
                                    <input type="date" name="doc_date" id="doc_date" defaultValue="" className="input-text"/>
                                </dd>
                            </div>

                            <div className="wide">
                                <dt><label>Желаемая дата и время приема врача. (Указывается предварительно.
                                    Окончательные дата и время будут сообщены администратором по телефону.)</label></dt>
                                <dd>
                                    <input type="text" name="desired_time" id="desired_time" defaultValue=""
                                           className="input-text" placeholder=""/>
                                </dd>
                            </div>
                        </dl>

                        <div>
                            <label className="file-label feedback-attachment toggleable wide js-file-watch">
                                <input type="file" className="visually-hidden"/><span>Cкан или фото направления, выданного в поликлинике</span>
                            </label>
                        </div>

                        <div className="consent">
                            <label className="flag-label">
                                <input type="checkbox" defaultChecked={true}/>
      <span>
        Принимаю условия <a href="#">пользовательского соглашения</a>
        и даю согласие на <a href="#">обработку моих персональных данных</a>
      </span>
                            </label>
                        </div>

                        <div className="buttons">
                            <button name="button" type="button" className="button button-secondary">Отправить</button>
                        </div>
                    </form>

                </article>

                <aside className="sidebar">
                    <section className="posts__sidebar">
                        <ul className="posts__list cards-list">
                        </ul>

                    </section>

                </aside>
            </div>
        </PlugAppointmentMain>
    );
};

export default PlugAppointment;