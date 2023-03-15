function getTime()
{
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // 注意月份需要加1
var day = currentDate.getDate();
var hour = currentDate.getHours();
var minute = currentDate.getMinutes();
if(minute.toString().length===1)
minute='0'+minute
var second = currentDate.getSeconds();
if(second.toString().length===1)
second='0'+second
var formattedDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
return formattedDate
}

export default getTime