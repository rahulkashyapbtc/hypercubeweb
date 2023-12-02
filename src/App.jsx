import { useState ,useEffect} from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'



import './App.css'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
 {isMobile? <div style={{color:'white', textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center', height:'100vh'}}>Open on Desktop Machine.</div>:  <div>
 <Header></Header>
   <Body></Body>
  <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', backgroundColor:'#1c1c1c', gap:'30px', padding:'30px'}}>
 
 
 
  <img src="/img1.png"  height={"600px"} width={"1200px"} alt="" />
   <img src="/img3.jpeg"   height={"600px"} width={"1200px"}  alt="" />
    <img src="/img2.png"  height={"600px"} width={"1200px"}  alt="" />


  </div>
   

    <Footer></Footer>

 </div>}

    </>
  )
}

export default App
