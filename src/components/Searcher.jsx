import { Input } from 'antd';
import './Searcher.css'

const { Search } = Input;

const Searcher = () => {
  return (
    <Search className='searcher' placeholder="input search text" onSearch={()=>console.log("Hola Mundo")} enterButton />
  )
}

export default Searcher