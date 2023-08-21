import MainNav from '@/components/Store/MainNav'
import { Separator } from '@/components/ui/separator'
import { auth, currentUser } from '@clerk/nextjs'
import Image from 'next/image'

const Home = async () => {
  const user = await currentUser() || undefined

  return (
    <div>
      <MainNav user={user}/>

    </div>
  )
}

export default Home