const Statistics = ({statistics}) => {
    return(
        <div>
            {statistics.map((statistic,index) => (
                <p key={index}>{statistic.text} {statistic.value} </p>
            ))}
        </div>
    )
}

export default Statistics;