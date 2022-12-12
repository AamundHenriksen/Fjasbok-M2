function loginView() {
    let html = ""

    html += `
    <div class="container">

        <div class="heading-section">
            <h1>Henriksenbook</h1>
            <h2>Henriksenbook helps you stay in touch and share experiences with the people in your life.</h2>
        </div>

        <div class="login-section">

            <div class="input-section">
                <input type="text" placeholder="Username" onchange="loginUsername(this.value)">
                <input type="password" placeholder="Password" onchange="loginPassword(this.value)">
            </div>

            <div class="login-btn-section">
                <button onclick="loginAccount()">Login</button>
                <a href="forgot-password.html">Forgot password?</a>
            </div>

            <div class="new-account-btn-section">
                <a class="new-account-btn" href="register-account.html">Create new account</a>
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
    <div class="container">

        <div class="register-section">

            <div class="heading-section">
                <h1>Register</h1>
                <h2>It's quick and easy.</h2>
            </div>



            <div class="input-section">
                <input type="text" maxlength="35" placeholder="Choose username" onchange="createUsername(this.value)">
                <input type="password" maxlength="55" placeholder="Choose password" onchange="createPassword(this.value)">
            </div>

            <div class="btn-section">
                <button onclick="registerAccount()">Register</button>
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
            <h1 class="logo" onclick="location.pathname='/home-page.html'">h</h1>
        </header>

        <div class="container">

            <div class="left-section">

                <div class="my-profile" onclick="location.pathname='/profile-page.html'">
                    <img class="pfp-small" src="images/blank-pfp.jpg"><span>${profileUsername()}</span>
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
            <h1 class="logo" onclick="location.pathname='/home-page.html'">h</h1>
        </header>

        <div class="container">


            <div class="profile-section-large">
                <img class="pfp-large" src="images/blank-pfp.jpg">
                <h1>${profileUsername()}</h1>
            </div>



            <div class="nav-section">
                <div class="nav-posts" onclick="displaySection1()">
                    <span>Posts</span>
                </div>

                <div class="nav-about" onclick="displaySection2()">
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
                        <textarea id="textArea" placeholder="What are you thinking about?" maxlength="300" rows="4" cols="28"></textarea>
                    </div>



                    <div class="publish-post-section">
                        <input class="publish-btn" type="submit" value="Publish" onclick="inProgressMessage()">
                    </div>

                </div>

                <span class="in-progress" style="display:none">In progress... 😄</span>

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
                        <i class="fa-solid fa-pen" onclick="editingPen(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>From</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInput(this, this.value)" value="${from()}" autocomplete="off">
                        <span class="output-info" onclick="changeInput(this)">${from()}</span>
                        <i class="fa-solid fa-pen" onclick="editingPen(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <span>University/College:</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInput(this, this.value)" value="${universityCollege()}" autocomplete="off">
                        <span class="output-info" onclick="changeInput(this)">${universityCollege()}</span>
                        <i class="fa-solid fa-pen" onclick="editingPen(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Workplace:</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInput(this, this.value)" value="${workplace()}" autocomplete="off">
                        <span class="output-info" onclick="changeInput(this)">${workplace()}</span>
                        <i class="fa-solid fa-pen" onclick="editingPen(this)"></i>
                    </div>

                </div>

            </div>

        </div> 
        `
    app.innerHTML = html
}
