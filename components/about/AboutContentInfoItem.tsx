import React from 'react';

const AboutContentInfoItem = ({src,number,text,ps},id) => {
    return (
        <li key={id}>
            <figure>
                <div className="image">
                    <img alt="" src={src}/>
                </div>
                <figcaption>
                    <div className="number">{number}</div>
                    <div>{text}</div>
                </figcaption>
            </figure>
            <p>{ps}</p>

        </li>
    );
};

export default AboutContentInfoItem;