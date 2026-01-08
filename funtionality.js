var book=document.getElementById("ticketButton")

function bookTicket(){
    book.innerHTML="Ticket Booked";
    book.disabled =true;
}

const x=document.getElementById("locP");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    else{
        x.innerHTML="Geolocation not supported by this browser!"
    }
}

function showPosition(position) { 
  x.innerHTML =  
    "Your Latitude: " + position.coords.latitude + "<br>" + 
    "Your Longitude: " + position.coords.longitude+"<br>"+"<br>"+
    "Event Latitude: 12.9692°N "+"<br>"+"Event Longitude: 77.7499°E ";
} 

function showError(error){
    alert(error); 
}


function genPass(){
    var passHTML=document.getElementById("PassHTML");
    passHTML.innerHTML=
    `
    <div class="column_flex info_box" style="align-items:center; padding:10px;">
        <div style="font-family:Arial, Helvetica, sans-serif;font-size:24px;margin-bottom:10px;">Generate Pass</div>
        <input type="text" id="passName" placeholder="Enter Your Name"></input>
        <input type="number" id="randNumber" placeholder="Enter A Random Number"></input>
        <p id="PASSID" style="font-family:Arial;font-size:16px;text-align:center;"></p>
        <button onclick="generate()">Generate</button>
    </div>`
}

function generate(){
    var name=document.getElementById("passName").value;
    var number=document.getElementById("randNumber").value;

    if(name==="" || number===""){
        alert("Please enter both Name and Number");
        return;
    }
    var id=name+"@"+number;
    localStorage.setItem("Pass",id)
    document.getElementById("PASSID").innerHTML="Your PASSID is : "+localStorage.getItem("Pass");
}



function showGallery(){
    var gallery=document.getElementById("PictureGallery");
    gallery.innerHTML=
    
    `<div class="info_box">
        <div class="title" style="padding:10px;margin-bottom:20px;">Picture Gallery</div>
        <div class="img_grid">
            <img src="https://i.ytimg.com/vi/p23NpYkEdek/maxresdefault.jpg" alt="img1">
            <img src="https://www.ntvenglish.com/wp-content/uploads/2025/03/Vitopia-conclusion.jpg" alt="img2">
            <img src="https://th.bing.com/th/id/OIP.wQPEBbSOSQNDEI8x7qoMSAHaNJ?w=115&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img3">
            <img src="https://th.bing.com/th/id/OIP.7pgsRD8lwhXInbOWYM-SAAHaE8?w=304&h=203&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img4">

            <img src="https://th.bing.com/th/id/OIP.cSqtOLsLKYEhF0pSOCKGjgHaJQ?w=162&h=203&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img5">
            <img src="https://th.bing.com/th/id/OIP.oyMa_mdEeH1_uieVzSzeUwHaFJ?w=249&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img6">
            <img src="https://th.bing.com/th/id/OIP.tlN3C5oopRKtVVVfVSG2AAHaEL?w=259&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img7">
            <img src="https://th.bing.com/th/id/OIP.FYmIvPSp4DqgjiSIhM68wwHaE8?w=243&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img8">

            <img src="https://th.bing.com/th/id/OIP.4JTG7L9JqS-DhBRS53OMSwHaEK?w=304&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img9">
            <img src="https://th.bing.com/th/id/OIP.vax3A5Pfzl-Bpn_cffbTfQHaEK?w=326&h=183&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img10">
            <img src="https://th.bing.com/th/id/OIP.an-L63b6iovqWpw2RirBDQHaHa?w=183&h=183&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img11">
            <img src="https://th.bing.com/th/id/OIP.GRn0sdBE56sGOKgvgGtnvQHaE8?w=248&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img12">

            <img src="https://th.bing.com/th/id/OIP.AMhB8j_dR_HD2DG69UqirgHaJQ?w=145&h=182&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img13">
            <img src="https://th.bing.com/th/id/OIP.GX_Eh8-iam17NHMNSDkraQHaJQ?w=136&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img14">
            <img src="https://th.bing.com/th/id/OIP.V-vFVpuvILk1PeZfO14uuAHaEe?w=249&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.6&pid=1.7&rm=3&defcache=1" alt="img15">
            <img src="https://vitopia.vitap.ac.in/_next/image?url=%2Flast_lineup%2Fdj_nucleya.avif&w=3840&q=75" alt="img16">
        </div>
    </div>`
}