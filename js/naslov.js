function blink() {
			document.getElementById("logo").style.color = "#000000";
			setTimeout("appear()", 700);
		}

		function appear() {
			document.getElementById("logo").style.color = "#ffffff";
			setTimeout("blink()", 700);
		}