import axios from 'axios';
 
const service = axios.create({
  baseURL: 'http://localhost:5005/api'
  // withCredentials: true // => you might need this when having the users in the app
});
 
const errorHandler = err => {
  // console.error(err);
  throw err;
};
 
export default {
  service,
 
  handleUpload(theFile, id) {  
    console.log('file in service: ', theFile)
    return service
      .post(`/startup/${id}`, theFile)
      .then(res => {
        console.log("res.data", res.data)
        return res.data})
      .catch(errorHandler);
  },
 
  saveNewThing(newThing) {
    // console.log('new thing is: ', newThing)
    return service
      .post('/things/create', newThing)
      .then(res => res.data)
      .catch(errorHandler);
  }
};