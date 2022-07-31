import { FC } from 'react'

export const NetworkInfoSkeleton: FC = () => {
  return (
    <div className='flex-1 space-y-6 py-1 animate-pulse'>

      <div className='space-y-2'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='h-2 bg-white rounded col-span-2' />
          <div className='h-2 bg-white rounded col-span-1' />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='h-2 bg-white rounded col-span-2' />
          <div className='h-2 bg-white rounded col-span-1' />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='h-2 bg-white rounded col-span-2' />
          <div className='h-2 bg-white rounded col-span-1' />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='h-2 bg-white rounded col-span-2' />
          <div className='h-2 bg-white rounded col-span-1' />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='h-2 bg-white rounded col-span-2' />
          <div className='h-2 bg-white rounded col-span-1' />
        </div>

      </div>
      <div
        style={{
          height: '200px'
        }} className='w-full animate-pulse block h-200  mt-3 rounded-md bg-white'
      />
    </div>
  )
}
