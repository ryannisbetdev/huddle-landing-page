import './App.css';


// Import components 

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


//Import sections 

import Section1 from './Sections/Section1/Section1'
import Section2 from './Sections/Section2/Section2'
import Section3 from './Sections/Section3/Section3'
import Section4 from './Sections/Section4/Section4'
import Section5 from './Sections/Section5/Section5'


function App() {
  return (
    <div className="App">
     <Header/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Footer/>
    </div>
  );
}

export default App;
