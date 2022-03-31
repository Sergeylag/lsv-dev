import noFoto from '../../public/img/NoFoto.png'

export const headerTitle = 'Консультативно-диагностический центр'

export const headerLinks = [
    {link: '#', text: 'Сотрудники отделения'},
    {link: '#', text: 'Информация для пациентов'},
    {link: '#', text: 'Отзывы об отделении'},
]

export const headCard = {
    position: 'Заведующий отделением',
    src: noFoto.src,
    fio: 'Халилов Александр Рафикович',
    link: "/doctors/1"
}

export const headContact = {
    contacts:[
        {href:'tel:+74958703612', text:'+7 (495) 870-36-12'},
        {href:'mailto:ovd-gkb50@yandex.ru', text:'ovd-gkb50@yandex.ru'},
    ],
    btnHref:'/cdc/appointment',
}