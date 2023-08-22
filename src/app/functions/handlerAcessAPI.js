'use server'


const usuario=[
    {

    name: "Vinicius de Souza Solique",
    email: "vinicius@gmail.com", 
    password : "12345678910",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" 
   },

   {

    name: "Victor de Souza Solique",
    email: "victor@gmail.com", 
    password : "1234",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" 
   },

   {

    name: "Ingrid de Souza Solique",
    email: "ingrid@gmail.com", 
    password : "12345",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" 
   }

];

const getUserAuthenticated = (user) => {
    return usuario.map(u => u.email === user.email && u.password === user.password);

}

const getUsers = () =>{
 return usuario
}
export { getUsers, getUserAuthenticated };