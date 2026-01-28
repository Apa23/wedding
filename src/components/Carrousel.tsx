import { useEffect, useState } from 'react'

type CarrouselProps = {
  images: string[]
  size: string
  isAbsolute?: boolean
  autoPlay?: boolean
}

const Carrousel = ({
  images,
  size,
  isAbsolute,
  autoPlay = false
}: CarrouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalImages = images.length

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages)
  }

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carrousel image ${index + 1}`}
          className={`w-${size} h-auto ${
            isAbsolute && 'absolute'
          } top-0 left-0 object-cover transition-opacity duration-1000 ease-in-out max-lg:h-full`}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            filter: 'brightness(0.5)',
          }}
        />
      ))}
    </>
  )
}

export default Carrousel
