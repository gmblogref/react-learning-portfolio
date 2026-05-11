import './App.css'
import CounterPanel from './components/CounterPanel'
import InfoCard from './components/InfoCard'
import PageHeader from './components/PageHeader'

function App() {

  return (
    <main>
      <PageHeader />
      <section className='info-card-section'>
        <InfoCard
          title="Component Practice"
          description="This card is rendered from a reusable component."
        />
        <InfoCard
          title="JSX Practice"
          description="JSX lets React render markup and dynamic values together."
        />
        <InfoCard
          title="Component Reuse"
          description="The same component can display content through props ."
        />
        <InfoCard
          title="One-Way Data Flow"
          description="The parent component passes data down to child components."
        />
      </section>
      <CounterPanel />
    </main>
  )
}

export default App
