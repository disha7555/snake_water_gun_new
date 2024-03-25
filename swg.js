function swg1()
{
	let n=0;
	do{
		n++;
		let y="";
		let user_input=prompt("Enter 's' for snake,'g' for gun and 'w' for water");
		let random=Math.floor(Math.random()*3+1);
		if(random==1)
		{
			random='s';
		}
		if(random==2)
		{
			random='w';
		}
		if(random==3)
		{
			random='g';
		}
		user_input1=user_input.toLowerCase();
		if(user_input1==random)
		{	
			alert("tie");
			document.write("<h1>"+n+"th chance:-</h1>");
			document.write("<h1>you chose: "+user_input+"<br>computer chose: "+random+"<br>result:tie<br></h1>");
		}
		else if(user_input1=='s' && random=='w')
		{	
			alert("you won");
			document.write("<h1>"+n+"th chance:-</h1>");
			document.write("<h1>you chose: "+user_input+"<br>computer chose: "+random+"<br>you won<br></h1>");
		}
		else if(user_input1=='s' && random=='g')
		{
			alert("you loose");
			document.write("<h1>"+n+"th chance:-</h1>");
			document.write("<h1>you chose: "+user_input+"<br>computer chose: "+random+"<br>you loose<br></h1>");
		}
		else if(user_input1=='g' && random=='w')
		{
			alert("you loose");
			document.write("<h1>"+n+"th chance:-</h1>");
			document.write("<h1>you chose: "+user_input+"<br>computer chose: "+random+"<br>you loose<br></h1>");
		}
		else if(user_input1=='g' && random=='s')
		{
			alert("you won");
			document.write("<h1>"+n+"th chance:-</h1>");
			document.write("<h1>you chose: "+user_input+"<br>computer chose: "+random+"<br>you won<br></h1>");
		}
		else if(user_input1=='w' && random=='g')
		{
			alert("you won");
			document.write("<h1>"+n+"th chance:-</h1>");
			document.write("<h1>you chose: "+user_input+"<br>computer chose: "+random+"<br>you won<br></h1>");
		}
		else if(user_input1=='w' && random=='s')
		{
			alert("you loose");
			document.write("<h1>"+n+"th chance:-</h1>");
			document.write("<h1>you chose: "+user_input+"<br>computer chose: "+random+"<br>you won<br></h1>" );
		}
		else{
			alert("give proper input");
		}
		}

		while(y=confirm("do you want to continue"));
}