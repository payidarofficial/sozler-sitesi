function kopyala(element) {
	var $temp = $("<input>");
	$(&quot;body&quot;).append($temp);
	$temp.val($(element).text()).select();
	document.execCommand(&quot;copy&quot;);
	$temp.remove();
}
