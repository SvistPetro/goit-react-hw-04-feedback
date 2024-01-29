import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ onLeaveFeedback, options }) => {

    return (
        <div className={css.thumb}>
            {options.map(option => {
                return <button type="button" className={css.button} key={option} name={option} onClick={onLeaveFeedback}>{option}</button>
            })}
        </div>
    )
}

export { FeedbackOptions };


// class FeedbackOptions extends Component {

//     render() {
//         const { onLeaveFeedback, options } = this.props;
 
//         return (
//             <div className={css.thumb}>
//                 {options.map(option => {
//                     return <button type="button" className={css.button} key={option} name={option} onClick={onLeaveFeedback}>{option}</button>
//                 })}
//             </div>
//         )
//     }
// }

