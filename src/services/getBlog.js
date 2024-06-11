export const getBlogs= async ()=>{
    
    const res=await fetch(`http://coffeshopapi.amirhashemi776.ir/cafeBlog`)
    if(!res.ok){
        throw new Error('some thing is wrong')
    }
    const  data=await res.json()
  
    if(data.length === 0){
        throw new Error('No Item Found.')
    }
    return data;


}




export const getBlogDetails = async (blogId)=>{
    const res=await fetch(`http://coffeshopapi.amirhashemi776.ir/cafeBlog?id=${blogId}`)
    if(!res.ok){
        throw new Error('some thing is wrong')
    }
    const  data=await res.json()
  
    if(data.length === 0){
        throw new Error('The desired blog was not found')
    }
    return data;
}