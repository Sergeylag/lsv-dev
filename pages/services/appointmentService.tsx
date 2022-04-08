import React from 'react';
import Link from "next/link";
import Navigation from "../../components/Navigation";
import {AppointmentServicesMain} from "../../styles/services/appointmentService";

const AppointmentService = () => {
    return (
        <AppointmentServicesMain>
            <Navigation>
                <Link href='/'>
                    <a>Главная</a>
                </Link>
                <Link href='/services'>
                    <a>Платные услуги</a>
                </Link>
                <span>Предварительная запись</span>
                <div className="content-wrapper with-sidebar">
                    <article className="content__show">
                        <h1>Предварительная запись на платные услуги</h1>

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
                                    <dt><label>Комментарий</label></dt>
                                    <dd>
                                        <textarea className="input-text" placeholder="Комментарий" rows={5}
                                                  name="body[]" id="body_"/>
                                    </dd>
                                </div>
                            </dl>

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
                                <button name="button" type="button" className="button button-secondary">Отправить
                                </button>
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
            </Navigation>
        </AppointmentServicesMain>
    );
};

export default AppointmentService;