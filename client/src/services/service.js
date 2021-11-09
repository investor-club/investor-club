import axios from 'axios';
 
const service = axios.create({
  baseURL: 'http://localhost:5005/api'
  // withCredentials: true // => you might need this when having the users in the app
});
 
const errorHandler = err => {
  console.error(err);
  throw err;
};
 
 
 function handleUpload(theFile, id) {  
    return service
      .post(`/startup/${id}`, theFile)
      .then(res => {
        return res.data})
      .catch(errorHandler);
  }

  function handleInvestorUpload(theFile, id) {  
    return service
      .post(`/upload`, theFile)
      .then(res => {
        return res.data
      })
      .catch(errorHandler);
  }
 
  function saveNewThing(newThing, id) {
    return service
      .post(`/investors/${id}`, newThing) 
      .then(res => {
        return res.data
      })
      .catch(errorHandler);
  }

export {service, handleUpload, handleInvestorUpload, saveNewThing}