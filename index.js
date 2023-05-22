// javascript

/* firebase.database().ref('/userProfile').push(userProfile) */


/* FIREBASE SETTINGS */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-edf9d-default-rtdb.europe-west1.firebasedatabase.app/"

}

/* initialize database function */
const app = initializeApp(appSettings)
/* getting database function */
const database = getDatabase(app)
/* refferencing database nod (?) for champion app*/
const championMessagesInDB = ref(database, "champion")



/* JAVASCRIPT CODE */

const inputFieldEl = document.getElementById("text-message")
const addButtonEl = document.getElementById("publish-button")
const messageDivEl = document.getElementById("message-list")
/* console.log(inputFieldEl)
console.log(addButtonEl) 
console.log(messageListEl) */

/* From and To inputs */
const inputFromEl = document.getElementById("from")
const inputToEl = document.getElementById("to")
/* console.log(inputFromEl)
console.log(inputToEl)
 */


/* Remove button */
const removeButtonEl = document.getElementById("remove-button")


/* Event listener to addButton */
addButtonEl.addEventListener("click", function() {

    let inputMessage = inputFieldEl.value
    let inputFrom = inputFromEl.value
    let inputTo = inputToEl.value
    
    let obValues = {message: inputMessage, from: inputFrom, to: inputTo}
/*      console.log(inputMessage)
    console.log(inputFrom)
    console.log(inputTo)  */
    
    push(championMessagesInDB, obValues)
    clearInput()
     
})

//firebase.database().ref('/userProfile').push(userProfile)

onValue(championMessagesInDB, function(snapshot) {
    if(snapshot.exists()) {
         let messageFromTo = Object.values(snapshot.val()) 
         //console.log(messagesArray) 
        /*     console.log(messageFromTo[0].from) 
          console.log(messageFromTo[0].message) 
         console.log(messageFromTo[0].to)   */   
     messageDivEl.innerHTML = ""
        
        for(let i=0; i<messageFromTo.length; i++) {
            let currentMessage = messageFromTo[i]
           // console.log(currentMessage)
            appendMessageTomessageListEl(currentMessage)
            
            
            
        } 
        
    } else {
        messageDivEl.innerHTML = ""
    }
        
})



/* Function clear vlaue in textarea tag */
function clearInput() {
    inputFieldEl.value = ""
    inputFromEl.value = ""
    inputToEl.value =""
}

 

/* Function to append message to the ul list */

 function appendMessageTomessageListEl(message) {
    let messageFrom = message.from
    let messageMessage = message.message
    let messageTo = message.to
    
      console.log(messageFrom) 
          console.log(messageMessage) 
         console.log(messageTo)   
    let liOrder = document.getElementById("li1")
    
    let newEl = document.createElement("li")
    //newEl.innerHTML = messageMessage
    messageDivEl.insertBefore(newEl, liOrder)
    
 /*    document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv) */
  
    let textTo = document.createElement("p")
    textTo.setAttribute('class', 'p-to')
    textTo.innerHTML = `To ${messageTo}` 
    newEl.append(textTo)
    

    
    let textMessage = document.createTextNode(messageMessage)
    newEl.append(textMessage)
    
    let textFrom = document.createElement("p")
    textFrom.setAttribute('class', 'p-from')
    textFrom.innerHTML =  `From ${messageFrom}` 
    newEl.append(textFrom)
    


                /* TO DO */
   
/*   / let btnLikes = document.createElement("button")//document.createElement("button") */ 
/*     let iconHeart = document.createElement("i")
    iconHeart.setAttribute('class', 'fa fa-thumbs-up')
    textFrom.append(iconHeart) */
    
 
     
    
}

/* Function to create like button and click count */

 function buttonLikes() {
        let btnLikes = document.createElement("btn-likes")
        let countClicks = document.createElement("click-count")
      
}
 
 /* Optional remove Button */
 
 
/* removeButtonEl.addEventListener("dblclick", function() {
          let exactLocationOfItemInDB = ref(database, `champion/`)
        
          remove(exactLocationOfItemInDB)
          clearChampionList()
          messageDivEl.innerHTML  = "Your data base is now empty."
})

function clearChampionList() {
     messageDivEl.innerHTML = ""
}
 */
 
 
 
 
        

 
/* Event listener for button likes and click counts */
/*  newBtn.addEventListener("click", function() {
       
           let clicks = 0;
          let onClick = false
          
        if(!onClick){
            
            clicks += 1;
            onClick = true;
            
            document.getElementById("click-count").innerHTML = clicks //clicks section
            //document.getElementById("btn-likes")
         }
})   */


