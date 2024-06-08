
export const useDate =() =>{
    const date = new Date()
const mon = date.getMonth()
const months = ["Jan","feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 return `${months[mon]} ${date.getDate()} ${date.getFullYear()}`
}
