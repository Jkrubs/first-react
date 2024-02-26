import './Navbar.css'


const Navbar = ({img, name, location, phone}) => {
 
  return (
   <div className='contact'>
    <img src={img}/>
    <h4>{name}</h4>
    <h5>{location}</h5>
    <h6>{phone}</h6>
    
   </div>
  )
}

export default Navbar
