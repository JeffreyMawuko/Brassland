
import BaseLayout from '../components/BaseLayout'
import Footer from '../components/Footer'
import SectionFour from '../components/SectionFour'
import SectionOne from '../components/SectionOne'
import SectionThree from '../components/SectionThree'
import SectionTwo from '../components/SectionTwo'
import TopNav from '../components/TopNav'

export default function Home() {
  return (
    <BaseLayout>
      <TopNav/>
      
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <Footer/>
      
    </BaseLayout>
  )
}
