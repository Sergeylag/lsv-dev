import React from 'react';
import {useRouter} from "next/router";
import FullTestimonial from "../../components/testimonials/FullTestimonial";

const Id = () => {
    const router = useRouter()
    const {id} = router.query
    return (
        <FullTestimonial number={id}/>
    );
};

export default Id;