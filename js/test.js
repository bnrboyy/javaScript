let contentData;
window.onload = async () => {
    contentData = await onFetchData()

    // let someData = contentData.map( item => {
    //     // console.log(item.name, item.phone, item.email, item.address.city)

    //     const data = document.querySelector('.user-list')
    //     let html = `<div style="margin-left: 1rem;">
    //                     <p>No. ${item.id}</p>
    //                     <div style="margin-left: 2rem;">
    //                         <p> Name : ${item.name}</p>
    //                         <p>Phone : ${item.phone}</p>
    //                         <p>Email : ${item.email}</p>
    //                         <p>Address ${item.address.city}</p>
    //                     </div>  
    //                 </div>
    //                 `
    //     data.insertAdjacentHTML('beforebegin', html)
    //     // return {name: item.name, phone: item.phone, email: item.email, address: item.address.city} // return เป็น Object Ket : value
    // } )
    console.log(contentData[1].name)
}

//FetchData api
const onFetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users/"
    return fetch(url, {
        method:"GET",
    })
    .then( response => response.json())
    .then( jsonData => jsonData ) 
}


