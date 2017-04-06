var mydata = JSON.parse(links);


function parseJason(){
		
	for(i=0; i< mydata.length; i++) {
		document.getElementById('jason').innerHTML += 
			'<a href=' + mydata[i].url + 'target=_blank>' + mydata[i].name + '</a><br><img src=' + mydata[i].img + ' height="50 width="50"><br>' + mydata[i].description + '<br><br>';	
	}
}

parseJason();
