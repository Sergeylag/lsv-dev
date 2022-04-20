import React from 'react';
import {MainNewTestiminial} from "../../styles/testimonials/new_testiminial";
import TestimonialsNavigation from "../../components/testimonials/new/NewTestimonialNavigation";

const New = () => {
    return (
        <MainNewTestiminial>
            <TestimonialsNavigation/>
            <div className="content-wrapper with-sidebar">
                <article className="content__show">
                    <h1>Оставить отзыв</h1>

                    <form className="feedback__testimonials-form">
                        <dl>
                            <div className="wide">
                                <dt><label>Представьтесь, пожалуйста</label></dt>
                                <dd>
                                    <input type="text" name="name" id="name" defaultValue={``} className="input-text"
                                           placeholder="ФИО"/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Телефон</label></dt>
                                <dd>
                                    <input type="tel" name="phone" id="phone" defaultValue={``} className="input-text"
                                           placeholder="+7(___)___-__-__"/>
                                </dd>
                            </div>

                            <div>
                                <dt><label>Email</label></dt>
                                <dd>
                                    <input type="email" name="email" id="email" defaultValue={``} className="input-text"
                                           placeholder="user@example.com"/>
                                </dd>
                            </div>

                            <div className="wide">
                                <dt><label>Почтовый адрес</label></dt>
                                <dd>
                                    <input type="text" name="name" id="name" defaultValue={``} className="input-text"
                                           placeholder="123456, Москва"/>
                                </dd>
                            </div>

                            <div className="wide">
                                <dt><label>Кому предназначен отзыв</label></dt>
                                <dd>
                                    <div className="search-and-select">
                                        <select>
                                            <option>Всей больнице</option>
                                            <option>Приёмное отделение</option>
                                        </select>
                                        <input type="search" placeholder="Найти врача или отделение"/>
                                    </div>
                                </dd>
                            </div>

                            <div className="wide">
                                <dt><label>Отзыв</label></dt>
                                <dd>
                                    <textarea className="input-text"
                                              placeholder="Расскажите о своих впечатлениях о прохождении лечения и приема в ГКБ Спасокукоцкого…"
                                              rows={5} name="body[]" id="body_"/>
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
        </MainNewTestiminial>
    );
};

export default New;