const button = document
  .getElementById("addbutton")
  .addEventListener("click", addButton);
const text = document.getElementById("text");
const result = document.getElementById("result");
const done = document.getElementsByClassName("done");
const resultText = document.getElementsByClassName("resultText");

function addButton(e) {
  e.preventDefault();

  //create element div
  div = document.createElement("div");
  //set a class for element div which is "resultText"
  div.setAttribute("class", "resultText");
  //create a text node, fetching the vaule from input box
  valueText = document.createTextNode(text.value);
  //append the div with and value of the text, with the parent element being result
  result.appendChild(div).appendChild(valueText);

  //creating button element for button done
  const buttons = document.createElement("button");
  buttons.innerHTML = "Done";
  div.appendChild(buttons);
  buttons.setAttribute("class", "done");

  // create a click event for button done, and calling the next function:completeTodo
  buttons.addEventListener("click", completeTodo);

  ///Loop using foreach through html collection if insiide pareent
  // Array.from(done).forEach(element => {
  //   element.addEventListener("click", removeTodo);

  // });
}

function completeTodo() {
  //changing the element of colors
  const parent = this.parentNode;
  parent.classList.add("completed-task");
  this.innerHTML = "Completed";
  this.style.backgroundColor = "green";
  //const completed = document.getElementsByClassName("completed-task");

  removeTodo();
  // event = this.addEventListener("click", removeTodo(event));
}

function removeTodo() {
  const buttons = document.createElement("button");
  buttons.innerText = "X";
  event.target.appendChild(buttons);
  buttons.addEventListener("click", function() {
    buttons.parentElement.parentElement.remove();
  });
}
