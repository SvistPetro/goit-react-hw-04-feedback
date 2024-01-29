import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    const totalSum = total();
    const percent = positivePercentage(totalSum);

    return (
        <div className={css.thumb}>
            <span>Good: {good}</span>
            <span>Natural: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {totalSum}</span>
            <span>Positive feedback: {percent}%</span>
        </div>
    )
}

export { Statistics };

// class Statistics extends Component {

//     render() {
//         const { good, neutral, bad, total, positivePercentage } = this.props;
//         const totalSum = total();
//         const percent = positivePercentage(totalSum);

//         return (
//             <div className={css.thumb}>
//                 <span>Good: {good}</span>
//                 <span>Natural: {neutral}</span>
//                 <span>Bad: {bad}</span>
//                 <span>Total: {totalSum}</span>
//                 <span>Positive feedback: {percent}%</span>
//             </div>
//         )
//     }
// }