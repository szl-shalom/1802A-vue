import Axios from "axios";
import "@/js/app.js";

Axios.get("/api/list").then(res => {
    console.log(res);
})