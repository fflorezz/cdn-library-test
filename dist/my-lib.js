(function(e) {
  const t = e.document.querySelector("#my-form"), o = t.getAttribute("data-mi-formulario") || "Hello World", n = e.document.createElement("h1");
  n.innerHTML = o, t.appendChild(n);
})(window);
