var names = new Array();
names[0]="Shami";
names[1]="John";
names[2]="Sunny";
names[3]="Vicky";
names[4]="Johny";
names[5]="Danie";
names[6]="Bhuvan";
names[7]="Janardhan";
names[8]="Lucky";
names[9]="Joe";

for (var i = 0; i < names.length; i++)
 {
	if (names[i].charAt(0)==="J" || names[i].charAt(0)==="j") 
	{
		console.log("Goodbye " +names[i])
	}
	else
	{
		console.log("Hello " +names[i])
	}
	
}