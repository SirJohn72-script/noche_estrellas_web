import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Footer from '../components/footer/Footer'

type CardType = {
  title: string
  image: string
  link: string
}

export default function Home() {
  const [cards, setCards] = useState<Array<CardType>>([
    {
      title: 'Sol',
      image:
        'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      link: '/visualizador/sol',
    },
    {
      title: 'Mercurio',
      image:
        'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      link: '/visualizador/mercurio',
    },
    {
      title: 'Venus',
      image:
        'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      link: '/visualizador/venus',
    },
    {
      title: 'Tierra',
      image:
        'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      link: '/visualizador/tierra',
    },
    {
      title: 'Marte',
      image:
        'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      link: '/visualizador/marte',
    },
    {
      title: 'Jupiter',
      image:
        'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      link: '/visualizador/jupiter',
    },
    {
      title: 'Saturno',
      image:
        'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      link: '/visualizador/saturno',
    },
    {
      title: 'Urano',
      image:
        'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      link: '/visualizador/urano',
    },
    {
      title: 'Neptuno',
      image:
        'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      link: '/visualizador/neptuno',
    },
    {
      title: 'Galaxia',
      image:
        'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      link: '/visualizador/galaxia',
    },
    {
      title: 'Sistema_Solar',
      image:
        'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      link: '/visualizador/sistema_solar',
    },
  ])
  return (
    <div className="container card_container">
      <div className="wrapper">
        <div className="card_title_container">
          <h1 className="planet_title">Noche de estrellas</h1>
          <p className="planet_subtitle">BUAP 2022</p>
        </div>
        <ul className="cards_container">
          {cards.map((card: CardType, index: number) => (
            <li key={index} className="card">
              <div className="card_image">
                <img src={card.image} alt={card.title} />
              </div>
              <p className="card_title">{card.title}</p>
              <Link href={`${card.link}`}>
                <button className="card_button">Visitar</button>
              </Link>
            </li>
          ))}
        </ul>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}
