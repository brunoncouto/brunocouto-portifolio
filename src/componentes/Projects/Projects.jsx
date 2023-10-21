import '../Projects/project.sass'


const projectsName = [
  {
    name: 'Calculadora IMC',
    url: 'https://calculadora-imc-tawny-tau.vercel.app/',
    image: '/img/calculadora-imc.png'
  },
  {
    name: 'Gerador de Senha',
    url: 'https://password-generate-ruby.vercel.app/',
    image: '/img/password-generate.png'
  },
  {
    name: 'Quiz',
    url: 'https://quiz-js-eta.vercel.app/',
    image: '/img/quiz.png'
  },
  {
    name: 'Pokédex',
    url: 'https://pokedex-lake-one.vercel.app/',
    image: '/img/pokedex.png'
  },
  {
    name: 'Previsão do Tempo',
    url: 'https://previsao-tempo-alpha.vercel.app/',
    image: '/img/previsao-tempo.png'
  },
  {
    name: 'To Do List',
    url: 'https://to-do-list-javascript-v1.vercel.app/',
    image: '/img/to-do-ist.png'
  },
  {
    name: 'Carol Reparos',
    url: 'https://carol-reparos.vercel.app/',
    image: '/img/services.png'
  },
  {
    name: 'Travels',
    url: 'https://projeto-travels.vercel.app/',
    image: '/img/travels.png'
  }
]

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <section className="project-grid">
      {projectsName.map((project) =>
          <div className="project-card" key={project.name}>
              <a href={project.url}>
                <img src={project.image} alt={project.name}/>
              </a>
            <h3>{project.name}</h3>         
          </div>)}

      </section>
      <a href="https://github.com/brunoncouto" target="_blank" className="btn" rel="noreferrer">Ver projetos</a>
    </section>
  )
}

export default Projects