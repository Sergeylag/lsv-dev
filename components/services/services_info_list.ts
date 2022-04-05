import noFoto from '../../public/img/NoFoto.png'
import zav from '../../public/img/services/kda-zav.jpg'

import notes from '../../public/img/services/notes.svg'
import shield from '../../public/img/services/shield.svg'
import wallet from '../../public/img/services/wallet.svg'
import phone from '../../public/img/services/phone.svg'
import invoice from '../../public/img/services/invoice.svg'
import prodoctorov from "../../public/img/cdc/review/prodoctorov.svg";

export const headerTitle = 'Отделение платных медицинских услуг'

export const headerLinks = [
    {link: '#', text: 'Сотрудники отделения'},
    {link: '#', text: 'Информация для пациентов'},
    {link: '#', text: 'Отзывы об отделении'},
]

export const headCard = {
    position: 'Заведующий отделением',
    src: zav.src,
    fio: 'Кружко Денис Андреевич',
    link: "/doctors/1"
}

export const headContact = {
    contacts: [
        {href: 'tel:+74951977777', text: '+7 (495) 197-77-77'},
        {href: 'mailto:ovd-gkb50@yandex.ru', text: 'ovd-gkb50@yandex.ru'},
    ],
    btnHref: '/services/appointment',
    action: [
        {tag: 'a', href: '#', text: 'Заказать обратный звонок', src:phone.src},
        {tag: 'a', href: '#', text: 'Прайс-лист', src:invoice.src},
        {tag: 'p', href: '#', text: 'В отделении принимается наличный и безналичный расчет.', src:'#'},
    ]
}

export const about = [// блок не отрендерится если массив будет пуст
    'В отделении платных медицинских услуг нашей больницы Вы можете получить полный спектр клинико-диагностической, ' +
    'амбулаторной, стационарной медицинской помощи.'
]

export const services = {
    active: true, headTag: 'h3', bodyTag: 'li', headText: 'Мы предлагаем:', list: [
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
    active: true, headTag: 'h2', bodyTag: 'a', headText: 'Направления работы', list: [
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
    active:true, headText:'Информация для пациентов', list:[
        {src:notes.src, link:'/patients/research', textLink:'Порядок оказания платных услуг'},
        {src:shield.src, link:'/patients/health-capital', textLink:'Добровольное медицинское страхование'},
        {src:wallet.src, link:'#', textLink:'Налоговый вычет'},
    ]
}

export const doctors = [  // блок не отрендерится если массив будет пуст
    {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'д.м.н., профессор', experience:'10 лет'},
    {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'', experience:'10 лет'},
    {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'д.м.н., профессор', experience:'10 лет'},
    {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'', experience:'10 лет'},
    {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'д.м.н., профессор', experience:'10 лет'}
]

export const testimonials = [
    {src:prodoctorov.src, title:'Мария Сергеевна', text:'Я глубоко благодарен великолепным хирургам - академику ' +
            'Дмитрию Юрьевичу Пушкарю, проф. Александру Викторовичу Говорову, лечащему врачу Александру... Олеговичу…',
        link:'#'},
    {src:prodoctorov.src, title:'Anonym2345', text:'В больницу попала по направлению на консультацию, а затем на' +
            ' операцию. Врач Мишустин Александр Михайлович всё подробно объяснил, помог настроиться морально. Очень…',
        link:'#'},
    {src:prodoctorov.src, title:'Мария Сергеевна', text:'Я глубоко благодарен великолепным хирургам - академику ' +
            'Дмитрию Юрьевичу Пушкарю, проф. Александру Викторовичу Говорову, лечащему врачу Александру... Олеговичу…',
        link:'#'},
    {src:prodoctorov.src, title:'Сергей Викторович', text:'В больницу попала по направлению на консультацию, а затем на' +
            ' операцию. Врач Мишустин Александр Михайлович всё подробно объяснил, помог настроиться морально. Очень…',
        link:'#'},
]

export const media = []