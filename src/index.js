import { Suspense } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Spinner from 'components/loaders/Spinner'
import { TitleNameProvider } from 'context/TitleNameContext'

import './index.css'

const App = lazy(() => import('./App'))

ReactDOM.render(
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="mx-auto max-w-[430px] h-screen flex items-center justify-center">
          <Spinner color="#e7513b" />
        </div>
      }
    >
      <TitleNameProvider>
        <App />
      </TitleNameProvider>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
