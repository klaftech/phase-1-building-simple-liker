// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const handleLike = (event) => {
  
  function validResponse (response) {
    const span = event.target.closest("li").querySelector("span")
    if(span.innerText === FULL_HEART){
      span.innerText = EMPTY_HEART
      span.classList.remove("activated-heart")
      console.log("unliked")
      //console.log(span)
    } else {
      span.innerText = FULL_HEART
      span.classList.add("activated-heart")
      console.log("liked")
      //console.log(span)
    }
  }

  mimicServerCall('test')
  .then((response) => {
    console.log("Response: "+response)
    validResponse(response)
  })
  .catch((error) => {
    console.log("ErrorResponse: "+error)
    const errDiv = document.querySelector("div#modal")
    errDiv.classList.remove("hidden")
    setTimeout(()=> errDiv.classList.add("hidden"),3000)
  })
}

//initialize & hide error modal
const errDiv = document.querySelector("div#modal")
errDiv.classList.add("hidden")

//add event listeners to like buttons
const likeLis = document.querySelectorAll("li.like")
likeLis.forEach((li)=>{li.addEventListener('click',handleLike)})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
