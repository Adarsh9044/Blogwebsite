import React, { useState } from 'react';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import db from "../firebaseconfig";


const Addblog = () => {
const [createdby,setCreatedby]=useState("");
const [titleby,setTitleby]=useState("");
const [descriptionby,setDescriptionby]=useState("");
const [imageurl,setImageurl]=useState("");
const [createdate,setCreatedateby]=useState(Timestamp.now().toDate().toString());

const handlesubmit=async(e)=>{
e.preventDefault();
await addDoc(collection(db,"Blogs"),{
    createdby,titleby,descriptionby,imageurl,createdate
}).then(()=>{alert("sucess")})
.catch(err=>{alert(err.message)})


setCreatedby("");
setTitleby("");
setDescriptionby("");
setImageurl("");
setCreatedateby("");
  
const form=document.getElementById('my_form');
form.reset();

};

  return (
    <div className='addblog-form'>
  <p>Add-Blog</p>
    <form onSubmit={handlesubmit} id="my_form">
        <label>Name</label>
        <input name='username' placeholder=' enter username' type='text' onChange={(e)=>setCreatedby(e.target.value)}></input>
    <br/>
          <label>Blog Title</label>
          <input  name='title'  placeholder=' enter blog title' type='text' onChange={(e)=>setTitleby(e.target.value)}></input>
    <br/>
          <label>Blog Description</label>
          <textarea  placeholder='write article' onChange={(e)=>setDescriptionby(e.target.value)}></textarea>
          <br/>
          <label> Image link</label>
          <input  name='image'  placeholder='paste iamge link' type='text' onChange={(e)=>setImageurl(e.target.value)}></input>
   <div className='btn-container'>
    <button>Submit</button>
   </div>
    </form>
    </div>
  );
};

export default Addblog;