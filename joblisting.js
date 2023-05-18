





window.onload=function(){
const addToSaveButton=document.getElementsByClassName("savesurjob");

let items=[]
for(let i=0; i<addToSaveButton.length; i++){
   addToSaveButton[i].addEventListener("click",function(e){
        
            let item = {
                    id:i+1,
                    jobname:e.target.parentElement.parentElement.parentElement.children[0].children[0].textContent,
                    companyname:e.target.parentElement.parentElement.parentElement.children[0].children[1].textContent,
                    location:e.target.parentElement.parentElement.parentElement.children[2].textContent,
                    time:e.target.parentElement.parentElement.parentElement.children[1].children[0].textContent,
                    remote:e.target.parentElement.parentElement.parentElement.children[1].children[1].textContent,
                    jobrequirements:e.target.parentElement.parentElement.children[0].textContent,
                    workinvolved:e.target.parentElement.parentElement.children[1].textContent,
                    no:1
                };
            if(JSON.parse(localStorage.getItem('items')) === null){
                items.push(item);
                localStorage.setItem("items",JSON.stringify(items));
               
            }else{
                const localItems = JSON.parse(localStorage.getItem("items"));
                localItems.map(data=>{
                    if(item.id == data.id){
                        item.no = data.no + 1;    //save no. of jobs
                    }else{
                        items.push(data);
                    }
                });
                items.push(item);
                localStorage.setItem('items',JSON.stringify(items));
                window.location.reload();
            }
        
    });
}


var setdata=document.querySelector(".jobssave");
let saveData='';

    JSON.parse(localStorage.getItem('items')).map(data=>{
        saveData += '<div style="padding-left:3vw;"><h1 style="color:black">'+data.id+'</h1><h1 style="color: #2557a7;font-family: Verdana, Geneva, Tahoma, sans-serif;font-weight: 900;">'+data.jobname+'</h1><h2 style="color: #2557a7; font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif; font-style: italic;width: 10vw;">'+data.companyname+'</h2><h2 style="font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;font-style: italic;">'+data.location+'</h2><button style="margin-top: 20px;background-color: #2557a7; border-radius: 100px;border-width: 0; box-shadow: none;color: white; display: inline-flex;font-family: CircularStd, sans-serif;font-size: 1rem;line-height: 1.5; padding: 6px 20px; margin-right: 10px;">'+data.time+'</button><button style="margin-top: 20px;background-color: #2557a7;border-radius: 100px;border-width: 0;box-shadow: none;color: white;display: inline-flex;font-family: CircularStd, sans-serif;font-size: 1rem;line-height: 1.5;padding: 6px 20px;margin-right: 10px;">'+data.remote+'</button><p style="font-family:font-family: Verdana, Geneva, Tahoma, sans-serif;font-size:1.5rem;">'+data.jobrequirements+'</p><p style="font-family:font-family: Verdana, Geneva, Tahoma, sans-serif;font-size:1.5rem;">'+data.workinvolved+'</p><button style="margin-top: 20px;background-color: #2557a7; border-radius: 100px;  border-width: 0; box-shadow: none; color: white; display: inline-flex; font-family: CircularStd, sans-serif; font-size: 1rem; line-height: 1.5; padding: 6px 20px; margin-right: 10px;"onclick=deleted(this)>Remove</button></div><hr>';
    });

    setdata.innerHTML+= saveData;

}




const btn=document.getElementById("post-job");

btn.addEventListener("click",mypostform);

function mypostform(){
    var x=document.getElementById("post-form");
    
    if(x.style.display === "block"){
        x.style.display="none";
    }

    else{
        x.style.display="block";   
    }

}




/*


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
        
        store=`<ul style='display:grid;grid-template-columns:40% 30% 30%;list-style-type:none;border:2px solid grey;
        border-radius:25px'>

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

        <div>
        <h3 style='color:#3EB2FD;font-family:Arial, Helvetica, sans-serif'>Job Requirements</h3>
        <p style='color:white;font-family: Verdana, Geneva, Tahoma, sans-serif'>${jobrequirements}</p>
        </div>

        <div>
        <h3 style='color:#3EB2FD;font-family:Arial, Helvetica, sans-serif'>Work Involved</h3>
        <p style='color:white;font-family: Verdana, Geneva, Tahoma, sans-serif'>${workinvolved}</p>
        </div>

        <li style='display:flex;gap:1vw;padding-bottom:3vh'>
        <button class="savesurjob"onclick="refresh()"style='margin-top: 20px;background-color: #2557a7;border-radius: 100px; border-width: 0; box-shadow: none;color: white;display: inline-flex;font-family: CircularStd,sans-serif;font-size: 1rem;line-height: 1.5;padding: 6px 20px;' >Save</button>
        <button onclick="apply_button()"style='margin-top: 20px;background-color: #2557a7;border-radius: 100px; border-width: 0; box-shadow: none;color: white;display: inline-flex;font-family: CircularStd,sans-serif;font-size: 1rem;line-height: 1.5;padding: 6px 20px;' onclick="apply_button()">Apply</button>
        </li>

        </div>
       

        </ul>`
        
        
        
    alljoblists.innerHTML+=store;
}
  */

function refresh(){
    window.location.reload();
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


function apply_button(){
    window.location.href="apply.html";
    }

function scrollFunction() {
    const element = document.querySelector(".jobssave");
    element.scrollIntoView({ behavior: 'smooth'});
  }

  function browse(){
    const elm=document.querySelector(".alljoblists");
    elm.scrollIntoView({ behavior: 'smooth'});
  }











  function posting(){
    let jobtitle,location,companyname,jobrequirements,remote,fulltime,workinvolved;


jobtitle=document.getElementById("text1").value;
location=document.getElementById("text2").value;
companyname=document.getElementById("text3").value;
jobrequirements= document.getElementById("text4").value;
remote=document.getElementById("text5").value;
fulltime=document.getElementById("text6").value;
workinvolved=document.getElementById("text7").value;  

let formdatas=[];
formdatas=JSON.parse(localStorage.getItem("newform"))?JSON.parse(localStorage.getItem("newform")):[]


  formdatas.push({
  
  "jobtitle":jobtitle,
  "location":location,
  "companyname":companyname,
  "jobrequirements":jobrequirements,
  "remote":remote,
  "fulltime":fulltime,
  "workinvolved":workinvolved
})
localStorage.setItem("newform",JSON.stringify(formdatas));
dispdata();
  }

function dispdata(){
var setjobs=document.getElementById("alljoblists");
let saveData='';

    JSON.parse(localStorage.getItem('newform')).map(element=>{
        saveData += `<ul style='display:grid;grid-template-columns:40% 30% 30%;list-style-type:none;border:2px solid grey;
        border-radius:25px'>

        <li>
        <h1 style='color:#2557a7;;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 900;'>${element.jobtitle}</h1>
        <h2 style='color: #2557a7;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        font-style: italic;
        width: 10vw;'>${element.companyname}</h2>
        </li>

        <li>
        <button style='margin-top: 20px;background-color: #2557a7;border-radius: 100px;border-width: 0;box-shadow: none;color: white;margin-right:5px;display: inline-flex;font-family: CircularStd,sans-serif;font-size: 1rem;line-height: 1.5;padding: 6px 20px;margin-right:10px;'>${element.fulltime}</button>
        <button style='margin-top: 20px;background-color: #2557a7;border-radius: 100px; border-width: 0; box-shadow: none;color: white;display: inline-flex;font-family: CircularStd,sans-serif;font-size: 1rem;line-height: 1.5;padding: 6px 20px;'>${element.remote}</button>
        </li>
        
        <li>
        <h2 style='color: #2557a7;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        font-style: italic;
        width: 10vw;'>${element.location}</h2>
        </li>

        <div>

        <div>
        <h3 style='color:#3EB2FD;font-family:Arial, Helvetica, sans-serif'>Job Requirements</h3>
        <p style='color:white;font-family: Verdana, Geneva, Tahoma, sans-serif'>${element.jobrequirements}</p>
        </div>

        <div>
        <h3 style='color:#3EB2FD;font-family:Arial, Helvetica, sans-serif'>Work Involved</h3>
        <p style='color:white;font-family: Verdana, Geneva, Tahoma, sans-serif'>${element.workinvolved}</p>
        </div>

        <li style='display:flex;gap:1vw;padding-bottom:3vh'>
        <button class="savesurjob"onclick="refresh()"style='margin-top: 20px;background-color: #2557a7;border-radius: 100px; border-width: 0; box-shadow: none;color: white;display: inline-flex;font-family: CircularStd,sans-serif;font-size: 1rem;line-height: 1.5;padding: 6px 20px;' >Save</button>
        <button onclick="apply_button()"style='margin-top: 20px;background-color: #2557a7;border-radius: 100px; border-width: 0; box-shadow: none;color: white;display: inline-flex;font-family: CircularStd,sans-serif;font-size: 1rem;line-height: 1.5;padding: 6px 20px;' onclick="apply_button()">Apply</button>
        </li>

        </div>
       

        </ul>`;
    });

    setjobs.innerHTML+= saveData;



}



