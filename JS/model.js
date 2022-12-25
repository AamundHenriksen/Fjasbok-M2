const model = {
    currentPage: "login",

    register_page_input: {
        username: "",
        password: ""
    },

    login_page_input: {
        username: false,
        password: false
    }
}

const account = [
    {
        username: "",
        password: "",
        posts_arr: [],
        place_of_residence: "",
        from: "",
        university_college: "",
        workplace: ""
    },

    {
        username: "Herman",
        password: "963",
        posts_arr: ["Godt nyttår!"],
        place_of_residence: "Oslo",
        from: "Borre",
        university_college: "Handelshøyskolen BI",
        workplace: "XXL"
    },

    {
        username: "Peder",
        password: "731",
        posts_arr: ["Hvem vinner VM i år?"],
        place_of_residence: "Oslo",
        from: "Borre",
        university_college: "Handelshøyskolen BI",
        workplace: ""
    },

    {
        username: "Sondre",
        password: "321",
        posts_arr: ["#LFC"],
        place_of_residence: "Oslo",
        from: "Åsgårdstrand",
        university_college: "Handelshøyskolen BI",
        workplace: "Kiwi"
    }
]

// Classes
const publishedPost = document.getElementsByClassName("published-post")
const deleteIcon = document.getElementsByClassName("fa-solid fa-trash-can")
const inputInfo = document.getElementsByClassName("input-info")
const outputInfo = document.getElementsByClassName("output-info")
const editIcon = document.getElementsByClassName("fa-solid fa-pen")

