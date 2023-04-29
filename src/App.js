import './App.css';
import Header from "./Header"
import Skills from "./Skills"
import AboutMe from "./AboutMe"
import { useState } from 'react';
function App() {
  const [isOpenSkills, setOpenSkills] = useState(0)
  return (
    <div className="App">
      <Header isOpenSkills={isOpenSkills} setOpenSkills={setOpenSkills}/>
      <AboutMe/>
      {isOpenSkills === 1 && <Skills/>}
    </div>
  );
}

export default App;
