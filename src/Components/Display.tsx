import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_ARTICLE } from '../redux/reduxSlice';
import { ListType } from '../redux/TypeScript';

function Display() {
    const data: any = useSelector((state) => state)
    const dispatch = useDispatch()
    // Delete Handler
    const deleteHandler = (id: number) => {
        dispatch(REMOVE_ARTICLE({ id: id }))
    }
    return (
        <div>
            <center>
                {/* Display Cards */}
                {data.lists.list.length !== 0 ?
                    data.lists.list.map((val: ListType, index: number) => (
                        <div key={index} className="card" style={{ width: "50%", padding: "1em", marginBottom: "3%" }}>
                            <div style={{ borderBottom: "2px solid #00bae6" }} className="card-body">
                                <div style={{ float: "left" }}>
                                    <h2 className="card-title">{val.post}</h2>
                                    <p className="card-text">{val.desc}</p>
                                </div>
                                <p style={{ float: "right" }} className="card-text" >
                                    <button onClick={() => deleteHandler(val.id)} type="button" className="btn btn-danger">Delete</button>
                                </p>
                            </div>
                        </div>
                    ))
                    : null}
            </center>
        </div>
    )
}

export default Display