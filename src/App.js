import logo from './logo.svg';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import Header from './Components/Header/Header';
import AboutSectoin from './Components/About/AboutSectoin';
import CodeSection from './Components/CodeSection/CodeSection';
import ZombieArmySection from './Components/ZombieArmy/ZombieArmySection';
import CourseFormatSection from './Components/CourseFormatSection/CourseFormatSection';

function App() {
  return (
    <div className="bg-[#101033]  px-5 lg:px-24 pb-32">
     <Menubar/>
     <Header></Header>
     <AboutSectoin/>
     <CodeSection></CodeSection>
     <ZombieArmySection></ZombieArmySection>
     <CourseFormatSection/>
    </div>
  );
}

export default App;
