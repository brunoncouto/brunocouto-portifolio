import Avatar from 'C:/Users/bruno/Documents/Alura/React.JS/react-sass/src/img/eu.jpg'
import './sidebar.sass'
import Socials from '../Socials/Socials'
import Infos from '../Infos/Infos'


const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="" />
        <p className='title'>Desenvolvedor Web</p>
        <Socials />
        <Infos />
        <a href="" className='btn'>Download do Currículo</a>
    </aside>
  )
}

export default Sidebar