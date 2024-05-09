import Form from './components/Form'
import Scoops from './components/Scoops'
import Toppings from './components/Toppings'


const App = () => {
  return (
    <div className='bg-black vh-100 text-light p-3 p-md-4'>
      <Scoops />
      <Toppings />
      <Form />
    </div>
  )
}

export default App