import './List.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

function List({url}) {

  const [list, setList] = useState([]);

  const fetchList = async() => {
    const response = await axios.get(`${url}/api/food/list`)
    console.log(response.data);
    if(response.data.success)
    {
      setList(response.data.data)
    }
    else
    {
      toast.error("Error fetching products")
    }
  }

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id: foodId});
    await fetchList()
    if(response.data.success)
    {
      toast.success(response.data.message)
    }
    else
    {
      toast.error("Error") 
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
            <p>Image</p>
            <p>Name</p>
            <p>Category</p>
            <p>Price</p>
            <p>Action</p>
        </div>
        {list.map((item,index) => {
          return(
            <div className='list-table-format' key={index}>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹ {item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default List
