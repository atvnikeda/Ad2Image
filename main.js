setTimeout(() => {
	const elements = document.querySelectorAll("iframe");
	for (const element of elements){
		element.style.setProperty("display","none");
		var width = element.getAttribute("width");
		var height = element.getAttribute("height");
		const parent = element.parentNode;
		var img = document.createElement("img");
		img.setAttribute("src","https://cdnx.natalie.mu/media/pp/static/comic/saenai-heroine02/photo01s.jpg");
		img.setAttribute("width",width);
		img.setAttribute("height",height);
		parent.appendChild(img);
	}
},10000);
