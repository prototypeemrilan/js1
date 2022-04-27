// console.log(document)

// const blocks = document.getElementsByClassName('block');
// console.log(blocks)

const block3 =  document.getElementById('block3')
// console.log(block3.classList)
// block3.className = "changedClass"
// console.log(block3.classList)
// block3.classList.add("changedClass")
// block3.classList.remove("newClass")
// console.log(block3.classList)
//
// block3.onclick = () => {
//     block3.classList.toggle("active")
// }

const button = document.getElementById('button')
const input = document.getElementById('input')

button.onclick = () => {
    const div = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "delete";
    deleteButton.onclick = (e) => {
        console.log(e)
        div.remove(deleteButton.innerText)

    }

    div.setAttribute("class", 'block');
    div.innerText = input.value
    document.body.append(div)
      document.body.append(deleteButton)
    // input.value = "";
}