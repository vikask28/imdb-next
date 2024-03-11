import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg'>
      <div className='flex flex-wrap mx-auto lg:justify-between max-w-6xl items-center gap-5'>
      <p className='text-xs text-amber-500 overflow-x-hidden'>Popular Search Terms :</p>
        <NavbarItem title='Hollywood' 
        param='hollywood' />
        <NavbarItem title='Bollywood' 
        param='bollywood' />
        <NavbarItem title='Romance' 
        param='romance' />
        <NavbarItem title='Fight' 
        param='fight' />
        <NavbarItem title='Dark' 
        param='dark' />
        <NavbarItem title='Comedy' 
        param='comedy' />
    </div>
    </div>
  )
}