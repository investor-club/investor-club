import axios from "axios";

const rating = (startupData) => {
  console.log(startupData);
  //helper function 👇🏼
  const getCount = (obj) => {
    let count = 0;
    count += obj.skillsI.length;
    if ( [2, 3, 4].includes(obj.teamMembers) ) count += 1;
    if (obj.skillsII === 'yes') count += 1;
    console.log("IVE COUNTED: ", count)
    return count
  }
  axios
  .put(`/api/startups/${startupData._id}/rating`, {
    rating: getCount(startupData),   // helper fnc from ☝🏻
  })
  .then((response) => {
    console.log("RESPONSE AFTER COUNT PUT: ", response)
    return response.data;
  })
  .catch((err) => {
    return err.response.data;
    });

}

export {rating}