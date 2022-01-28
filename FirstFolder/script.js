const element = document.getElementById("main-text")
const elements = document.getElementsByClassName("paragraph")
const elementsTag = document.getElementsByTagName("h1")
const elementsName = document.getElementsByName("first-input")
const elementquery = document.querySelector("p")
const elementqueryall = document.querySelectorAll("p")

const elementt = document.getElementById("main-text")

// The sequence below, chamge the content of a tag.
// innerText and textContent change the caracters inside tag, without format.
//innerHTML accept Tag's.
//elementt.innerText = "Changed Text!"
//elementt.textContent = "Changed Text!"
//elementt.innerHTML = "Changed Text! <sup>Tag</sup>"

elementt.style.backgroundColor = '#ffee00'

console.log(elementqueryall)
console.log(element.attributes)


/*
The selector getElementById return that one first element.

The following selectors return a 'HTML COLECTION':
- getElementsByClassName
- getElementByTagName

The following selectors return a 'NodeList':
- getElementsByName
- querySelector
- querySelectorAll
  */