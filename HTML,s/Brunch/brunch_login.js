 var brid=document.getElementById("br_id")
      var brpw=document.getElementById("pass")
      var error=document.getElementById("w_p")
      var error2=document.getElementById("w_p2")
      var in1=document.getElementById('br_id')
      var otp=document.getElementById('otp')
      

        function log(){
            if(brid.value=="AS980AN" && brpw.value=="003110730"){
              log_link.href="I_B/O_S.html"
              
            

            } 
            else{
              
              brid.style="border:2px solid red; animation-name: shaking;animation-duration: .2s;animation-timing-function: linear; position:relative;"
              brpw.style="border:2px solid red; animation-name: shaking;animation-duration: .2s;animation-timing-function: linear; position:relative;"
              error2.innerText="Wrong Input"
            }
             
            }   

            

