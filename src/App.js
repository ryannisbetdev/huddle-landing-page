import logo from './logo.svg';
import './App.css';


// Import components 

import Header from './Components/Header/Header'


//Import sections 

import Section1 from './Sections/Section1/Section1'
import Section2 from './Sections/Section2/Section2'
import Section3 from './Sections/Section3/Section3'
function App() {
  return (
    <div className="App">
     <Header/>
     <Section1/>
     <Section2/>
     <Section3/>
    </div>
  );
}

export default App;
