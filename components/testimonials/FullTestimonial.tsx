import React from 'react';
import {MainFullTestimonial} from "../../styles/testimonials/full_testimonial";
import FullTestimonialsNavigation from "./FullTestimonialsNavigation";
import {FullTestimonialList} from "./fullTestimonial_list";
import FullTestimonialItem from "./FullTestimonialItem";

const FullTestimonial = ({number}) => {
    const item = FullTestimonialList.find(i=> i.id === Number(number))
    return (
        <MainFullTestimonial>
            <FullTestimonialsNavigation id={number}/>
            {item ? <FullTestimonialItem item={item}/> : `testimonial number ${number} is not found`}
        </MainFullTestimonial>
    );
};

export default FullTestimonial;