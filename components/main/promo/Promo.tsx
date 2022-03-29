import {MainPromo} from "../../../styles/main/promo_style";
import {PromoList} from "./promo_list";
import PromoItem from "./PromoItem";

export default function Promo () {
    return (
        <MainPromo>
            <div className='content-wrapper'>
                <ul>
                    {PromoList.map((e,id)=>{
                        return(PromoItem(e,id))
                    })}
                </ul>
            </div>
        </MainPromo>
    );
};

