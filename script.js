function generateQRCode(data_input) {
    document.getElementById('textbox').style.display = 'none';
    document.getElementById('textbox1').style.display = 'none';
    document.getElementById('barcode').src = '';
  
    const imgbox = document.getElementById('imgbox');
    imgbox.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data_input;
  }
  
  function generateBarcode(data_input) {
    document.getElementById('textbox').style.display = 'none';
    document.getElementById('textbox1').style.display = 'none';
    document.getElementById('imgbox').src = '';
  
    JsBarcode("#barcode", data_input, {
      format: 'code128',
      displayValue: true,
    });
  }
  
  function encryptData(data_input) {
    document.getElementById('imgbox').src = '';
    document.getElementById('barcode').src = '';
  
    var encodedstring = window.btoa(data_input);
    document.getElementById('textbox').value = encodedstring;
    document.getElementById('textbox').style.display = 'block';
    document.getElementById('textbox1').style.display = 'none';
  }
  
  function decryptData(data_input) {
    document.getElementById('imgbox').src = '';
    document.getElementById('barcode').src = '';
  
    var decodedstring = window.atob(data_input);
    document.getElementById('textbox1').value = decodedstring;
    document.getElementById('textbox1').style.display = 'block';
    document.getElementById('textbox').style.display = 'none';
  }
  
  function generateData() {
    const inputData = document.getElementById('data_input').value;
    if (inputData == '') {
      alert('Please enter some data before generating.');
      return false;
    }
  
    const generatorType = document.getElementById('generator-type').value;
    switch (generatorType) {
      case 'qr':
        generateQRCode(inputData);
        break;
      case 'barcode':
        generateBarcode(inputData);
        break;
      case 'encryption':
        encryptData(inputData);
        break;
      case 'decryption':
        decryptData(inputData);
        break;
      default:
        console.log('Invalid generator type');
    }
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    generateData();
  });
  