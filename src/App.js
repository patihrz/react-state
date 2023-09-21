import './App.css';
import Img from './components/Img';
import Name from './components/Name';
import NavbarComp from './components/NavbarComp';
import React, {useState }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComp from './components/CarouselComp'




function App() {

  // Use state tempat penampungan data
  const [getNavbarValues,setNavbarValues] = useState("");


  const changeNavbarValues = () => {
    setNavbarValues("My Contact");

  }

  return (
    <div className='Wrapper-outer'>
      <div className='Wrapper-inner'>
        <NavbarComp navValue={getNavbarValues}></NavbarComp>
        {/* <button onClick={() => changeNavbarValues()}>Ubah navbar</button> */}
        <Name></Name>
        <CarouselComp></CarouselComp>
        <Img></Img>
      </div>
    </div>
  );
}

export default App;
