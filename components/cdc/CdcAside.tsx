import React from 'react';
import Link from "next/link";

const CdcAside = () => {

    return (
        <div className="text">
            <div className="phone">+7 (495) 870-36-12</div>
            <div className="address">ул Вучетича, 21 корпус 1</div>
            <Link href="/cdc/appointment">
                <a className="button button-ghost altered">Записаться на приём</a>
            </Link>
        </div>
    );
};

export default CdcAside;