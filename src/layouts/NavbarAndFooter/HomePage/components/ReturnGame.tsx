import React from 'react'

const  ReturnGame = () => {
  

  return (
    <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
      <div className='text-center'>
        <img
          src={require('../../../../Images/GamesImages/spider-man2.jpg')}
          width='151'
          height='233'
          alt="book"
        />
        <h6 className='mt-2'>Game</h6>
        <p>JAGames</p>
        <a className='btn main-color text-white' href='#'>Reserve</a>
      </div>
    </div>
  )
}

export default ReturnGame
