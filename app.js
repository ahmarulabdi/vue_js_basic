 new Vue({
 	el : '#vue-app' ,
 	data : {
 		umur : 22,
 		x : 0,
 		y : 0
 	},

 	methods : {
 		logNama :function() {
 			console.log("kamu input nama kamu");
 		},
 		logUmur :function() {
 			console.log("kamu input umur kamu");	
 		}
 	}
 })