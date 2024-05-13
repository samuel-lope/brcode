import { QrCodePix } from '../src';

const qrCodePix = QrCodePix({
    version: '01',
    key: 'pix.efi@sa.arq.br', //or any PIX key
    name: 'SAMUEL LOPES',
    city: 'BRASILIA',
    txId: '--wd10s1egpa--',
    // message: 'Pay me :)',
    // cep: '70000000',
    // value: 150.99,
});

console.log(qrCodePix.payload());

qrCodePix.base64().then((res) => {
    const ImgBase64 = res;
    console.log(ImgBase64);
});
