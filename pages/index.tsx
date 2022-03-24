import Heading from "../components/Heading";
import {Main} from "../styles/main";
import Slider from "../components/main/slider/Slider";

export default function Home() {
    return (
        <Main>
            <Slider/>
            <div>Content test Content</div>
            <Heading tag='' text='Test Test'/>
        </Main>
    )
}
