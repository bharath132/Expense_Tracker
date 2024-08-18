import React from 'react'
import './Dashbutton.css'
function DashButton() {
    let dashbtn=['Dashboard','Budget','Transaction']
  return (
    dashbtn.map((btn)=>{
        return(
            <h1 className='dashbtn' key={btn}>{btn}</h1>
        )
    })
  )
}

export default DashButton