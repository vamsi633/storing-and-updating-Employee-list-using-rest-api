import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Emplisting = () => {

    const time=()=>{
        setTimeout(()=>{document.querySelector('.alertbox').remove()},1000);
    }
    
    const alertFunction=()=>{
        console.log("hello");
    }
    const[empdata,empdatachange]=useState(null);

    const navigate=useNavigate();

    const handleEdit=(id)=>{
       navigate('/employee/edit/'+id);
    }
    const handleRemove=(id)=>{
        if(window.confirm('Do you want to Delete?')){
            fetch("http://localhost:8000/employee/"+id,{method:"DELETE"}).then((res)=>{
       // alert("Removed Successfully!")
       document.querySelector('.alertboxs').style.display='block'
       setTimeout(()=>{
        window.location.reload();
       },1000)   //after subitting navigate back to main page
       }).catch((err)=>{
        console.log(err.message);
       }) 
        }
    }

    const handleDetails=(id)=>{
        navigate('/employee/detail/'+id);
    }

    useEffect(()=>{
        fetch("http://localhost:8000/employee").then(res=>{
            return res.json();
        }).then((resp)=>{
            empdatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])
    return (
        <>
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Employee Listing</h2>
                </div>
                <div className='card-body'>
                    <div className='divbtn'>
                        <Link to='employee/create' className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {  empdata && empdata.map((item)=>{    /*conditional rendering  . render only when data is available*/
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <a onClick={()=>{handleEdit(item.id)}} className='btn btn-success'>Edit</a>
                                                <a onClick={()=>{handleRemove(item.id)}} className='btn btn-danger'>Remove</a>
                                                <a onClick={()=>{handleDetails(item.id)}} className='btn btn-primary'>Details</a>
                                             </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div>
            <span style={{position:'absolute',top:'10px',right:'0px',paddingLeft:'30px',paddingRight:'30px',paddingTop:'10px',paddingBottom:'10px',fontSize:'20px',backgroundColor:'red',borderRadius:'10px',display:'none'}} className='alertboxs'>removing...</span>
        </div>

        </>

    );
};

export default Emplisting;