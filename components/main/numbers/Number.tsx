import {MainNumbers} from "../../../styles/main/main_numbers_style";
import {NumberList} from "./number_list";
import NumberItem from "./NumberItem";

export default function Number () {
    return (
        <MainNumbers>
            <ul>
                {NumberList.map((e,id)=> {
                    return(
                        NumberItem(e,id)
                    )
                })}
            </ul>
        </MainNumbers>
    );
};
