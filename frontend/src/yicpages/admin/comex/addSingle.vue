
<template style="z-index:1000; margin-top:200px;">
	<div>
		<Navbar />
		<div>
			<div class="root1">
				<template>
					<div class="">
						<br />
						<br />
						<center>

							<h2 class="mainTitle  ">
								Add Single Entries
								
								
							</h2>
						</center>
						<br />
						<br />


			</div>
			<validation-observer ref="registerForm">
				<b-form class="form" @submit.prevent>
				<br/><br/>
				<div id="#step1" v-if="(currentStep==1)">
					<h3>
						<center>
							Personal Details
						</center>
					</h3>
				<b-form-group style="" id="fieldset-1" label="Name"
					label-for="input-1">
					<b-form-input id="input-1" v-model="Name"  ></b-form-input>
				</b-form-group>
				
				<b-form-group style="" id="fieldset-2" label="Address"
					label-for="input-2" >
					<b-form-input id="input-2" v-model="Address"  ></b-form-input>
				</b-form-group>
			
				<b-form-group style="" id="fieldset-7" label="Contact Number"
				label-for="input-7" >
				
				<b-form-input style=""  id="" v-model="contactNumber" ></b-form-input>
				
			</b-form-group>
			
				<b-button style="margin-top: 20px;" variant="primary" type="button" @click.prevent="goToStep(2)">Continue</b-button>

			</div>
			<div id="step2" v-if="(currentStep==2)">
				<h3>
			<center>
				Plan Details
			</center>
		</h3>
				
				<b-form-group style="" id="fieldset-5" label="Plan"
				label-for="input-5" >
				<b-form-input id="input-5" v-model="Plan"  ></b-form-input>
			</b-form-group>
			<b-form-group style="" id="fieldset-6" label="Type Of Plan"
			label-for="input-6" >
			<b-form-input id="input-6" v-model="TypeOfPlan"  ></b-form-input>
		</b-form-group>
		<b-form-group style="" id="fieldset-7" label="Date Of Installation"
		label-for="input-7" >
		
		<b-form-input style="" type="date" id="" v-model="DateOfInstallation" ></b-form-input>
		
	</b-form-group>
	<b-form-group style="" id="fieldset-3"  label="CA NO"
	label-for="input-3" >
	<b-form-input id="input-3" v-model="CaNo"  ></b-form-input>
	</b-form-group>
				<b-form-group style="" id="fieldset-8" label="Type Of Connection"
					label-for="input-8" >
					<b-form-input id="input-8" v-model="TypeOfConnection"  ></b-form-input>
				</b-form-group>
				<div class="d-flex justify-content-between flex-wrap" style="">

					<b-button style="margin-top: 20px;" type="button"   variant="primary"  @click.prevent="goToStep(3)">Continue</b-button>
					<b-button style="margin-top: 20px;"  variant="primary"  type="button" @click.prevent="goToStep(1)">Go Back</b-button>
				</div>


	</div>
	<div id="step3" v-if="(currentStep==3)">
				<h3>
			<center>
				Telephone Details
			</center>
		</h3>
				<b-form-group style="" id="fieldset-4" label="Tel No"
					label-for="input-4" >
					<b-form-input id="input-4" v-model="TelNo"  ></b-form-input>
				</b-form-group>
				<b-form-group style="" id="fieldset-4" label="Instrument Box Provided?"
					label-for="input-4" >
					<b-form-select :options="['Yes','No']" id="input-4" v-model="instrumentBoxProvided" ></b-form-select>
				</b-form-group>
				<b-form-group style="" id="fieldset-4" label="Type of Instrument Box"
					label-for="input-4" >
					<b-form-select :options="['Non-Caller Id','Caller Id']" id="input-4" v-model="typeOfInstrumentBox"  ></b-form-select>
				</b-form-group>
				<b-form-group style="" id="fieldset-4" label="Instrument Box provided by"
					label-for="input-4" >
					<b-form-select :options="['MTNL','Comex','Customer']" id="input-4" v-model="instrumentBoxProvidedBy"  ></b-form-select>
				</b-form-group>
				<b-form-group style="" id="fieldset-4" label="Ont/Onu provided by"
					label-for="input-4" >
					<b-form-select :options="['MTNL','Comex','Customer']" id="input-4" v-model="Ont_OnuProvidedBy"  ></b-form-select>
				</b-form-group>
				
				<div class="d-flex justify-content-between flex-wrap" style="">

<b-button style="margin-top: 20px;" type="button"   variant="primary"  @click.prevent="goToStep(4)">Continue</b-button>
<b-button style="margin-top: 20px;" variant="primary"  type="button" @click.prevent="goToStep(2)">Go Back</b-button>
</div>


	</div>
	<div id="step4" v-if="(currentStep==4)">
		<h3>
			<center>
				Connection Details
			</center>
		</h3>
			
				<b-form-group style="" id="fieldset-9" label="Voip Ip Address"
					label-for="input-9" >
					<b-form-input id="input-9" v-model="VoipIpAddress"  ></b-form-input>
				</b-form-group>
				
				<b-form-group style="" id="fieldset-11"  label="OLT Id"
					label-for="input-11" >
					<b-form-select style="" id="input-13" v-model="OltId" v-on:change="onSelectOltId(OltId)" :options="optionsOltId"></b-form-select>

				</b-form-group>
				<b-form-group style="" id="fieldset-13" label="OLT Name"
					label-for="input-13" >
					<b-form-select style="" id="input-13" v-model="OltName" v-on:change="onSelectOltName(OltName)" :options="optionsOltName"></b-form-select>
				</b-form-group>
				<b-form-group style="" id="fieldset-14" label="Pon No"
					label-for="input-14" >
					<b-form-select style="" id="input-13" v-model="PonNo" :options="optionsPonNo"></b-form-select>
	
				</b-form-group>
				<b-form-group style="" id="fieldset-4" label="Select GM"
					label-for="input-4" >
					<b-form-select :options="optionsGM" id="input-4" v-model="GM" ></b-form-select>
				</b-form-group>
				<b-form-group style="" id="fieldset-10" label="VLAN ID"
					label-for="input-10" >
					<b-form-input id="input-10" v-model="VlanId"  ></b-form-input>
				</b-form-group>
				<b-form-group style="" id="fieldset-14" label="Ont/Onu S/n MacAddress"
					label-for="input-14" >
					<b-form-input style="" id="input-14" v-model="Ont_Onu_Sn_Macadress"  ></b-form-input>
				</b-form-group>
			
				<div class="d-flex justify-content-between flex-wrap" style="">
					<b-button style="margin-top: 20px;"  variant="primary"  type="button" @click.prevent="goToStep(3)">Go Back</b-button>
					<b-button style="margin-top: 20px;" type="submit" variant="primary" @click="onSubmit()" >Submit</b-button>

</div>

			</div>
			<br/>
			<div>

							</div>

						</b-form>
						<b-modal ok-only v-model="success">
							<p v-if="error">{{ error }}</p>
							<p v-else>Your Data is uploaded!</p>
						</b-modal>
					</validation-observer>
					
				</template>
			
			<v-idle
  @idle="onidle" style="display:none" 
  :duration="900" />
			<br />
		</div>
	</div>
	</div>
</template>
<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
	BSidebar, BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton, BFormSelect, BFormDatepicker
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
import Vidle from 'v-idle'
import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: {
    smallDevices: 600,
    mediumDevices: 1200,
    largeDevices: Infinity,
  }
})

Vue.component('step3', {
    div: '#step3',
    props: [
        'currentStep',
        'step1',
        'step2'
    ]
});
Vue.component('step2', {
    div: '#step2',
    props: [
        'currentStep',
        'step2'
    ]
});
Vue.component('step1', {
    div: '#step1',
    props: [
        'currentStep',
        'step1'
    ]
});


export default {
	components: {
		BSidebar,
		Vidle,
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
		BFormDatepicker,
		// Form Validation
		ValidationProvider,
		ValidationObserver,
		VuePhoneNumberInput,
		Password
	},
	model: {

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
			Ont_Onu_Sn_Macadress: '',
			Ont_OnuProvidedBy:'',
			instrumentBoxProvidedBy: '',
			instrumentBoxProvided: false,
			typeOfInstrumentBox: '',
			contactNumber: '',
			currentStep: 1,
			GM: '',
        
		}
	},
	ready: function() {
        console.log('ready');
    },
	async mounted() {
		await this.optionsOlt()
	},
	methods: {
		...mapActions({
			addData: "comex/setDetails",
			optionsOlt: "comex/optionsOlt",
			optionsPon: "comex/optionsPon",
			logoutUser: "auth/logoutUser",
			getOptionsGM: "comex/getOptionsGM"
		}),
		goToStep: function(step) {
            this.currentStep = step;
        },
		async onSelectOltName(val) {
			if (val){

			
			await this.optionsPon({ OltName: val })
			await this.getOptionsGM({OltName: val})
			let index = this.optionsOltName.indexOf(val)
			this.OltId = this.optionsOltId[index]
			}
		},
		async onSelectOltId(val) {
			if(val){

			
			let index = this.optionsOltId.indexOf(val)
			this.OltName = this.optionsOltName[index]
			await this.optionsPon({ OltName: this.OltName })
			await this.getOptionsGM({OltId: val})
			}

		},
		onidle(){
      alert('You have been logged out due to inactivity of 15 minutes')
      this.$router.push({ name: "login" });
      this.logoutUser();
    },
		async onSubmit() {
			await this.addData({GM :this.GM, Ont_OnuProvidedBy: this.Ont_OnuProvidedBy,instrumentBoxProvidedBy: this.instrumentBoxProvidedBy,instrumentBoxProvided:this.instrumentBoxProvided,typeOfInstrumentBox:this.typeOfInstrumentBox, contactNumber: this.contactNumber, Name: this.Name, Address: this.Address, CaNo: this.CaNo, TelNo: this.TelNo, Plan: this.Plan, TypeOfPlan: this.TypeOfPlan, DateOfInstallation: this.DateOfInstallation, TypeOfConnection: this.TypeOfConnection, VoipIpAddress: this.VoipIpAddress, VlanId: this.VlanId, OltId: this.OltId, OltName: this.OltName, PonNo: this.PonNo, Ont_Onu_Sn_Macadress: this.Ont_Onu_Sn_Macadress });
			this.reset()
			this.success = true
		},
		reset() {
			this.GM = ''
			this.Name = '',
				this.Address = '',
				this.CaNo = '',
				this.contactNumber= '',
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
				this.Ont_OnuProvidedBy = '',
				this.instrumentBoxProvidedBy = '',
				this.instrumentBoxProvided = false,
				this.typeOfInstrumentBox = ''
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
			},
			optionsGM: (state) => {
				return state.comex.optionsGM
			}

		}),
	},

}

</script>
<style lang="scss">
.form {}

.form div {
	// display: flex;
	// flex-direction: row;

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
		padding: 25px 30px;
		width: 80%;
		margin: auto;
	}


}
</style>
	