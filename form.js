var selectedRecord = null;
var rb1, rb2;
var myArray = []
let imageDisplay = document.getElementById('imageDisplay');
let input = document.getElementById("image");
input.addEventListener("change", (event) => {
    let imageFile = event.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(imageFile)
    reader.onload = (event) => {
        let imageUrl = event.target.result
        let image = document.createElement("img")
        image.src = imageUrl
        imageDisplay.innerHTML = '<img src="' + imageUrl + '" alt="User Image" style="max-width: 50px;max-height: 50px;">';
    }
})
//....................................validation............................................


function validation() {
    var fname = document.getElementById("fname").value;
    if (fname == "") {
        document.getElementById("fname_err").innerHTML = "<span style='color:red'>Enter First name.</span>";
    } else {
        document.getElementById("fname_err").innerHTML = "";
    }

    //...............................................................................................................
    var lname = document.getElementById("lname").value;
    if (lname == "") {
        document.getElementById("lname_err").innerHTML = "<span style='color:red'>Enter Last name.</span>";
    } else {
        document.getElementById("lname_err").innerHTML = "";
    }


    //...............................................................................................................
    var email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("email_err").innerHTML = "<span style='color:red'>Enter email.</span>";
    } else {
        document.getElementById("email_err").innerHTML = "";
    }

    //radio button print.........................................................................................
    rb1 = document.getElementById("male");
    rb2 = document.getElementById("female");
    if (rb1.checked == true) {
        var r = (rb1.value);
    } else {
        var r = (rb2.value);
    }
    //radio button validation.....................................................................................
    if (document.getElementById('male').checked == false && document.getElementById('female').checked == false) {
        document.getElementById("radio_err").innerHTML = "<span style='color:red'>Select Gender</span>";
    } else {
        document.getElementById("radio_err").innerHTML = "";
    }


    //...............................................................................................................
    var password = document.getElementById("pwd").value;
    if (password == "") {
        document.getElementById("pwd_err").innerHTML = "<span style='color:red'>Enter password.</span>";
    } else {
        document.getElementById("pwd_err").innerHTML = "";
    }

    //...............................................................................................................
    var date = document.getElementById("date").value;
    if (email == "") {
        document.getElementById("date_err").innerHTML = "<span style='color:red'>Select date</span>";
    } else {
        document.getElementById("date_err").innerHTML = "";
    }

    //drop down validation......................................................................................
    var std = document.getElementById("std").value;
    if (std == 0) {
        document.getElementById("std_err").innerHTML = "<span style='color:red'>Select Standard.</span>";
    } else {
        document.getElementById("std_err").innerHTML = "";
    }

    //...............................................................................................................
    var phone = document.getElementById("phone").value;
    if (phone == "") {
        document.getElementById("phone_err").innerHTML = "<span style='color:red'>Enter phone number.</span>";
    } else {
        document.getElementById("phone_err").innerHTML = "";
    }

    
    //...............................................................................................................
    var add = document.getElementById("add").value;
    if (add == "") {
        document.getElementById("add_err").innerHTML = "<span style='color:red'>Enter address.</span>";
    } else {
        document.getElementById("add_err").innerHTML = "";
    }

    //...............................................................................................................
    var state = document.getElementById("state").value;
    if (state == "") {
        document.getElementById("state_err").innerHTML = "<span style='color:red'>Enter state.</span>";
    } else {
        document.getElementById("state_err").innerHTML = "";
    }

    //...............................................................................................................
    var city = document.getElementById("city").value;
    if (city == "") {
        document.getElementById("city_err").innerHTML = "<span style='color:red'>Enter city.</span>";
    } else {
        document.getElementById("city_err").innerHTML = "";
    }

    //checkbox print loop........................................................................................
    var cb = document.getElementsByName('hobby');
    var result = " ";
    for (var i = 0; i < cb.length; i++) {
        if (cb[i].checked) {
            result = result + cb[i].value + ", ";

        }
    }

    //checkbox validation.........................................................................................
    var check = document.myform.hobby;
    var a = false;
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            a = true
        }
    }

    if (a) {
        document.getElementById("hobby_err").innerHTML = "";
    } else {
        document.getElementById("hobby_err").innerHTML = "<span style='color:red'>Select hobby</span>";
    }

    //.............................................image print....................................................
    var image = document.getElementById("image").value;



    //print on console ..............................................................................................
    console.log("Your first name is :", fname);
    console.log("Your last name is :", lname);
    console.log("Your Email ID is :", email);
    console.log("You are", r);
    console.log("Your password is :", password);
    console.log("Your birthdate is :", date);
    console.log("You are in " + std + " standard.");
    console.log("Your phone number is :", phone);
    console.log("Your address is :", add);
    console.log("Your state is :", state);
    console.log("You are living in :", city);
    console.log("Your hobbies are " + result);
    console.log("Image:", image)


}


//..........................................display data........................................................................

var myArray = []
function displayData() {

    var table = "<table border='1'>"
    setTimeout(() => {
        for (var i = 0; i < myArray.length; i++) {
            table += '<tr>';
            table += '<td>' + myArray[i].id + '</td>';
            table += '<td>' + myArray[i].fname + '</td>';
            table += '<td>' + myArray[i].lname + '</td>';
            table += '<td>' + myArray[i].email + '</td>';
            table += '<td>' + myArray[i].gender + '</td>';
            table += '<td>' + myArray[i].pass + '</td>';
            table += '<td>' + myArray[i].date + '</td>';
            table += '<td>' + myArray[i].education + '</td>';
            table += '<td>' + myArray[i].phone + '</td>';
            table += '<td>' + myArray[i].address + '</td>';
            table += '<td>' + myArray[i].state + '</td>';
            table += '<td>' + myArray[i].city + '</td>';
            table += '<td>' + myArray[i].hobby + '</td>';
            table += '<td>' + myArray[i].image + '</td>';
            table += '<td>' + '<button  class="btn btn-primary" type="submit" id="editBtn" value="Edit" onclick="readData(' + myArray[i].id + ')">Edit</button>' + " " + '<button class="btn btn-danger" type="submit" id="deleteBtn" value="delete" onclick="deleteData(' + myArray[i].id + ')">Delete</button>' + '</td>';
            table += '</tr>';
        }
        document.getElementById('tableData').innerHTML = table;
    });
}


//..........................................................add record.......................................................

function addRecord() {
    var isvaild = true
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;

    //email exist................
    var emailVal = myArray.find(record => record.email === email);
    console.log(emailVal);

    if (emailVal) {
        document.getElementById('email_err').innerHTML = "<span style='color:red'>Email Already Exist...</span>";
        return false;
    }
    else {
        document.getElementById('email_err').innerHTML = "";

    }

    // ..........................................radio button.....................................

    rb1 = document.getElementById("male");
    rb2 = document.getElementById("female");
    if (rb1.checked) {
        var r = (rb1.value);
    } else {
        var r = (rb2.value);
    }
    var gender = r;
    // ...........................................................................................

    var pass = document.getElementById('pwd').value;
    var date = document.getElementById('date').value;
    var education = document.getElementById('std').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('add').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;


    //    ...................................................checkbox .............................................

    var cb = document.getElementsByName('hobby');
    var result = " ";
    for (var i = 0; i < cb.length; i++) {
        if (cb[i].checked) {
            result = result + cb[i].value + ", ";

        }
    }
    var hobby = result;

    console.log(fname == "" && lname == "" && email == "" && gender == "" && pass == "" && date == "" && education == "" && phone == "" && address == "" && state == "" && city == "" && hobby == "");
    // ........................................................push data..............................................
    if (!fname || !lname || !email || !gender || !pass || !date || !education || !phone || !address || !state || !city || !hobby) {
        return false;
    } else {
        var id = myArray.length + 1;
        console.log('Adding data with id:', id);
        myArray.push({ id: id, fname: fname, lname: lname, email: email, gender: gender, pass: pass, date: date, education: education, phone: phone, address: address, state: state, city: city, hobby: hobby, image: imageDisplay.innerHTML });
        displayData();
        saveData();
    }

    //....................................clear data........................................................
    var form = document.getElementById('formSubmit');

    form.addEventListener('submit', function () {
        form.reset();
        var imageDisplay = document.getElementById('imageDisplay');
        imageDisplay.innerHTML = '';
    });
}





//.................read data.....................................................................
var selectedIndex = -1;
function readData(index) {
    selectedIndex = index;
    var selectedRecord = myArray.find(record => record.id === index);
    if (selectedRecord) {
        document.getElementById('fname').value = selectedRecord.fname;
        document.getElementById('lname').value = selectedRecord.lname;
        document.getElementById('email').value = selectedRecord.email;
        document.getElementById(selectedRecord.gender).checked = true;
        document.getElementById('pwd').value = selectedRecord.pass;
        document.getElementById('date').value = selectedRecord.date;
        document.getElementById('std').value = selectedRecord.education;
        document.getElementById('phone').value = selectedRecord.phone;
        document.getElementById('add').value = selectedRecord.address;
        document.getElementById('state').value = selectedRecord.state;
        document.getElementById('city').value = selectedRecord.city;
        var checkBoxes = document.getElementsByName('hobby');
        checkBoxes.forEach(checkbox => checkbox.checked = false);

        var selectedHobbies = selectedRecord.hobby.split(',').map(item => item.trim());
        checkBoxes.forEach(checkbox => {

            if (selectedHobbies.includes(checkbox.value)) {
                checkbox.checked = true;
            }
        });
    }
    var imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.innerHTML = selectedRecord.image;
}




// .................................................update data ........................................................................

function updateData(index) {
    console.log('Updating record with id:', index);

    var updatedfName = document.getElementById('fname').value;
    var updatedlName = document.getElementById('lname').value;
    var updatedEmail = document.getElementById('email').value;

    //.............................................................. email already exists..............................................
    var selectedRecord = myArray.find(record => record.id === index);
    if (selectedRecord && selectedRecord.email === updatedEmail) {
        document.getElementById('email_err').innerHTML = "";
    } else {
        var updatedEmailVal = myArray.find(record => record.email === updatedEmail);
        console.log(updatedEmailVal);

        if (updatedEmailVal) {
            document.getElementById('email_err').innerHTML = "<span style='color:red'>Email Already Exist...</span>";
            return false;
        } else {
            document.getElementById('email_err').innerHTML = "";
        }
    }
    //..............................................................................................................

    var updatedGender = rb1.checked ? rb1.value : rb2.value;
    var updatedPassword = document.getElementById('pwd').value;
    var updatedDate = document.getElementById('date').value;
    var updatedEducation = document.getElementById('std').value;
    var updatedPhone = document.getElementById('phone').value;
    var updatedAddress = document.getElementById('add').value;
    var updatedState = document.getElementById('state').value;
    var updatedCity = document.getElementById('city').value;
    var updatedHobbies = [];
    var checkBoxes = document.getElementsByName('hobby');
    checkBoxes.forEach(checkbox => {
        if (checkbox.checked) {
            updatedHobbies.push(checkbox.value);
        }
    });
    //.....................................image..............................................
    var imageInput = document.getElementById("image");
    var updatedImage = selectedRecord.image;

    if (imageInput.files.length > 0) {
        let reader = new FileReader();
        reader.readAsDataURL(imageInput.files[0]);

        reader.onload = (event) => {
            let imageUrl = event.target.result;
            updatedImage = '<img src="' + imageUrl + '" alt="User Image" style="max-width: 50px;max-height: 50px;">';

            var recordIndex = myArray.findIndex(record => record.id === index);

            if (recordIndex !== -1) {
                myArray[recordIndex] = {
                    id: index,
                    fname: updatedfName,
                    lname: updatedlName,
                    email: updatedEmail,
                    gender: updatedGender,
                    pass: updatedPassword,
                    date: updatedDate,
                    education: updatedEducation,
                    phone: updatedPhone,
                    address: updatedAddress,
                    state: updatedState,
                    city: updatedCity,
                    hobby: updatedHobbies.join(', '),
                    image: updatedImage
                };
                displayData();
            } else {
                console.log('Record not found for id:', index);
            }

            // Reset form and image display
            var form = document.getElementById('formSubmit');
            form.reset();
            var imageDisplay = document.getElementById('imageDisplay');
            imageDisplay.innerHTML = '';
        };
    } else {
        var recordIndex = myArray.findIndex(record => record.id === index);

        if (recordIndex !== -1) {
            myArray[recordIndex] = {
                id: index,
                fname: updatedfName,
                lname: updatedlName,
                email: updatedEmail,
                gender: updatedGender,
                pass: updatedPassword,
                date: updatedDate,
                education: updatedEducation,
                phone: updatedPhone,
                address: updatedAddress,
                state: updatedState,
                city: updatedCity,
                hobby: updatedHobbies.join(', '),
                image: updatedImage
            };
            displayData();
            saveData();
        } else {
            console.log('Record not found for id:', index);
        }

        // Reset form..........................................................................
        var form = document.getElementById('formSubmit');
        form.reset();
        var imageDisplay = document.getElementById('imageDisplay');
        imageDisplay.innerHTML = '';
    }
}




// ...........................................delete data..........................................
function deleteData(id) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].id === id) {
            myArray.splice(i, 1);
            break;
        }
    }
    displayData();
    saveData();
}


function saveData() {
    localStorage.setItem('myArray', JSON.stringify(myArray));
};


function showData() {
    var savedData = localStorage.getItem('myArray');
    if (savedData) {
        myArray = JSON.parse(savedData);
        displayData();
    };
}
