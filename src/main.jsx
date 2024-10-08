import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';

import 'react-lazy-load-image-component/src/effects/blur.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './_base.scss'
import store from './redux/store.js';
import { BrowserRouter as Router} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
)
