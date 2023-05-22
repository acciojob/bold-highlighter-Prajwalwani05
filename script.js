function highlight() {
    //Write your code here
 let a = document.querySelectorAll('p strong');
	a.forEach(element => {
		element.style.color = 'green';
	});

}


function return_normal() {
    //Write your code here
  let b = document.querySelectAll('p strong');
	b.forEach(element => {
		element.style.color = 'black';
	});
    
}
