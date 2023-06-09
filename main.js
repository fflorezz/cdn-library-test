(function(
  window
){
  const element = window.document.querySelector('#my-form')
  const newElement = window.document.createElement('h1')
  newElement.innerHTML = 'Hello World'
  element.appendChild(newElement)
})(window)
