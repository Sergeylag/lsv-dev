import {useEffect} from "react";
import {useRouter} from "next/router";
import Heading from "../components/Heading";

const Error = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])
    return (
        <>
            <Heading tag='' text={'404'}/>
            <Heading tag='' text={'Страница не существует'}/>
        </>
    )
}

export default Error