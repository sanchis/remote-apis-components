import { FunctionComponent } from 'preact'
import { ResultIpInformation } from '.'

export const NetworkInfoDataDisplay: FunctionComponent<{result: ResultIpInformation}> = ({ result }) => {
  return (
    <>
      <div class='flex-1 font-bold '>
        <div>Ciudad</div>
        <div>Codigo postal</div>
        <div>Compañia internet</div>
        <div>Moneda</div>
      </div>
      <div class='flex-none'>
        <div>{result?.city} ({result?.region}/{result?.country_name})</div>
        <div>{result?.postal}</div>
        <div>{result?.org}</div>
        <div>{result?.currency}</div>

      </div>

      <iframe
        class='w-full mt-3 rounded-md'
        height='200px'
        scrolling='no'
        src={`https://maps.google.com/maps?q=${result?.latitude},${result?.longitude}&hl=es&z=14&output=embed`}
      />
    </>
  )
}
