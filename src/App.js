import logo from './logo.svg';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import Header from './Components/Header/Header';
import AboutSectoin from './Components/About/AboutSectoin';
import CodeSection from './Components/CodeSection/CodeSection';

function App() {
  return (
    <div className="bg-[#101033]  px-10 lg:px-32 lg:pb-32">
     <Menubar/>
     <Header></Header>
     <AboutSectoin/>
     <CodeSection></CodeSection>
    </div>
  );
}

export default App;
