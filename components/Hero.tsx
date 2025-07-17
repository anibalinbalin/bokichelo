'use client'

import { useEffect, useState } from 'react'
import InstagramIcon from './InstagramIcon'
import VimeoIcon from './VimeoIcon'
import MailIcon from './MailIcon'

export default function Hero() {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="wrapper" id="pg-home">
      <main>
        <div className="container-pre-site">
          <div className={`container-img fadeIn ${isAnimated ? 'aos-animate' : ''}`}>
            <video 
              src="/videos/VIDEO-2025-03-31-12-33-03.mp4#t=0.01"
              muted
              autoPlay
              loop
              playsInline
            />
          </div>
          <div className={`container-text fadeIn animate-delay-1s ${isAnimated ? 'aos-animate' : ''}`}>
            <div className="line">
              <span className="text">
                <span>BKCH</span>
              </span>
            </div>
            <div className="line">
              <span className="label text-center">
                <span>Follow us</span>
              </span>
              <div className="link-wrapper">
                <a href="https://www.instagram.com/bokichelo/" className="icon-link">
                  <InstagramIcon className="social-icon" />
                </a>
                <a href="https://vimeo.com/bkch" className="icon-link">
                  <VimeoIcon className="social-icon" />
                </a>
              </div>
            </div>
            <div className="line">
              <span className="label text-center">
                <span>Get in touch</span>
              </span>
              <div className="link-wrapper">
                <a href="mailto:hola@bokichelo.com" className="icon-link">
                  <MailIcon className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}