import {useState, useEffect} from 'react'
import Axios from 'axios'
function App() {

  const [kids, setKids] = useState([])
  const [name,setName] = useState('')
  const [age,setAge] = useState(0)

  useEffect(()=> {
    Axios.get('http://localhost:5000/getKids').then((response) => {
      setKids(response.data)
    })
      
  },[])

  const createKid = () => {
    Axios.post('http://localhost:5000/createkid',
     {name, age}).then((response)=> {
      alert('Kid Created')
      setKids([...kids,{name,age}])
    })

  }

  return (
    <div>
    <div>
    {kids.map((kid)=> {
      return (
         <div>
          <h1>Name : {kid.name}</h1>
          <h2>Age : {kid.age}</h2>
         </div>
      )
    })}
    </div>

    <div>
      <input type="text" placeholder='name' onChange={(event)=> {setName(event.target.value)}} />
      <input type="number" placeholder='age' onChange={(event)=> {setAge(event.target.value)}} />
      <button onClick={createKid}>create kid</button>
    </div>

    </div>
  );
}

export default App;
