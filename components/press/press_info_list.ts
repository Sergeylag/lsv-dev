import noFoto from '../../public/img/NoFoto.png'
import microphone from '../../public/img/press/microphone.svg'

// import zav from '../../public/img/services/kda-zav.jpg'

import notes from '../../public/img/services/notes.svg'
import shield from '../../public/img/services/shield.svg'
import wallet from '../../public/img/services/wallet.svg'
import phone from '../../public/img/services/phone.svg'
import invoice from '../../public/img/services/invoice.svg'
import prodoctorov from "../../public/img/cdc/review/prodoctorov.svg";
import s01 from "../../public/img/cdc/media/s01.jpg";
import s02 from "../../public/img/cdc/media/s02.jpg";
import s03 from "../../public/img/cdc/media/s03.jpg";
import s04 from "../../public/img/cdc/media/s04.jpg";
import s05 from "../../public/img/cdc/media/s05.jpg";
import s06 from "../../public/img/cdc/media/s06.jpg";

export const headerTitle = 'Отделение платных медицинских услуг'

export const headerLinks = [
    {link: '#', text: 'Подготовить материал СМИ'},
    {link: '#', text: 'Съёмка на территории больницы'},
    {link: '#', text: 'Новости'},
]

export const headCard = {
    position: 'Руководитель пресс-службы',
    src: noFoto.src,
    fio: 'Понявина Елизавета Евгеньевна',
    link: "/doctors/1"
}

export const headContact = {
    contacts: [
        {href: 'tel:+74997607922', text: '+7 (499) 760-79-22'},
        {href: 'mailto:ponyavinaee@it.mos.ru', text: 'ponyavinaee@it.mos.ru'},
    ],
    btnHref: '',
    action: [
        {tag: 'a', href: '#', text: 'СМИ о нас', src:microphone.src}
    ]
}

export const about = [// блок не отрендерится если массив будет пуст
    'Приглашаем к сотрудничеству средства массовой информации, заинтересованные в публикации материалов о ' +
    'деятельности ГКБ им. С.И. Спасокукоцкого, специалистах и применяемых методиках лечения.',
    'Городская клиническая больница имени С.И. Спасокукоцкого — одно из крупнейших многопрофильных лечебных ' +
    'учреждений г. Москвы.'
]

export const services = {
    active: false, headTag: 'h3', bodyTag: 'li', headText: 'Мы предлагаем:', list: [
        'консультации врачей-специалистов высшей квалификационной категории, при необходимости - консилиум ' +
        'специалистов с привлечением сотрудников кафедр московских медицинских ВУЗов;',
        'функциональные, лучевые и лабораторные диагностические исследования по международным протоколам ' +
        'на оборудовании экспертного класса;',
        'амбулаторное и стационарное лечение в полном объеме стандартов медицинской помощи, утвержденных МЗ РФ и,' +
        ' при необходимости, в объеме, превышающем стандарты;',
        'стационарное лечение в комфортных условиях.'
    ]
}

export const textForServices = [// блок не отрендерится если массив будет пуст
]

export const specializations = {
    active: false, headTag: 'h2', bodyTag: 'a', headText: 'Направления работы', list: [
        {link: '#', text: 'Диагностика'},
        {link: '#', text: 'Урология'},
        {link: '#', text: 'Урогинекология'},
        {link: '#', text: 'Гинекология'},
        {link: '#', text: 'Эстетическая гинекология'},
        {link: '#', text: 'Оториноларингология'},
        {link: '#', text: 'Стационар'},
        {link: '#', text: 'Родильный дом'},
        {link: '#', text: 'Анализы'},
        {link: '#', text: 'Хирургия'},
    ]
}

export const servicesForPatients = {
    active:false, headText:'Информация для пациентов', list:[
        {src:notes.src, link:'/patients/research', textLink:'Порядок оказания платных услуг'},
        {src:shield.src, link:'/patients/health-capital', textLink:'Добровольное медицинское страхование'},
        {src:wallet.src, link:'#', textLink:'Налоговый вычет'},
    ]
}

export const doctors = [  // блок не отрендерится если массив будет пуст
    // {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'д.м.н., профессор', experience:'10 лет'},
    // {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'', experience:'10 лет'},
    // {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'д.м.н., профессор', experience:'10 лет'},
    // {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'', experience:'10 лет'},
    // {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'д.м.н., профессор', experience:'10 лет'}
]

export const testimonials = [
    // {src:prodoctorov.src, title:'Мария Сергеевна', text:'Я глубоко благодарен великолепным хирургам - академику ' +
    //         'Дмитрию Юрьевичу Пушкарю, проф. Александру Викторовичу Говорову, лечащему врачу Александру... Олеговичу…',
    //     link:'#'},
    // {src:prodoctorov.src, title:'Anonym2345', text:'В больницу попала по направлению на консультацию, а затем на' +
    //         ' операцию. Врач Мишустин Александр Михайлович всё подробно объяснил, помог настроиться морально. Очень…',
    //     link:'#'},
    // {src:prodoctorov.src, title:'Мария Сергеевна', text:'Я глубоко благодарен великолепным хирургам - академику ' +
    //         'Дмитрию Юрьевичу Пушкарю, проф. Александру Викторовичу Говорову, лечащему врачу Александру... Олеговичу…',
    //     link:'#'},
    // {src:prodoctorov.src, title:'Сергей Викторович', text:'В больницу попала по направлению на консультацию, а затем на' +
    //         ' операцию. Врач Мишустин Александр Михайлович всё подробно объяснил, помог настроиться морально. Очень…',
    //     link:'#'},
]

export const media = [
    {item:'iframe', src:'//www.youtube.com/embed/2u_IJOtE6nQ' },
    {item:'img', src:s01.src },
    {item:'img', src:s02.src },
    {item:'img', src:s03.src },
    {item:'img', src:s04.src },
    {item:'img', src:s05.src },
    {item:'img', src:s06.src },
]