export const allOptionsHaveText = arr => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length === 0) {
      return false
    }
  }
  
  return true
}
