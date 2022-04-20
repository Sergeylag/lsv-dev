import Link from 'next/link'
import logo from '../../public/img/logo.svg'
import {LogoGkb} from "../../styles/header_styles/header-styles";

export default function ImgGKB() {
    return (
        <LogoGkb>
            <Link href={`/`}>
                <a>
                    <img alt='Городская клиническая больница им. С.И. Спасокукоцкого' src={logo.src}/>
                </a>
            </Link>
        </LogoGkb>
    )
}
