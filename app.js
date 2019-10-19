 new Vue({
 	el : '#vue-app' ,
 	data : {
 		umur : 22,
 		x : 0,
 		y : 0
 	},

 	methods : {
 		tambah : function(param) {
 			this.umur+= param;
 		},
 		kurang : function(param) {
 			this.umur-= param;
 		},
 		updateXY : function(event) {
 			this.x = event.offsetX;
 			this.y = event.offsetY;
 		}
 	}
 })