import HomeSection from '@/Components/HomeSections/HomeSection';
import Google from "@/Components/Google/GoogleAnalitycs"
import CardTeam from '../Components/Team/CardTeam'



export default function Home() {
  return (
    <div>
      <HomeSection/>
      <CardTeam />
      <Google/>
    </div>
  )
}