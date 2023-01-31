import axios from "axios";
//const token = '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'
const api = axios.create({
    baseURL: "https://api.github.com/users/",
    maxRedirects: 5
}
);

export default api;