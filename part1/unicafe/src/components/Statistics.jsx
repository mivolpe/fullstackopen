import StatisticLine from "./StatisticLine";

const Statistics = ({statistics, total}) => {

     if (total === 0) {
        return <p>No feedback given</p>
    }

    return(
        <table>
            <tbody>
                {statistics.map((statistic,index) => (
                    <StatisticLine key={index} text={statistic.text} value={statistic.value} />
                ))}
            </tbody>
        </table>
    )
}

export default Statistics;