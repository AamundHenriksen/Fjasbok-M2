function loginPage() {
    model.currentPage = "login"
    updateView()
}

function registerPage() {
    model.currentPage = "register"
    model.account_login.username = false
    model.account_login.password = false
    updateView()
}

function homePage() {
    model.currentPage = "home"
    updateView()
}

function profilePage() {
    model.currentPage = "profile"
    updateView()
}

// Update view
updateView()
function updateView() {
    model.currentPage === "login" ? loginView()
    
    : model.currentPage === "register" ? registerView()

    : model.currentPage === "home" ? homePageView()

    : model.currentPage === "profile" ? profilePageView()
    
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
        if (inputUsername === model.account.username) {
            return model.account_login.username = true
        }

    return model.account_login.username = false
}

// Password
function loginPassword(inputPassword) {
        if (inputPassword === model.account.password) {
            return model.account_login.password = true
        }

    return model.account_login.password = false
}

// Login
function loginAccount() {
    if (model.account_login.username && model.account_login.password) {
        model.account_login.login = true

        if (model.account_login.login) {
            return homePage()
        }
    }

    return console.log("Incorrect username/password.")
}

// Create username
function createUsername(inputUsername) {
    
    if (!inputUsername) {
        console.log("Empty name is not valid.")
        return model.create_account.username = ""
    }
    
    return model.create_account.username = inputUsername
}

// Create password
function createPassword(inputPassword) {
    if (!inputPassword) {
        console.log("Empty password is not valid.")
        return model.create_account.password = ""
    }
    
    return model.create_account.password = inputPassword
}

// Register account
function registerAccount() {
    if (model.create_account.username && model.create_account.password) {
        model.create_account.register = true

        if (model.create_account.register) {
            model.account.username = model.create_account.username
            model.account.password = model.create_account.password
            loginPage()

            // Clearing the inputs after the account is created
            model.create_account.username = ""
            model.create_account.password = ""
        }
    }
}

// Save info
function saveInfo(element, inputValue) {
    for (let i = 0; i < inputInfo.length; i++) {

        if (element === inputInfo[i]) {

            inputInfo[i].style.display = "none"
            outputInfo[i].style.display = "block"

            outputInfo[i].innerHTML = inputValue

            i === 0 ? model.account_info.place_of_residence = inputValue

            : i === 1 ? model.account_info.from = inputValue

            : i === 2 ? model.account_info.university_college = inputValue

            : i === 3 ? model.account_info.workplace = inputValue
            
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

        model.postsArr.push(textArea.value)
        textArea.value = ""
        model.commentsArr.length = model.postsArr.length
        updateView()
}

function deletePost(element) {
    for (let i = deleteIcon1.length; i >= 0; i--) {

        if (element === deleteIcon1[i]) {
            model.postsArr.reverse().splice(i, 1)
            model.postsArr.reverse()
            publishedPost[i].remove()
            model.commentsArr.length = model.postsArr.length
        }
    }

    if (model.postsArr.length === 0) { return publishedPostSection.style.display = "none"}
}

function commentPost(element) {

    for (let i = 0; i < commentField.length; i++) {

        if (element === commentField[i]) {
            model.commentsArr.reverse().splice(i, 1, commentField[i].value)
            model.commentsArr.reverse()
            updateView()
            profileComments[i].style.display = "block"
        }
    }
}

/*function deleteComment(element) {
    for (let i = 0; i < deleteIcon2.length; i++) {

        if (element === deleteIcon2[i]) {
            // In progress
        }
    }
}*/