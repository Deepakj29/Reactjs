import React from "react"
import DoList from "./DoList";
import DoneList from "./DoneList";

const todo=[{ 
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },]

class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = { todo: todo }

    }
    getdoitem = () => {
        return this.state.todo.filter((todoarr) => todoarr.completed === false)

    }
    getdoneitem = ()=>{
      return this.state.todo.filter((todoarr) => todoarr.completed === true  )
    }
    render() {
        return (<>
            <h3 align="center " className="bg-danger" >TODO LIST</h3>
            <div className="row">
                <div className="col-6 bg-info text-center">
                    <DoList Doitem={this.getdoitem()}></DoList>
                </div>
                <div className="col-6 bg-warning  text-center">
                    <DoneList doneitem={this.getdoneitem()}></DoneList>
                </div>
            </div>
        </>)
    }
}
export default Todo;