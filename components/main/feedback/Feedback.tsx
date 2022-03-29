import {MainFeedback} from "../../../styles/main/feedback_style";
import {FeedbackList} from "./feedback_list";
import FeedbackItem from "./FeedbackItem";


export default function Feedback() {
    return (
        <MainFeedback>
            <div className='content-wrapper'>
                <h2>Анкеты для оценки качества услуг</h2>
                <ul>
                    {FeedbackList.map((e, id) => {
                        return (FeedbackItem(e, id))
                    })}
                </ul>
            </div>
        </MainFeedback>
    );
};

