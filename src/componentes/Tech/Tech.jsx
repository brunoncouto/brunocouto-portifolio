import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact
} from 'react-icons/di'
import '../Tech/tech.sass'

const technologies = [
  { id: "html", 
    name: "HTML", 
    icon: <DiHtml5 />, 
    description: "Domínio completo da linguagem HTML, incluindo a estrutura básica de um documento HTML, marcação de texto, formatação, listas, links, imagens e tabelas; Compreensão de conceitos avançados, como semântica HTML, elementos de formulário e acessibilidade." 
  },
  { id: "css", 
    name: "CSS", 
    icon: <DiCss3/>,
  description: "Habilidades avançadas em CSS, abrangendo seletores, propriedades, unidades de medida, box model, posicionamento de elementos e layouts responsivos; Conhecimento em estilização de textos, cores, imagens de fundo, efeitos de transição e animação."
  },
  { id:"js", 
    name: "Javascript", 
    icon: <DiJsBadge />,
  description:"Domínio dos fundamentos do JavaScript, incluindo variáveis, tipos de dados, estruturas de controle (condicionais e loops) e funções; Manipulação do DOM (Document Object Model) para interação com elementos HTML e modificação dinâmica de conteúdo; Uso de eventos e manipulação de formulários para criar uma experiência interativa para o usuário;"
  },
  { id:"react", 
    name: "React", 
    icon: <DiReact />,
    description: "Conhecimento da biblioteca React e sua arquitetura baseada em componentes; Criação de componentes reutilizáveis, aplicação de estados e propriedades, e manipulação de eventos"
  }
]
const Tech = () => {
  return (
    <section className="techs">
      <h2>Tecnologias</h2>
      <div className="tech-grid">
        {technologies.map((tech) =>
          <div className="tech-card" 
          id={tech.id}
          key={tech.id}
          >
            {tech.icon}
            <div className="tech-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Tech