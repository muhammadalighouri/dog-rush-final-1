import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import { AppcontextProvider } from './context/AppContext'

ReactDOM.render(
    <BrowserRouter basename={process.env.REACT_APP_BASENAME ?? '/'}>
        <AppcontextProvider>
            <App />
        </AppcontextProvider>
    </BrowserRouter>,
    document.getElementById('root'),
)
