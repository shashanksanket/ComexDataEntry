
<template style="z-index:1000; margin-top:200px;">
	<div>
		<Navbar />
		<div>
			<div class="root4" style="">
				<template v-if="($mq === 'largeDevices' || $mq === 'mediumDevices')">
					<div class="d-flex justify-content-between align-items-center ">
						<h2>
							<center>Search Any Entires</center>
							<br />

						</h2>
					</div>
					<b-button variant="primary" style="margin-bottom:20px" @click="searchByFunc()">
						{{ text }}
					</b-button>
					<div v-if="searchByOlt" class="">

						<b-form-group class="input" id="fieldset-14" label="Select Olt Id" label-for="input-14">
							<b-form-select :options="optionsOltId" v-on:change="optionPonNum" v-model="searchQueryOLTP"
								class="d-inline-block mr-1" placeholder="Enter OLT Id" />
						</b-form-group>
						<b-form-group class="input" style=" display: flex; flex-direction: column;" id="fieldset-14"
							label="Enter Pon No" label-for="input-14">

							<b-form-select :options="optionPons" v-model="searchQueryPON" class="d-inline-block mr-1"
								placeholder="Select Pon Number" />

						</b-form-group>


						<b-button style="margin-top:10px" variant="primary" @click="searchByOltId()">
							<span class="text-nowrap">Search</span>
						</b-button>

					</div>
					<div v-if="!searchByOlt" class="d-flex align-items-center justify-content-end">
						<div>

						</div>
						<b-form-input v-model="searchQueryTelNo" class="d-inline-block mr-1"
							placeholder="Enter Telephone Number" />

						<b-button style="margin-top:10px" variant="primary" @click="searchByTelno()">
							<span class="text-nowrap">Search</span>
						</b-button>

					</div>
					<br /><br />
					<h3>Search Results</h3>
		
					<b-table :current-page="currentPage" id="table" :per-page="perPage" style="width:100%;" ref="data" class="position-relative" :items="searchRes" responsive
						:fields="tableColumns" primary-key="id" show-empty empty-text="No matching records found">
						<template #cell(title)="data">

						</template>
						<template #cell(Actions)="data">

							<b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">

								<template #button-content>
									<img src="./more-vertical.svg" size="16" class="align-middle text-body" />
								</template>
								

								<b-dropdown-item v-if="role!='ENDUSER'" @click="deleteRow(data.item.id)">
									<img src="./trash.svg" size="16" class="align-middle text-body" />

									<span class="align-middle ml-50">Delete</span>
								</b-dropdown-item>
							</b-dropdown>
						</template>
					</b-table>
					<b-pagination
      v-model="currentPage"
      :total-rows="searchRes.length"
      :per-page="perPage"
      aria-controls="table"
    ></b-pagination>
					<br /><br />
					<div v-if="leftVlan && showVlan">
						<h4>These Vlan Ids are left for new connections in {{ this.searchQueryPON }}:-</h4>
						<br><br>
						Total:- {{ leftVlan.length }}
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
									<th scope="row">{{ leftVlan.indexOf(id) + 1 }}</th>
									<td>{{ id }}</td>
								</tr>


							</tbody>
						</table>

					</div>
				</template>
				<template v-if="($mq === 'smallDevices')">
					<div class=" ">
						<h2>
							<center>Search Any Entires</center>
							<br />

						</h2>
					</div>
					<b-button variant="primary" style="margin-bottom:20px" @click="searchByFunc()">
						{{ text }}
					</b-button>
					<div v-if="searchByOlt" class="">

						<b-form-group class="input" id="fieldset-14" label="Select Olt Id" label-for="input-14">
							<b-form-select :options="optionsOltId" v-on:change="optionPonNum" v-model="searchQueryOLTP"
								class="d-inline-block mr-1" placeholder="Enter OLT Id" />
						</b-form-group>
						<b-form-group class="input" style=" display: flex; flex-direction: column;" id="fieldset-14"
							label="Enter Pon No" label-for="input-14">

							<b-form-select :options="optionPons" v-model="searchQueryPON" class="d-inline-block mr-1"
								placeholder="Select Pon Number" />

						</b-form-group>
						<b-button style="margin-top:10px" variant="primary" @click="searchByOltId()">
							<span class="text-nowrap">Search</span>
						</b-button>

					</div>
					<div v-if="!searchByOlt" class="d-flex align-items-center justify-content-end">
						<div>

						</div>
						<b-form-input v-model="searchQueryTelNo" class="d-inline-block mr-1"
							placeholder="Enter Telephone Number" />

						<b-button style="margin-top:10px" variant="primary" @click="searchByTelno()">
							<span class="text-nowrap">Search</span>
						</b-button>

					</div>
					<br /><br />
					<h3>Search Results</h3>
					
					<b-table  :current-page="currentPage" id="table" style="width:100%;" :per-page="perPage" ref="data" class="position-relative" :items="searchRes" responsive
						:fields="tableColumns" primary-key="id" show-empty empty-text="No matching records found">
						<template #cell(title)="data">

						</template>
						<template  #cell(Actions)="data">

							<b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">

								<template #button-content>
									<img src="./more-vertical.svg" size="16" class="align-middle text-body" />
								</template>
								<b-dropdown-item v-if="role!='ENDUSER'" @click="deleteRow(data.item.id)">
									<img src="./trash.svg" size="16" class="align-middle text-body" />

									<span class="align-middle ml-50">Delete</span>
								</b-dropdown-item>
							</b-dropdown>
						</template>
					</b-table>
					<b-pagination
      v-model="currentPage"
      :total-rows="searchRes.length"
      :per-page="perPage"
      aria-controls="table"
    ></b-pagination>
					<br /><br />
					<div v-if="leftVlan && showVlan">
						<h4>These Vlan Ids are left for new connections in {{ this.searchQueryPON }}:-</h4>
						<br><br>
						Total:- {{ leftVlan.length }}
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
									<th scope="row">{{ leftVlan.indexOf(id) + 1 }}</th>
									<td>{{ id }}</td>
								</tr>


							</tbody>
						</table>

					</div>
				</template>
				<b-modal ok-only v-model="deleteModal" title="Entry Deleted">
					<p class="my-4">Entry Deleted Successfully</p>

				</b-modal>

			</div>
			<v-idle
  @idle="onidle"
  :duration="900" />
		</div>
	</div>
</template>
<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
	BSidebar, BTable, BPagination,  BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton, BFormSelect,BDropdown, BDropdownItem
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
import Vidle from 'v-idle'
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
		Vidle,
		BFormGroup,
		BFormInput,
		BFormInvalidFeedback,
		BButton,
		BDropdownItem,
		vSelect,
		BModal,
		Navbar,
		BTable,
		BDropdown,
		BFormSelect,
		BPagination,
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
			currentPage : 1,
			perPage: 10,
			deleteModal: false,
			searchBy: '',
			optionPons: '',
			text: 'Search By Telephone number',
			searchByOlt: true,
			searchQueryPON: '',
			searchQueryOLTP: '',
			searchQueryTelNo: '',
			showVlan: false,
			tableColumns: [
				{ key: 'Name' },
				{ key: 'Address' },
				{ key: 'CaNo' },
				{ key: 'TelNo' },
				{ key: 'VoipIpAddress' },
				{ key: 'PonNo' },
				{ key: 'VlanId' },
				{key: 'TypeOfPlan'},
				{key: 'DateOfInstallation'},
				{key: 'TypeOfConnection'},
				{key: 'OltId'},
				{key: 'OltName'},
				{key: 'Ont_Onu_Sn_Macadress'},
				{key: 'contactNumber'},


				{ key: 'Actions' }
			],
			leftVlanData: [
				{ key: 'VlanId' },
			]
		}
	},
	methods: {
		...mapActions({
			searchData: "comex/searchEntry",
			optionsOlt: "comex/optionsOlt",
			optionsPon: "comex/optionsPon",
			// editEntry: "comex/editEntry",
			deleteEntry: "comex/deleteEntry",
        logoutUser: "auth/logoutUser"
		}),
		onidle(){
      alert('You have been logged out due to inactivity of 15 minutes')
      this.$router.push({ name: "login" });
      this.logoutUser();
    },
		searchByFunc() {
			this.searchByOlt = !this.searchByOlt
			if (this.searchByOlt) {

				this.text = 'Search By Telephone Number'
			}
			else {
				this.text = 'Search By OLT'
				this.showVlan = false

			}
		},
		async searchByTelno() {
			await this.searchData({ TelNo: this.searchQueryTelNo })
		},
		onidle(){
      alert('You have been logged out due to inactivity of 15 minutes')
      this.$router.push({ name: "login" });
      this.logoutUser();
    },
		async searchByOltId() {
			if (this.searchQueryPON != 'All') {
				await this.searchData({ OltId: this.searchQueryOLTP, PonNo: this.searchQueryPON })
				this.showVlan = true
				// this.displayPON = this.searchQueryPON
			} else {
				this.showVlan = false

				await this.searchData({ OltId: this.searchQueryOLTP })
			}
		},
		async optionPonNum() {
			this.showVlan = false
			await this.optionsPon({ OltId: this.searchQueryOLTP })
			let arr = this.optionsPonNo
			let arr1 = ['All']
			this.optionPons = arr1.concat(arr)
			console.log(this.optionsPons)
			
		},
		// async editRow(val) {
		// 	this.editModal = true
		// 	await this.editEntry([val.id, { Name: val.Name, Address: val.Address, CaNo: val.CaNo, TelNo: val.TelNo, Plan: val.Plan, TypeOPlan: val.TypeOfPlan, DateOfInstallation: val.DateOfInstallation, TypeOfConnection: val.TypeOfConnection, VoipIpAddress: val.VoipIpAddress, VlanId: val.VlanId, OltId: val.OltId, OltName: val.OltName, PonNo: val.PonNo, Ont_Onu_Sn_Macadress: val.Ont_Onu_Sn_Macadress }])
		// },
		async deleteRow(val) {
			await this.deleteEntry({ id: val, role: this.role })
			if (this.searchByOlt) {

				await this.searchByOltId()
			} else {

				await this.searchByTelno()
			}
			this.deleteModal = true


		},
	},
	async mounted() {
		await this.optionsOlt()
		console.log(this.role)

	},

	computed: {
		...mapState({
			searchRes: (state) => {
				return state.comex.searchRes
			},
			leftVlan: (state) => {
				return state.comex.leftVlanId
			},
			optionsOltId: (state) => {
				return state.comex.OltIdOptions
			},
			optionsPonNo: (state) => {
				return state.comex.PonNoOptions
			},
			role: (state) => {
				return state.auth.currUser.role
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

.root4 {
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
	