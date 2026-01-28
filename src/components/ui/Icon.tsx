import React from 'react'

interface IconProps {
  iconName: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  name?: string
  description?: string
  onClick?: () => void
}

const Icon: React.FC<IconProps> = ({
  iconName,
  size = 'md',
  color = 'currentColor',
  name,
  description,
  onClick
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  }

  return (
    <div className='flex flex-col items-center justify-center' onClick={onClick}>
      <div className={sizeClasses[size]}>
        <img
          src={`/assets/icons/${iconName}.svg`}
          alt={name || iconName}
          style={{ width: '100%', height: '100%', color }}
        />
      </div>
      {name && <h5 className='text-md font-semibold'>{name}</h5>}
      {description && <p className='text-center text-sm'>{description}</p>}
    </div>
  )
}

export default Icon
