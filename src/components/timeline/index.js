import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import Compras from '../compras'

const TimeLine = props => {
    const { compras } = props
    return (
        <Timeline animate={false} lineColor={'#00C853'}>
            {
                compras.map((c, key) => (
                    <TimelineItem key={key} dateStyle={{ display: 'none' }}>
                        <Compras compras={c}/>
                    </TimelineItem>
                ))
            }
        </Timeline>
    )
}

export default TimeLine