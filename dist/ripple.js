window.onload = function(){
initRippleJS(document.getElementsByClassName("ripple-js-dark"));
initRippleJS(document.getElementsByClassName("ripple-js-light"));
}
function initRippleJS(rippleElements){
  for(var i = 0; i < rippleElements.length; i++) {
    rippleElements[i].onclick = function(e) {
      var X = e.pageX - this.offsetLeft;
      var Y = e.pageY - this.offsetTop;
      var rippleDiv = document.createElement("div");
      rippleDiv.classList.add('ripple-js-elem');
      rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
      this.appendChild(rippleDiv);
      setTimeout(function(){
        rippleDiv.parentElement.removeChild(rippleDiv);
      }, 900);
    }
  }
}