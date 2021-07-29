import axios from 'axios';
 
const service = axios.create({
  baseURL: 'https://investor-club.herokuapp.com/api'
  // withCredentials: true // => you might need this when having the users in the app
});
 
const errorHandler = err => {
  console.error(err);
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

  handleInvestorUpload(theFile, id) {  
    console.log('file in service Investor: ', theFile)
    return service
      .post(`/upload`, theFile)
      .then(res => {
        console.log("res.data", res.data)
        return res.data
      })
      .catch(errorHandler);
  },
 
  saveNewThing(newThing, id) {
    console.log('new thing is: ', newThing) //works
    return service
      .post(`/investors/${id}`, newThing) //works
      .then(res => {
        console.log("res.data", res.data) //works
        return res.data
      })
      .catch(errorHandler);
  }
};