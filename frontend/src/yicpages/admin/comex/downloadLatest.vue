
<template style="z-index:1000; margin-top:200px;">
	<div>
		<Navbar />
		<div class="root3">
			<div style="">
				<template>
					<div class=" ">
						<h5 class="mainTitle">
					Download Entries
				</h5>
					</div>
					<h2 style="display: flex; flex-direction:column; ">
						<icon style="margin-top:5%; margin-bottom: 10%; margin-left:auto ; margin-right: auto;"><img  src="../download.svg"></icon>
						<center>Download File
						<b-button style="margin:auto;  " type="Submit" variant="primary" @click="Download()">Download</b-button>
					</center>
					</h2>
					<b-modal ok-only v-model="success">
					<p v-if="error">{{error}}</p>
					<p v-else>Your Data is Downloaded!</p>
				</b-modal>
				</template>

			</div>
		</div>
		
	</div>
</template>
<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
	BSidebar, BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import store from '@/store'
import Navbar from '../Navbar.vue'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import { mapMutations, mapActions, mapState } from "vuex";
import Password from "vue-password-strength-meter";
// import { jsonToCSV } from 'vue-papaparse'
import VuePapaParse from 'vue-papa-parse'
import Papa from 'papaparse'
import { positive } from '@/@core/utils/validations/validations'



export default {
	components: {
		BSidebar,
		BForm,
		BFormFile,
		BFormGroup,
		BFormInput,
		BFormInvalidFeedback,
		BButton,
		vSelect,
		BModal,
		Navbar,

		// Form Validation
		ValidationProvider,
		ValidationObserver,
		VuePhoneNumberInput,
		Password
	},
	model: {

	},
	props: {


	},
	data() {
		return {
			success: false,
		}
	},
	computed: {
		...mapState({
			data: (state) => {
				return state.comex.Data;
			},
			error: (state) => {
				return state.comex.errorsInGetData;
			},

		}),
	},
	methods: {
		...mapActions({
			getData: "comex/getData",

		}),
		async Download() {
			await this.getData()
			console.log([this.data])
			var csv = Papa.unparse(this.data)
			// Papa.download(unparsedResults, 'LatestData')
			let content = new Blob([csv]);
			let urlObject = window.URL || window.webkitURL || window;
			let url = urlObject.createObjectURL(content);
			let el = document.createElement("a");
			el.setAttribute('href', url)
			el.setAttribute('download', 'CsvExport.csv')
			el.click();
			urlObject.revokeObjectURL(url);
			this.success = true
		}


	},


}

</script>
<style lang="scss">

.form {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: 500px;
	width: auto;
}
.root3{
	padding: 55px 30px ;
gap: 8px;

// width: 80%;
// height: 1122px;
// left: 54px;
// top: 168.02px;
margin-top: 35px;
margin-left: 50px;
margin-right: 50px;
margin-bottom: 50px;

background: #FFFFFF;
box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
border-radius: 10px;
}
.mainTitle{
width: 262px;
height: 38px;

font-family: 'Mulish';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
/* identical to box height */
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2px;

color: #ab7ef8;

}
</style>
	