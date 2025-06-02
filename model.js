function reg()
{
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let raw = localStorage.getItem("users");
    let users = raw ? JSON.parse(raw) : [];

    function isEmailExist(email){
        return users.some((user) => user.email === email);
    }

      if (isEmailExist(email)) {
        alert("Такий email вже зареєстрований");
        return;
      }
      else{
        let newUser = { 
            first_name: first_name, 
            last_name: last_name, 
            email: email, 
            pass: pass
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
    
        

        alert("Ви успішно зареєструвалися");
      }
}  

function log()
{
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let raw = localStorage.getItem("users");
    let users = JSON.parse(raw);

    function isEmailExist(email){
        return users.some((user) => user.email === email);
    }

      if (isEmailExist(email)) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if(users[i].pass === pass){
                  
                    alert("Ви увійшли");
                    
                    sessionStorage.setItem('logged', '1');
                    sessionStorage.setItem('first_name', users[i].first_name);
                    sessionStorage.setItem('last_name', users[i].last_name);
                    sessionStorage.setItem('email', users[i].email);
                    
                }
                else{
                    alert("Невірний пароль");
                    break;
                }
            }
          }
      }
      else{
        alert("Такий email не зареєстрований");
      }
}   

function saveComment() {
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  
  var newComment = {
    name: name,
    email: email,
    comment: comment
  };


  var comments = JSON.parse(localStorage.getItem("comments")) || [];


  comments.push(newComment);


  localStorage.setItem("comments", JSON.stringify(comments));

  
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("comment").value = "";


  showComments();
}