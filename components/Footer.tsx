// import styled from "styled-components";
import {Basement} from '../styles/footer_styles/footer-styles';
import Link from "next/link";
import logo from '../public/img/logo-mini.svg'
import SocialLinks from "./header/social_links";
import Image from 'next/image'



// const Basement = styled.p`
// width: 100%;
// border: 1px solid red;
// `

const Footer = () => {
    return (
        <Basement>
            <div className='content-wrapper'>
                <figure className='logo'>
                    <Link href='/'>
                        <a>
                            <Image alt='Городская клиническая больница им. С.И. Спасокукоцкого'
                                 src={logo.src} width={logo.height} height={logo.width}/>
                        </a>
                    </Link>
                    <figcaption className='copyright'>
                        © 2021 ГБУЗ города Москвы
                        <br/>
                        «Городская клиническая больница имени С.И. Спасокукоцкого Департамента здравоохранения города Москвы»
                    </figcaption>
                </figure>
                <div>
                    <p className='address'>127206, Москва, ул. Вучетича, 21</p>
                    <p className='chief'>
                        Главный врач ГКБ им. С. И. Спасокукоцкого —
                        <em>Погонин Алексей Владимирочич</em>
                    </p>
                </div>
                <div className='search'>
                    <p className='phone'>
                        <Link href='tel:+74958703612'>
                            <a>+7 (495) 870-36-12</a>
                        </Link>
                    </p>
                    <p>
                        <Link href='#'>
                            <a>Карта сайта</a>
                        </Link>
                    </p>
                </div>
                <div className='social'>
                    <h4>Социальные сети</h4>
                    <SocialLinks/>
                </div>
            </div>
            <div className='legal'>
                <div className='content-wrapper'>
                    <Link href='/privacy'>
                        <a>Политика конфиденциальности</a>
                    </Link>
                </div>
            </div>
        </Basement>
    );
};

export default Footer;