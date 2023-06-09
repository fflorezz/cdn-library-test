(function(
  window
){
  const element = window.document.querySelector('#my-form') 
  const message = element.getAttribute('data-mi-formulario') ||'Hello World'
  const newElement = window.document.createElement('h1') 
  newElement.innerHTML = message
  element.appendChild(newElement)
})(window)
