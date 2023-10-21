import './socials.sass'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

const socialsNetworks = [
    {
      name: "linkedin", 
      icon: <FaLinkedinIn/>,
      link: "https://www.linkedin.com/in/bruno-nascimento-de-couto-7b6574143/"
    },
    {
      name:"github", 
      icon: <FaGithub/>,
      link: "https://github.com/brunoncouto"
    },
    {
      name: "instagram", 
      icon: <FaInstagram/>,
      link: "https://instagram.com/eubrunoncouto/"
    },
]
const Socials = () => {
  return (
    <section id="socials">
        {socialsNetworks.map((social) => (
            <a href={social.link} target="_blank" className='social-btn' id={social.name} key={social.name}>
                {social.icon}
            </a>
        ))}

    </section>
  )
}

export default Socials