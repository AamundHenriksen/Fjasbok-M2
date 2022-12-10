// Updates view
updateView()
function updateView() {
    location.pathname === "/index.html" ? loginView()

    : location.pathname === "/register-account.html" ? registerView()

    : location.pathname === "/home-page.html" ? homePageView()

    : location.pathname === "/profile-page.html" ? profilePageView()
    
    : console.log("ERROR: Page doesn't exist.")
}

// Display posts section
function displaySection1() {
    if (postsSection.style.display === "none") {
        postsSection.style.display = "block"
        aboutSection.style.display = "none"
        return 
    }
}

// Display about section
function displaySection2() {
    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block"
        postsSection.style.display = "none"
        return 
    }
}

// Username
function username(inputName) {
    if (localStorage["account"]) {
        const account = JSON.parse(localStorage.getItem("account"))

        if (inputName === account.name) {
            return loginUsername = true
        }
    }

    return loginUsername = false
}

// Password
function password(inputPassword) {
    if (localStorage["account"]) {
        const account = JSON.parse(localStorage.getItem("account"))

        if (inputPassword === account.password) {
            return loginPassword = true
        }
    }

    return loginPassword = false
}

// Login
function loginAccount() {
    if (loginUsername && loginPassword) {
        login = true

        if (login) {
            return location.pathname = "/home-page.html"
        }
    }

    return console.log("Incorrect username/password.")
}

// Create username
function createUsername(newInputName) {
    if (!newInputName) {
        delete user.name
        return console.log("Empty name is not valid.")
    }
    
    return user.name = newInputName
}

// Create password
function createPassword(newInputPassword) {
    if (!newInputPassword) {
        delete user.password
        return console.log("Empty password is not valid.")
    }
    
    return user.password = newInputPassword
}

// Register account
function registerAccount() {
    if (user.name && user.password) {
        register = true

        if (register) {
            newAccount()
            localStorage.setItem("account", JSON.stringify(user))
            return location.pathname = "/index.html"
        }
    }
}

// Clearing old data
function newAccount() {
    return localStorage.clear()
}

// Profile name
function profileName() {
    const account = JSON.parse(localStorage.getItem("account"))
    return account.name
}

// Switch bio display
function switchBioDisplay() {
    if (bioContent.style.display === "none") {
        bioBtn.style.display = "none"
        bioContent.style.display = "block"
        return
    }

    bioContent.style.display = "none"
    bioBtn.style.display = "block"
    return
}

// Save bio input
function saveBioInput(textInput) {
    return localStorage.setItem("bio", JSON.stringify(textInput))
}

// Bio
function bio() {
    if (!localStorage["bio"]) {
        return ""
    }

    return JSON.parse(localStorage.getItem("bio"))
}

// Change input
function changeInput(element) {
    for (let i = 0; i < outputInfo.length; i++) {

        if (element === outputInfo[i]) {
            outputInfo[i].style.display = "none"
            inputInfo[i].style.display = "block"
        }
    }
}

// Save input
function saveInput(inputField, inputValue) {
    for (let i = 0; i < inputInfo.length; i++) {

        if (inputField === inputInfo[i]) {

            inputInfo[i].style.display = "none"
            outputInfo[i].style.display = "block"
            outputInfo[i].innerHTML = inputValue

            i === 0 ? localStorage.setItem("place_of_residence", JSON.stringify(inputValue))

            : i === 1 ? localStorage.setItem("from", JSON.stringify(inputValue))

            : i === 2 ? localStorage.setItem("university_college", JSON.stringify(inputValue))

            : i === 3 ? localStorage.setItem("workplace", JSON.stringify(inputValue))

            : ""
        }
    }
}

// Editing pen
function editingPen(penElement) {
    for (let i = 0; i < penIcon.length; i++) {

        if (penElement === penIcon[i]) {

            if (inputInfo[i].style.display === "block") {

                inputInfo[i].style.display = "none"
                outputInfo[i].style.display = "block"
                return

            } else {

                inputInfo[i].style.display = "block"
                outputInfo[i].style.display = "none"
                return 
            }
        }
    }
}

// Place of residence
function placeOfResidence() {
    if (!localStorage["place_of_residence"]) {
        return ""
    }

    return JSON.parse(localStorage.getItem("place_of_residence"))
}

// From
function from() {
    if (!localStorage["from"]) {
        return ""
    }

    return JSON.parse(localStorage.getItem("from"))
}

// University/college
function universityCollege() {
    if (!localStorage["university_college"]) {
        return ""
    }

    return JSON.parse(localStorage.getItem("university_college"))
}

// Workplace
function workplace() {
    if (!localStorage["workplace"]) {
        return ""
    }

    return JSON.parse(localStorage.getItem("workplace"))
}

// In progress message :D
function inProgressMessage() {
    return document.getElementsByClassName("in-progress")[0].style.display = "inline"
}


























