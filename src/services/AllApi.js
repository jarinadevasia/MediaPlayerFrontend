import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// upload video
export const uploadvideo = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}/videos`, reqBody)
}

// get all videos
export const getAllVideos = async () => {
    return await commonAPI('GET', `${serverURL}/videos`, '')
}

// delete videos
export const deleteVideo = async (id) => {
    return await commonAPI('DELETE', `${serverURL}/videos/${id}`, '')
}

// add to watch history
export const addToHistory = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}/history`, reqBody)
}

// get all history
export const getHistory = async () => {
    return await commonAPI('GET', `${serverURL}/history`, '')
}

// delete history by id
export const deleteHistory = async (id) => {
    return await commonAPI('DELETE', `${serverURL}/history/${id}`, {})
}

// add to category
export const addCategory = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/category`,reqBody)
}

// get all category
export const getCategory = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,'')
}

// delete category
export const deleteCategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//  get video details by id
export const getAllVideosById = async (id) => {
    return await commonAPI('GET', `${serverURL}/videos/${id}`, '')
}
// updating category with video deatils
export const updateCategory = async(data, id) =>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,data)
}