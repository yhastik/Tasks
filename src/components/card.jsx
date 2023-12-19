import React from 'react'

export const Card = ({ data }) => {
  return (
  <div className='task'>
            <h3>Название задачи</h3>
            <p className='task-p'>Описание задачи</p>
            <p className='task-data'>
              Joined December 2021
            </p>
  </div>
  )
}
