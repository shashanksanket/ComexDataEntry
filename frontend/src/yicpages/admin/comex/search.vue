
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
					<!-- <b-button variant="primary" style="margin-bottom:20px" @click="searchByFunc()">
						{{ text }}
					</b-button> -->
					<div v-if="searchByOlt" class="">

						<b-form-group style="" id="fieldset-11" label="OLT Id" label-for="input-11">
							<b-form-select style="" id="input-13" v-model="OltId" v-on:change="onSelectOltId(OltId)"
								:options="optionsOltId"></b-form-select>

						</b-form-group>
						<b-form-group style="" id="fieldset-13" label="OLT Name" label-for="input-13">
							<b-form-select style="" id="input-13" v-model="OltName"
								v-on:change="onSelectOltName(OltName)" :options="optionsOltName"></b-form-select>
						</b-form-group>
						<b-form-group style="" id="fieldset-14" label="Pon No" label-for="input-14">
							<b-form-select style="" id="input-13" v-model="PonNo"
								:options="optionsPonNo"></b-form-select>

						</b-form-group>


						<b-button style="margin-top:10px" variant="primary" @click="searchByOltId()">
							<span class="text-nowrap">Search</span>
						</b-button>

					</div>
					<div v-else-if="searchByTelNo" class="d-flex align-items-center justify-content-end">
						<div>

						</div>
						<b-form-input v-model="searchQueryTelNo" class="d-inline-block mr-1"
							placeholder="Enter Telephone Number" />

						<b-button style="margin-top:10px" variant="primary" @click="searchByTelno()">
							<span class="text-nowrap">Search</span>
						</b-button>

					</div>
					<div v-else-if="searchByAM" class="d-flex align-items-center justify-content-end">
						<div>

						</div>
						<b-form-input v-model="searchQueryAM" class="d-inline-block mr-1"
							placeholder="Enter AM" />
						<b-button style="margin-top:10px" variant="primary" @click="searchByAMs()">
							<span class="text-nowrap">Search</span>
						</b-button>

					</div>
					<br /><br />
					<h3>Search Results</h3>

					<b-table :current-page="currentPage" id="table" :per-page="perPage" style="width:100%;" ref="data"
						class="position-relative" :items="searchRes" responsive :fields="tableColumns" primary-key="id"
						show-empty empty-text="No matching records found">
						<template #cell(title)="data">

						</template>
						<template #cell(Actions)="data">
							<b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">

								<template #button-content>
									<img src="./more-vertical.svg" size="16" class="align-middle text-body" />
								</template>


								<b-dropdown-item v-if="role != 'ENDUSER'" @click="deleteRow(data.item.id)">
									<img src="./trash.svg" size="16" class="align-middle text-body" />

									<span class="align-middle ml-50">Delete</span>
								</b-dropdown-item>
								<b-dropdown-item v-if="role != 'ENDUSER'" @click="editRow(data.item.id, data.item.index)">

									<img src="./edit.svg" size="16" class="align-middle text-body" />

									<span class="align-middle ml-50">Edit</span>
								</b-dropdown-item>
								<b-dropdown-item v-if="role != 'ENDUSER'" @click="Download(data.item.index)">
									<img src="./download.svg" size="16" class="align-middle text-body" />

									<span class="align-middle ml-50">Download</span>
								</b-dropdown-item>
							</b-dropdown>
						</template>
					</b-table>
					<br/>
					<b-pagination v-model="currentPage" :total-rows="searchRes.length" :per-page="perPage"
					aria-controls="table"></b-pagination>
				<br/>
					<b-button v-if="searchRes" variant="primary" @click = "Download()">Download All</b-button>
					<br /><br />
					<div v-if="leftVlan && showVlan">
						<h4>These Vlan Ids are left for new connections in {{ this.PonNo }}:-</h4>
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
					<!-- <b-button variant="primary" style="margin-bottom:20px" @click="searchByFunc()">
						{{ text }}
					</b-button> -->
					<div v-if="searchByOlt" class="">

						<b-form-group style="" id="fieldset-11" label="OLT Id" label-for="input-11">
							<b-form-select style="" id="input-13" v-model="OltId" v-on:change="onSelectOltId(OltId)"
								:options="optionsOltId"></b-form-select>

						</b-form-group>
						<b-form-group style="" id="fieldset-13" label="OLT Name" label-for="input-13">
							<b-form-select style="" id="input-13" v-model="OltName"
								v-on:change="onSelectOltName(OltName)" :options="optionsOltName"></b-form-select>
						</b-form-group>
						<b-form-group style="" id="fieldset-14" label="Pon No" label-for="input-14">
							<b-form-select style="" id="input-13" v-model="PonNo"
								:options="optionsPonNo"></b-form-select>

						</b-form-group>
						
						<b-button style="margin-top:10px" variant="primary" @click="searchByOltId()">
							<span class="text-nowrap">Search</span>
						</b-button>

					</div>
					<div v-else-if="searchByAM" class="d-flex align-items-center justify-content-end">
						<div>

						</div>
						<b-form-input v-model="searchQueryAM" class="d-inline-block mr-1"
							placeholder="Enter AM" />

						<b-button style="" variant="primary" @click="searchByAMs()">
							Search
						</b-button>

					</div>
					<div v-else-if="searchByTelNo" class="d-flex align-items-center justify-content-end">
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

					<b-table :current-page="currentPage" id="table" style="width:100%;" :per-page="perPage" ref="data"
						class="position-relative" :items="searchRes" responsive :fields="tableColumns" primary-key="id"
						show-empty empty-text="No matching records found">
						<template #cell(title)="data">

						</template>
						<template #cell(Actions)="data">

							<b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">

								<template #button-content>
									<img src="./more-vertical.svg" size="16" class="align-middle text-body" />
								</template>
								<b-dropdown-item v-if="role != 'ENDUSER'" @click="deleteRow(data.item.id)">
									<img src="./trash.svg" size="16" class="align-middle text-body" />

									<span class="align-middle ml-50">Delete</span>
								</b-dropdown-item>
							</b-dropdown>
						</template>
					</b-table>
					<b-pagination v-model="currentPage" :total-rows="searchRes.length" :per-page="perPage"
						aria-controls="table"></b-pagination>
					<br /><br />
					<div v-if="leftVlan && showVlan">
						<h4>These Vlan Ids are left for new connections in {{ this.PonNo }}:-</h4>
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
				<b-modal ok-only v-model="success" title="Entry Deleted">
					<p class="my-4">Entry Edited Successfully</p>

				</b-modal>
				<b-modal ok-only ok-title="Close" v-model="editModalShow" title="Edit Entry">
					<b-form class="form" @submit.prevent>
						<br /><br />
						<div id="#step1" v-if="(currentStep == 1)">
							<h3>
								<center>
									Personal Details
								</center>
							</h3>
							<b-form-group style="" id="fieldset-1" label="Name" label-for="input-1">
								<b-form-input id="input-1" v-model="Name"></b-form-input>
							</b-form-group>

							<b-form-group style="" id="fieldset-2" label="Address" label-for="input-2">
								<b-form-input id="input-2" v-model="Address"></b-form-input>
							</b-form-group>

							<b-form-group style="" id="fieldset-7" label="Contact Number" label-for="input-7">

								<b-form-input style="" id="" v-model="contactNumber"></b-form-input>

							</b-form-group>
							<b-button variant="primary" type="button" @click.prevent="goToStep(2)">Continue</b-button>

						</div>
						<div id="step2" v-if="(currentStep == 2)">
							<h3>
								<center>
									Plan Details
								</center>
							</h3>

							<b-form-group style="" id="fieldset-5" label="Plan" label-for="input-5">
								<b-form-input id="input-5" v-model="Plan"></b-form-input>
							</b-form-group>
							<b-form-group style="" id="fieldset-6" label="Type Of Plan" label-for="input-6">
								<b-form-input id="input-6" v-model="TypeOfPlan"></b-form-input>
							</b-form-group>
							<b-form-group style="" id="fieldset-7" label="Date Of Installation" label-for="input-7">

								<b-form-input style="" type="date" id="" v-model="DateOfInstallation"></b-form-input>

							</b-form-group>
							<b-form-group style="" id="fieldset-3" label="CA NO" label-for="input-3">
								<b-form-input id="input-3" v-model="CaNo"></b-form-input>
							</b-form-group>
							<b-form-group style="" id="fieldset-8" label="Type Of Connection" label-for="input-8">
								<b-form-input id="input-8" v-model="TypeOfConnection"></b-form-input>
							</b-form-group>
							<div class="d-flex justify-content-between flex-wrap" style="">

								<b-button type="button" variant="primary"
									@click.prevent="goToStep(3)">Continue</b-button>
								<b-button variant="primary" type="button" @click.prevent="goToStep(1)">Go
									Back</b-button>
							</div>


						</div>
						<div id="step3" v-if="(currentStep == 3)">
							<h3>
								<center>
									Telephone Details
								</center>
							</h3>
							<b-form-group style="" id="fieldset-4" label="Tel No" label-for="input-4">
								<b-form-input id="input-4" v-model="TelNo"></b-form-input>
							</b-form-group>
							<b-form-group style="" id="fieldset-4" label="Instrument Box Provided?" label-for="input-4">
								<b-form-select :options="['Yes', 'No']" id="input-4"
									v-model="instrumentBoxProvided"></b-form-select>
							</b-form-group>
							<b-form-group style="" id="fieldset-4" label="Type of Instrument Box" label-for="input-4">
								<b-form-select :options="['Non-Caller Id', 'Caller Id']" id="input-4"
									v-model="typeOfInstrumentBox"></b-form-select>
							</b-form-group>
							<b-form-group style="" id="fieldset-4" label="Instrument Box provided by"
								label-for="input-4">
								<b-form-select :options="['MTNL', 'Comex', 'Customer']" id="input-4"
									v-model="instrumentBoxProvidedBy"></b-form-select>
							</b-form-group>
							<b-form-group style="" id="fieldset-4" label="Ont/Onu provided by" label-for="input-4">
								<b-form-select :options="['MTNL', 'Comex', 'Customer']" id="input-4"
									v-model="Ont_OnuProvidedBy"></b-form-select>
							</b-form-group>

							<div class="d-flex justify-content-between flex-wrap" style="">

								<b-button type="button" variant="primary"
									@click.prevent="goToStep(4)">Continue</b-button>
								<b-button variant="primary" type="button" @click.prevent="goToStep(2)">Go
									Back</b-button>
							</div>


						</div>
						<div id="step4" v-if="(currentStep == 4)">
							<h3>
								<center>
									Connection Details
								</center>
							</h3>

							<b-form-group style="" id="fieldset-9" label="Voip Ip Address" label-for="input-9">
								<b-form-input id="input-9" v-model="VoipIpAddress"></b-form-input>
							</b-form-group>

							<b-form-group style="" id="fieldset-11" label="OLT Id" label-for="input-11">
								<b-form-select style="" id="input-13" v-model="OltId" v-on:change="onSelectOltId(OltId)"
									:options="optionsOltId"></b-form-select>

							</b-form-group>
							<b-form-group style="" id="fieldset-13" label="OLT Name" label-for="input-13">
								<b-form-select style="" id="input-13" v-model="OltName"
									v-on:change="onSelectOltName(OltName)" :options="optionsOltName"></b-form-select>
							</b-form-group>
							<b-form-group style="" id="fieldset-14" label="Pon No" label-for="input-14">
								<b-form-select style="" id="input13" v-model="Pon"
									:options="optionsPonNo.slice(1,optionsPonNo.length)"></b-form-select>
									<b-form-group style="" id="fieldset-4" label="Select GM"
									label-for="input-4" >
									<b-form-select  v-model="GM" :options="optionsGM" id="input-4" ></b-form-select>
								</b-form-group>
								<b-form-group style="" id="fieldset-4" label="Enter AM"
									label-for="input-4" >
									<b-form-input  v-model="AM" id="input-4" ></b-form-input>
								</b-form-group>
							</b-form-group>
							<b-form-group style="" id="fieldset-10" label="VLAN ID" label-for="input-10">
								<b-form-input id="input-10" v-model="VlanId"></b-form-input>
							</b-form-group>
							<b-form-group style="" id="fieldset-14" label="Ont/Onu S/n MacAddress" label-for="input-14">
								<b-form-input style="" id="input-14" v-model="Ont_Onu_Sn_Macadress"></b-form-input>
							</b-form-group>

							<div class="d-flex justify-content-between flex-wrap" style="">
								<b-button variant="primary" type="button" @click.prevent="goToStep(3)">Go
									Back</b-button>
								<b-button type="submit" variant="primary" @click="onSubmit()">Submit</b-button>

							</div>

						</div>
						<br />
						<div>

						</div>

					</b-form>

				</b-modal>
				<b-modal ok-only v-model="Downloadsuccess" title="Entry Downloaded">
					<p class="my-4">Entry Downloaded Successfully</p>
				</b-modal>

			</div>
			<v-idle @idle="onidle" :duration="900" />
		</div>
	</div>
</template>
<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
	BSidebar, BTable, BPagination, BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton, BFormSelect, BDropdown, BDropdownItem
} from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
import Ripple from 'vue-ripple-directive'
import Papa from 'papaparse'
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
			Downloadsuccess: false,
			idx: '',
			disable: false,
			Name: '',
			Address: '',
			CaNo: '',
			TelNo: '',
			AM: '',
			GM: '',
			Plan: '',
			TypeOfPlan: '',
			DateOfInstallation: '',
			TypeOfConnection: '',
			VoipIpAddress: '',
			VlanId: '',
			OltId: '',
			OltName: '',
			Pon: '',
			success: false,
			Ont_Onu_Sn_Macadress: '',
			Ont_OnuProvidedBy: '',
			instrumentBoxProvidedBy: '',
			instrumentBoxProvided: false,
			typeOfInstrumentBox: '',
			contactNumber: '',
			currentStep: 1,
			step1: {
				name: '',
				email: ''
			},
			step2: {
				city: '',
				state: ''
			},

			currentPage: 1,
			perPage: 10,
			deleteModal: false,
			// searchBy: '',
			optionsPons: '',
			searchQueryAM: '',
			OltId: '',
			OltName: '',
			editModalShow: false,
			// text: 'Search By Telephone number',
			// searchByOlt: true,
			PonNo: '',
			searchQueryTelNo: '',
			// showVlan: false,
			tableColumns: [
				{ key: 'Name' },
				{ key: 'Address' },
				{ key: 'CaNo' },
				{ key: 'TelNo' },
				{ key: 'VoipIpAddress' },
				{ key: 'PonNo' },
				{ key: 'VlanId' },
				{ key: 'TypeOfPlan' },
				{ key: 'DateOfInstallation' },
				{ key: 'TypeOfConnection' },
				{ key: 'OltId' },
				{ key: 'OltName' },
				{ key: 'Ont_Onu_Sn_Macadress' },
				{ key: 'contactNumber' },
				{ key: 'Ont_OnuProvidedBy' },
				{ key: 'instrumentBoxProvidedBy' },
				{ key: 'instrumentBoxProvided' },
				{ key: 'typeOfInstrumentBox' },
				{ key: 'AM' },
				{ key: 'GM' },
				{ key: 'Actions' }
			],
			leftVlanData: [
				{ key: 'VlanId' },
			]
		}
	},
	ready: function () {
		console.log('ready');
	},
	methods: {
		...mapActions({
			searchData: "comex/searchEntry",
			optionsOlt: "comex/optionsOlt",
			optionsPon: "comex/optionsPon",
			editData: "comex/editData",
			// editEntry: "comex/editEntry",
			deleteEntry: "comex/deleteEntry",
			logoutUser: "auth/logoutUser",
			getOptionsAM: "comex/getOptionsAM"

		}),
		onidle() {
			alert('You have been logged out due to inactivity of 15 minutes')
			this.$router.push({ name: "login" });
			this.logoutUser();
		},
		goToStep: function (step) {
			this.currentStep = step;
		},
		async searchByTelno() {
			await this.searchData({ TelNo: this.searchQueryTelNo })
		},
		async searchByAMs(){
			await this.searchData({AM: this.searchQueryAM})
		},
		async searchByOltId() {
			if (this.PonNo != 'All') {
				await this.searchData({ OltId: this.OltId, PonNo: this.PonNo, showVlan: true })
				// this.displayPON = this.searchQueryPON
			} else {
				await this.searchData({ OltId: this.OltId, showVlan: false })
			}
		},
		async editRow(id, index) {
			this.GM = this.searchRes[index].GM
			this.Name = this.searchRes[index].Name,
			this.Address = this.searchRes[index].Address,
			this.CaNo = this.searchRes[index].CaNo
			this.TelNo = this.searchRes[index].TelNo
			this.Plan = this.searchRes[index].Plan
			this.TypeOfPlan = this.searchRes[index].TypeOfPlan
			this.DateOfInstallation = this.searchRes[index].DateOfInstallation
			this.TypeOfConnection = this.searchRes[index].TypeOfConnection
			this.VoipIpAddress = this.searchRes[index].VoipIpAddress
			this.VlanId = this.searchRes[index].VlanId
			this.OltId = this.searchRes[index].OltId
			this.OltName = this.searchRes[index].OltName
			this.Pon = this.searchRes[index].PonNo
			this.Ont_Onu_Sn_Macadress = this.searchRes[index].Ont_Onu_Sn_Macadress
			this.Ont_OnuProvidedBy = this.searchRes[index].Ont_OnuProvidedBy
			this.instrumentBoxProvidedBy = this.searchRes[index].instrumentBoxProvidedBy
			this.instrumentBoxProvided = this.searchRes[index].instrumentBoxProvided
			this.AM = this.searchRes[index].AM
			this.typeOfInstrumentBox = this.searchRes[index].typeOfInstrumentBox
			this.contactNumber = this.searchRes[index].contactNumber
			this.idx = index
			this.editModalShow = true
		},
		async onSelectOltName(val) {
			await this.optionsPon({ OltName: val })
			let index = this.optionsOltName.indexOf(val)
			this.OltId = this.optionsOltId[index]
			await this.getOptionsAM({OltName: val})
		},
		async onSelectOltId(val) {
			this.showVlan = false
			let index = this.optionsOltId.indexOf(val)
			this.OltName = this.optionsOltName[index]
			await this.optionsPon({ OltName: this.OltName })
			// let arr = this.optionsPonNo
			// let arr1 = ['All']
			// this.optionsPons = arr1.concat(arr)
			await this.getOptionsGM({OltId: val})

		},
		async onSubmit() {
			await this.editData({GM: this.GM,AM: this.AM, id: this.searchRes[this.idx].id, Ont_OnuProvidedBy: this.Ont_OnuProvidedBy, instrumentBoxProvidedBy: this.instrumentBoxProvidedBy, instrumentBoxProvided: this.instrumentBoxProvided, typeOfInstrumentBox: this.typeOfInstrumentBox, contactNumber: this.contactNumber, Name: this.Name, Address: this.Address, CaNo: this.CaNo, TelNo: this.TelNo, Plan: this.Plan, TypeOfPlan: this.TypeOfPlan, DateOfInstallation: this.DateOfInstallation, TypeOfConnection: this.TypeOfConnection, VoipIpAddress: this.VoipIpAddress, VlanId: this.VlanId, OltId: this.OltId, OltName: this.OltName, PonNo: this.Pon, Ont_Onu_Sn_Macadress: this.Ont_Onu_Sn_Macadress });
			this.reset()
			this.success = true
			this.editModalShow = false
			if (this.searchByOlt) {

				await this.searchByOltId()
			} else {

				await this.searchByTelno()
			}

		},
		async Download(val) {
			let csv = []
			if (val>=0){
				csv = Papa.unparse([this.searchRes[val]])
			}
			else{
				csv = Papa.unparse(this.searchRes)

			}
			// Papa.download(unparsedResults, 'LatestData')
			let content = new Blob([csv]);
			let urlObject = window.URL || window.webkitURL || window;
			let url = urlObject.createObjectURL(content);
			let el = document.createElement("a");
			el.setAttribute('href', url)
			el.setAttribute('download', 'CsvExport.csv')
			el.click();
			urlObject.revokeObjectURL(url);
			this.Downloadsuccess = true
		},
		reset() {
			this.Name = '',
				this.Address = '',
				this.CaNo = '',
				this.contactNumber = '',
				this.TelNo = '',
				this.Plan = '',
				this.AM = '',
				this.TypeOfPlan = '',
				this.Month = '',
				this.DateOfInstallation = '',
				this.TypeOfConnection = '',
				this.VoipIpAddress = '',
				this.VlanId = '',
				this.OltId = '',
				this.OltName = '',
				this.Pon = '',
				this.Ont_Onu_Sn_Macadress = ''
				this.Ont_OnuProvidedBy = '',
				this.instrumentBoxProvidedBy = '',
				this.instrumentBoxProvided = false,
				this.typeOfInstrumentBox = '',
				this.GM = ''
		},
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
			optionsOltName: (state) => {
				return state.comex.OltNameOptions
			},
			optionsPonNo: (state) => {
				return state.comex.PonNoOptions
			},
			role: (state) => {
				return state.auth.currUser.role
			},
			searchByOlt: (state) => {
				return state.comex.searchByOlt
			},
			searchByTelNo: (state) => {
				return state.comex.searchByTelNo
			},
			searchByAM: (state) => {
				return state.comex.searchByAM
			},
			text: (state) => {
				return state.comex.text
			},
			showVlan: (state) => {
				return state.comex.showVlan
			},
			optionsGM: (state) => {
				return state.comex.optionsAM
			}
		}),
	},
}

</script>
<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	// height: 500px;
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
	