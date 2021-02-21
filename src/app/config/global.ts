import { environment } from "../../environments/environment"

export const GlobalVariable = Object.freeze({

    APP_NAME: "clone instagram Gluki api gorest.co.in",
    BASE_API_URL: 'https://gorest.co.in/public-api/',
    BASE_API_URL_IMAGES:'https://dog.ceo/',
  
    //USER
    USER: "users",
  
    //POST
    POST_READ_ALL: "posts",
    POST_SEND: "users/1392/posts"+'?access-token='+environment.token,
    POST_MY: "users/1392/posts"+'?access-token='+environment.token,
  
    //COMMENTS
    COMMENTS: "comments",
    COMMENTS_CREATE: "",
    

    IMAGES: "api/breeds/image/random/50"
  
  
  })
  