export default defineEventHandler(async(event)=>{

    //handle query parpmeter
    const { name } = getQuery(event)
    const {age} = await readBody(event);

    const {data} = await fetch('https://api.currencyapi.com/v3/latest?apikey=Ul1YOmasGaVbdy9VCleli6bTdItrzJbDsfc9PdrX')
    console.log(data)
    // return{
    //     message: `Hello, ${name}, ${age}`
    // }
    return data
})