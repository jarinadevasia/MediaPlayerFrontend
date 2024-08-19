import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';

function Watchhistory() {
  const [allHistory, setAllHistory] = useState([])
  const getWatchHistory = async () => {
    const { data } = await getHistory();
    setAllHistory(data)
    console.log(data);

  }
  useEffect(() => {
    getWatchHistory();
  }, [])
  const handleDelete = async (historyId) => {
    const response = await deleteHistory(historyId);
    if (response.status === 200) { // Assuming response status 200 means successful deletion
      toast.success("Successfully deleted!");
      getWatchHistory();
    } else {
      toast.error("Something went wrong!");
    }
  }
  return (
    <div>
      <div className='container mt-5 d-flex justify-content-between mb-5'>
        <h3 className='textstyle'>Watch History</h3>
        <Link to='/home' style={{ textDecoration: "none", color: "white", fontWeight: "700", fontSize: "20px" }}>
          <i class="fa-solid fa-arrow-left me-3"></i>Back to Home
        </Link>
      </div>
      <table className='table container mb-5 mt-5 rounded' data-bs-theme='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allHistory.length > 0 ?
              allHistory.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.caption}</td>
                  <td>{item.url}</td>
                  <td>{item.timestamp}</td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(item?.id)} ><i class="fa-solid fa-trash text-light"></i></button></td>
                </tr>
              )) :
              <p style={{ fontSize:"30px",color: "white" }} className='text-warning m-4'>No History Found</p>
          }
        </tbody>
      </table>
      <ToastContainer />
    </div>
  )
}

export default Watchhistory