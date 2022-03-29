import {Main} from "../styles/main";
import Slider from "../components/main/slider/Slider";
import Number from "../components/main/numbers/Number";
import Hospitalized from "../components/main/hospitalized/Hospitalized";
import Departments from "../components/main/departments/Departments";
import News from "../components/main/news/News";
import Chief from "../components/main/chief/Chief";
import Testimonials from "../components/main/testimonials/Testimonials";
import Feedback from "../components/main/feedback/Feedback";
import Promo from "../components/main/promo/Promo";
import Partners from "../components/main/partners/Partners";

export default function Home() {
    return (
        <Main>
            <Slider/>
            <Number/>
            <Hospitalized/>
            <Departments/>
            <News/>
            <Chief/>
            <Testimonials/>
            <Feedback/>
            <Promo/>
            <Partners/>
        </Main>
    )
}
