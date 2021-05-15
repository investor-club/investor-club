import axios from 'axios';

const updateEval = (place, industry, stage) => {
    return axios.post('/api/eval/updateEval', { place, industry, stage })
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return err;
        })
}

export {updateEval};