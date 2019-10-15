 new Vue({
 	el : '#vue-app' ,
 	data : {
 		nama : "abdi",
 		pekerjaan : 'rebahan',
 		alamatWeb : 'https://kodingit.com',
 		alamatWebTag : "<a href='https://kodingit.com'>Koding IT</a>",
 		tes_input : "Standar"
 	},
 	methods : {
 		pesan : function(waktu) {
 			return 'Selamat '+waktu + ' ' +this.nama;
 		}
 	}
 })