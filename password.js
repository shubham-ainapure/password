const form= document.getElementById("passform");
    const limit=document.getElementById("number");
    const uppercasei=document.getElementById("uppercase");
    const numbersi=document.getElementById("numbers");
    const symbolsi=document.getElementById("symbols");
    const PasswordDisplay=document.getElementById("PasswordDisplay");

    const uppercase_char_code=arrayFromLowToHigh(65,90);
    const lowrcase_char_code=arrayFromLowToHigh(97,122);
    const number_char_code=arrayFromLowToHigh(48,57);
    const symbol_char_code=arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,125));

	form.addEventListener("submit", e =>{
		e.preventDefault();

		const number1=limit.value;
		const uppercase=uppercasei.checked;
		const number=numbersi.checked;
		const symbols=symbolsi.checked;
		const password=generatePass(number1,uppercase,number,symbols)
		PasswordDisplay.innerText=password
	})

	function generatePass(number1,uppercase,number,symbols){
		// string.fromCharCode(65);
		// console.log(lowrcase_char_code);
		let charCodes=lowrcase_char_code
		if(uppercase) charCodes=charCodes.concat(uppercase_char_code)
		if(number)  charCodes=charCodes.concat(number_char_code)
		if(symbols)  charCodes=charCodes.concat(symbol_char_code)

            const passwordCharacters=[]
			for(let i=0; i<number1; i++){
             const characterCode= charCodes[Math.floor(Math.random()* charCodes.length)]

             passwordCharacters.push(String.fromCharCode(characterCode))

			}
			 return passwordCharacters.join("")



	}

	function arrayFromLowToHigh(low,high){

		const array=[];

		for (let i = low; i <=high; i++) {
			array.push(i);
			}
			return array;
	}