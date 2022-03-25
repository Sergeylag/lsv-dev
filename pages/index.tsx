import Heading from "../components/Heading";
import {Main} from "../styles/main";
import Slider from "../components/main/slider/Slider";
import Number from "../components/main/numbers/Number";
import Hospitalized from "../components/main/hospitalized/Hospitalized";

export default function Home() {
    return (
        <Main>
            <Slider/>
            <Number/>
            <Hospitalized/>
            <div>Content test Content</div>
            <Heading tag='' text='Test Test'/>
        </Main>
    )
}
