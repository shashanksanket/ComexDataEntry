
<template style="z-index:1000; margin-top:200px;">
	<div>
		<Navbar />
		<div>
			<div class="root1">
				<template>
					<div>
						<br />
						<br />
						<h2 class="mainTitle ">
							Add Single Entries
							<br />
							<br />


						</h2>


			</div>
			<validation-observer ref="registerForm">
				<b-form v-if="($mq === 'largeDevices')" class="form" @submit.prevent>
				<br/><br/>
				<div>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-1" label="Enter Name"
					label-for="input-1">
					<b-form-input id="input-1" v-model="Name"  ></b-form-input>
				</b-form-group>
				
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-2" label="Enter Address"
					label-for="input-2" >
					<b-form-input id="input-2" v-model="Address"  ></b-form-input>
				</b-form-group>
			
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-3"  label="Enter CA NO"
					label-for="input-3" >
					<b-form-input id="input-3" v-model="CaNo"  ></b-form-input>
				</b-form-group>
			</div>
			<div>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-4" label="Enter Tel No"
					label-for="input-4" >
					<b-form-input id="input-4" v-model="TelNo"  ></b-form-input>
				</b-form-group>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-5" label="Enter Plan"
					label-for="input-5" >
					<b-form-input id="input-5" v-model="Plan"  ></b-form-input>
				</b-form-group>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-6" label="Enter Type Of Plan"
					label-for="input-6" >
					<b-form-input id="input-6" v-model="TypeOfPlan"  ></b-form-input>
				</b-form-group>
			</div>
			<div>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-7" label="Enter Date Of Installation"
					label-for="input-7" >
					<b-form-input id="input-7" v-model="DateOfInstallation"  ></b-form-input>
				</b-form-group>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-8" label="Enter Type Of Connection"
					label-for="input-8" >
					<b-form-input id="input-8" v-model="TypeOfConnection"  ></b-form-input>
				</b-form-group>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-9" label="Enter Voip Ip Address"
					label-for="input-9" >
					<b-form-input id="input-9" v-model="VoipIpAddress"  ></b-form-input>
				</b-form-group>
			</div>
			<div>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-10" label="Enter VLAN ID"
					label-for="input-10" >
					<b-form-input id="input-10" v-model="VlanId"  ></b-form-input>
				</b-form-group>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-11"  label="Enter OLT Id"
					label-for="input-11" >
					<b-form-select style="width:197px" id="input-13" v-model="OltId" v-on:change="onSelectOltId(OltId)" :options="optionsOltId"></b-form-select>

				</b-form-group>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-13" label="Enter OLT Name"
					label-for="input-13" >
					<b-form-select style="width:197px" id="input-13" v-model="OltName" v-on:change="onSelectOltName(OltName)" :options="optionsOltName"></b-form-select>
				</b-form-group>
			</div>
			<div>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-14" label="Enter Pon No"
					label-for="input-14" >
					<b-form-select style="width:197px" id="input-13" v-model="PonNo" :options="optionsPonNo"></b-form-select>

				</b-form-group>
				<b-form-group style="margin-left:80px; display: flex; flex-direction: column;" id="fieldset-14" label="Enter Ont/Onu S/n MacAddress"
					label-for="input-14" >
					<b-form-input style="width:475px" id="input-14" v-model="Ont_Onu_Sn_Macadress"  ></b-form-input>
				</b-form-group>
			</div>
			<br/>
			<div>
			<b-button type="submit" variant="primary" @click="onSubmit()" style="margin-left: 80px; width:150px">Submit</b-button>

							</div>

						</b-form>
						<b-modal ok-only v-model="success">
							<p v-if="error">{{ error }}</p>
							<p v-else>Your Data is uploaded!</p>
						</b-modal>
					</validation-observer>
					
				</template>
				<div v-if="($mq === 'smallDevices' || $mq === 'mediumDevices')">


					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-1" label="Enter Name" label-for="input-1">
						<b-form-input id="input-1" v-model="Name"></b-form-input>
					</b-form-group>
	
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-2" label="Enter Address" label-for="input-2">
						<b-form-input id="input-2" v-model="Address"></b-form-input>
					</b-form-group>
	
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-3" label="Enter CA NO" label-for="input-3">
						<b-form-input id="input-3" v-model="CaNo"></b-form-input>
					</b-form-group>
				
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-4" label="Enter Tel No" label-for="input-4">
						<b-form-input id="input-4" v-model="TelNo"></b-form-input>
					</b-form-group>
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-5" label="Enter Plan" label-for="input-5">
						<b-form-input id="input-5" v-model="Plan"></b-form-input>
					</b-form-group>
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-6" label="Enter Type Of Plan" label-for="input-6">
						<b-form-input id="input-6" v-model="TypeOfPlan"></b-form-input>
					</b-form-group>
				
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-7" label="Enter Date Of Installation" label-for="input-7">
						<b-form-input id="input-7" v-model="DateOfInstallation"></b-form-input>
					</b-form-group>
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-8" label="Enter Type Of Connection" label-for="input-8">
						<b-form-input id="input-8" v-model="TypeOfConnection"></b-form-input>
					</b-form-group>
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-9" label="Enter Voip Ip Address" label-for="input-9">
						<b-form-input id="input-9" v-model="VoipIpAddress"></b-form-input>
					</b-form-group>
				
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-10" label="Enter VLAN ID" label-for="input-10">
						<b-form-input id="input-10" v-model="VlanId"></b-form-input>
					</b-form-group>
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-11" label="Enter OLT Id" label-for="input-11">
						<b-form-select style="width:100%" id="input-13" v-model="OltId" v-on:change="onSelectOltId(OltId)"
							:options="optionsOltId"></b-form-select>
	
					</b-form-group>
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-13" label="Enter OLT Name" label-for="input-13">
						<b-form-select style="width:100%" id="input-13" v-model="OltName"
							v-on:change="onSelectOltName(OltName)" :options="optionsOltName">
						</b-form-select>
					</b-form-group>
				
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-14" label="Enter Pon No" label-for="input-14">
						<b-form-select style="width:100%" id="input-13" v-model="PonNo" :options="optionsPonNo">
						</b-form-select>
	
					</b-form-group>
					<b-form-group class="input" style=" display: flex; flex-direction: column;"
						id="fieldset-14" label="Enter Ont/Onu S/n MacAddress" label-for="input-14">
						<b-form-input style="width:100%" id="input-14" v-model="Ont_Onu_Sn_Macadress">
						</b-form-input>
						<div>
							<b-button type="submit" variant="primary" @click="onSubmit()" style="margin: auto; margin-top: 20px; width:100%">
								Submit</b-button>
			
						</div>
					</b-form-group>
				
			</div>
			<br />
		</div>
	</div>
	</div>
</template>
<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
	BSidebar, BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton, BFormSelect
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
		BFormSelect,
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
			Name: '',
			Address: '',
			CaNo: '',
			TelNo: '',
			Plan: '',
			TypeOfPlan: '',
			DateOfInstallation: '',
			TypeOfConnection: '',
			VoipIpAddress: '',
			VlanId: '',
			OltId: '',
			OltName: '',
			PonNo: '',
			success: false,
			Ont_Onu_Sn_Macadress: ''
		}
	},
	async mounted() {
		await this.optionsOlt()
	},
	methods: {
		...mapActions({
			addData: "comex/setDetails",
			optionsOlt: "comex/optionsOlt",
			optionsPon: "comex/optionsPon"
		}),
		async onSelectOltName(val) {
			await this.optionsPon({ OltName: val })
			let index = this.optionsOltName.indexOf(val)
			this.OltId = this.optionsOltId[index]
		},
		async onSelectOltId(val) {
			let index = this.optionsOltId.indexOf(val)
			this.OltName = this.optionsOltName[index]
			await this.optionsPon({ OltName: this.OltName })

		},
		async onSubmit() {
			await this.addData({ Name: this.Name, Address: this.Address, CaNo: this.CaNo, TelNo: this.TelNo, Plan: this.Plan, TypeOfPlan: this.TypeOfPlan, DateOfInstallation: this.DateOfInstallation, TypeOfConnection: this.TypeOfConnection, VoipIpAddress: this.VoipIpAddress, VlanId: this.VlanId, OltId: this.OltId, OltName: this.OltName, PonNo: this.PonNo, Ont_Onu_Sn_Macadress: this.Ont_Onu_Sn_Macadress });
			this.reset()
			this.success = true
		},
		reset() {
			this.Name = '',
				this.Address = '',
				this.CaNo = '',
				this.TelNo = '',
				this.Plan = '',
				this.TypeOfPlan = '',
				this.Month = '',
				this.DateOfInstallation = '',
				this.TypeOfConnection = '',
				this.VoipIpAddress = '',
				this.VlanId = '',
				this.OltId = '',
				this.OltName = '',
				this.PonNo = '',
				this.Ont_Onu_Sn_Macadress = ''
		}
	},
	computed: {
		...mapState({
			error: (state) => {
				return state.comex.errorsInSingle;
			},
			optionsOltId: (state) => {
				return state.comex.OltIdOptions
			},
			optionsOltName: (state) => {
				return state.comex.OltNameOptions
			},
			optionsPonNo: (state) => {
				return state.comex.PonNoOptions
			}

		}),
	},

}

</script>
<style lang="scss">
.form {}

.form div {
	display: flex;
	flex-direction: row;

}

.title {
	width: 171px;
	height: 28px;

	font-family: 'Mulish';
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 28px;
	/* identical to box height */

	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.2px;

	color: #000000;
}

.root1 {
	padding: 30px 86px;
	gap: 8px;

	// width: 80%;
	// height: 1122px;
	// left: 54px;
	// top: 168.02px;
	margin-top: 15px;
	margin-left: 50px;
	margin-right: 50px;
	margin-bottom: 50px;

	background: #FFFFFF;
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
	border-radius: 10px;
}

.mainTitle {
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

@media screen and (max-width: 1000px) {
	.root1 {
		padding: 45px 46px;
		gap: 4px;
		width: 80%;
		margin: auto;
	}
.mainTitle {
	width: 100%;
	margin: auto !important;
}
.mainTitle h2{
	width: 100% !important;
	margin: auto;
}
	.formgroup {
		display: flex;
		flex-direction: column;
	}

	.formgroup .input {
		width: 100px !important;
		margin: auto !important;
	}
}
</style>
	