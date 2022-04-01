import React from 'react';
import DepartmentContactLink from "./DepartmentContactLink";
import DepartmentContactAction from "./DepartmentContactAction";

const DepartmentContact = ({headContact}) => {
    const {contacts, btnHref, action} = headContact
    return (
        <div className='department-contact'>
            <h3>Контакты отделения</h3>
            <ul>
                {contacts.map((e, id) => {
                    return (DepartmentContactLink(e, id))
                })}
            </ul>

            <div className="actions">
                <a className="button button-secondary" href={btnHref}>Записаться на приём</a>
                {/*<p className="notice">*/}
                {/*    вам потребуется скан направления из поликлиники*/}
                {/*</p>*/}
                <ul>
                    {action.map((e, id) => {
                        return (DepartmentContactAction(e, id))
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DepartmentContact;