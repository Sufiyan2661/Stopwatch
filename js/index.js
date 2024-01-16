const enddate = "19 november 09:30 am 2023"
document.getElementById("end-date").innerText = enddate;
const input = document.querySelectorAll("input")


const clock = ()=>{
    const end = new Date(enddate);
    const now = new Date;
    const diff = (end - now)/1000;
    if(diff<0){
        return;
    }
    // to consvert it into days
    input[0].value=Math.floor(diff/3600/24);
// to convert it into hours
input[1].value=Math.floor(diff/3600)%24
//to inpuut the minutes
input[2].value=Math.floor(diff/60)%60
// to input the seconds
input[3].value=Math.floor(diff)%60
    
    // console.log(diff);
}

clock()
setInterval(() => {
    clock()
}, 1000);