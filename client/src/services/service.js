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
    console.log('file in service: ', theFile)
    return service
      .post(`/startup/${id}`, theFile)
      .then(res => {
        console.log("res.data", res.data)
        return res.data})
      .catch(errorHandler);
  }

  function handleInvestorUpload(theFile, id) {  
    console.log('file in service Investor: ', theFile)
    return service
      .post(`/upload`, theFile)
      .then(res => {
        console.log("res.data", res.data)
        return res.data
      })
      .catch(errorHandler);
  }
 
  function saveNewThing(newThing, id) {
    console.log('new thing is: ', newThing) //works
    return service
      .post(`/investors/${id}`, newThing) //works
      .then(res => {
        console.log("res.data", res.data) //works
        return res.data
      })
      .catch(errorHandler);
  }


export {service, handleUpload, handleInvestorUpload, saveNewThing}