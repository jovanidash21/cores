import axios from 'axios';

function requestData() {
    return {
        type: 'REQUEST_DATA'
    }
}
function receiveData(json) {
    return {
        type: 'RECEIVE_DATA',
        data: json
    }
}
function receiveError(json) {
    return {
        type: 'RECEIVE_ERROR',
        data: json
    }
}
export function fetchGetUserData() {
    return function(dispatch) {
        dispatch(requestData());

        return axios
            .get(`/api/user`)
            .then(function(response) {
                dispatch(receiveData(response.data));
            })
            .catch(function(response){
                dispatch(receiveError(response.data));
            })
    }
}