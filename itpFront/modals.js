
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


const returnTrue = ( ) => {
    return true;
}

// ----------------------------------------------------- Confirm
export const confirmModal = async (title, text, callback) => {
    await Swal.fire({
        // ----------- html injection ----------------------------------------------------------------------------------
        titleText: title,
        text: text,
        // ----------- custom width, height, color, bg-img ----------------------------------------------------------------------------------
        target: 'main',
        width: 423,
        height: 243,
        padding: '0.75rem 0.25rem 1.5rem 0.25rem',
        background: '#fff',
        backdrop: `
            rgba(0,0,0,0.7)
            left top
            no-repeat`,
        timerProgressBar: true,
        // ----------- button ----------------------------------------------------------------------------------
        buttonsStyling: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'ยืนยัน',
        confirmButtonAriaLabel: 'confirm',
        confirmButtonColor: '#3076C3',
        cancelButtonText: 'ยกเลิก',
        cancelButtonAriaLabel: 'cancel',
        cancelButtonColor: '#BBBBBB',
        // ----------- custom class ----------------------------------------------------------------------------------
        customClass: {
            container: 'text-container',
            popup: 'modal-container',
            header: '...',
            title: 'modal-title',
            closeButton: '...',
            icon: '...',
            image: '...',
            content: '...',
            htmlContainer: '...',
            input: '...',
            inputLabel: '...',
            validationMessage: '...',
            actions: '...',
            confirmButton: 'button-confirm',
            denyButton: '...',
            cancelButton: 'button-cancel',
            loader: '...',
            footer: '....',
            timerProgressBar: '....',
        },
    })
    .then( (result) => {
        if  (result.isConfirmed) {
            //run callBack function here after user click confirm button
            return callback();
        } else if (result.dismiss === Swal.DismissReason.cancel){
            // return value = true;
            return
        }})
}

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

  // ----------------------------------------------------- Success
export const successModal = (title, text) => {
    swalWithBootstrapButtons.fire(
        'สำเร็จ!',
        'ทำรายการสำเร็จ',
        `success` ,
        )

}

// ----------------------------------------------------- fail
export const failModal = (title='ล้มเหลว!', text='ทำรายการไม่สำเร็จ') => {
    swalWithBootstrapButtons.fire(
        title,
        text,
        `error` ,
        )

}
