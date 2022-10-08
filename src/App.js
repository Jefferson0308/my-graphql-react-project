import './App.css'
import ExchangeRatesPage from './ExchangeRatesPage'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { client } from './client'

function App() {
  return (
    <div className="App">
      <h1>CURRENCIES</h1>
      <ApolloProvider client={client}>
        <ExchangeRatesPage />
      </ApolloProvider>
    </div>
  )
}

export default App
