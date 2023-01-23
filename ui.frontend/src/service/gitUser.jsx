import axisos from "axios";

const api = axisos.create({
    baseURL: "https://api.github.com/users",
});

export default api;