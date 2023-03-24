
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom'
import {BsFacebook } from 'react-icons/bs'
import {BsInstagram } from 'react-icons/bs'
import {AiOutlineMail } from 'react-icons/ai'
import {FaDev } from 'react-icons/fa'

function Menubar() {
  return (
    <Navbar bg='dark' sticky='top' expand="lg" >
      <Container fluid  >
        <Navbar.Brand href="/" className='text-white flex '> <span className='text-red-700'>P</span>rem <FaDev className='mt-2 text-red-500'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll"  >
         <div className=' w-12/12 md:w-12/12 lg:w-9/12 flex justify-center  items-center  flex-wrap'>
           <NavLink to='/' className={'w-full text-white focus:bg-green-600 hover:bg-green-500  mx-0 my-2 md:w-24 lg:w-32 px-4 py-2 mx-2  text-center no-underline rounded-3xl '}>Home</NavLink>
           <NavLink to='/services' className={'w-full text-white focus:bg-green-600 hover:bg-green-500  my-2 md:w-24 lg:w-32 px-4 py-2 mx-2  text-center no-underline rounded-3xl '}>Service</NavLink>
           <NavLink to='/empoleyee' className={'w-full text-white focus:bg-green-600 hover:bg-green-500  my-2 md:w-24 lg:w-32 px-4 py-2 mx-2  text-center no-underline rounded-3xl  '}>Empoleyee</NavLink>
           <NavLink to='/contact' className={'w-full text-white focus:bg-green-600 hover:bg-green-500  my-2 md:w-24 lg:w-32 px-4 py-2 mx-2  text-center no-underline rounded-3xl '}>Contact</NavLink>
           <NavLink to='/about' className={'w-full text-white focus:bg-green-600 hover:bg-green-500  my-2 md:w-24 lg:w-32 px-4 py-2 mx-2  text-center no-underline rounded-3xl '}>About</NavLink>
         </div>
         <div className='w-full py-4 md:w-full lg:w-3/12  text-center flex justify-center'>
           <Link to=" " className='w-5 text-white text-3xl px-12  '><BsFacebook className='hover:text-[#042878]'/></Link>
           <Link to=" " className='w-5 text-white text-3xl px-12  '><BsInstagram  className="hover:text-[#8c0b4f]"/></Link>
           <Link to=" " className='w-5 text-white text-3xl px-12  '><AiOutlineMail className="hover:text-[#dcee0c]" /></Link>
         </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;