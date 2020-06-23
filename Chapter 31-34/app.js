// Task 1
// var result=new Date();
// document.write(result);

// Task 2

// var result=new Date();
// var data=result.toString();
// document.write("Current month: "+data.slice(4,7));

// Task 3

// var result=new Date();
// var data=result.toString();
// document.write("Today is: "+data.slice(0,3));

// Task 4

// var result=new Date();
// var data=result.toString();
// if(data.slice(0,3)==='Sat' || data.slice(0,3)==='Sun'){
//     alert("Its fun Day");
// }

// Task 5
// var result=new Date();
// var date=result.getDate();
// if(date<=15){
//     document.write("First fifteen days of month");
// }
// else if(date>=16){
//     document.write("Last days of month");
// }

// Task 7

// var hrs=new Date().getHours();
// if(hrs<12){
//     alert("Its am");
// }
// else if(hrs>12){
//     alert("its pm");
// }

// Task 8

// var result=new Date().toString();
// var seg1=result.slice(0,15);
// var seg2=result.slice(15,25);
// var seg3=result.slice(25);
// var new_seg1=seg1.replace(seg1,"Thu Dec 31 2020");
// var new_seg2=seg2.replace(seg2,"00:00:00 ");
// document.write(result+"</br>");
// document.write("Later date: "+new_seg1+new_seg2+seg3);

// Task 9
// var days=new Date().getUTCDate();
// document.write(days+59+" days have passed since 1st ramadan 2020");