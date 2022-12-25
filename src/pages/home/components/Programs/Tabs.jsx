import React from 'react'
import { useState } from 'react'
import { tab1, tab2, tab3 } from '../../../../design-system/components/Programs/Data';
import Programs from '../../../../design-system/components/Programs/Programs';
import './Tabs.css'
function Tabs() {
    const[tab,setTab] = useState('tab1');

    const switchTab = (tab) => {
        setTab(tab)
    }
  return (
    <>
        <div className="tabs">
            <span style={{color: tab==='tab1'? '#f2545f' : '' , textShadow: tab==='tab1' ? '0px 0px 10px #707070' : ''}} onClick={() => switchTab('tab1')}> First Day</span>
            <span style={{color: tab==='tab2'? '#f2545f' : '' , textShadow: tab==='tab2' ? '0px 0px 20px #707070' : ''}} onClick={() => switchTab('tab2')}>Second Day</span>
            <span style={{color: tab==='tab3'? '#f2545f' : '' , textShadow: tab==='tab3' ? '0px 0px 12px #707070' : ''}} onClick={() => switchTab('tab3')}>Third Day</span>
        </div>

        {
            tab === 'tab2' ? 
            tab2.map(element => {
                return(
                    <Programs img={element.img} time={element.time} title={element.title} room={element.room} name={element.name} content={element.content} key={element.id}  />
                )
            })

            : 
            tab === 'tab3' ? 
            tab3.map(element => {
                return(
                    <Programs img={element.img} time={element.time} title={element.title} room={element.room} name={element.name} content={element.content} key={element.id}  />
                )
            })
            
            : 
            tab1.map(element => {
                return(
                    <Programs img={element.img} time={element.time} title={element.title} room={element.room} name={element.name} content={element.content} key={element.id}  />
                )
            })
        }
    </>
  )
}

export default Tabs