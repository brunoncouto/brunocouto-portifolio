import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Tech from '../Tech/Tech'
import './maincontent.sass'
const MainContent = () => {
  return (
    <main id="main-content">
      <AboutMe />
      <Tech />
      <Projects />
    </main>
  )
}

export default MainContent