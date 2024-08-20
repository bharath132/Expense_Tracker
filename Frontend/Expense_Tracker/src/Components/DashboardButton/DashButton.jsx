import React from 'react'
import './Dashbutton.css'
function DashButton() {
    let dashbtn=[{name:'Dashboard',icon:'fa-solid fa-gauge'},{name:'Budget',icon:'fa-solid fa-money-check'},{name:'Transaction',icon:'fa-solid fa-arrow-right-arrow-left'}]
  return (
    dashbtn.map((btn)=>{
        return(
          <div key={btn.name} className='dashbtns' >
            <i key={btn.icon} className={btn.icon}></i>
            <h2 className='dashbtn'>{btn.name}</h2>
          </div>
          
        )
    })
  )
}

export default DashButton