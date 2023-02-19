// ปุ่ม Tag add Tag.html
function tagAdd() {
    window.location.href = "./TagAdd.html";
}

// ปุ่ม cancel TagAdd.html
function tagAddCancel() {
    window.location.href = "./Tag.html";
}

// ปุ่ม Save TagAdd.html
function tagAddSave() {
    window.location.href = "./Tag.html";
}

// ปุ่ม Tag edit Tag.html
function tagEdit() {
    window.location.href = "./TagEdit.html";
}

// ปุ่ม Tag delete Tag.html
function tagDelete() {
    Swal.fire({
        title: 'Delete this Tag?',
        icon: 'question',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cancel',
        cancelButtonText: 'Delete',
        showCancelButton: true,
        showCloseButton: true
      })
}