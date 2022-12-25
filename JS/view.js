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
                <input class="login-input" type="text" maxlength="34" placeholder="Username" onchange="loginUsername(this.value)">
                <input class="login-input" type="password" maxlength="55" placeholder="Password" onchange="loginPassword(this.value)">
            </div>

            <div class="login-btn-section">
                <button class="login-btn" onclick="loginAccount()">Login</button>
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
                <input class="register-input" type="text" maxlength="34" placeholder="Choose username" onchange="createUsername(this.value)" value="${model.register_page_input.username}">
                <input class="register-input" type="password" maxlength="55" placeholder="Choose password" onchange="createPassword(this.value)" value="${model.register_page_input.password}">
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

                <div class="profiles" onclick="myProfilePage()">
                    <img class="pfp-small" src="images/blank-pfp.jpg">
                    <span class="profile-name-small">${account[0].username}</span>
                </div>

                 <div class="profiles" onclick="hermanProfilePage()">
                    <img class="pfp-small" src="images/blank-pfp.jpg">
                    <span class="profile-name-small">${account[1].username}</span>
                </div>

                <div class="profiles" onclick="pederProfilePage()">
                    <img class="pfp-small" src="images/blank-pfp.jpg">
                    <span class="profile-name-small">${account[2].username}</span>
                </div>

                <div class="profiles" onclick="sondreProfilePage()">
                    <img class="pfp-small" src="images/blank-pfp.jpg">
                    <span class="profile-name-small">${account[3].username}</span>
                </div>

            </div>

            <div class="right-section">`
              for (let i = account[0].posts_arr.length - 1; i >= 0; i--) {

                    html += `
                    <div class="published-post">
        
                        <div class="top-section">
                            <div class="profile-section-small">
                                <img class="pfp-small" src="images/blank-pfp.jpg" onclick="myProfilePage()">
                                <span onclick="myProfilePage()">${account[0].username}</span>
                                <i class="fa-solid fa-trash-can" onclick="deletePost(this)"></i>
                            </div>
        
                            <div class="my-published-post">
                                <div>${account[0].posts_arr[i]}</div>
                            </div>
                        </div>

                    </div>
                    `
                }

                for (let i = account[1].posts_arr.length - 1; i >= 0; i--) {

                    html += `
                    <div class="published-post">
        
                        <div class="top-section">
                            <div class="profile-section-small">
                                <img class="pfp-small" src="images/blank-pfp.jpg" onclick="hermanProfilePage()">
                                <span onclick="hermanProfilePage()">${account[1].username}</span>
                            </div>
        
                            <div class="my-published-post">
                                <div>${account[1].posts_arr[i]}</div>
                            </div>
                        </div>

                    </div>
                    `
                }

                for (let i = account[2].posts_arr.length - 1; i >= 0; i--) {

                    html += `
                    <div class="published-post">
        
                        <div class="top-section">
                            <div class="profile-section-small">
                                <img class="pfp-small" src="images/blank-pfp.jpg" onclick="pederProfilePage()">
                                <span onclick="pederProfilePage()">${account[2].username}</span>
                            </div>
        
                            <div class="my-published-post">
                                <div>${account[2].posts_arr[i]}</div>
                            </div>
                        </div>

                    </div>
                    `
                }

                for (let i = account[3].posts_arr.length - 1; i >= 0; i--) {

                    html += `
                    <div class="published-post">
        
                        <div class="top-section">
                            <div class="profile-section-small">
                                <img class="pfp-small" src="images/blank-pfp.jpg" onclick="sondreProfilePage()">
                                <span onclick="sondreProfilePage()">${account[3].username}</span>
                            </div>
        
                            <div class="my-published-post">
                                <div>${account[3].posts_arr[i]}</div>
                            </div>
                        </div>

                    </div>
                    `
                }

                html += `
            </div>

        </div>
    `
    app.innerHTML = html
}

function myProfilePageView() {
    let html = ""

    html += `
        <header>

            <h1 class="logo" onclick="homePage()">h</h1>
            <img class="header-pfp" onclick="dropdownMenu()" src="images/blank-pfp.jpg">

            <div id="dropdownSection" style="display:none">

                <div class="logout-section" onclick="logoutfriend()">
                    <i class="fa-solid fa-door-open"></i>
                    <span>Logout</span>
                </div>

            </div>

        </header>

        <div class="profile-page-container">


            <div class="profile-section-large">
                <img class="pfp-large" src="images/blank-pfp.jpg">
                <h1 class="profile-name-large">${account[0].username}</h1>
            </div>



            <div class="profile-nav-section">
                <div class="profile-nav" onclick="displayPostsSection()">
                    <span>Posts</span>
                </div>

                <div class="profile-nav" onclick="displayAboutSection()">
                    <span>About</span>
                </div>
            </div>



            <div id="postsSection">

                <div class="create-post-section">

                    <div class="profile-section-small">
                        <img class="pfp-small" src="images/blank-pfp.jpg">
                        <span>${account[0].username}</span>
                    </div>



                    <div class="text-area-section">
                        <textarea id="textArea" placeholder="What are you thinking about?" maxlength="500" rows="4" cols="28"></textarea>
                    </div>



                    <div class="publish-btn-section">
                        <input class="publish-btn" type="submit" onclick="publishPost()" value="Publish">
                    </div>

                </div>

                <div id="publishedPostSection">`

                for (let i = account[0].posts_arr.length - 1; i >= 0; i--) {

                    html += `
                    <div class="published-post">
        
                        <div class="top-section">
                            <div class="profile-section-small">
                                <img class="pfp-small" src="images/blank-pfp.jpg">
                                <span>${account[0].username}</span>
                                <i class="fa-solid fa-trash-can" onclick="deletePost(this)"></i>
                            </div>
        
                            <div class="my-published-post">
                                <div>${account[0].posts_arr[i]}</div>
                            </div>
                        </div>

                    </div>
                    `
                }

                html += `</div>

            </div>



            <div id="aboutSection" style="display:none">

                <div class="profile-info-section">

                    <div class="profile-info">
                        <i class="fa-solid fa-house"></i>
                        <span>Place of residence:</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInfo(this, this.value)" value="${account[0].place_of_residence}" maxlength="19" autocomplete="off">
                        <span class="output-info">${account[0].place_of_residence}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>From</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInfo(this, this.value)" value="${account[0].from}" maxlength="19" autocomplete="off">
                        <span class="output-info">${account[0].from}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <span>University/College:</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInfo(this, this.value)" value="${account[0].university_college}" maxlength="19" autocomplete="off">
                        <span class="output-info">${account[0].university_college}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Workplace:</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInfo(this, this.value)" value="${account[0].workplace}" maxlength="19" autocomplete="off">
                        <span class="output-info">${account[0].workplace}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                </div>

            </div>

        </div> 
        `
    app.innerHTML = html
}

function hermanProfilePageView() {
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
                <h1 class="profile-name-large">${account[1].username}</h1>
            </div>



            <div class="profile-nav-section">
                <div class="profile-nav" onclick="displayPostsSection()">
                    <span>Posts</span>
                </div>

                <div class="profile-nav" onclick="displayAboutSection()">
                    <span>About</span>
                </div>
            </div>



            <div id="postsSection">

                <div id="publishedPostSection">`

                for (let i = account[1].posts_arr.length - 1; i >= 1; i--) {

                    html += `
                    <div class="published-post">
        
                        <div class="top-section">
                            <div class="profile-section-small">
                                <img class="pfp-small" src="images/blank-pfp.jpg">
                                <span>${account[1].username}</span>
                            </div>
        
                            <div class="my-published-post">
                                <div>${account[1].posts_arr[i]}</div>
                            </div>
                        </div>

                    </div>
                    `
                }

                html += `</div>

            </div>



            <div id="aboutSection" style="display:none">

                <div class="profile-info-section">

                    <div class="profile-info">
                        <i class="fa-solid fa-house"></i>
                        <span>Place of residence:</span>
                        <span class="output-info">${account[1].place_of_residence}</span>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>From</span>
                        <span class="output-info">${account[1].from}</span>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <span>University/College:</span>
                        <span class="output-info">${account[1].university_college}</span>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Workplace:</span>
                        <span class="output-info">${account[1].workplace}</span>
                    </div>

                </div>

            </div>

        </div> 
        `
    app.innerHTML = html
}

function pederProfilePageView() {
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
                <h1 class="profile-name-large">${account[2].username}</h1>
            </div>



            <div class="profile-nav-section">
                <div class="profile-nav" onclick="displayPostsSection()">
                    <span>Posts</span>
                </div>

                <div class="profile-nav" onclick="displayAboutSection()">
                    <span>About</span>
                </div>
            </div>



            <div id="postsSection">

                <div id="publishedPostSection">`

                for (let i = account[2].posts_arr.length - 1; i >= 0; i--) {

                    html += `
                    <div class="published-post">
        
                        <div class="top-section">
                            <div class="profile-section-small">
                                <img class="pfp-small" src="images/blank-pfp.jpg">
                                <span>${account[2].username}</span>
                            </div>
        
                            <div class="my-published-post">
                                <div>${account[2].posts_arr[i]}</div>
                            </div>
                        </div>

                    </div>
                    `
                }

                html += `</div>

            </div>



            <div id="aboutSection" style="display:none">

                <div class="profile-info-section">

                    <div class="profile-info">
                        <i class="fa-solid fa-house"></i>
                        <span>Place of residence:</span>
                        <span class="output-info">${account[2].place_of_residence}</span>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>From</span>
                        <span class="output-info">${account[2].from}</span>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <span>University/College:</span>
                        <span class="output-info">${account[2].university_college}</span>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Workplace:</span>
                        <span class="output-info">${account[2].workplace}</span>
                    </div>

                </div>

            </div>

        </div> 
        `
    app.innerHTML = html
}

function sondreProfilePageView() {
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
                <h1 class="profile-name-large">${account[3].username}</h1>
            </div>



            <div class="profile-nav-section">
                <div class="profile-nav" onclick="displayPostsSection()">
                    <span>Posts</span>
                </div>

                <div class="profile-nav" onclick="displayAboutSection()">
                    <span>About</span>
                </div>
            </div>



            <div id="postsSection">

                <div id="publishedPostSection">`

                for (let i = account[3].posts_arr.length - 1; i >= 0; i--) {

                    html += `
                    <div class="published-post">
        
                        <div class="top-section">
                            <div class="profile-section-small">
                                <img class="pfp-small" src="images/blank-pfp.jpg">
                                <span>${account[3].username}</span>
                            </div>
        
                            <div class="my-published-post">
                                <div>${account[3].posts_arr[i]}</div>
                            </div>
                        </div>

                    </div>
                    `
                }

                html += `</div>

            </div>



            <div id="aboutSection" style="display:none">

                <div class="profile-info-section">

                    <div class="profile-info">
                        <i class="fa-solid fa-house"></i>
                        <span>Place of residence:</span>
                        <span class="output-info">${account[3].place_of_residence}</span>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>From</span>
                        <span class="output-info">${account[3].from}</span>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <span>University/College:</span>
                        <span class="output-info">${account[3].university_college}</span>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Workplace:</span>
                        <span class="output-info">${account[3].workplace}</span>
                    </div>

                </div>

            </div>

        </div> 
        `
    app.innerHTML = html
}