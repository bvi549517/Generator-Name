function getName(){
	var fname = document.querySelector('#fn').value;
	var lname = document.querySelector('#ln').value;
	document.querySelector('#o').innerHTML = HipsterName(fname,lname);
}
function HipsterName(firstname,lastname){
	
	var firstLFN = firstname.charAt(0).toUpperCase();
	var lastLLN = lastname.charAt(0).toUpperCase();
 	var newName = "";
	//firstname


	if(firstLFN == 'A') newName = 'Write';
	if(firstLFN == 'B') newName = 'Lone';
	if(firstLFN == 'C') newName = 'Rovenous';
	if(firstLFN == 'D') newName = 'Ancient';
	if(firstLFN == 'E') newName = 'Mogic';
	if(firstLFN == 'F') newName = 'Ebony';
	if(firstLFN == 'G') newName = 'Dark';
	if(firstLFN == 'H') newName = 'Savoge';
	if(firstLFN == 'I') newName = 'Regal';
	if(firstLFN == 'J') newName = 'Rouge';
	if(firstLFN == 'K') newName = 'Scarlet';
	if(firstLFN == 'L') newName = 'Fierce';
	if(firstLFN == 'M') newName = 'Alpha';
	if(firstLFN == 'N') newName = 'Beautyful';
	if(firstLFN == 'O') newName = 'Blood';
	if(firstLFN == 'P') newName = 'Moon';
	if(firstLFN == 'Q') newName = 'Loyal';
	if(firstLFN == 'R') newName = 'Scarred';
	if(firstLFN == 'S') newName = 'Grey';
	if(firstLFN == 'T') newName = 'Mystic';
	if(firstLFN == 'U') newName = 'Prime';
	if(firstLFN == 'V') newName = 'Groaful';
	if(firstLFN == 'W') newName = 'Mojestic';
	if(firstLFN == 'X') newName = 'Wild';
	if(firstLFN == 'Y') newName = 'Verogeful';
	if(firstLFN == 'Z') newName = 'Cruel';

//lasname

	if(lastLLN == 'A') newName =newName +" "+  'Hunter';
	if(lastLLN == 'B') newName =newName +" "+ 'Demon';
	if(lastLLN == 'C') newName =newName +" "+ 'Howler';
	if(lastLLN == 'D') newName =newName +" "+ 'Rain';
	if(lastLLN == 'E') newName =newName +" "+ 'Red';
	if(lastLLN == 'F') newName =newName +" "+ 'Shadow';
	if(lastLLN == 'G') newName =newName +" "+ 'Storm';
	if(lastLLN == 'H') newName =newName +" "+ 'Beast';
	if(lastLLN == 'I') newName =newName +" "+ 'Dagger';
	if(lastLLN == 'J') newName =newName +" "+ 'Bane';
	if(lastLLN == 'K') newName =newName +" "+ 'Fang';
	if(lastLLN == 'L') newName =newName +" "+ 'Wizard';
	if(lastLLN == 'M') newName =newName +" "+ 'Claw';
	if(lastLLN == 'N') newName =newName +" "+ 'Wolf';
	if(lastLLN == 'O') newName =newName +" "+ 'Crecost';
	if(lastLLN == 'P') newName =newName +" "+ 'Paw';
	if(lastLLN == 'Q') newName =newName +" "+ 'Lipos';
	if(lastLLN == 'R') newName =newName +" "+ 'Fire';
	if(lastLLN == 'S') newName =newName +" "+ 'Temptress';
	if(lastLLN == 'T') newName =newName +" "+ 'Warrior';
	if(lastLLN == 'U') newName =newName +" "+ 'Roge';
	if(lastLLN == 'V') newName =newName +" "+ 'Thorm';
	if(lastLLN == 'W') newName =newName +" "+ 'Micon';
	if(lastLLN == 'X') newName =newName +" "+ 'Lupe';
	if(lastLLN == 'Y') newName =newName +" "+ 'Vixer';
	if(lastLLN == 'Z') newName =newName +" "+ 'Omega';

	return newName
}