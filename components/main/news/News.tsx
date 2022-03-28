import {MainNews} from "../../../styles/main/news_style";
import Link from "next/link";

export default function News () {
    return (
        <MainNews>
            <div className='content-wrapper'>
                <h2>Новости</h2>
                <ul className='posts__list'></ul>
                <nav>
                    <Link href='/posts'>
                        <a>Все новости</a>
                    </Link>
                </nav>
            </div>
        </MainNews>
    );
};

