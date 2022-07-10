import React from "react"

class DoneList extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        return (<>
            <h3 className="mb-4">DONE LIST</h3>
            {
                this.props.doneitem.map((item) => {
                    return (<>
                    <div className="row">
                        <div className="col">
                            <p>{item.title}</p>
                        </div>
                        <div className="col">
                            <button className="btn btn-success m-2">FINISHED</button>
                            <button className="btn btn-danger m-2">Delete</button>
                        </div>
                    </div></>)
                })
            }

        </>)
    }
}


export default DoneList;