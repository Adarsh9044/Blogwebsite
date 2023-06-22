import React, { useState ,useEffect} from 'react'
import db from '../firebaseconfig';
import { collection, onSnapshot, orderBy,query } from 'firebase/firestore';

const Blogdisplay = () => {
 const [blogs,setBlogs]=useState([]);


 useEffect(()=>{
const blogref=collection(db,"Blogs");
const q=query(blogref,orderBy("createdate","desc")) ;
  
onSnapshot(q,(snapshot)=>{
 //  console.log(snapshot); 
  const allblogs=snapshot.docs.map((docs)=>(
    {
        id:docs.id,
        ...docs.data()
    }
  ))
  setBlogs(allblogs);
})
 },[]);



  return (
    <div>
        {
blogs.length ===0 ?(<p>No blogs Found</p>): 
(blogs.map((blog)=>
    <div className='blog-c'key={blog.id} >
      <diV className='sec1title'><p className='title'>{blog.titleby}</p>
      <p className='creater'> posted by : {blog.createdby}</p></diV>
      <hr></hr>
      <diV className='sec2desc'><p><img src={blog.imageurl}/></p>
      <p>{blog.descriptionby}</p></diV>
      <diV className='sec3date'><p>{blog.createdate}</p></diV>

    </div>
))}
    </div>
  );
};

export default Blogdisplay;