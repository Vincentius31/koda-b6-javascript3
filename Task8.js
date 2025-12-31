const url = "https://jsonplaceholder.typicode.com/users"

function toLowerCaseBuiltIn(str){
    return str.toLowerCase();
}

function toLowerCaseManual(str){
    const char = {
    A: 'a', B: 'b', C: 'c',
    D: 'd', E: 'e', F: 'f',
    G: 'g', H: 'h', I: 'i',
    J: 'j', K: 'k', L: 'l',
    M: 'm', N: 'n', O: 'o',
    P: 'p', Q: 'q', R: 'r',
    S: 's', T:'t', U: 'u',
    V: 'v', W: 'w', X: 'x',
    Y: 'y', Z: 'z'
  }

  let strBaru = ""
  for(let i=0; i<str.length; i++){
    let potongan = str[i]
    if(char[potongan]){
        strBaru += char[potongan]
    }
    else{
        strBaru += potongan
    }
  }
  return strBaru
}

fetch(url).then(response => response.json()).then(users =>{
    const email = users.map(users => toLowerCaseBuiltIn[users.email])
})