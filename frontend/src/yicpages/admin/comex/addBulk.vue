
<template style="z-index:1000; margin-top:200px;">
	<div>
		<Navbar />
		<div class="root2" style="">
			<div style="width: 100%">
				<h5 v-if="($mq === 'largeDevices') || $mq === 'mediumDevices'" class="mainTitleb">
					Add Bulk Entries
				</h5>
				<p v-if="($mq === 'smallDevices')" class="mainTtileMobileb">
					Add Bulk Entries
				</p>


			</div>
			<validation-observer ref="registerForm">
				<b-form v-if="($mq === 'largeDevices') || $mq === 'mediumDevices'" class="upload" @reset="onReset">
					<b-form-group label="Upload File" label-for="file">
						<b-form-file accept=".csv" v-on:change="uploadCsv($event)" v-model="file" />
					</b-form-group>


					<br />
					<b-button class="text-center" style="margin-left:100px; " variant="primary" size="lg" type="submit"
						@click.prevent="addInBulk">
						Save
					</b-button>
					<br /><small class="text-danger">{{ errors }}</small>
					<br/>
					<p style="margin-top: 10px;" class="text-center">
						
						
						Download Latest Format
					

					<b-button style="margin-top:40px" class="text-center" variant="primary" @click="DownloadFormat">
						Download
					</b-button>
				</p>
				</b-form>
				<b-modal ok-only v-model="success">
					<p v-if="error">{{ error }}</p>
					<p v-else>Your Data is uploaded!</p>
				</b-modal>
			</validation-observer>
			<validation-observer ref="registerForm">
				<b-form v-if="($mq === 'smallDevices')" class="uploadMobile" @reset="onReset">
					<b-form-group label="Upload File" label-for="file">
						<b-form-file accept=".csv" v-on:change="uploadCsv($event)" v-model="file" />
					</b-form-group>


					<br />
					<b-button style="margin-left: 23%;" variant="primary" size="lg" type="submit" @click.prevent="addInBulk">
						Save
					</b-button>
					<br /><small class="text-danger">{{ errors }}</small>
					<p style="margin-top: 120px;" class="text-center">
						
						
							Download Latest Format
						

						<b-button style="margin-top:40px" class="text-center" variant="primary" @click="DownloadFormat">
							Download
						</b-button>
					</p>
				</b-form>
				<b-modal ok-only v-model="success">
					<p v-if="error">{{ error }}</p>
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
import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
	breakpoints: {
		smallDevices: 600,
		mediumDevices: 1200,
		largeDevices: Infinity,
	}
})

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
			format: '',
		}
	},
	methods: {
		...mapActions({
			addBulkData: "comex/setBulkDetails",
		}),
		async DownloadFormat() {
			this.format = [{ 'Name': '', 'Address': '', 'CaNo': '', 'TelNo': '', "Plan": '', 'TypeOfPlan': '', 'DateOfInstallation': '', 'DateOfUninstallation': '', 'TypeOfConnection': '', 'VoipIpAddress': '', 'VlanId': '', 'OltId': '', 'OltName': '', 'PonNo': '', 'Ont_Onu_Sn_Macadress': '' }]
			console.log([this.format])
			var csv = Papa.unparse(this.format)
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
		},


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
.root2 {
	padding: 50px 20px !important;
	gap: 8px;

	// width: 80%;
	// height: 1122px;
	// left: 54px;
	// top: 168.02px;
	margin-top: 25px;
	margin-left: 50px;
	margin-right: 50px;
	margin-bottom: 50px;

	background: #FFFFFF;
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
	
}

.mainTitleb {
	// width: 262px;
	// height: 38px;

	font-family: 'Mulish';
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	// line-height: 38px;
	/* identical to box height */
	// display: flex;
	align-items: center;
	text-align: center;
	// letter-spacing: 0.2px;

	color: #ab7ef8;

}

.upload {
	box-sizing: border-box;
	margin: auto;
	width: 481px;
	height: 373px;
	padding: 90px;

	border: 2px dashed #888888;
	border-radius: 12px;
}

@media screen and (max-width: 1000px) {
	.mainTtileMobileb {
		width: 100% !important;
		font-family: 'Mulish';
		font-style: normal;
		font-weight: 600;
		font-size: 30px;
		color: #ab7ef8;
		align-items: center;
		text-align: center;
		margin-bottom: 30%;

	}

	.uploadMobile {
		box-sizing: border-box;
		margin: auto;
		width: 100%;
		// height: 50%;
		padding: 30px;

		border: 2px dashed #888888;
		border-radius: 22px;
	}

}
</style>
	