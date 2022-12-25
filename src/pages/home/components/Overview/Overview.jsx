import React from 'react'
import overviewData from '../../../../design-system/components/Overview/Data'
import './Overview.css'
import OverviewWrapper from '../../../../design-system/components/Overview/OverviewWrapper'


function Overview() {
  return (
    <>
        <div className="overview">
            <div className="container">
                <div className="overviewContainer">
                    {
                        overviewData.map(element => {
                            return (
                                <OverviewWrapper title={element.title} description={element.description} icon={element.icon} key={element.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Overview