
<template style="z-index:1000; margin-top:200px;">
	<div>
		<Navbar/>
		<div style="margin:50px">
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">
					Add Bulk Entries
				</h5>


			</div>
			<validation-observer ref="registerForm">
				<b-form @reset="onReset" class="auth-register-form mt-2 ml-2 mr-2">
					<b-form-group label="File" label-for="file">
						<b-form-file accept=".csv" v-on:change="uploadCsv($event)" v-model="file" />
					</b-form-group>



					<b-button variant="primary" size="lg" type="submit" @click.prevent="addInBulk">
						Save
					</b-button>
					<br /><small class="text-danger">{{ errors }}</small>
				</b-form>
				<b-modal ok-only v-model="success">
					<p v-if="error">{{error}}</p>
					<p v-else>Your Data is uploaded!</p>
				</b-modal>
			</validation-observer>
		</div>
	</div>
</template>
<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
	BSidebar, BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton
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
import Papa from 'papaparse';



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
			file: '',
			content: [],
			parsed: false,
			image: '',
			success: false,
		}
	},
	methods: {
		...mapActions({
      addBulkData: "comex/setBulkDetails",
    }),
	
	
  onReset() {
			//resetform
			this.file = '',
				this.content = [],
				this.parsed = false,
				this.image = ''
		},
		async uploadCsv() {
			this.file = event.target.files[0];
			await this.parseFile();
		},
		async parseFile() {
			await Papa.parse(this.file, {
				header: true,
				skipEmptyLines: true,
				complete: function (results) {
					this.content = results;
					this.parsed = true;
					console.log(results)
				}.bind(this)
			});
		},
		async addInBulk() {
			console.log('file -', this.file)
			console.log('content -', this.content.data)
			console.log('parsed -', this.parsed)
			await this.addBulkData(this.content.data)
			this.success = true
			this.onReset()
		}
	},
	computed: {
		...mapState({
			error: (state) => {
				return state.comex.errorsInBulk;
			},

		}),
	},
	
}

</script>
<style lang="scss">

.form{
	display: flex;
	flex-direction: column;
	flex-wrap:wrap;
	height: 500px;
	width: auto;
}

</style>
	