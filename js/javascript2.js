
			var index = 1;
			var s=1;
		function plusIndex(n){
			index = index + 1;
			showImage(index);
		}
		function minusIndex(n){
			index = index - 1;
			showImage(index);
		}
		function showImage(n){
			var i;
			var x = document.getElementsByClassName("slides");
			if(n > x.length){index = 1};
			if(n < 1){index = x.length};
			for(i=0;i<x.length;i++){
				x[i].style.display="none";
			}
			x[index-1].style.display = "block";
		}
	
	 function autoSlide(n){
		 if(s==0){return;}
		var i;
		var x = document.getElementsByClassName("slides");
			for(i=0;i<x.length;i++){
				x[i].style.display="none";
			}
		if(index > x.length){index = 1};
		x[index-1].style.display = "block";
		index++;
		setTimeout(autoSlide,2300);
	 }
	 
		function blink() {
			document.getElementById("logo").style.color = "#000000";
			setTimeout("appear()", 700);
		}

		function appear() {
			document.getElementById("logo").style.color = "#ffffff";
			setTimeout("blink()", 700);
		}
	 
	 blink();
	 
