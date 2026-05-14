import './App.css'
import PageHeader from './components/PageHeader'
import CollectionPractice from './sections/CollectionPractice'
import ComponentFundamentals from './sections/ComponentFundamentals'
import FormPractice from './sections/FormPractice/FormPractice'

function App() {

  return (
    <main>
      <PageHeader />
      <ComponentFundamentals />
      <CollectionPractice />
      <FormPractice />
    </main>
  )
}

export default App
