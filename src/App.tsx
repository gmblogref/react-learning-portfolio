import './App.css'
import PageHeader from './components/PageHeader'
import ApiDataPractice from './sections/ApiDataPractice/ApiDataPractice'
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
      <ApiDataPractice />
    </main>
  )
}

export default App
