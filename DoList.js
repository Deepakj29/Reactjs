import React from "react"
class DoList extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (<>
            {console.log(this.props.Doitem)}
            <h3 className="mb-4">DO LIST</h3>
            {
                this.props.Doitem.map((item) => {
                    return (<>
                        <div className="row">
                            <div className="col">
                                <p>{item.title}</p>
                            </div>
                            <div className="col ">
                                <button className="btn btn-success m-2" >Done</button>
                                <button className="btn btn-danger m-2" >Delete</button>
                            </div></div>
                    </>)
                })
            }

        </>
        )
    }
}
export default DoList;