import React, { useEffect } from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAllVideosById, getCategory, updateCategory } from '../services/AllApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Videocard from './Videocard';


function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState()
  const [allCategory,setAllCateogry] = useState()
  const handleaddCategory = async () => {
    if (!categoryName) {
      alert("please fill the form completely")
    }
    else {
      // creating an object
      let body = {
        // if the value of the key and value are same also can use
        // categoryName,
        categoryName: categoryName,
        allVideos: []
      }
      const response = await addCategory(body)
      if (response.status === 201) {
        toast.success(`${categoryName} successfully inserted`);
        handleClose()
        setCategoryName('')
      }
      else {
        toast.warning(`something went wrong`)
      }
    }
    // console.log(categoryName);
  }
  const getAllCategory = async()=>{
    const response = await getCategory();
    const {data} = response;
    console.log(data);  
    setAllCateogry(data) ;
  }
  useEffect(()=>{
    getAllCategory();
  },[])

  const handleDelete = async(categoryId) =>{
    const result = await deleteCategory(categoryId);
    console.log(result);
    if(result.status === 200){
      toast.success('suceessfully deleted');
      getCategory();
    }else{
      toast.error('something went wrong');
    }
  }
  const videoDrop = async(e,id) =>{
    console.log('on drop');  
    console.log('category', id);
    const videoid = e.dataTransfer.getData("videoID");
    console.log(`video with id ${videoid} need to put inside category with id ${id}`);
      const {data} = await getAllVideosById(videoid);
      console.log('videos by id');
      console.log(data);
      const selectedCategory = allCategory?.find((item)=>item.id===id);
      selectedCategory.allVideos.push(data);
      console.log('selected category',selectedCategory );
      const response = await updateCategory(selectedCategory,id)
      getCategory();
  }

  const dragOver = (e)=>{
    //  onDragOver method will trigger page refresh, so the videoID we re passing may lost
    e.preventDefault();
    console.log('inside drag over');
    
  }
  return (
    <div>
      <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
      {
        allCategory?.length>0?
        allCategory.map((item)=>(
          <div className='m-3 border border-secondary rounded p-3 ' 
          droppable onDragOver={(e)=>{dragOver(e)}} 
          onDrop={(e)=>videoDrop(e,item.id)}>
            <div className='d-flex justify-content-between align-items-center'>
              <h6 style={{color:'white'}}><span className='ms-5 me-5'>{item.categoryName}</span></h6>
              <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><i class="fa-solid fa-trash text-light"></i></button>
            </div>
            {
              item.allVideos.length>0?
              item.allVideos.map(card=>(
                <Videocard displayVideo={card}/>
              )):
              <p>No Item found</p>
            }
          </div>
        ))
        :<p>No Category Founded</p>
      }
      <Modal show={show} onHide={handleClose} animation={false} data-bs-theme='dark'>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title><i class="fa-solid fa-list text-warning me-3"></i><span className='textstyle'>Add Category</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          <p className='textstyle' style={{ fontWeight: "700" }}>Please fill the form</p>
          <Form className='border border-secondary rounded p-3' data-bs-theme='light'>
            <Form.Group className="mb-3" >
              <Form.Control type="text" placeholder="Enter category name"
                onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="warning" onClick={handleaddCategory}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
    </div>
  )
}
export default Category