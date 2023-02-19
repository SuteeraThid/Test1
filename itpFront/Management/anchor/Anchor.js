// ปุ่ม Tag add Anchor.html
function anchorAdd() {
    window.location.href = "./AnchorAdd.html";
}

// ปุ่ม cancel anchorAdd.html
function anchorAddCancel() {
    window.location.href = "./Anchor.html";
}

// ปุ่ม Save anchorAdd.html
function anchorAddSave() {
    window.location.href = "./Anchor.html";
}

// ปุ่ม Anchor edit Anchor.html
function anchorEdit() {
    window.location.href = "./AnchorEdit.html";
}

// ปุ่ม anchor delete Anchor.html
function anchorDelete() {
    Swal.fire({
        title: 'Delete this Anchor?',
        icon: 'question',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cancel',
        cancelButtonText: 'Delete',
        showCancelButton: true,
        showCloseButton: true
      })
}