// จะใช้ไฟล์นี้เป็นตัวกลางเพื่อเรียกใช้งาน Axios
import axios from "axios";

export const http = axios.create({
    baseURL: 'http://localhost:8080/', // path ที่ทำการ run ที่ server
});