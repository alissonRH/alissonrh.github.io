import React, { useState } from 'react';
import './portifolio.css'
import data from './portfolioData'

const Portifolio = () => {
  const [filter, setFilter] = useState('all');

  return (
    <section id='portfolio'>
      <h5>Meus trabalhos recentes</h5>
      <h2>Portfólio</h2>

      <div className='center'>
      <div className="container_buttons">
        <button
          type="button"
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button
          type="button"

          onClick={() => setFilter('fullstack')}
        >
          Full Stack
        </button>
        <button
          type="button"
          onClick={() => setFilter('frontend')}
        >
          Front-End
        </button>
        <button
          type="button"
          onClick={() => setFilter('back')}
        >
          Back-End
        </button>
      </div>
      </div>

      

      <div className="container portfolio_container">
        {

          data.filter((projeto) => (filter === 'all' ? projeto : projeto.type === filter))
          .map(({ id, image, title, github, link }) => {
            return (
              <article key={id} className='portfolio_items'>
                <div className='portfolio_item-image' >
                  <img src={image} alt='img' />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta' >
                  <a href={github} rel="noreferrer" className='btn' target='_blank'>GitHub</a>
                  <a href={link} rel="noreferrer" className='btn btn-primary' target='_blank'>Link</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portifolio