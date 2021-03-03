
const submitButton=document.getElementById('submit');
const viewButton=document.getElementById('view');
const places=document.getElementById('result');
const modal=document.querySelector('.modal');
 let myArray=[];

// localStorage.clear();
submitButton.addEventListener('click',() =>{
    const inputVal=document.querySelector('.text-input');
    const inputValue=inputVal.value;
    save(inputValue);
    inputVal.value="";
})
viewButton.addEventListener('click',() =>{
   view();
})
function save(inputValue){
    const newDestination=inputValue;
    //we check here if the local storage is empty or not.While using getItem we need to pass the key,as localstorage stores data in key value pair
    //so we want key to be a variable named data and value should be an array to store input data
    //key is data variable and value is an array
    if(localStorage.getItem('data')==null){
        localStorage.setItem('data','[]');
    }


    //If we already have some existing data
    //we use JSON.parse to get the data in JSON format
    const oldDestination=JSON.parse(localStorage.getItem('data'));
    oldDestination.push(newDestination);// array function to push new data in an alredy existing array


    //save the old data+new data in to local storage
    localStorage.setItem('data',JSON.stringify(oldDestination));
    
}

function view(){
    //if there is data then view it
    if(localStorage.getItem('data')!=null){
        myArray=JSON.parse(localStorage.getItem('data'));   //create an array and store the local data
        myArray.forEach(element =>{                         //loop through all elements and create para for each element and then
            let para=document.createElement("p");
            para.innerHTML=element.toUpperCase();
            para.classList.add("city");
            places.appendChild(para);
        });
        
       
        modal.style.display='block';
    }
}
function clearModal(e){                //takes an argument event
    if(e.target==modal)
    {
        places.innerHTML="";        //VERY IMPORTANT AS it resets the value of places and stops repetition
        modal.style.display='none';
    }
 }

window.addEventListener('click',clearModal);