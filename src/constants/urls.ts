const baseOne='https://jsonplaceholder.typicode.com'
export const urls={
    users:{
        allUsers:baseOne +"/users",
        byId:(id:number)=>{
            return baseOne+'/users'+id
        }
    },
    posts:{
       userPostsById:(id:number)=>{
            return baseOne+'/posts?userId='+id
        }
    }
}