function loginPage() {
    model.currentPage = "login"
    updateView()
}

function registerPage() {
    model.currentPage = "register"
    updateView()
}

function homePage() {
    model.currentPage = "home"
    updateView()
}

function myProfilePage() {
    model.currentPage = "my-profile"
    updateView()
}

function hermanProfilePage() {
    model.currentPage = "herman-profile"
    updateView()
}

function pederProfilePage() {
    model.currentPage = "peder-profile"
    updateView()
}

function sondreProfilePage() {
    model.currentPage = "sondre-profile"
    updateView()
}

// Update view
updateView()
function updateView() {
    model.currentPage === "login" ? loginView()
    
    : model.currentPage === "register" ? registerView()

    : model.currentPage === "home" ? homePageView()

    : model.currentPage === "my-profile" ? myProfilePageView()

    : model.currentPage === "herman-profile" ? hermanProfilePageView()

    : model.currentPage === "peder-profile" ? pederProfilePageView()

    : model.currentPage === "sondre-profile" ? sondreProfilePageView()
    
    : console.log("ERROR: Page doesn't exist.")
}

// Display posts section
function displayPostsSection() {
    if (postsSection.style.display === "none") {
        postsSection.style.display = "block"
        aboutSection.style.display = "none"
        return 
    }
}

// Display about section
function displayAboutSection() {
    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block"
        postsSection.style.display = "none"
        return 
    }
}

// Username
function loginUsername(inputUsername) {
        if (inputUsername === account[0].username) {
            return model.login_page_input.username = true
        }

    return model.login_page_input.username = false
}

// Password
function loginPassword(inputPassword) {
        if (inputPassword === account[0].password) {
            return model.login_page_input.password = true
        }

    return model.login_page_input.password = false
}

// Login
function loginAccount() {
    if (model.login_page_input.username && model.login_page_input.password === true) {
        return homePage()
    }

    return console.log("Incorrect username/password.")
}

// Create username
function createUsername(inputUsername) {
    
    if (!inputUsername) {
        console.log("Empty username is not valid.")
        return model.register_page_input.username = ""
    }
    
    return model.register_page_input.username = inputUsername
}

// Create password
function createPassword(inputPassword) {
    if (!inputPassword) {
        console.log("Empty password is not valid.")
        return model.register_page_input.password = ""
    }
    
    return model.register_page_input.password = inputPassword
}

// Register account
function registerAccount() {
    if (model.register_page_input.username && model.register_page_input.password) {

            account[0].username = model.register_page_input.username
            account[0].password = model.register_page_input.password
            loginPage()

            model.register_page_input.username = ""
            model.register_page_input.password = ""
            return
    }

    return console.log("Empty username/password is not valid")
}

// Save info
function saveInfo(element, inputValue) {
    for (let i = 0; i < inputInfo.length; i++) {

        if (element === inputInfo[i]) {

            inputInfo[i].style.display = "none"
            outputInfo[i].style.display = "block"

            outputInfo[i].innerHTML = inputValue

            i === 0 ? account[0].place_of_residence = inputValue

            : i === 1 ? account[0].from = inputValue

            : i === 2 ? account[0].university_college = inputValue

            : i === 3 ? account[0].workplace = inputValue
            
            : ""
        }
    }
}

// Edit info
function editInfo(element) {
    for (let i = 0; i < editIcon.length; i++) {

        if (element === editIcon[i]) {

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

// Drop down menu
function dropdownMenu() {
    if (dropdownSection.style.display === "block") {
        return dropdownSection.style.display = "none" 
    }

    dropdownSection.style.display = "block"
}

// Logout
function logoutAccount() {
    model.currentPage = "login"
    updateView()
    location.reload()
}

// Publish post
function publishPost() {
    if (!textArea.value) { return }

        account[0].posts_arr.push(textArea.value)
        textArea.value = ""
        updateView()
}

// Delete post
function deletePost(element) {
    for (let i = deleteIcon.length; i >= 0; i--) {

        if (element === deleteIcon[i]) {
            account[0].posts_arr.reverse().splice(i, 1)
            account[0].posts_arr.reverse()
            publishedPost[i].remove()
        }
    }
}