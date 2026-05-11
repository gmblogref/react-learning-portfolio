import './App.css'
import InfoCard from './components/InfoCard'
import PageHeader from './components/PageHeader'

function App() {

  return (
    <>
      <PageHeader />
      <InfoCard title="Component Practice" description="This card is rendered from a reusable component." />
    </>
  )
}

export default App
