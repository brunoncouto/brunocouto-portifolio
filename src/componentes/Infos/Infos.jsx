import '../Infos/infos.sass'

import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

const Infos = () => {
  return (
    <section id="infos">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(+351) 911 705 607</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-mail</h3>
                <p>bruno.cnasc@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Faro - PT</p>
            </div> 
        </div>
    </section>
  )
}

export default Infos