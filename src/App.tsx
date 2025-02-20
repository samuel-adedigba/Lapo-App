import './App.css'
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
      <Router>
          <div className={"p-4"}>
            <AppRoutes />
          </div>
        </Router>
  )
}

export default App
