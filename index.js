let count = 0

let element = document.getElementById('counter')

function increase(){
  count += 1
  element.innerHTML = `<mark> ${count} </mark>`

}

function decrease(){
  count -= 1
  element.innerHTML = `<mark> ${count} </mark>`

  
}

function reset(){
  count = 0
  element.innerHTML = `<mark> ${count} </mark>`
}

function selectTheme(theme){
  document.getElementsByTagName('body')[0].className = theme
  document.getElementsByTagName('main')[0].className = theme
  let buttons = document.getElementsByTagName('button')

  for(let i = 0; i < buttons.length; i++){
    buttons[i].className = theme
  }

}