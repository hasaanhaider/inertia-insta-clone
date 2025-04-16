import React from 'react' 
import Profile from './profile'
import Card from '../components/Card'

const Posts = () => {
  return (
    <Profile>
        <div className="flex flex-wrap gap-[5px] justify-center">
            { 
                Array.from({ length: 10 }).map((_, index) => (
                    <Card img={`https://picsum.photos/200?random=${index}`} comments={index} likes={index} />
                ))
            }
        </div>
    </Profile>
  )
}

export default Posts