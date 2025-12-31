const url = "https://jsonplaceholder.typicode.com/users"

const array = []

//Then-Catch:
fetch(url).then(obj => obj.json().then(data => {
    data.forEach(
        user => {
            array.push(user.email.toLowerCase())
        }
    )
    console.log(array)
}))

//Async-await
async function dataEmail(url) {
    let arrayEmail = []
    try{
        const response = await fetch(url)
        const users = await response.json()
        users.forEach(
            user => {
                arrayEmail.push(user.email.toLowerCase())
            }
        )
        console.log(arrayEmail)

    }
    catch (e){
        console.log(error)
    }
}

dataEmail(url)



    
