import { FC } from 'react'
import { ResultIpInformation } from '.'

export const NetworkInfoDataDisplay: FC<{result: ResultIpInformation}> = ({ result }) => {
  return (
    <>
      <div className='flex-1 font-bold '>
        <div>Ciudad</div>
        <div>Codigo postal</div>
        <div>Compañia internet</div>
        <div>Moneda</div>
      </div>
      <div className='flex-none'>
        <div>{result?.city} ({result?.region}/{result?.country_name})</div>
        <div>{result?.postal}</div>
        <div>{result?.org}</div>
        <div>{result?.currency}</div>

      </div>

      <iframe
        className='w-full mt-3 rounded-md'
        height='200px'
        scrolling='no'
        src={`https://maps.google.com/maps?q=${result?.latitude},${result?.longitude}&hl=es&z=14&output=embed`}
      />
    </>
  )
}
