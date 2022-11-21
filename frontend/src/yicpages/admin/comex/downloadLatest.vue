
<template style="z-index:1000; margin-top:200px;">
	<div>
		<Navbar />
		<div>
			<div style="margin-top:50px; margin-left:250px; width:500px;">
				<template>
					<div class="d-flex justify-content-between align-items-center ">
						<h2>
							<center>Download Updated Entries</center>
							<br />
							<br />
							<br />
							<b-button type="Submit" variant="primary" @click="Download()">Download</b-button>
						</h2>


					</div>
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
</style>
	