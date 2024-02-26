import './Navbar'
import Navbar from './Navbar'
export const App = () => {
  return (
    <div>
    <Navbar
        img="src\images\profile.jpg"
        name="Lantana Camara"
        location='Georgia'
        phone="+2546789293"
    />
    <Navbar
        img="src\images\profile2.jpg"
        name="Maricruz Laura"
        location='Seattle'
        phone="+2546789293"
    />
    <Navbar
        img="src\images\profile3.jpg"
        name="Eurasian Plate"
        location='Florida'
        phone="+2546789293"
    />
    <Navbar
        img="src\images\profile2.jpg"
        name="Agrarian revolution"
        location='Ontario'
        phone="+2546789293"
    />
    </div>
  )
}
