import React from 'react'


const Cookie = ({animate}) => {
  return (
    <div>
        <div className="flex justify-center gap-1">
        <div className={animate ? 'translate-to-left' : ''}>Galleta de</div>
        <div className={animate ? 'translate-to-right': ''}>la Fortuna</div>

      </div>
        <div className= "py-7 px-14 flex">
        <div className={animate ? 'translate-to-left' : ''}><img src="/Galleta_left.png" alt="Galleta de la fortuna"/> </div>
        <div className={animate ? 'translate-to-right': ''}><img src="/Galleta_right.png" alt="Galleta de la fortuna"/> </div>
          
    </div>

    </div>
    
  )
}

export default Cookie