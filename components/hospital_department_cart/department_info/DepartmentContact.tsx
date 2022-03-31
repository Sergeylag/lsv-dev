import React from 'react';
import Link from "next/link";

const DepartmentContact = () => {
    return (
        <div className='department-contact'>
            <h3>Контакты отделения</h3>
            <ul>
                <li>
                    <Link href='#'>
                        <a href="tel:+74958703612">+7 (495) 870-36-12</a>
                    </Link>
                </li>
            </ul>

            <div className="actions">
                <a className="button button-secondary" href="/cdc/appointment">Записаться на приём</a>
                <p className="notice">
                    вам потребуется скан направления из&nbsp;поликлиники
                </p>

                <ul>
                    <li className="schedule">
                        <a href="/cdc/schedule">Актуальное расписание</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DepartmentContact;