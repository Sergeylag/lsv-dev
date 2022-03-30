import {AboutMain} from "../../styles/about/about";
import Navigation from "../../components/Navigation";
import Link from "next/link";

const About = () => {
    return (
        <AboutMain>
            <Navigation>
                <Link href='/'>
                    <a>Главная</a>
                </Link>
                <span>О больнице</span>
            </Navigation>

        </AboutMain>
    )
};

export default About;