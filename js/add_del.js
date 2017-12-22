        ne();
		function ne(){
			var x=document.getElementsByClassName("yixuan")[0];
			var hidden=x.childNodes.length;
			if(hidden==3){
				x.parentNode.style.display="none";
			}else if(hidden>3){
				x.parentNode.style.display="block";
			}
		};
		function add(a){
			a.style.display="none";
			b=a.innerText;
			var yixuan=document.getElementsByClassName("yixuan")[0];
			yixuan.innerHTML+="<a onclick='del(this)'>"+b+"</a>";
			ne();
		}
		function del(b){
			b.parentNode.removeChild(b);
			var len=document.getElementById("yixuan").childNodes;
			var i,num;
			var m=0;
			for(i=0;i<len.length;i++){
				if(len[i].innerHTML==b.innerHTML){
					len[i].style.display="block";
				}
			}
			ne();
		}