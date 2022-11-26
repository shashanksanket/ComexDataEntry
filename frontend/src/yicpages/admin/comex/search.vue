
<template style="z-index:1000; margin-top:200px;">
	<div>
		<Navbar />
		<div>
			<div class="root4" style="">
				<template v-if="( $mq === 'largeDevices' || $mq === 'mediumDevices')">
					<div class="d-flex justify-content-between align-items-center ">
						<h2>
							<center>Search Any Entires</center>
							<br />

						</h2>
					</div>
					<div class="d-flex align-items-center justify-content-end">
						<div>

						</div>
						<b-form-input v-model="searchQueryOLTP" class="d-inline-block mr-1" placeholder="Enter OLT Name" />
						<b-form-input v-model="searchQueryPON" class="d-inline-block mr-1"
							placeholder="Enter Pon Number" />

						<b-button variant="primary" @click="search()">
							<span class="text-nowrap">Search</span>
						</b-button>

					</div>
					<br /><br />
					<h3>Search Results</h3>
					<b-table style="width:100%;" ref="data" class="position-relative" :items="searchRes" responsive
						:fields="tableColumns" primary-key="id" show-empty empty-text="No matching records found">
						<template #cell(title)="data">

						</template>
					</b-table>
					<br /><br />
					<div v-if="leftVlan">
						<h4>These Vlan Ids are left for new connections in {{ this.searchRes[0].PonNo }}:-</h4>
						<br><br>
						Total:- {{leftVlan.length}}
						<br><br>
						<table class="table">
							<thead>
								<tr>
									<th scope="row">#</th>
									<th scope="col">VLAN ID</th>
									
								</tr>
							</thead>
							<tbody>
								<tr v-for="id in leftVlan">
									<th scope="row">{{leftVlan.indexOf(id)+1}}</th>
									<td>{{id}}</td>
								</tr>
								
								
							</tbody>
						</table>

					</div>
				</template>
				<template v-if="($mq === 'smallDevices' )">
					<div class=" ">
						<h2>
							<center>Search Any Entires</center>
							<br />

						</h2>
					</div>
					<div class="">
						
						<b-form-input style="margin-bottom:20px;" v-model="searchQueryOLTP" class="d-inline-block mr-1" placeholder="Enter OLT Name" />
						<b-form-input style="margin-bottom:20px;" v-model="searchQueryPON" class="d-inline-block mr-1"
							placeholder="Enter Pon Number" />

						<b-button variant="primary" @click="search()">
							<span class="text-nowrap">Search</span>
						</b-button>

					</div>
					<br /><br />
					<h3>Search Results</h3>
					<b-table style="width:100%;" ref="data" class="position-relative" :items="searchRes" responsive
						:fields="tableColumns" primary-key="id" show-empty empty-text="No matching records found">
						<template #cell(title)="data">

						</template>
					</b-table>
					<br /><br />
					<div v-if="leftVlan">
						<h4>These Vlan Ids are left for new connections in {{ this.searchRes[0].PonNo }}:-</h4>
						<br><br>
						Total:- {{leftVlan.length}}
						<br><br>
						<table class="table">
							<thead>
								<tr>
									<th scope="row">#</th>
									<th scope="col">VLAN ID</th>
									
								</tr>
							</thead>
							<tbody>
								<tr v-for="id in leftVlan">
									<th scope="row">{{leftVlan.indexOf(id)+1}}</th>
									<td>{{id}}</td>
								</tr>
								
								
							</tbody>
						</table>

					</div>
				</template>

			</div>
		</div>
	</div>
</template>
<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
	BSidebar, BTable, BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton, BFormSelect
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
		BTable,
		BFormSelect,

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
			searchQueryPON: '',
			searchQueryOLTP: '',
			tableColumns: [
				{ key: 'Name' },
				{ key: 'Address' },
				{ key: 'CaNo' },
				{ key: 'TelNo' },
				{ key: 'VoipIpAddress' },
				{ key: 'PonNo' },
				{ key: 'VlanId' }
			],
			leftVlanData: [
				{ key: 'VlanId' },
			]


		}
	},
	methods: {
		...mapActions({
			searchData: "comex/searchEntry",
		}),
		async search() {
			await this.searchData({ OLTP: this.searchQueryOLTP, PonNo: this.searchQueryPON })
		}
	},

	computed: {
		...mapState({
			searchRes: (state) => {
				return state.comex.searchRes
			},
			leftVlan: (state) => {
				return state.comex.leftVlanId
			}

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
.root4{
	padding: 50px 26px !important;
gap: 8px;

// width: 100%;
// height: 1122px;
// left: 54px;
// top: 168.02px;
margin-top: 25px;
margin-left: 20px;
margin-right: 20px;
margin-bottom: 50px;

background: #FFFFFF;
box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
border-radius: 10px;
}
</style>
	