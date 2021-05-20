import axios from "axios";

const rating = (obj, id) => {
  console.log("OBJ PASSED TO RATING: ", obj)
  //helper function 👇🏼
  const count = () => {
    obj.rating =+ obj.skillsI.length
    if ( [2, 3, 4].includes(obj.teamMembers) ) obj.rating =+ 1;
    if (obj.skillsII === 'yes') obj.rating =+ 1;
    return obj.rating
  }

  axios
    .get(`api/crud/startups/${id}`)
    .then((startup) => {
      console.log("STARTUP TO RATE: ", startup);  
      axios
        .post("/api/crud/startups/:id/rating", {
          rating: count(startup.data),   // helper fnc from ☝🏻
        })
        .then((response) => {
          console.log("RESPONSE FROM RATING POST: ", response)
          return response.data;
        })
        .catch((err) => {
          return err.response.data;
        });
        })
    .catch((err) => {
      console.log(err)
      //return err.startup.data;
    });

}

export {rating}