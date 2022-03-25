import s01 from '../../../public/img/main_slider/s01.svg'
import s02 from '../../../public/img/main_slider/s02.svg'
import s03 from '../../../public/img/main_slider/s03.svg'
import s04 from '../../../public/img/main_slider/s04.svg'
import s05 from '../../../public/img/main_slider/s05.svg'
import s06 from '../../../public/img/main_slider/s06.svg'
import s07 from '../../../public/img/main_slider/s07.svg'

export const SliderList = [
    {id:0, src:s01.src, height: s01.height, width: s01.width, title:'Вакцинация против COVID-19',
        lead:'По будням 08:00 до 15:00 в КДЦ', href:'/cdc', textLink:'Записаться'},
    {id:1, src:s02.src, height: s02.height, width: s02.width, title:'Как записаться на приём',
        lead:'Где-то в интерфейсе есть кнопка "записаться".', href:'#', textLink:''},
    {id:2, src:s03.src, height: s03.height, width: s03.width, title:'Информация для иногородних',
        lead:'Проект «Москва — столица здоровья', href:'/patients/non-residents', textLink:'Узнать больше'},
    {id:3, src:s04.src, height: s04.height, width: s04.width, title:'Отзывы о нашей больнице',
        lead:'#', href:'/patients/testimonials', textLink:'Посмотреть и добавить свой'},
    {id:4, src:s05.src, height: s05.height, width: s05.width, title:'Консультативно-диагностический центр',
        lead:'+7 (495) 870-36-12, Вучетича, 21, корпус 1', href:'/cdc', textLink:'Подробнее'},
    {id:5, src:s06.src, height: s06.height, width: s06.width, title:'Родильный дом',
        lead:'+7 (499) 154-15-73, Коптевский б-р, д.5', href:'/contact/maternity-hospital', textLink:'Подробнее'},
    {id:6, src:s07.src, height: s07.height, width: s07.width, title:'Поручения Департамента Здравоохранения Москвы и Министерства Здравоохранения',
        lead:'#', href:'/', textLink:'Ознакомиться'},
]