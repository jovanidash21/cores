import axios from 'axios';

const RECEIVE_ERROR = 'RECEIVE_ERROR';
const REQUEST_DATA = 'REQUEST_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';

function requestData() {
    return {type: REQUEST_DATA}
}
function receiveData(json) {
    return{
        type: RECEIVE_DATA,
        data: json
    }
}
function receiveError(json) {
    return {
        type: RECEIVE_ERROR,
        data: json
    }
}

function fetchGetUsersData() {
    return function(dispatch) {
        dispatch(requestData());

        return axios({
            url: `/api/user`,
            method: 'GET',
            responseType: 'json'
        })
            .then(function(response) {
                dispatch(receiveData(response.data));
            })
            .catch(function(response){
                dispatch(receiveError(response.data));
            })
    }
}

export default fetchGetUsersData;
