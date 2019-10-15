 new Vue({
 	el : '#vue-app' ,
 	data : {
 		nama : "abdi",
 		pekerjaan : 'rebahan'
 	},
 	methods : {
 		pesan : function(waktu) {
 			return 'Selamat '+waktu + ' ' +this.nama;
 		}
 	}
 })