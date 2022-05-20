const getData = (str) => {
    return fetch(`https://course-6f940-default-rtdb.firebaseio.com/goods.json?`)
    .then((response) =>{
        return response.json()
    })
    
}

export default getData