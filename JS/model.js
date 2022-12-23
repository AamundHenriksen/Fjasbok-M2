const model = {
    currentPage: "login",

    create_account: {
        username: "",
        password: "",
        register: false
    },

    account: {
        username: "a",
        password: "1"
    },

    account_login: {
        username: false,
        password: false,
        login: false
    },

    account_info: {
        place_of_residence: "",
        from: "",
        university_college: "",
        workplace: ""
    },

    postsArr: [],
    commentsArr: []
}

const accountPosts = JSON.parse(localStorage.getItem("account_posts"))
const test = Array.apply(null, Array(accountPosts.length))
console.log(test)

// Classes
const publishedPost = document.getElementsByClassName("published-post")
const deleteIcon1 = document.getElementsByClassName("fa-solid fa-trash-can")
const deleteIcon2 = document.getElementsByClassName("fa-regular fa-trash-can")

const profileComments = document.getElementsByClassName("profile-comments")
const comment = document.getElementsByClassName("comment")
const commentField = document.getElementsByClassName("comment-field")

const inputInfo = document.getElementsByClassName("input-info")
const outputInfo = document.getElementsByClassName("output-info")
const editIcon = document.getElementsByClassName("fa-solid fa-pen")

