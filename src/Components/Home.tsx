import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ARTICLE } from '../redux/reduxSlice';
import { REMOVE_ARTICLE } from '../redux/reduxSlice';
import { ListType } from '../redux/TypeScript';
function Home() {
    // UseState For Input Fields
    const [post, setPost] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    // Dispatch method for dispatching actions
    const dispatch = useDispatch();
    const data: any = useSelector((state) => state)
    // Post Input Handler
    const postHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost(e.target.value)
    }
    // Dessciption Input Handler
    const descHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(e.target.value)
    }
    // Add Handler
    const addHandler = () => {
        // Check Validation
        if (post === "") {
            alert("Post Field Can Not Be Blank !!!");
            document.getElementById("post")?.focus()
        } else if (desc === "") {
            alert("Description Field Can Not Be Blank !!!")
            document.getElementById("desc")?.focus()
        } else {
            // Dispatch Action 
            dispatch(ADD_ARTICLE({
                id: Math.random() * 1000,
                post: post,
                desc: desc
            }))
            setPost("");
            setDesc("")
        }
    }
    // Delete Handler
    const deleteHandler = (id: number) => {
        dispatch(REMOVE_ARTICLE({ id: id }))
    }
    return (
        <div>
            <center>
                <h1 style={{ margin: "1em 0" }}>My Articles</h1>
                <div style={{ width: "50%" }}>
                    <div className="input-group mb-3">
                        <input value={post} id="post" onChange={postHandler} type="text" className="form-control" placeholder="Enter Post..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input value={desc} id="desc" onChange={descHandler} type="text" className="form-control" placeholder="Enter Description..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div style={{ marginBottom: "2em" }} className="d-grid gap-2 col-12 mx-auto">
                        <button onClick={addHandler} style={{ background: "#00bae6", color: "white" }} className="btn" type="button">ADD ARTICLE</button>
                    </div>
                    {/* Display Cards */}
                    {data.lists.list.length !== 0 ?
                        data.lists.list.map((val: ListType, index: number) => (
                            <div key={index} className="card" style={{ width: "100%", padding: "1em", marginBottom: "3%" }}>
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
                </div>

            </center>
        </div>
    )
}

export default Home