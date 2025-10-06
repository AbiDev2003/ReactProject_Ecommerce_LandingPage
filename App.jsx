import { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Dashboard from './components/Dashboard';
import LandingBody from './components/LandingBody';
import Team from './components/Team.jsx';
import About from './components/About.jsx';
export default function App(){
    const [currentState, setCurrentState] = useState('home')
    const [username, setUsername] = useState("Abinash")
    const [userEmail, setUserEmail] = useState("2003abinashdash@gmail.com")
    const [location, setLocation] = useState("India")
    const [age, setAge] = useState(22)

    const handleNavigation = (page) => {
        setCurrentState(page)
    }

    const pageComponent = {
        home: <LandingBody/>, 
        dashboard: <Dashboard userName={username} location={location} email={userEmail}/>, 
        team: <Team/>, 
        about: <About/>
    }
    const renderPage = () => {
        return pageComponent[currentState] || <LandingBody/>
    }
     return(
        <div className="min-h-screen flex flex-col">
            <Header onNavigate = {handleNavigation} userName={username} location={location} />
            <main>
                {renderPage()}
            </main>
            <Footer age={age} />
        </div> 
    )
}