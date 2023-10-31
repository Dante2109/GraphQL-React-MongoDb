let api="http://localhost/migrating_data/graphql"
let query={query:
    `query{
      pages{
        nodes{
          title
          content
        }
      }
    }`
}
let data=fetch(`${api}`,{
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(query)
})
.then(res=>res.json()).then(res=>console.log(res.data.pages.nodes)).catch(error=>console.log(error))
