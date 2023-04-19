// Variable Declaration...

const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput();
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }else{
    //     alert('Enter the valid Text or URL to Generate your QR Code');
    // }
})

// Size Management Area...

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyInput();
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }else{
    //     alert('Enter the valid Text or URL to Generate your QR Code');
    // }
})

// QR Code Download Area...

downloadBtn.addEventListener('click', (e) => {
    let img = document.querySelector('.qr-body img');
    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute('href', imgAtrr);
    }
    else{
        downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL}`);
    }
})

// QR Code Generate Area...

const generateQRCode = () => {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorLight: "#fff",
        colorDark: "#000"
    })
}

const isEmptyInput = (e) => {
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }else{
    //     alert('Enter the valid Text or URL to Generate your QR Code');
    // }
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the valid Text or URL to Generate your QR Code");
}

