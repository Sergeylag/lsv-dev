import {MainHospitalized} from "../../../styles/main/hospitalized_style";
import hospitalized from '../../../public/img/main/hospitalized/hospitalized.png'
import Link from "next/link";


export default function Hospitalized () {
    return (
        <MainHospitalized>
            <div>
                <figure className='image'>
                    <img alt='' src={hospitalized.src} width={hospitalized.width} height={hospitalized.height}/>
                </figure>
                <p>{'Если ваш близкий '}
                <Link href={`/patients/visitors`}>
                    <a>госпитализирован к нам в больницу</a>
                </Link>
                </p>
            </div>
        </MainHospitalized>
    );
};
