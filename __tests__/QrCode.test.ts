import { QrCodePix } from '../src/index';

describe('QRCode PIX Generate', () => {
    it('01 - Basic Payload', async () => {
        const response = await QrCodePix({
            version: 1,
            key: 'test@mail.com.br',
            name: 'Fulano de Tal',
            city: 'SAO PAULO',
        });
        expect(response).toStrictEqual(test01);
    });
    it('02 - Basic - Currency', async () => {
        const response = await QrCodePix({
            version: 1,
            key: 'test@mail.com.br',
            name: 'Fulano de Tal',
            city: 'SAO PAULO',
            currency: 986,
        });
        expect(response).toStrictEqual(test02);
    });
    it('03 - Basic - Value', async () => {
        const response = await QrCodePix({
            version: 1,
            key: 'test@mail.com.br',
            name: 'Fulano de Tal',
            city: 'SAO PAULO',
            value: 100.99,
        });
        expect(response).toStrictEqual(test03);
    });
    it('04 - Basic - countryCode', async () => {
        const response = await QrCodePix({
            version: 1,
            key: 'test@mail.com.br',
            name: 'Fulano de Tal',
            city: 'SAO PAULO',
            countryCode: 'BR',
        });
        expect(response).toStrictEqual(test04);
    });
    it('05 - Basic - cep', async () => {
        const response = await QrCodePix({
            version: 1,
            key: 'test@mail.com.br',
            name: 'Fulano de Tal',
            city: 'SAO PAULO',
            cep: '85000100',
        });
        expect(response).toStrictEqual(test05);
    });
    it('06 - Basic - guid', async () => {
        const response = await QrCodePix({
            version: 1,
            key: 'test@mail.com.br',
            name: 'Fulano de Tal',
            city: 'SAO PAULO',
            guid: 'my_guid',
        });
        expect(response).toStrictEqual(test06);
    });
    it('07 - Basic - message', async () => {
        const response = await QrCodePix({
            version: 1,
            key: 'test@mail.com.br',
            name: 'Fulano de Tal',
            city: 'SAO PAULO',
            message: 'is my message :)',
        });
        expect(response).toStrictEqual(test07);
    });
    it('08 - Basic - notRepeatPayment', async () => {
        const response = await QrCodePix({
            version: 1,
            key: 'test@mail.com.br',
            name: 'Fulano de Tal',
            city: 'SAO PAULO',
            notRepeatPayment: true,
        });
        expect(response).toStrictEqual(test08);
    });
});

const test01 = {
    payload: '00020101021126380014BR.GOV.BCB.PIX0116test@mail.com.br5204000053039865802BR5913Fulano de Tal6009SAO PAULO630434FE',
    qrCode:
        'data:image/png;base64,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',
};

const test02 = {
    payload: '00020101021126380014BR.GOV.BCB.PIX0116test@mail.com.br5204000053039865802BR5913Fulano de Tal6009SAO PAULO630434FE',
    qrCode:
        'data:image/png;base64,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',
};

const test03 = {
    payload: '00020101021126380014BR.GOV.BCB.PIX0116test@mail.com.br5204000053039865406100.995802BR5913Fulano de Tal6009SAO PAULO6304442D',
    qrCode:
        'data:image/png;base64,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',
};

const test04 = {
    payload: '00020101021126380014BR.GOV.BCB.PIX0116test@mail.com.br5204000053039865802BR5913Fulano de Tal6009SAO PAULO630434FE',
    qrCode:
        'data:image/png;base64,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',
};

const test05 = {
    payload: '00020101021126380014BR.GOV.BCB.PIX0116test@mail.com.br5204000053039865802BR5913Fulano de Tal6009SAO PAULO61088500010063047B55',
    qrCode:
        'data:image/png;base64,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',
};

const test06 = {
    payload: '00020101021126380014BR.GOV.BCB.PIX0116test@mail.com.br5204000053039865802BR5913Fulano de Tal6009SAO PAULO62110507my_guid63045CAB',
    qrCode:
        'data:image/png;base64,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',
};

const test07 = {
    payload: '00020101021126580014BR.GOV.BCB.PIX0116test@mail.com.br0216is my message :)5204000053039865802BR5913Fulano de Tal6009SAO PAULO6304A2D',
    qrCode:
        'data:image/png;base64,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',
};

const test08 = {
    payload: '00020101021226380014BR.GOV.BCB.PIX0116test@mail.com.br5204000053039865802BR5913Fulano de Tal6009SAO PAULO6304DC67',
    qrCode:
        'data:image/png;base64,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',
};
