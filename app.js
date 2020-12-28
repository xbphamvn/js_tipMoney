//Constants
const SHARE_ZERO = 0;
const SHARE_ONE = 1;
const SATIFY_ZERO = 0;

//Global
var domSel = function (id) {
    return document.querySelector(id);
}

//Calculate total
var calculateTotal = function () {
    var billamt = domSel("#billamt").value;
    var satify = Number(domSel("#serviceQual").value);
    if (billamt.trim() === "" || satify === SATIFY_ZERO || billamt < 0) {
        return alert('Vui lòng nhập số tiền lớn hơn 0 hoặc chọn lại mức độ hài lòng!');
    } else {
        return Number(billamt) * satify;
    }
}

var getShareValue = function () {
    var sharePersons = Number(domSel("#peopleamt").value);
    if (sharePersons < SHARE_ZERO) {
        return alert('Vui lòng kiểm tra lại! Số người share phải lớn hơn 0!');
    } else if (sharePersons <= SHARE_ONE) {
        domSel("#each").style.display = "none";
        return SHARE_ONE;
    } else {
        domSel("#each").style.display = "block";
        return sharePersons;
    }
}

//Total after share
var totalAfterShare = function () {
    var total = calculateTotal();
    var sharePersons = getShareValue();
    return (total / sharePersons).toFixed(2);
}

//Hide content tip
domSel("#totalTip").style.display = "none";

//Render
domSel("#calculate").onclick = function () {
    var totalTip = totalAfterShare();
    if (totalTip > 0) {
        domSel("#tip").innerHTML = totalTip;
        domSel("#totalTip").style.display = "block";
    }
}