let cafe1 = {
    name: 'Red',
    city: 'HaNoi'
}
let cafe2 = {
    name: 'Yellow',
    city: 'SaiGon'
}
let cafe3 = {
    name: 'Blue',
    city: "QuangNgai"
}
let cafe4 = {
    name: 'Green',
    city: 'CanTho'
}
let cafe5 = {
    name: 'Gray',
    city: 'BacNinh'
}
let cafes = [cafe1, cafe2, cafe3, cafe4, cafe5]
let index = -1
function renderItem(doc){
  let myForm = document.getElementById('cafelist')
  let li = document.createElement('LI')
  let name = document.createElement('SPAN')
  let city = document.createElement('SPAN')
  let cross = document.createElement('DIV')
  name.textContent = doc.name
  cross.textContent = 'X'
  city.textContent = doc.city
  li.appendChild(name)
  li.appendChild(city)
  li.appendChild(cross)
  myForm.appendChild(li)
  index++
  cross.addEventListener('click',function() {
    myForm.removeChild(li)
    let i = cafes.indexOf(doc)
       cafes.splice(i,1)
       console.log(cafes)
  
})
       
}
cafes.forEach(doc => renderItem(doc))

let inputForm = document.getElementById('add-cafe-form')
inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let name = inputForm.name.value;
    let city = inputForm.city.value;
    let obj = {
        name : name,
        city : city
    }
    cafes.push(obj)
    renderItem(obj)
    console.log(cafes)
    inputForm.name.value = '';
    inputForm.city.value = ''
})
cafes = JSON.stringify(cafes)
localStorage.setItem('cafeData',cafes)
let cafes1 = []
function getData(){
    cafes1 = (JSON.parse(localStorage.getItem('cafeData')) )
}
getData()
console.log(cafes1)