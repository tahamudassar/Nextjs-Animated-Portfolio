import React from 'react'

const Skill = ({skill}) => {
  return (
    <div className='flex bg-black justify-center  text-white items-center p-1 rounded-md'>
        {skill.name}
    </div>
  )
}

export default Skill
