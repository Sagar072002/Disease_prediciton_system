import axios from "axios"
// function getToken() {
//     // getting stored value
//     const saved = localStorage.getItem(docDetails);
//     const initial = JSON.parse(saved.Token);
//     return initial || "";
// }
// axios.defaults.headers.common = {'Authorization': `bearer ${getToken()}`}
export default axios.create({
    baseURL: 'http://localhost:3000/api'
});