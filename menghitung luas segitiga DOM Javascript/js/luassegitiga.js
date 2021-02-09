var luas;
var alas;
var tinggi;
function hitung() {
	alas = parseFloat(document.getElementById("alas").value);
	tinggi = parseFloat(document.getElementById("tinggi").value);
	luas = 0.5 * alas * tinggi;
	document.getElementById('luas').value = luas;
}