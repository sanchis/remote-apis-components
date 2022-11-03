import { FC } from 'react'
import { useRequest } from '../hooks/useRequest'
import { NetworkInfoDataDisplay } from './data'
import { NetworkInfoSkeleton } from './skeleton'
export interface ResultIpInformation {
  ip: string
  version: string
  city: string
  region: string
  region_code: string
  country_code: string
  country_code_iso3: string
  country_name: string
  country_capital: string
  country_tld: string
  continent_code: string
  in_eu: boolean
  postal: string
  latitude: number
  longitude: number
  timezone: string
  utc_offset: string
  country_calling_code: string
  currency: string
  currency_name: string
  languages: string
  country_area: number
  country_population: number
  asn: string
  org: string
  hostname: string
}

const NetworkInfo: FC = () => {
  const { requesting, result } = useRequest<ResultIpInformation>('https://ipapi.co/json/')

  return (
    <div className='flex flex-wrap p-4 text-white border border-blue-300 rounded-md shadow bg-gradient-to-r from-cyan-500 to-blue-500'>
      {requesting ? <NetworkInfoSkeleton /> : <NetworkInfoDataDisplay result={result as ResultIpInformation} />}
    </div>
  )
}

export default NetworkInfo
