
<template style="z-index:1000; margin-top:200px;">
	<div>
		<Navbar />
		<div>
			<div class="root5" style="">
				<template>
					<div class="d-flex justify-content-between align-items-center ">
						<h2>
							<center>Configure</center>
							<br />

						</h2>


					</div>
					<validation-observer ref="registerForm">
						<b-form class="form" @submit.prevent>

							<b-form-group style="margin:10px; display: flex; flex-direction: column;" id="fieldset-1" label="Enter OLT Id"
								label-for="input-1">
								<b-form-input id="input-2" v-model="OltId"></b-form-input>
							</b-form-group>
							<b-form-group style=" margin:10px; display: flex; flex-direction: column;" id="fieldset-1" label="Enter OLT Name"
								label-for="input-1">
								<b-form-input id="input-2" v-model="OltName"></b-form-input>
							</b-form-group>
							<b-form-group style=" margin:10px; display: flex; flex-direction: column;" id="fieldset-2" label="Pon Number"
								label-for="input-2">
								<b-form-input id="input-2" v-model="ponNo"></b-form-input>
							</b-form-group>
							<b-form-group style=" margin:10px; display: flex; flex-direction: column;" id="fieldset-2" label="GM"
								label-for="input-2">
								<b-form-input id="input-2" v-model="GM"></b-form-input>
							</b-form-group>
							<b-form-group style=" margin:10px; display: flex; flex-direction: column;" id="fieldset-2" label="Start Range"
								label-for="input-2">
								<b-form-input id="input-2" v-model="startRange"></b-form-input>
							</b-form-group>
							<b-form-group style=" margin:10px; display: flex; flex-direction: column;" id="fieldset-2" label="End Range"
								label-for="input-2">
								<b-form-input id="input-2" v-model="endRange"></b-form-input>
							</b-form-group>



							<b-button v-if="($mq === 'largeDevices' || $mq === 'mediumDevices')" type="submit" variant="primary" @click="check()"
								style="margin: 20px; width:300px">Submit</b-button>
							<b-button v-if="($mq === 'smallDevices')" type="submit" variant="primary" @click="check()"
								style="margin: auto; width:100%">Submit</b-button>


						</b-form>
						<b-modal ok-only v-model="success">
							<p v-if="error">{{ error }}</p>
							<p v-else>Your Data is uploaded!</p>
						</b-modal>
						<b-modal ok-only ok-title="Continue" @ok="onSubmit()" v-model="warn">
							<p>The OltId {{this.OltId}} and OltName {{this.OltName}} combination exist in the Database</p>
							<p>Continue to confirm!</p>
						</b-modal>
						<b-modal ok-title="Continue" @ok="onSubmit()" v-model="danger">
							<p>The OltId {{this.OltId}} and OltName {{this.OltName}} combination dosen't exist in the Database</p>
							<p>Continue to confirm!</p>
							<p>Cancel to abort!</p>

						</b-modal>
					</validation-observer>
				</template>
				<div class="configData">
					<center>

						<b-button @click="searchConfig" style="margin:20px;" variant="primary">
							Search All Config Data
						</b-button>					
					</center>
					<b-table :current-page="currentPage" id="table" :per-page="perPage" style="width:100%;" ref="data" class="position-relative" :items="configData" responsive
						:fields="tableColumns" primary-key="id" show-empty empty-text="No matching records found">
						<template #cell(title)="data">

						</template>
						<template  #cell(Actions)="data">

							<b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">

								<template #button-content>
									<img src="./more-vertical.svg" size="16" class="align-middle text-body" />
								</template>
								

								<b-dropdown-item v-if="role!='ENDUSER'" @click="deleteConfig(data.item.id)">
									<img src="./trash.svg" size="16" class="align-middle text-body" />

									<span class="align-middle ml-50">Delete</span>
								</b-dropdown-item>
							</b-dropdown>
						</template>
					</b-table>
					<b-pagination
      v-model="currentPage"
      :total-rows="configData.length"
      :per-page="perPage"
      aria-controls="table"
    ></b-pagination>
				</div>
			</div>
			<v-idle
  @idle="onidle" style="display:none" 
  :duration="900" />
		</div>
	</div>
</template>
<script>
import Vidle from 'v-idle'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
	BSidebar, BPagination, BDropdown,BDropdownItem, BTable,  BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
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
		BDropdownItem,
		BFormFile,
		BFormGroup,
		BFormInput,
		BFormInvalidFeedback,
		BButton,
		vSelect,
		BModal,
		Navbar,
		BDropdown,
		BPagination,
		// Form Validation
		ValidationProvider,
		ValidationObserver,
		VuePhoneNumberInput,
		Password,
		BTable
	},
	model: {

	},
	props: {


	},
	data() {
		return {
			currentPage : 1,
			perPage: 10,
			OltName: '',
			OltId: '',
			ponNo: '',
			GM: '',
			warn: false,
			danger: false,
			abort: false,
			success: false,
			startRange: 0,
			endRange: 0,
			tableColumns: [
				{ key: 'OltId' },
				{ key: 'OltName' },
				{ key: 'ponNo' },
				{ key: 'GM' },
				{ key: 'startRange' },
				{ key: 'endRange' },
				{ key: 'Actions' },
			],
		}
	},
	methods: {
		...mapActions({
			Configure: "comex/configure",
			searchConfigData: "comex/getConfigData",
			deleteConfigs: "comex/deleteConfig",
			logoutUser: "auth/logoutUser"
		}),
		async searchConfig(){
			await this.searchConfigData()
		},
		onidle(){
      alert('You have been logged out due to inactivity of 15 minutes')
      this.$router.push({ name: "login" });
      this.logoutUser();
    },
	async check(){
		await this.searchConfigData()
		for (var i=0;i<this.configData.length;i++){
			if (this.configData[i].OltName==this.OltName && this.configData[i].OltId==this.OltId){
				this.warn = true
				break
			}
			else if (this.configData[i].OltName!=this.OltName && this.configData[i].OltId!=this.OltId){
				this.danger = true
				break
			}
		}
	},
		async onSubmit() {

			
			await this.Configure({GM : this.GM, OltName: this.OltName, OltId: this.OltId, ponNo: this.ponNo, startRange: this.startRange, endRange: this.endRange});
			this.success = true
			await this.searchConfigData()
		this.reset()
		},
		reset() {
			this.OltName = '',
			this.OltId = '',
			this.ponNo = '',
			this.GM = '',
			this.startRange = '',
			this.endRange = ''
		},
		async deleteConfig(val){
			await this.deleteConfigs({id: val, role: this.role})
			await this.searchConfigData()

		}
	},
	computed: {
		...mapState({
			error: (state) => {
				return state.comex.errorsInSingle;
			},
			configData: (state) => {
				return state.comex.configData
			},
			role: (state) => {
				return state.auth.currUser.role
			}
		}),
	},

}

</script>
<style lang="scss">


	

.root5{
	padding: 20px 16px !important;
gap: 5px;

// width: 80%;
// height: 1122px;
// left: 54px;
// top: 168.02px;

margin-top: 25px;
margin-left: 30px;
margin-right: 30px;
margin-bottom: 30px;

background: #FFFFFF;
box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
border-radius: 10px;
}
</style>
	