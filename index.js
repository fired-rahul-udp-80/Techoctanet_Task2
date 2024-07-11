let btn = document.querySelector("#btn");
            var content = document.querySelector("#content");
             btn.onclick = function(){
                let inputData = document.getElementById("input-box");
                if(inputData.value ==''){
                    alert("Please Fill Data");
                    inputData.style.border = "1px solid red";
                }
                else{
                inputData.style.border = "none";
                let element = document.createElement('ul');
                element.textContent =`${inputData.value}`;
                element.setAttribute('style','box-shadow:inset 1px 1px 1px 1px lightGrey; padding:6px 8px 6px 8px; width:100%; hight:100%; border-radius:5px;') ;
                
                content.appendChild(element);
                inputData.value = "";

                let deleteData = document.querySelector("#delete"); 
                deleteData.addEventListener("click",()=>{
                    element.remove();
                });
              }

            }        

