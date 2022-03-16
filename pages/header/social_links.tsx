import React from 'react'
import {ContactSocialLinks, Img, A} from '../../styles/header_styles/header-styles'
import vk from '../../public/icons/vkontakte.svg'
import facebook from '../../public/icons/facebook.svg'
import instagram from '../../public/icons/instagram.svg'

export default function SocialLinks(){
    return (
        <ContactSocialLinks>
            <li>
                <A rel="external noopener noreferrer" target="_blank" href="https://vk.com/gkb_50">
                    <Img alt="vkontakte" src={vk.src}/>
                </A>
            </li>
            <li>
                <A rel="external noopener noreferrer" target="_blank" href="https://www.facebook.com/gkb50/">
                    <Img alt="facebook" src={facebook.src}/>
                </A>
            </li>
            <li>
                <A rel="external noopener noreferrer" target="_blank" href="https://www.instagram.com/gkb.50/?hl=ru">
                    <Img alt="instagram" src={instagram.src}/>
                </A>
            </li>
        </ContactSocialLinks>
    );
};
