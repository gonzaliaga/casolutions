import React from 'react'
import Team from '@/Components/Team/Team';
import dataTeam from '@/data';

export default function page() {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-3 px-3 mx-auto gap-7 pt-32 h-auto mb-2 '>
        {dataTeam.map(el => <Team data={el} key={el.name}  />)}
    </div>
  )
}
