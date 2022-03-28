import React from 'react';

const FormChief = () => {
    return (
        <form>
            <div className="fields">
                <input type="checkbox" id="frontpage-form-toggle" className="visually-hidden toggle-box"/>
                <label className="floating-label feedback-name">
                    <input placeholder="Представьтесь, пожалуйста" className="input-text"/>
                    <span>Представьтесь, пожалуйста</span>
                </label>
                <label className="floating-label feedback-phone">
                    <input placeholder="Телефон" className="input-text" type="tel"/>
                    <span>Телефон</span>
                </label>
                <label className="floating-label feedback-email">
                    <input placeholder="Email" className="input-text" type="email"/>
                    <span>Email</span>
                </label>
                <label htmlFor="frontpage-form-toggle" className="toggle-label">
                    <span className="label">
                        {/*<wtf>Расширенная </wtf>форма*/}
                        Расширенная форма
                    </span>
                    <span className="icon"></span>
                </label>
                <label className="floating-label feedback-address toggleable wide">
                    <input placeholder="Домашний адрес" className="input-text"/>
                    <span>Домашний адрес</span>
                </label>
                <label className="file-label feedback-attachment toggleable wide js-file-watch">
                    <input type="file" className="visually-hidden"/><span>Прикрепить файл</span>
                </label>
                <label className="floating-label feedback-comment">
                    <textarea placeholder="Ваш комментарий" className="input-text" rows={6}></textarea>
                    <span>Ваш комментарий</span>
                </label>
            </div>
            <div className="consent">
                <label className="flag-label consent">
                    <input type="checkbox" name="consent" defaultChecked={true}/>
                    <span>Принимаю условия пользовательского соглашения на обработку персональных данных</span>
                </label>
            </div>
            <div className="actions">
                <button name="button" type="button" className="button button-secondary">Отправить</button>
            </div>
        </form>
    );
};

export default FormChief;