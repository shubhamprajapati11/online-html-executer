import Index from "./components/Index.jsx"
import DataProvider from './context/DataProvider.jsx'
function App() {

  return (
    <DataProvider>
      <Index/>
    </DataProvider>
  )
}

export default App
