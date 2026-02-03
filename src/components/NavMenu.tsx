import { useEffect, useState } from 'react'
import Icon from './ui/Icon'
import './__styles__/NavMenu.css'

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Prevent scroll on mobile when menu is open
    if (isOpen && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  

  return (
    <article>
      <section className='z-10 lg:hidden'>
        <Icon iconName='burger-menu' size={window.innerWidth < 768 ? 'sm' : 'md'} onClick={handleMenuClick} />
      </section>
      <section className={`menu ${isOpen ? 'menu-open' : 'menu-closed'}`}>
        <nav
          className={`flex flex-row items-center justify-between gap-4 text-white text-xl lg:text-sm`}
        >
          <a href='#our-story' onClick={handleMenuClick}>
            Nuestra Historia
          </a>
          <a href='#countdown' onClick={handleMenuClick}>Detalles del evento</a>
          <a href='#contact-us' onClick={handleMenuClick}>Escríbenos</a>
        </nav>
      </section>
    </article>
  )
}

export default NavMenu
