import React, { useState } from 'react'

const Statistics = ({good,bad,neutral,total,porcentajePositivo,promedio}) =>{

    console.log(good)

    return(
        <>
            <h1>Statitics</h1>
            <h1> Good: {good}</h1>
            <h1> Bad: {bad}</h1>
            <h1> Neutral: {neutral}</h1>
            <h1>All: {total}</h1>
            <h1>Positive: {porcentajePositivo}</h1>
            <h1>Average : {promedio}</h1>
        </>
    )
}

export default Statistics;