import React from 'react'
import './summary-box.scss'
import Box, { Box2 } from '../box/Box'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { colors } from '../../constants'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const SummaryBox = ({ item }) => {
    return (

        <Box>
        
            <div className='summary-box'>
              <div className='summary-box__img'>
              <img src={item.img} alt="" />
                </div>  
                
                   
                <div className="summary-box__info">
                <div className="summary-box__info__name">
                <div>{item.name}</div>
                </div>
                    <div className="summary-box__info__title">
                       
                        <div>{item.title}</div>
                        
                        <span><b>Tiempo Requerido: </b><div>{item.time}</div></span>
                        <span><b>Requerimientos: </b><div> {item.requirements}</div></span></div>
                        <b>Dirigido a las carreras:</b>
                        <div className="summary-box__info__careers">
                        {item.car1}
                    </div>
                    <div className="summary-box__info__careers">
                        {item.car2}
                    </div>
                    <div className="summary-box__info__careers">
                        {item.car3}
                    </div>
                    <button className="summary-box__info__button"> Contactarse</button>
                    </div> 
            </div>
            
        </Box>
    )
}

export default SummaryBox


export const SummaryBox2 = ({ item }) => {
    <Box2>
       <div className='summary-box2'>
        a
       </div>
    </Box2>
}
