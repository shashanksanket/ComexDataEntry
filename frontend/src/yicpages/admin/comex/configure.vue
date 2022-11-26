
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
							<b-form-group style=" margin:10px; display: flex; flex-direction: column;" id="fieldset-2" label="Start Range"
								label-for="input-2">
								<b-form-input id="input-2" v-model="startRange"></b-form-input>
							</b-form-group>
							<b-form-group style=" margin:10px; display: flex; flex-direction: column;" id="fieldset-2" label="End Range"
								label-for="input-2">
								<b-form-input id="input-2" v-model="endRange"></b-form-input>
							</b-form-group>



							<b-button v-if="($mq === 'largeDevices' || $mq === 'mediumDevices')" type="submit" variant="primary" @click="onSubmit()"
								style="margin: 20px; width:300px">Submit</b-button>
							<b-button v-if="($mq === 'smallDevices')" type="submit" variant="primary" @click="onSubmit()"
								style="margin: auto; width:=100%">Submit</b-button>


						</b-form>
						<b-modal ok-only v-model="success">
							<p v-if="error">{{ error }}</p>
							<p v-else>Your Data is uploaded!</p>
						</b-modal>
					</validation-observer>
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
			OltName: '',
			OltId: '',
			ponNo: '',
			success: false,
			startRange: 0,
			endRange: 0,
		}
	},
	methods: {
		...mapActions({
			Configure: "comex/configure",
		}),

		async onSubmit() {
			await this.Configure({ OltName: this.OltName, OltId: this.OltId, ponNo: this.ponNo, startRange: this.startRange, endRange: this.endRange});
			this.reset()
			this.success = true
		},
		reset() {
			this.OltName = '',
			this.OltId = '',
			this.ponNo = '',
			this.startRange = '',
			this.endRange = ''
		}
	},
	computed: {
		...mapState({
			error: (state) => {
				return state.comex.errorsInSingle;
			},

		}),
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
	