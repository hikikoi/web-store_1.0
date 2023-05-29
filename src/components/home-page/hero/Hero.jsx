import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../../utils/Components'
import './Hero.scss'

const Hero = () => {
  return (
    <section className='hero'>
        <Container>
            <div className="hero">
                <div className="hero-text">
                    <h1>SmTM</h1>
                    <h2>Smart.Tech.Market</h2>
                    <p>Магазин запчестей для ноутбуков, <br/> телефонов, планшетов, антирадаров <br /> и другой элкэтроники.</p>
                    <Link to="/store/store" className='go-shop_link'>
                        <p>МАГАЗИН</p>
                    </Link>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Hero