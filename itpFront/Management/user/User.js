import axios, { HttpStatusCode } from "axios";
// import { http } from "../../axios.js";  // เพื่อใช้งาน api จาก path ต่างๆ 


// ปุ่ม Tag add Tag.html
function userAdd() {
    window.location.href = "./UserAdd.html";
}

// ปุ่ม cancel TagAdd.html
function userAddCancel() {
    window.location.href = "./User.html";
}

// ปุ่ม Save TagAdd.html
function userAddSave() {
    window.location.href = "./User.html";
}

// ปุ่ม user edit Anchor.html
function userEdit() {
    window.location.href = "./UserEdit.html";
}

// ปุ่ม User delete User.html
function userDelete() {
    Swal.fire({
        title: 'Delete this ....?',
        icon: 'question',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cancel',
        cancelButtonText: 'Delete',
        showCancelButton: true,
        showCloseButton: true
      })
}

// --Ajex อัปเดตเลยแบบไม่ต้องรีเฟช------.ใช้ XMLHttpRequest เรียก api---------------------------------------------------------------------------------------
function loadTable(){
    const xhttp = new XMLHttpRequest();
    xhttp.open(POST, "http://localhost:8080/manage/user/list");
    xhttp.send(); // ส่ง request ไปเรียก api
    
    // callback
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    }
}

loadTable();

// สร้าง method
async userAdd() {
    await http.post(`manage/user/add`)
    .then(res => {
        if (res.data.success) {

        }
    })
}

let apiUrl = "http://localhost:8080/manage/user/add";
let tableUser = document.querySelector('.table-tag')

function getUser() {
    axios.get(apiUrl) // url
    .then(function(response) {
        
    })
}

// เอาข้อมูลลงตาราง

// ดึงข้อมูล

// add ข้อมูลเพิ่ม

//Edit the data

// ลบข้อมูล
