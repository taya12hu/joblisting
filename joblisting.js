/*
var jobs = [
	{
		"title": "Web Developer",
		"companyname":"Uber",
		"location":"India",
		"time":"Full Time",
		"area":"Remote",
		"description": "Design and develop websites and web applications.",
		"qualifications": "Proficient in HTML, CSS, JavaScript, and a server-side language such as PHP or Node.js. Experience with front-end frameworks like React or Angular is a plus."
	},
	{
		"title": "Graphic Designer",
		"companyname":"Amazon",
		"location":"USA",
		"time":"Part Time",
		"area":"Remote",
		"description": "Create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers.",
		"qualifications": "Proficient in Adobe Creative Suite or similar design software. Experience with branding and print design is a plus."
	},
	{
		"title": "Product Manager",
		"companyname":"Blinkit",
		"location":"India",
		"time":"Full Time",
		"area":"In-office",
		"description": "Develop and execute marketing strategies to promote a product or service.",
		"qualifications": "Bachelor's degree in marketing or a related field. Proven experience in marketing and campaign management."
	}
];

// Function to display job positions on the webpage
function displayJobs() {
	var jobList = document.getElementById("job-list");

	// Loop through each job position and create a new list item for each one
	jobs.forEach(function(job) {
		var li = document.createElement("li");
		li.innerHTML = `<h2 style = 'font-family:Bookman'>${job.title}</h2>
		<h3>${job.companyname}</h3>
		<h3>${job.location}</h3>
		<button>${job.time}</button>
		<button>${job.area}</button>
		<p>${job.description}</p>
		<p><strong>Qualifications:</strong>${job.qualifications}</p>`
		jobList.appendChild(li);
	});
}

// Call the displayJobs function when the webpage finishes loading
window.onload = function() {
	displayJobs();
};
*/











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
/*
const job1=document.getElementById("job1");

job1.addEventListener("click",jobreq);
function jobreq(){
    var x=document.getElementById("jobinfo");

    if(x.style.display==="block"){
        x.style.display="none";
    }else{
        x.style.display="block";
    }
}

const job2=document.getElementById("job2");

job2.addEventListener("click",jobreq2);
function jobreq2(){
    var x=document.getElementById("jobinfo2");

    if(x.style.display==="block"){
        x.style.display="none";
    }else{
        x.style.display="block";
    }
}

*/







function close(){

   const close= document.getElementById("post-form");
   close.style.display="none";
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
        <h1 style='color:#2557a7;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif'><u>${jobtitle}</u></h1>
        <h2 style='color:lightpink;'>${companyname}</h2>
        </li>

        <li>
        <button style='margin-top: 20px;background-color: #3EB2FD;border-radius: 100px;border-width: 0;box-shadow: none;color: white;margin-right:5px;display: inline-flex;font-family: CircularStd,sans-serif;font-size: 1rem;line-height: 1.5;padding: 6px 20px;'>${parttime}</button>
        <button style='margin-top: 20px;background-color: #3EB2FD;border-radius: 100px; border-width: 0; box-shadow: none;color: white;display: inline-flex;font-family: CircularStd,sans-serif;font-size: 1rem;line-height: 1.5;padding: 6px 20px;'>${remote}</button>
        </li>
        
        <li>
        <h2 style='color:#2557a7;'>${location}</h2>
        </li>

        <div>
        <div style='display:flex;gap:20px;'>
        <h3 style='color:#3EB2FD;font-family:Arial, Helvetica, sans-serif '>Job Requirements:</h3>
        <p style='color:white;font-family: Verdana, Geneva, Tahoma, sans-serif'>${jobrequirements}</p>
        </div>
        <div style='display:flex; gap:20px'>
        <h3 style='color:#3EB2FD;font-family:Arial, Helvetica, sans-serif '>Work Involved:</h3>
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





