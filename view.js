function profile()
{
    var isLog = sessionStorage.getItem('logged');
    var first_name = sessionStorage.getItem('first_name');
    var last_name = sessionStorage.getItem('last_name');
    var email = sessionStorage.getItem('email');
    
    if(isLog == 1){
        const id_first_name = document.getElementById("first_name");
        id_first_name.textContent = first_name;
        const id_last_name = document.getElementById("last_name");
        id_last_name.textContent = last_name;
        const id_email = document.getElementById("email");
        id_email.textContent = email;
        
    }
}

function showComments() {
    
    var comments = JSON.parse(localStorage.getItem("comments")) || [];
  
    var commentsContainer = document.getElementById("comArea");
  
    
    commentsContainer.innerHTML = "";
  
   
    comments.forEach(function(comment) {
      var commentElement = document.createElement("div");
      commentElement.innerHTML = "<strong>" + comment.name + ":</strong> " + comment.comment;
      commentsContainer.appendChild(commentElement);
    });
  }