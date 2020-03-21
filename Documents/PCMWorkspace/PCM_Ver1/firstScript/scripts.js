//alert("The beginning");

function go(){
	var arr = ["Happy Birthday to ", prompt("enter fname")+" "+prompt("enter lname")];
	return arr;
	
};

var arr2 = ["enter lname","1","2","3","4","5","6"];
//alert(arr2);



/*
alert(arr2.forEach(function(value, index){
	console.log(value, index);
}));*/

function total(){
var count = arr2.length;
var asach=null;
while (count>1){
	asach=alert(count);	
	count--;
}
return asach;
};


var aaa=total();
alert(aaa);