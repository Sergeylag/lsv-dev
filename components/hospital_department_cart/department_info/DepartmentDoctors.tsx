import React from 'react';

const DepartmentDoctors = ({doctors}) => {
    console.log(doctors)
    return (
        <section className='department-doctors'>
            <h2>Сотрудники отделения</h2>
            <ul>
                {doctors.map((e, id) => {
                    return (
                        <li key={id}>
                            <div className="doctor-preview">
                                <figure className="doctor-image">
                                    <div className="image">
                                        <img alt="" src={e.src}/>
                                    </div>
                                    <figcaption>
                                        <div className="name"><a href={e.href}>{e.fio}</a></div>
                                        <div className="position">{e.position}</div>
                                        <div className="qualification">{e.qualification}</div>
                                        <div className="experience">
                                            <span>Стаж работа: </span>
                                            {e.experience}
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

export default DepartmentDoctors;