import React from 'react';
import pogonin from '../../../public/img/main/chief/pogonin.jpg'

const ChiefPlug = () => {
    return (
        <div className="content-wrapper with-sidebar">
            <article className="content__show contact__chief">
                <h1>Написать Главному врачу</h1>

                <header>
                    <figure className="chief-figure">
                        <div className="image">
                            <img alt="" src={pogonin.src}/>
                        </div>
                        <figcaption>
                            <div className="name">
                                Погонин Алексей&nbsp;Владимирович
                            </div>
                            <div className="title">
                                Главный врач<br/>ГКБ им. С.И. Спасокукоцкого
                            </div>
                        </figcaption>
                    </figure>


                    <blockquote>
                        <p>
                            Клиентоориентированный подход к пациентам — наша приоритетная задача!
                        </p>
                    </blockquote>
                </header>

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
                            <dt><label>Почтовый адрес</label></dt>
                            <dd>
                                <input type="text" name="name" id="name" defaultValue="" className="input-text"
                                       placeholder="123456, Москва"/>
                            </dd>
                        </div>


                        <div className="wide">
                            <dt><label>Обращение</label></dt>
                            <dd>
                                <textarea className="input-text" placeholder="Ваше обращение" rows={5} name="body[]"
                                          id="body_"/>
                            </dd>
                        </div>
                    </dl>

                    <div>
                        <label className="file-label feedback-attachment toggleable wide js-file-watch">
                            <input type="file" className="visually-hidden"/><span>Прикрепить файл</span>
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
    );
};

export default ChiefPlug;