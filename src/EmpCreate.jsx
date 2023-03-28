import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const EmpCreate = () => {

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[active,activechange]=useState(true);
    const [validation,valchange]=useState(false);
    const [validationemail,valchangeemail]=useState(false);

    const navigate=useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault();
       
       // console.log({id,name,email,phone,active});
       const empdata={name,email,phone,active}
       fetch("http://localhost:8000/employee",{method:"POST",headers:{'content-type':'application/json'},body:JSON.stringify(empdata)}).then((res)=>{
        alert("Saved Successfully!")
        navigate('/')   //after subitting navigate back to main page
       }).catch((err)=>{
        console.log(err.message);
       })

        
    }

    return (
        <div>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' onSubmit={handlesubmit}>
                        <div className='card' style={{textAlign:'left'}}>
                            <div className='card-title'>
                                <h2 style={{textAlign:'center',paddingTop:'5px'}}>Employee Create</h2>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Id</label>
                                            <input type="text" className='form-control' value={id} disabled="disabled"/>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label htmlFor="">Name</label>
                                            <input required type="text" onMouseDown={e=>valchange(true)} className='form-control' value={name} onChange={(e)=>namechange(e.target.value)}/>
                                            {name.length==0 && validation && <span className='text-danger'>Enter the name</span>}
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label htmlFor="">email</label>
                                            <input required type="text" onMouseDown={e=>valchangeemail(true)} className='form-control' value={email} onChange={(e)=>emailchange(e.target.value)}/>
                                            {email.length==0 && validationemail && <span className='text-danger'>Enter the email</span>}
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label htmlFor="">Phone</label>
                                            <input required type="text" className='form-control' value={phone} onChange={(e)=>phonechange(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-check'>
                                            <input checked={active} onChange={(e)=>activechange(e.target.checked)} type="checkbox" className='form-check-input'/>
                                            <label className='form-check-label'>Is Active</label>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <button type='submit' className='btn btn-success'>Save</button>
                                            <Link to='/' className='btn btn-danger'>Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmpCreate;