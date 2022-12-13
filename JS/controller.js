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
function loginUsername(inputUsername) {
    if (localStorage["account_username"]) {
        const account_username = JSON.parse(localStorage.getItem("account_username"))

        if (inputUsername === account_username) {
            return account_login.username = true
        }
    }

    return account_login.username = false
}

// Password
function loginPassword(inputPassword) {
    if (localStorage["account_password"]) {
        const account_password = JSON.parse(localStorage.getItem("account_password"))

        if (inputPassword === account_password) {
            return account_login.password = true
        }
    }

    return account_login.password = false
}

// Login
function loginAccount() {
    if (account_login.username && account_login.password) {
        account_login.login = true

        if (account_login.login) {
            return location.replace("/home-page.html")
        }
    }

    return console.log("Incorrect username/password.")
}

// Create username
function createUsername(inputUsername) {
    if (!inputUsername) {
        delete create_account.username
        return console.log("Empty name is not valid.")
    }
    
    return create_account.username = inputUsername
}

// Create password
function createPassword(inputPassword) {
    if (!inputPassword) {
        delete create_account.password
        return console.log("Empty password is not valid.")
    }
    
    return create_account.password = inputPassword
}

// Register account
function registerAccount() {
    if (create_account.username && create_account.password) {
        create_account.register = true

        if (create_account.register) {
            clearOldData()
            localStorage.setItem("account_username", JSON.stringify(create_account.username))
            localStorage.setItem("account_password", JSON.stringify(create_account.password))

            return location.replace("/index.html")
        }
    }
}

// Clears old data
function clearOldData() {
    return localStorage.clear()
}

// Profile username
function profileUsername() {
    const account_username = JSON.parse(localStorage.getItem("account_username"))
    return account_username
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
function saveBioInput(inputText) {
    return localStorage.setItem("bio", JSON.stringify(inputText))
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

// Drop down menu
function dropdownMenu() {
    if (dropdownSection.style.display === "block") {
        return dropdownSection.style.display = "none" 
    }

    dropdownSection.style.display = "block"
}

// Logout
function logoutAccount() {
    location.replace("/index.html")
}

// Publish post
function publishPost() {
    if (!textArea.value) { return }

    postsArr.push(textArea.value)
    textArea.value = ""

    let myPosts = ""
    for (let i = 0; i < postsArr.length; i++) {
        myPosts += `
        <div class="published-posts" onclick="deletePost(this, this.innerHTML)">${postsArr[i]}</div>
        `
    }

    publishedPostsSection.innerHTML = myPosts
}

// Delete post
function deletePost(element, post) {
    element.remove()
    postsArr.splice(postsArr.indexOf(post), 1)
}





























