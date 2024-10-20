const form = document.getElementById('emerald_form')
const inventory = document.querySelector('.inventory')
const handleSubmit = (e) => {
  e.preventDefault()
  clearInventory()
  const entry = form.querySelector('.text-box').value
  const result = calculateEmerald(entry)
 handleInventory(result)
}
const calculateEmerald = (n) => {
  return n * 4
}

const handleInventory = (quantity) => {
  const newInvArray = []
  const stacks = Math.floor(quantity/64)
  const remainder = quantity % 64

  for(let i = 0; i < stacks; i++) {
    newInvArray.push(64)
  }
  if (remainder > 0) {
    newInvArray.push(remainder)
  }

  const invRows = Math.ceil(newInvArray.length / 9)
  console.log(invRows)
  for(let i = 0; i < invRows; i++) {
    const invRow = document.createElement('section')
    invRow.classList.add('inv-row')
    for(let h = 0; h < 9; h++){
      const invSlot = document.createElement('p')
      invSlot.classList.add('inv-slot')
      invRow.appendChild(invSlot)
    }
    inventory.appendChild(invRow)
  }

  

  const invSlots = document.querySelectorAll('.inv-slot')
  newInvArray.forEach((q, i) => {
    if(invSlots[i]){
      invSlots[i].setAttribute('used', 'true')
      invSlots[i].innerHTML = q
    }
  })
}
const clearInventory = () => {
  inventory.innerHTML = ''
}

form.addEventListener('submit', handleSubmit)
document.getElementById('clear-btn').addEventListener('click', clearInventory)