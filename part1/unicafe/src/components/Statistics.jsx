const Statistics = ({statistics, total}) => {

     if (total === 0) {
        return <p>No feedback given</p>
    }

    return(
        <div>
            {statistics.map((statistic,index) => (
                <p key={index}>{statistic.text} {statistic.value} </p>
            ))}
        </div>
    )
}

export default Statistics;