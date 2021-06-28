import React from 'react'
import Statistic from './statistic';

const Statistics = ({good,bad,neutral,total,porcentajePositivo,promedio}) =>{

    return(
        <>
            <Statistic text="Good" value={good}/>
            <Statistic text="Bad" value={bad}/>
            <Statistic text="Neutral" value={neutral}/>
            <Statistic text="All" value={total}/>
            <Statistic text="Positive" value={porcentajePositivo}/>
            <Statistic text="Average" value={promedio}/>
        </>
    )
}

export default Statistics;