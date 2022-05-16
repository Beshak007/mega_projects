form=document.querySelector('form');

email=document.querySelector('#email');
password=document.querySelector('#password');

unordered=document.querySelector('#error');

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  form.addEventListener("submit",(e)=>{
    error_list=[];  
    
    if(re.test(email.value)==false){

        error_list.push("email is not valie");

      }

      if(password.value.length<6){
          error_list.push("password is weak please enter strong passowrd");

      }

      /*

      if(error_list.length>0){
          e.preventDefault();
          error_list.forEach((element)=>{
              list_item=document.createElement('li');
              list_item.innerText=element;
              unordered.appendChild(list_item);


          });
      }*/
      if(error_list.length>0){
        e.preventDefault();
        error_list.forEach((element)=>{
            list_item=document.createElement('li');
            list_item.innerText=element;
            unordered.appendChild(list_item);
        })
    }
  });