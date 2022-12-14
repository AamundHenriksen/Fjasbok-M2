const create_account = {
    username: "",
    password: "",
    register: false
}

const account_login = {
    username: false,
    password: false,
    login: false
}

const postsArr = []

const publishedPosts = document.getElementsByClassName("published-posts")
const deleteIcon = document.getElementsByClassName("fa-solid fa-trash-can")

const inputInfo = document.getElementsByClassName("input-info")
const outputInfo = document.getElementsByClassName("output-info")
const editIcon = document.getElementsByClassName("fa-solid fa-pen")

const commentSection = document.getElementsByClassName("comment-section")
const commentField = document.getElementsByClassName("comment-field")