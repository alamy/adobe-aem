import axisos from "axios";

const api = axisos.create({
    baseURL: "https://maps.googleapis.com/maps/api/geocode/",
});

export default api;