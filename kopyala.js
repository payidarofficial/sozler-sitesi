function kopyala(element) {
	var $temp = $(&quot;<input>;&quot;);
	$(&quot;body&quot;).append($temp);
	$temp.val($(element).text()).select();
	document.execCommand(&quot;copy&quot;);
	$temp.remove();
}
