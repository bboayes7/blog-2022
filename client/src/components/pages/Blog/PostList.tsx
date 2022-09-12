import {useState, useEffect} from 'react'
import axios from 'axios'
import { ListGroup } from 'react-bootstrap';



const PostList = () => {

  const [data, setData] = useState<{ id: string; title: string; body: string}[]>([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/post/').then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <div>

      <h1>PostList</h1>
      <>
        {data.map((item) => (
          <ListGroup key={item.id}>
            <ListGroup.Item>{item.title}</ListGroup.Item>
          </ListGroup>
        ))}
      </>
    </div>
  );
}

export default PostList;
