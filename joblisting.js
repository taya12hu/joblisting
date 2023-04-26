
const btn=document.getElementById("post-job");

btn.addEventListener("click",mypostform);

function mypostform(){
    var x=document.getElementById("post-form");
    
    if(x.style.display === "block"){
        x.style.display="none";
    }

    else{
        x.style.display="block";
        header.style.display="none"
        
    }

}







const btn2=document.getElementById("postjob2");

btn2.addEventListener("click",myfunction)

function myfunction(){
    var formvalues= document.forms['post-form'];
    var jobtitle=document.forms['post-form']["text1"].value;
    var location=document.forms['post-form']["text2"].value;
    var companyname=document.forms['post-form']["text3"].value;
    var jobrequirements=document.forms['post-form']["text4"].value;
    var remote=document.forms['post-form']["text5"].value;
    var parttime=document.forms['post-form']["text6"].value;
    var workinvolved=document.forms['post-form']["text7"].value;
    
    var alljoblists= document.getElementById("alljoblists");
    var store="";
        
        store=`<ul style='display:grid;grid-template-columns:40% 30% 30%;list-style-type:none;'>

        <li>
        <h1 style='color:#2557a7;;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 900;'>${jobtitle}</h1>
        <h2 style='color: #2557a7;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        font-style: italic;
        width: 10vw;'>${companyname}</h2>
        </li>

        <li>
        <button style='margin-top: 20px;background-color: #2557a7;border-radius: 100px;border-width: 0;box-shadow: none;color: white;margin-right:5px;display: inline-flex;font-family: CircularStd,sans-serif;font-size: 1rem;line-height: 1.5;padding: 6px 20px;margin-right:10px;'>${parttime}</button>
        <button style='margin-top: 20px;background-color: #2557a7;border-radius: 100px; border-width: 0; box-shadow: none;color: white;display: inline-flex;font-family: CircularStd,sans-serif;font-size: 1rem;line-height: 1.5;padding: 6px 20px;'>${remote}</button>
        </li>
        
        <li>
        <h2 style='color: #2557a7;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        font-style: italic;
        width: 10vw;'>${location}</h2>
        </li>

        <div>
        <div style='display:flex;gap:20px;'>
        <h3 style='color:#3EB2FD;font-family:Arial, Helvetica, sans-serif'>Job Requirements</h3><br>
        <p style='color:white;font-family: Verdana, Geneva, Tahoma, sans-serif'>${jobrequirements}</p>
        </div>
        <div style='display:flex; gap:20px'>
        <h3 style='color:#3EB2FD;font-family:Arial, Helvetica, sans-serif'>Work Involved</h3><br>
        <p style='color:white;font-family: Verdana, Geneva, Tahoma, sans-serif'>${workinvolved}</p>
        </div>
        </div>

        </ul>

        <hr>`
        
        
    alljoblists.innerHTML+=store;
}
  



const button2=document.getElementById("applyjob");
button2.addEventListener("click",apply)

function apply(){
    
    var y=document.getElementById("apply");

    if(y.style.display==="none"){

        y.style.display="block";
    }

    else{
        y.style.display="none";
    }
}





function search(){
    let filter=document.getElementById('searchjob').value.toUpperCase();
    let alljoblists=document.getElementById('alljoblists');
    let ul=alljoblists.getElementsByTagName('ul');
    
    for(var i=0;i<ul.length;i++){
       
        let li=ul[i].getElementsByTagName('li')[0];

        if(li){
            let searchvalue=li.textContent||li.innerHTML;

            if(searchvalue.toUpperCase().indexOf(filter)>-1){
                ul[i].style.display="";
            }else{
                ul[i].style.display="none";
            }
        }

     }

}



function time(){
    let filters=document.getElementById('timejob').value.toUpperCase();
    let alljoblists=document.getElementById('alljoblists');
    let ul=alljoblists.getElementsByTagName('ul');
    
    for(var i=0;i<ul.length;i++){
       
        let li=ul[i].getElementsByTagName('li')[1];

        if(li){
            let searchvalue=li.textContent||li.innerHTML;

            if(searchvalue.toUpperCase().indexOf(filters)>-1){
                ul[i].style.display="";
            }else{
                ul[i].style.display="none";
            }
        }    
        
    } 

}


const crossbtn=document.getElementById("heading");
crossbtn.addEventListener("click",crossfun)

function crossfun(){
    var x=document.getElementById("post-form");
    if(x.style.display==="block")
    {
        x.style.display="none";
    }
}





function locationstate(){

    let json = fetch(
        "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates.json");
      json
        .then((response) => response.json())
        .then((response) => {countries = response;
            
            let filterstate=document.getElementById('locationsearch').value.toUpperCase();
            let countryname=countrybystate(filterstate);
            let countryvalue=document.getElementById("countrysearch");
            countryvalue.value=countryname;
            console.log(countryvalue.value)

            function countrybystate(filterstate)
            {
                for(let i=0;i<countries.length;i++){
                    const finalstate=countries[i].states.find((state)=>
                        state.name.toUpperCase().includes(filterstate)
                    );
                 if(finalstate){
                    return countries[i].name;
                 }   
                    
                }
                return null;
            }
})
}



document.getElementById("countrysearch").addEventListener("input",myfinding);
     function myfinding()
 {   
    let alljoblists=document.getElementById('alljoblists');
    let ul=alljoblists.getElementsByTagName('ul');
    let countryupper=countryvalue.value.toUpperCase();
    
    for(var i=0;i<ul.length;i++){
       
        let li=ul[i].getElementsByTagName('li')[2];

        if(li){
            let searchvalue=li.textContent||li.innerHTML;

            if(searchvalue.toUpperCase().indexOf(countryupper)>-1){
                ul[i].style.display="";
            }else{
                ul[i].style.display="none";
            }
        }    
        
    } 
}





