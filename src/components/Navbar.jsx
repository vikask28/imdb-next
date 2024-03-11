import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex items-center dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-12'>
      <p className='text-xs text-amber-500'>Popular Search Terms :</p>
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
    </div>
  )
}