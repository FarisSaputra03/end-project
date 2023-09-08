import Image from 'next/image'
import Tampilan from '@/components/tampilan'
import Popular from '@/components/popular'
import Map from '@/components/map'

export default function Home() {
  return (
   <>
   <Tampilan/>
    <Popular/>
    <Map/>
   </>
  )
}
