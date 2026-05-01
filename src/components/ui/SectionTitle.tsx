interface SectionTitleProps {
  title: string
  description: string
}

export default function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className='flex flex-col items-center justify-center bg-(--brand-primary) font-sans text-white text-lg md:text-2xl text-center p-4 md:p-12 '>
      <h2 className='text-lg md:text-2xl font-bold md:mb-4'>{title}</h2>
      <p className='text-md md:text-xl'>{description}</p>
    </div>
  )
}