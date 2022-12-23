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
                <input class="register-input" type="text" maxlength="34" placeholder="Choose username" onchange="createUsername(this.value)" value="${model.create_account.username}">
                <input class="register-input" type="password" maxlength="55" placeholder="Choose password" onchange="createPassword(this.value)" value="${model.create_account.password}">
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
                    <span class="profile-name-small">${model.account.username}</span>
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
                <h1 class="profile-name-large">${model.account.username}</h1>
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
                        <span>${model.account.username}</span>
                    </div>



                    <div class="text-area-section">
                        <textarea id="textArea" placeholder="What are you thinking about?" maxlength="500" rows="4" cols="28"></textarea>
                    </div>



                    <div class="publish-btn-section">
                        <input class="publish-btn" type="submit" onclick="publishPost()" value="Publish">
                    </div>

                </div>

                <div id="publishedPostSection" style="display:block">`

                const accountPosts = JSON.parse(localStorage.getItem("account_posts"))
                for (let i = accountPosts.length - 1; i >= 0; i--) {
                    console.log(test[i])
                    html += `
                    <div class="published-post">
        
                        <div class="top-section">
                            <div class="profile-section-small">
                                <img class="pfp-small" src="images/blank-pfp.jpg">
                                <span>${model.account.username}</span>
                                <i class="fa-solid fa-trash-can" onclick="deletePost(this)"></i>
                            </div>
        
                            <div class="my-published-post">
                                <div>${accountPosts[i]}</div>
                            </div>
                        </div>
        
                        <div class="bottom-section">
                            <div class="profile-comments" style="display:block">
                                <span>${model.account.username}</span>
                                <i class="fa-regular fa-trash-can" onclick="deleteComment(this)"></i>
                                <div class="comment">${test[i]}</div>
                            </div>
                            <input class="comment-field" type="text" placeholder="Write a comment..." onchange="commentPost(this)" maxlength="410">
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
                        <input class="input-info" type="text" style="display:none" onchange="saveInfo(this, this.value)" value="${model.account_info.place_of_residence}" maxlength="19" autocomplete="off">
                        <span class="output-info">${model.account_info.place_of_residence}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>From</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInfo(this, this.value)" value="${model.account_info.from}" maxlength="19" autocomplete="off">
                        <span class="output-info">${model.account_info.from}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <span>University/College:</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInfo(this, this.value)" value="${model.account_info.university_college}" maxlength="19" autocomplete="off">
                        <span class="output-info">${model.account_info.university_college}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                    <div class="profile-info">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Workplace:</span>
                        <input class="input-info" type="text" style="display:none" onchange="saveInfo(this, this.value)" value="${model.account_info.workplace}" maxlength="19" autocomplete="off">
                        <span class="output-info">${model.account_info.workplace}</span>
                        <i class="fa-solid fa-pen" onclick="editInfo(this)"></i>
                    </div>

                </div>

            </div>

        </div> 
        `
    app.innerHTML = html
}