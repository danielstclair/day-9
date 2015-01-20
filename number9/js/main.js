$(document).ready(function() {
	$('#choice').val();
	$('#button').click(function (x, y, z) {
		var start = $('#choice').val();
		x = Math.floor(Math.random()*3+1)
		y = Math.floor(Math.random()*3+1)
		z = Math.floor(Math.random()*3+1)
		console.log(x,y,z);
		if ((x === y) && (x === z)) {
			console.log("YOU WON!!!!! YEEEEEESSSSSSSSS!!!!!!!!!");
			return
		}
		else if (x===1 && y===2 && z===3) {
			console.log("YOU WON 123!!!!! YEEEEEESSSSSSSSS!!!!!!!!!");
			return
		}
		else if (x===3 && y===2 && z===1){
			console.log("YOU WON 321!!!!! YEEEEEESSSSSSSSS!!!!!!!!!");
			return
		}
		else {
			var options = 'Ba da bom, bom, bom. Another one bites the dust.'
			console.log(options);
			return
			}
	});
});
