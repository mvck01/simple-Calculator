function getHistory(){
	return document.getElementById('history-value').innerText;
}
function workHistory(num){
	document.getElementById('history-value').innerText=num;
}
function getOutput(){
	return document.getElementById('output-value').innerText
}

function workOutput(num){
	if(num===""){
		document.getElementById('output-value').innerText=num
	}else{
		document.getElementById('output-value').innerText=getFormattedNum(num);
	}
	

	function getFormattedNum(num){
		if(num==="-"){
			return " "
		}
		let x= Number(num)
		value= x.toLocaleString("en");
		return value
	}
}

function reversedNum(num){
	return Number(num.replace(/,/g, ""));
}

let operators= document.querySelectorAll('.operator')
operators.forEach((oper)=>{
	oper.addEventListener('click', ()=>{
		if(oper.id==="clear"){
			workHistory("");
			workOutput("");
		}else if(oper.id=== "backspace"){
			let output= reversedNum(getOutput()).toString()
			output= output.substr(0,output.length-1)
			workOutput(output)
		}else{
			let output= getOutput();
			let history= getHistory();

			if(output != ""){
				output= reversedNum(output);
				history= history + output;
				if(oper.id=== "="){
					let result= eval(history)
					workOutput(result);
					workHistory("")
				}else{
					history = history +oper.id;
					workOutput("")
					workHistory(history)
				}
			}
		}
	})

})

let numbers= document.querySelectorAll('.number')
numbers.forEach((numb)=>{
	numb.addEventListener('click', ()=>{
		let output= reversedNum(getOutput());
		if(output != NaN){
			output= output + numb.id
			workOutput(output)
		}
	})
})