import { FunctionComponent } from 'preact'

export const NetworkInfoSkeleton: FunctionComponent = () => {
  return (
    <div class='flex-1 space-y-6 py-1 animate-pulse'>

      <div class='space-y-2'>
        <div class='grid grid-cols-3 gap-4'>
          <div class='h-2 bg-white rounded col-span-2' />
          <div class='h-2 bg-white rounded col-span-1' />
        </div>
        <div class='grid grid-cols-3 gap-4'>
          <div class='h-2 bg-white rounded col-span-2' />
          <div class='h-2 bg-white rounded col-span-1' />
        </div>
        <div class='grid grid-cols-3 gap-4'>
          <div class='h-2 bg-white rounded col-span-2' />
          <div class='h-2 bg-white rounded col-span-1' />
        </div>
        <div class='grid grid-cols-3 gap-4'>
          <div class='h-2 bg-white rounded col-span-2' />
          <div class='h-2 bg-white rounded col-span-1' />
        </div>
        <div class='grid grid-cols-3 gap-4'>
          <div class='h-2 bg-white rounded col-span-2' />
          <div class='h-2 bg-white rounded col-span-1' />
        </div>

      </div>
      <div
        style={{
          height: '200px'
        }} class='w-full animate-pulse block h-200  mt-3 rounded-md bg-white'
      />
    </div>
  )
}
