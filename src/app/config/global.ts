import { environment } from "../../environments/environment"


let id = localStorage.getItem('user_id')

export const GlobalVariable = Object.freeze({


    APP_NAME: "clone instagram Gluki api gorest.co.in",
    BASE_API_URL: 'https://gorest.co.in/public-api/',
    BASE_API_URL_IMAGES:'https://dog.ceo/',
  
    //USER
    USER: "users",
  
    //POST
    POST_READ_ALL: "posts",
    POST_SEND: `users/${id}/posts`,
    POST_MY: `users/${id}/posts`+'?access-token='+environment.token,
  
    //COMMENTS
    COMMENTS: "comments",
    COMMENTS_CREATE: "",
    
    IMAGES: "api/breeds/image/random/50"
  
  
  })
  