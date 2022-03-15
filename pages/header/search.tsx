import React from "react";
import {FloatingInput, FloatingLabel} from "../../styles/header_styles/header-styles";

export default function Search(){
    return(
        <div>
            <FloatingLabel>
                <FloatingInput placeholder="Поиск"/>
            </FloatingLabel>
        </div>
    )
}