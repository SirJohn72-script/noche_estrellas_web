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
      image: './images/sun.svg',
      link: '/visualizador/sol',
    },
    {
      title: 'Mercurio',
      image: './images/mercury.svg',
      link: '/visualizador/mercurio',
    },
    {
      title: 'Venus',
      image: './images/venus.svg',
      link: '/visualizador/venus',
    },
    {
      title: 'Tierra',
      image: './images/earth.svg',
      link: '/visualizador/tierra',
    },
    {
      title: 'Marte',
      image: './images/mars.svg',
      link: '/visualizador/marte',
    },
    {
      title: 'Jupiter',
      image: './images/jupiter.svg',
      link: '/visualizador/jupiter',
    },
    {
      title: 'Saturno',
      image: './images/saturn.svg',
      link: '/visualizador/saturno',
    },
    {
      title: 'Urano',
      image: './images/uranus.svg',
      link: '/visualizador/urano',
    },
    {
      title: 'Neptuno',
      image: './images/neptune.svg',
      link: '/visualizador/neptuno',
    },
    {
      title: 'Galaxia',
      image: './images/galaxy.png',
      link: '/visualizador/galaxia',
    },
    {
      title: 'Sistema_Solar',
      image: './images/solar_system.svg',
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
