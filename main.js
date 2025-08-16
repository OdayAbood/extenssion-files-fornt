    let myObject = [
        {
            "logo": "./images/logo-devlens.svg",
            "name": "DevLens",
            "description": "Quickly inspect page layouts and visualize element boundaries.",
            "isActive": true
        },
        {
            "logo": "./images/logo-style-spy.svg",
            "name": "StyleSpy",
            "description": "Instantly analyze and copy CSS from any webpage element.",
            "isActive": true
        },
        {
            "logo": "./images/logo-speed-boost.svg",
            "name": "SpeedBoost",
            "description": "Optimizes browser resource usage to accelerate page loading.",
            "isActive": false
        },
        {
            "logo": "./images/logo-json-wizard.svg",
            "name": "JSONWizard",
            "description": "Formats, validates, and prettifies JSON responses in-browser.",
            "isActive": true
        },
        {
            "logo": "./images/logo-tab-master-pro.svg",
            "name": "TabMaster Pro",
            "description": "Organizes browser tabs into groups and sessions.",
            "isActive": true
        },
        {
            "logo": "./images/logo-viewport-buddy.svg",
            "name": "ViewportBuddy",
            "description": "Simulates various screen resolutions directly within the browser.",
            "isActive": false
        },
        {
            "logo": "./images/logo-markup-notes.svg",
            "name": "Markup Notes",
            "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
            "isActive": true
        },
        {
            "logo": "./images/logo-grid-guides.svg",
            "name": "GridGuides",
            "description": "Overlay customizable grids and alignment guides on any webpage.",
            "isActive": false
        },
        {
            "logo": "./images/logo-palette-picker.svg",
            "name": "Palette Picker",
            "description": "Instantly extracts color palettes from any webpage.",
            "isActive": true
        },
        {
            "logo": "./images/logo-link-checker.svg",
            "name": "LinkChecker",
            "description": "Scans and highlights broken links on any page.",
            "isActive": true
        },
        {
            "logo": "./images/logo-dom-snapshot.svg",
            "name": "DOM Snapshot",
            "description": "Capture and export DOM structures quickly.",
            "isActive": false
        },
        {
            "logo": "./images/logo-console-plus.svg",
            "name": "ConsolePlus",
            "description": "Enhanced developer console with advanced filtering and logging.",
            "isActive": true
        }]
        let mydiv = document.querySelector(".cont");
        let allDom =document.querySelector(" .allb");
        let activeDom =document.querySelector(" .activeb");
        let inactiveDom =document.querySelector(" .inactiveb");
        let myheader = document.querySelector("header");
        let changeColor = document.querySelector("header div");
        let changeItemStM =  document.querySelectorAll("header div i");
        let switcher;
        let remove;
        let body = document.querySelector("body");
        let myroot = document.querySelector(":root");
        let sunColor = {
            sunColorBackground :"linear-gradient(180deg , #ebf2fc 0%,#eef8f9 100% )",
            itemColorBackSun :"hsl(0,0%,78%)",
            itemColorActiveSun:"hsl(217,61%,90%)",
            itemColorRemoveSun:"hsl(0,0%,93%)"
        };
        let moonColor = {
            moonColorBackground :"linear-gradient(180deg , #040918 0%, #091540 100%)",
            itemColorBackMoon :"hsl(227,75%,14%)",
            itemColorActiveMOON:"hsl(226,25%,17%)",
            itemColorRemoveMoon:"hsl(225,23%,24%)"
        };
        let sunjson = JSON.stringify(sunColor);
        let moonjson = JSON.stringify(moonColor);

        
        myObject.forEach((e)=> {
    let myitem = document.createElement("div");
    myitem.classList.add("item","all");
    let mytitle = document.createElement("div");
    mytitle.classList.add("tittle");
    mytitle.innerHTML = `${e.name}`;
    let des = document.createElement("div");
    des.classList.add("des");
    des.innerHTML=`${e.description}`;
    let deatails = document.createElement("div");
    deatails.classList.add("detail");
    deatails.appendChild(mytitle);
    deatails.appendChild(des);
    let photo =document.createElement("img");
    photo.src = `${e.logo}`;
    let mycontent = document.createElement("div");
    mycontent.classList.add("content");
    mycontent.appendChild(photo);
    mycontent.appendChild(deatails);
    myitem.append(mycontent);
    let itembutton = document.createElement("div");
    itembutton.classList.add("bottombtn");
    remove   = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.classList.add("remove");
    switcher = document.createElement("button");
    switcher.innerHTML = `<div></div>`;
    switcher.classList.add("switch");
    itembutton.appendChild(remove);
    itembutton.appendChild(switcher);
    myitem.appendChild(itembutton);
    if(e.isActive){
        myitem.classList.add("active");
        switcher.classList.add("activebtn");
    }
    else {
        myitem.classList.add("inactive");
    }
    mydiv.appendChild(myitem);
})

allDom.onclick = function (){
    showItem("all");
}
activeDom.onclick = function (){
    showItem("active");
}
inactiveDom.onclick = function (){
    showItem("inactive");
}

changeColor.onclick = function(){
    changeItemStM[0].classList.toggle("changemts");
    changeItemStM[1].classList.toggle("changemts");
}
document.addEventListener("click",function(e){

    if(e.target.classList.contains("switch")){
        e.target.classList.toggle("activebtn");
        e.target.parentElement.parentElement.classList.toggle("active");
        e.target.parentElement.parentElement.classList.toggle("inactive");
    }
    if(e.target.classList.contains("remove")){
        if(e.target.parentElement.parentElement.classList.contains("show")) 
            e.target.parentElement.parentElement.classList.remove("show");
            e.target.parentElement.parentElement.classList.add("delete");
        setTimeout(function(){
            e.target.parentElement.parentElement.remove();
        },1000)
    }
})

    changeColor.addEventListener("click",function(e){
        let myitem =document.querySelectorAll(".item");
        let myswitches = document.querySelectorAll(".switch");
        let mytitle = document.querySelectorAll(".tittle");
        if(e.target.classList.contains("activate-moon")){
            addColorToLoacalStorage(sunjson);
            let sunColorpage =  getColorFromLocalStorag();
            myroot.style.setProperty("--moon-color-background",sunColorpage.sunColorBackground);
            for(let i = 0 ; i < myitem.length ; i++){
            myitem[i].style.setProperty("background",sunColorpage.itemColorBackSun);
            }
            for(let i = 0 ; i < myswitches.length ; i++){
            myswitches[i].style.setProperty("background",sunColorpage.itemColorActiveSun);
            }
            for(let i = 0 ; i < mytitle.length ; i++){
                mytitle[i].style.setProperty("color",sunColorpage.itemColorActiveSun);
            }
            myheader.style.setProperty("background",sunColorpage.itemColorBackSun);

        }
        else{
            addColorToLoacalStorage(moonjson);
            let moonColorPage = getColorFromLocalStorag();
            myroot.style.setProperty("--moon-color-background",moonColorPage.moonColorBackground);
            for(let i = 0 ; i < myitem.length ; i++){
                myitem[i].style.setProperty("background",moonColorPage.itemColorBackMoon);
            }
            for(let i = 0 ; i < myswitches.length ; i++){
                myswitches[i].style.setProperty("background",moonColorPage.itemColorActiveMOON);
                }
            myheader.style.setProperty("background",moonColorPage.itemColorBackMoon);
                
        }
    })

function showItem(type){
    let myshow = [...mydiv.children]
    let myShowingItem = [];
    let myHiddenItem = [];
    if(type==="active"){
        myshow.forEach((e)=>{
            if(e.classList.contains("active")){
                myShowingItem.push(e);
            }
            else{
                myHiddenItem.push(e);
            }
        })
    }
    else if(type==="inactive"){
        myshow.forEach((e)=>{
            if(e.classList.contains("inactive")){
                myShowingItem.push(e);
            }
            else{
                myHiddenItem.push(e);
            }
        })
    }
    else {
        myShowingItem = myshow;
    }
    fillMydiv(myShowingItem,myHiddenItem);
}
function fillMydiv(myAdding,myRemovving){
    for(let i = 0 ; i < myAdding.length ; i++){
        mydiv.appendChild(myAdding[i]);
        myAdding[i].classList.remove("delete");
        myAdding[i].classList.add("show");
    }
    for(let i = 0 ; i < myRemovving.length ; i++){
        myRemovving[i].classList.add("delete");
        myRemovving[i].classList.remove("show");
    }

}
function addColorToLoacalStorage (colorogject){
    localStorage.clear();
window.localStorage.setItem("pageColors",colorogject);
}
function getColorFromLocalStorag(){
    return JSON.parse(localStorage.getItem("pageColors"));
}