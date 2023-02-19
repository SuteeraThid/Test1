// ปุ่ม floor add floor.html
function floorAdd() {
    window.location.href = "./FloorAdd.html";
}

// ปุ่ม cancel floorAdd.html
function floorAddCancel() {
    window.location.href = "./Floor.html";
}

// ปุ่ม Save floorAdd.html
function floorAddSave() {
    window.location.href = "./Floor.html";
}

// ปุ่ม floor edit Anchor.html
function floorEdit() {
    window.location.href = "./FloorEdit.html";
}

// ปุ่ม floor delete Anchor.html
function floorDelete() {
    Swal.fire({
        title: 'Delete this floor',
        icon: 'question',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cancel',
        cancelButtonText: 'Delete',
        showCancelButton: true,
        showCloseButton: true
      })
}


//-------------------------------------------------------


async function searchfloor() {
//    const response = await listFloorData("test1");
//    console.log(response)

    // const data = await addFloorData('testAdd' , 1 , 'testAdd')
    // console.log(data)

    //    const data = await editFloorData('FL' , 'testedit' , 1 , 'testedit')
    // console.log(data)

    // image -> blob -> path -> saveDataBase -> getfilename 
        const data = await deleteFloorData('FL')
    console.log(data)
}



const startUrl = 'http://localhost:8080/manage/floor'
let jwt = localStorage.getItem("jwt")

async function listFloorData(keySearch){
    const url = `${startUrl}/list`
    const payload = {
        userAgent:"test@gmail.com",
        sessionId:jwt,
        actionBy:"actionBy",
        sessionRefCode:"sessionRefCode",
        keySearch : keySearch
    }
    const response = await axiosDataPostMethod(url , payload);
    console.log(response.data)

    // const table = document.getElementById("table-body");

    for(let i = 0; i < response.data.length; i++){ 
        document.getElementById(/*row${i}*/).innerHTML(floorList[3].buildingName)
        document.getElementById(/*row${i}*/).innerHTML(floorList[1].floorName)
        document.getElementById(/*row${i}*/).innerHTML(floorList[5].createDate)
    }

    // console.log(response.data)
}

// function listFloor(){
//    document.getElementById('column-1-1').innerHTML(listFloor[0].floorName)
                          // id ของคอลัม            //ข้อมูลที่เอามา[ตำแหน่งของข้อมูลที่จะเอา].ชื่อตำแหน่งอันนั้นของjson
// เอาข้อมูลมาจาก response



// const colume = "";

// for ( let i = 0; i < data.length; i++){
    // document.getElementById(row${i}).innerHTML = data[i]
// }

    // const x = document.createElement("td");
    // const y = document.crea                              // array [0]
    // x.appendChild(y);                                    // แทรก y ลง x
    // document.getElementById("myTr").appendChild(x);      // แทรก x ลง tr
 
    // -----------------------------

    // const table = document.getElementById("table-body");

    // const row = document.createElement("tr");   // สร้าง tr 
    
    // const c1 = document.createElement("td");    // สร้าง column ใน tr
    // const c2 = document.createElement("td");
    // const c3 = document.createElement("td");
    // const c4 = document.createElement("td");

    // for ( let i = 0 ; i < data.length ; i++){
    //     // c1.innerText.array[i].buildingName
    //     floorName[i].floorName

// for ( let i = 0; i < data.length; i++){
//     document.getElementById(row${i}).innerHTML = data[i]
// }
        // row.appendChild(c1);
        // row.appendChild(c2);
        // row.appendChild(c3);
        // row.appendChild(c4);

        // table.appendChild(row)
// }

let res;
listFloorData(1).then(data => res = data);
const floorList = res.data.floorList    // การดึงข้อมูลมาทั้งก้อนเลย json กรอบแดง

async function addFloorData(floorName , buildingId , floorFile){
    const url = `${startUrl}/add`
    const payload = {
        userAgent:"test@gmail.com",
        sessionId:jwt,
        actionBy:"actionBy",
        sessionRefCode:"sessionRefCode",
        floorName : floorName,
        buildingId : buildingId,
        floorFile : floorFile
    }
    const response = await axiosDataPostMethod(url , payload);
}


async function editFloorData(floorId , floorName , buildingId , floorFile){
    const url = `${startUrl}/edit`
    const payload = {
        userAgent:"test@gmail.com",
        sessionId:jwt,
        actionBy:"actionBy",
        sessionRefCode:"sessionRefCode",
        floorId : floorId,
        floorName : floorName,
        buildingId : buildingId,
        floorFile : floorFile
    }
    const response = await axiosDataPostMethod(url , payload);
}


async function deleteFloorData(floorId){
    const url = `${startUrl}/delete`
    const payload = {
        userAgent:"test@gmail.com",
        sessionId:jwt,
        actionBy:"actionBy",
        sessionRefCode:"sessionRefCode",
        floorId : floorId,
    }
    const response = await axiosDataPostMethod(url , payload);
}


// return response เอาไปใช้ซ้ำ
async function axiosDataPostMethod(url , payload){
    const response = await axios.post(url , payload);
    console.log(response)
    return response
}



