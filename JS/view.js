function loginView() {
    let html = ""

    html += `
    <div class="login-container">

        <div class="login-heading-section">
            <h1 class="henriksenbook-h1">Henriksenbook</h1>
            <h2 class="login-motto">Henriksenbook helps you stay in touch and share experiences with the people in your life.</h2>
        </div>

        <div class="login-section">

            <div class="login-input-section">
                <input class="login-input" type="text" placeholder="Username" onchange="loginUsername(this.value)">
                <input class="login-input" type="password" placeholder="Password" onchange="loginPassword(this.value)">
            </div>

            <div class="login-btn-section">
                <button class="login-btn" onclick="loginAccount()">Login</button>
                <a onclick="console.log('In progress... 😄')">Forgot password?</a>
            </div>

            <div class="create-account-section">
                <button class="create-account-btn" onclick="registerPage()">Create new account</button>
            </div>

        </div>

    </div>

    <footer>
        <span class="copyright">Åmund Henriksen © 2022</span>
    </footer>
    `
    app.innerHTML = html
}

function registerView() {
    let html = ""

    html += `
    <div class="register-container">

        <div class="register-section">

            <div class="register-heading-section">
                <h1 class="register-h1">Register</h1>
                <h2 class="register-motto">It's quick and easy.</h2>
                <i class="fa-sharp fa-solid fa-xmark" onclick="loginPage()"></i>
            </div>



            <div class="register-input-section">
                <input class="register-input" type="text" maxlength="35" placeholder="Choose username" onchange="createUsername(this.value)">
                <input class="register-input" type="password" maxlength="55" placeholder="Choose password" onchange="createPassword(this.value)">
            </div>

            <div class="register-btn-section">
                <button class="register-btn" onclick="registerAccount()">Register</button>
            </div>

        </div>

    </div>

    <footer>
        <span class="copyright">Åmund Henriksen © 2022</span>
    </footer>
    `
    app.innerHTML = html
}

function homePageView() {
    let html = ""

    html += `
        <header>

            <h1 class="logo" onclick="homePage()">h</h1>
            <img class="header-pfp" onclick="dropdownMenu()" src="images/blank-pfp.jpg">

            <div id="dropdownSection" style="display:none">

                <div class="logout-section" onclick="logoutAccount()">
                    <i class="fa-solid fa-door-open"></i>
                    <span>Logout</span>
                </div>

            </div>

        </header>

        <div class="home-page-container">

            <div class="left-section">

                <div class="my-profile" onclick="profilePage()">
                    <img class="pfp-small" src="images/blank-pfp.jpg">
                    <span class="profile-name-small">${profileUsername()}</span>
                </div>

            </div>

            <div class="right-section">Right Section</div>

        </div>
    `
    app.innerHTML = html
}

function profilePageView() {
    let html = ""

    html += `
        <header>

            <h1 class="logo" onclick="homePage()">h</h1>
            <img class="header-pfp" onclick="dropdownMenu()" src="images/blank-pfp.jpg">

            <div id="dropdownSection" style="display:none">

                <div class="logout-section" onclick="logoutAccount()">
                    <i class="fa-solid fa-door-open"></i>
                    <span>Logout</span>
                </div>

            </div>

        </header>

        <div class="profile-page-container">


            <div class="profile-section-large">
                <img class="pfp-large" src="images/blank-pfp.jpg">
                <h1 class="profile-name-large">${profileUsername()}</h1>
            </div>



            <div class="profile-nav-section">
                <div class="profile-nav" onclick="displaySection1()">
                    <span>Posts</span>
                </div>

                <div class="profile-nav" onclick="displaySection2()">
                    <span>About</span>
                </div>
            </div>



            <div id="postsSection">

                <div class="create-post-section">

                    <div class="profile-section-small">
                        <img class="pfp-small" src="images/blank-pfp.jpg">
                        <span>${profileUsername()}</span>
                    </div>



                    <div class="text-area-section">
                        <textarea id="textArea" placeholder="What are you thinking about?" maxlength="500" rows="4" cols="28"></textarea>
                    </div>



                    <div class="publish-btn-section">
                        <input class="publish-btn" type="submit" onclick="publishPost()" value="Publish">
                    </div>

                </div>

                <div id="publishedPostSection" style="display:none"></div>

            </div>



            <div id="aboutSection" style="display:none">

                <div id="bioBtn" onclick="switchBioDisplay()">
                    <span>Bio</span>
                </div>

                <div id="bioContent" style="display:none">
                    <i class="fa-sharp fa-solid fa-circle-arrow-left" onclick="switchBioDisplay()"></i>
                    <textarea class="bio-text-area" maxlength="100" placeholder="Describe yourself" onfocusout="saveBioInput(this.value)">${bio()}</textarea>
                </div>



                <div class="profile-info-section">

                    <div class="profile-info">
                        <i class="fa-solid fa-house"></i>
                        <span>Place of residence:</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInput(this, this.value)" value="${placeOfResidence()}" autocomplete="off">
                        <span class="output-info" onclick="changeInput(this)">${placeOfResidence()}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>From</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInput(this, this.value)" value="${from()}" autocomplete="off">
                        <span class="output-info" onclick="changeInput(this)">${from()}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <span>University/College:</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInput(this, this.value)" value="${universityCollege()}" autocomplete="off">
                        <span class="output-info" onclick="changeInput(this)">${universityCollege()}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Workplace:</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInput(this, this.value)" value="${workplace()}" autocomplete="off">
                        <span class="output-info" onclick="changeInput(this)">${workplace()}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                </div>

            </div>

        </div> 
        `
    app.innerHTML = html
}