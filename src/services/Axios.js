import Axios from "axios";

export default Axios.create({
    baseURL:"http://localhost:4001/api/V1"
})