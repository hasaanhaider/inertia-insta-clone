import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
const Card = ({img, comments, likes}) => {
  return (
    <div className='relative w-[300px] h-[400px] group'>
              <img className='w-full h-full' src={img} alt="" />
              <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center'>
                <div className='text-white text-center flex items-center gap-5'>
                  <div className='flex items-center justify-center'>
                    <FaRegHeart className='mr-1 h-[20px] w-[20px]' />
                    <span className='font-semibold'>{likes}</span>
                  </div>
                  <div className='flex items-center justify-center'>
                    <FiMessageCircle className='mr-1 h-[20px] w-[20px]' />
                    <span className='font-semibold'>{comments}</span>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Card