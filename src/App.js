import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import BuyPage from './pages/BuyPage'
import Disclaimer from './pages/Disclaimer'
import Home from './pages/Home'
import Main from './pages/Main'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import './scss/normalize.css'
import './scss/reset.css'

var Spinner = require('react-spinkit')
function App() {
    let [loading, setLoading] = useState(true)
    let [color, setColor] = useState('#fff')
    const containerRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            <main>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/buy" element={<BuyPage />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy-policy" element={<Privacy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                </Routes>
            </main>
        </>
    )
}

export default App
