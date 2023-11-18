function validateForm() {
    let x = document.forms['myForm']['fname'].value;
    let y = document.forms['myForm']['lname'].value;
    let z = document.forms['myForm']['email'].value;
    let a = document.forms['myForm']['message'].value;
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(a);
    if (x=='' || y=='' || z=='' || a=='') {
        alert("All input boxes must be filled out.");
        console.log("A");
        return false;
    }

    for (char in x) {
        if (char in [0,1,2,3,4,5,6,7,8,9]) {
            alert("First name should not have digits");
            console.log("B");
            return false;
        }
    }

    for (char in y) {
        if (char in [0,1,2,3,4,5,6,7,8,9,0]) {
            alert("Last name should not have digits");
            console.log("C");
            return false;
        }
    }

    for (char in y) {
        if (char == '') {
            console.log('possible space')
        }
    }
    return true;
}
document.getElementById('message').style.color='black';
document.getElementById('message').style.textAlign='left';
console.log("D");

function sendMessage() {
    if (validateForm()==True) {
        console.log("E");
        alert("Your message has been sent!");
    }
}
