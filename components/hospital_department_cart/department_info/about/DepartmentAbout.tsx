import React from 'react';

const DepartmentAbout = ({list}) => {

    return (
        <>
            {
                list.map((e, id) => {
                    return (
                        <p key={id}>{e}</p>
                    )
                })
            }
        </>
    );
};

export default DepartmentAbout;