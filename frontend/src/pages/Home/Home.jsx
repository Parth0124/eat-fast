import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import './Home.css'

function Home() {

    const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
