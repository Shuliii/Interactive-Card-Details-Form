const cardholdername = document.querySelector('#cardholdername');
const cardholdernamedisplay = document.querySelector('.cardholdername-display');
const cardnumber = document.querySelector('#cardnumber');
const cardnumberdisplay = document.querySelector('.cardnumber-display');
const expmm = document.querySelector('.exp-mm');
const expyy = document.querySelector('.exp-yy');
const expmmdisplay = document.querySelector('.expdate-mm-display');
const expyydisplay = document.querySelector('.expdate-yy-display');
const cvc =  document.querySelector('.cvc-number');
const cvcdisplay = document.querySelector('.cvc-display');

const confirm = document.querySelector('.confirm');
const continueBtn = document.querySelector('.continue');

function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0')
}

cardholdername.addEventListener('keyup', () => {
    let value = cardholdername.value;
    cardholdernamedisplay.innerHTML= value;
})

cardnumber.addEventListener('keyup', () => {
    let value = cardnumber.value;
    value = addLeadingZeros(value, 16)
    value = value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    
    cardnumberdisplay.innerHTML = value;
})

expmm.addEventListener('keyup', () => {
    let value = expmm.value;
    value = addLeadingZeros(value, 2);
    expmmdisplay.innerHTML = value;
})

expyy.addEventListener('keyup', () => {
    let value = expyy.value;
    value = addLeadingZeros(value, 2)
    expyydisplay.innerHTML = value;
})

cvc.addEventListener('keyup', () => {
    let value = cvc.value;
    cvcdisplay.innerHTML = value;
})

function validateCC(number) {
    return /^[0-9]+$/.test(number);
}

confirm.addEventListener('click', (e) => {
    e.preventDefault();

    let cardnumbererrormsg = document.querySelector('.cardnumber-error-msg');
    let cardnumbererrormsg2 = document.querySelector('.cardnumber-error-msg2');
    let carddetailserrormsg = document.querySelector('.carddetails-error-msg');
    let carddetailserrormsg2 = document.querySelector('.carddetails-error-msg-2');
    let cvcerrormsg = document.querySelector('.cvc-error-msg');

    let number = validateCC(cardnumber.value);

    if (cardnumber.value.length < 16) {
        !cardnumber.classList.contains('active') && cardnumber.classList.add('active')
        cardnumber.focus();
        !cardnumbererrormsg2.classList.contains('active') && cardnumbererrormsg2.classList.add('active')
        return
    } else {
        cardnumber.classList.contains('active') && cardnumber.classList.remove('active')
        cardnumbererrormsg2.classList.contains('active') && cardnumbererrormsg2.classList.remove('active')
    }

    if (number === false) {
        !cardnumber.classList.contains('active') && cardnumber.classList.add('active')
        cardnumber.focus();
        !cardnumbererrormsg.classList.contains('active') && cardnumbererrormsg.classList.add('active')
        return
    } else {
        cardnumber.classList.contains('active') && cardnumber.classList.remove('active')
        cardnumbererrormsg.classList.contains('active') && cardnumbererrormsg.classList.remove('active')
    }

    if (expmm.value.length === 0) {
        !expmm.classList.contains('active') && expmm.classList.add('active')
        expmm.focus();
        !carddetailserrormsg.classList.contains('active') && carddetailserrormsg.classList.add('active')
        return
    } else {
        expmm.classList.contains('active') && expmm.classList.remove('active')
        carddetailserrormsg.classList.contains('active') && carddetailserrormsg.classList.remove('active')
    }

    if (expmm.value < 1 || expmm.value > 12) {
        !expmm.classList.contains('active') && expmm.classList.add('active')
        expmm.focus();
        !carddetailserrormsg2.classList.contains('active') && carddetailserrormsg2.classList.add('active')
        return
    } else {
        expmm.classList.contains('active') && expmm.classList.remove('active')
        carddetailserrormsg2.classList.contains('active') && carddetailserrormsg2.classList.remove('active')
    }

    if (expyy.value.length === 0) {
        !expyy.classList.contains('active') && expyy.classList.add('active')
        expyy.focus();
        !carddetailserrormsg.classList.contains('active') && carddetailserrormsg.classList.add('active')
        return
    } else {
        expyy.classList.contains('active') && expyy.classList.remove('active')
        carddetailserrormsg.classList.contains('active') && carddetailserrormsg.classList.remove('active')
    }

    if (expyy.value < 22 || expyy.value > 32) {
        !expyy.classList.contains('active') && expyy.classList.add('active')
        expyy.focus();
        !carddetailserrormsg2.classList.contains('active') && carddetailserrormsg2.classList.add('active')
        return
    } else {
        expyy.classList.contains('active') && expyy.classList.remove('active')
        carddetailserrormsg2.classList.contains('active') && carddetailserrormsg2.classList.remove('active')
    }

    if (cvc.value.length === 0) {
        !cvc.classList.contains('active') && cvc.classList.add('active')
        cvc.focus();
        !cvcerrormsg.classList.contains('active') && cvcerrormsg.classList.add('active')
        return
    } else {
        cvc.classList.contains('active') && cvc.classList.remove('active')
        cvcerrormsg.classList.contains('active') && cvcerrormsg.classList.remove('active')
    }

    document.querySelector('.form').classList.toggle('vanish')
    document.querySelector('.thankyou').classList.toggle('vanish')
})

continueBtn.addEventListener('click', () => {
    location.reload();
})