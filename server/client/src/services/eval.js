import axios from 'axios';

const updateEval = (place, industry, stage) => {
    console.log("updateEval before axios return");
    return axios
        .post('/api/eval/updateEval', { 
            place, 
            industry, 
            stage,
        })
        .then(response => {
            console.log("response data", response.data);
            return response.data;
        })
        .catch((err) => {
            return err.response.data;
          });
}

export {updateEval};

