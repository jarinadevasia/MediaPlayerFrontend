import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import { uploadvideo } from '../services/AllApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({ setUploadVideoStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // state to store all form field value
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imageUrl: "",
    youtubeLink: ""
  })

  const addVideoDetails = async () => {
    const { videoId, caption, imageUrl, youtubeLink } = videoDetails
    if (!caption || !imageUrl || !youtubeLink) {
      toast.warning("Please fill the form completely")
    }
    else {
      console.log("final data");
      console.log(videoDetails);
      const response = await uploadvideo(videoDetails);
      console.log(response);
      if (response.status === 201) {
        setUploadVideoStatus(response.data)
        toast.success(`${response.data.caption} successfully uploaded`);
        handleClose();
        setVideoDetails({
          caption: "",
          imageUrl: "",
          youtubeLink: ""
        })
      } else {
        toast.error("something went wrong");
      }
    }
    // console.log("video details ===");
    // console.log(videoDetails);

  }
  const getEmbededLink = (data) => {
    console.log("get embeded link method");
    const link = `https://www.youtube.com/embed/${data.slice(-11)}`
    console.log(link);
    // image_url is used for getting thambnails default displayed in youtube 
    // and setVideoDetails also need to be updated and also delete the filed for adding thambnail
    // let image_url =`https://img.youtube.com/vi/${data.slice(-11)}/hqdefault.jpg`
    setVideoDetails({ ...videoDetails, youtubeLink: link })
    // setVideoDetails({ ...videoDetails, youtubeLink: link,imageUrl: image_url })
  }
  return (
    <>
      <div className='d-flex align-items-center'>
        <h5 className='textstyle me-3'>Upload a new video</h5>
        <button className='btn' onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up fs-5" style={{ color: 'white' }}></i></button>
      </div>
      <Modal show={show} onHide={handleClose} animation={false} data-bs-theme='dark'>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title><i class="fa-solid fa-film text-warning me-3"></i><span className='textstyle'>Upload Video</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          <p className='textstyle' style={{ fontWeight: "700" }}>Please fill the form</p>
          <Form className='border border-secondary rounded p-3' data-bs-theme='light'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter video caption"
                onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter video thumbnail URL"
                onChange={(e) => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })} />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter YouTube video Link"
                onChange={(e) => getEmbededLink(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="warning" onClick={addVideoDetails}>
            UPLOAD
          </Button>
        </Modal.Footer>
      </Modal>
      {/* you can copy paste <ToastContainer /> anywhere */}
      <ToastContainer />
    </>
  )
}

export default Add