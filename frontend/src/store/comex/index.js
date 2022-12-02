import Vue from 'vue'
import Vuex from 'vuex'

import feathersClient from '../../feathers-client'

Vue.use(Vuex);

export default {
	namespaced: true,
	state: {
		data: '',
		searchRes: '',
		errorsInSingle: '',
		errorsInBulk: '',
		errorsInGetData: '',
		leftVlanId: '',
		OltNameOptions: [],
		OltIdOptions: [],
		PonNoOptions: [],
		configData: []
	},
	getters: {

	},
	mutations: {
		
		SET_DATA(state, val) {
			state.Data = val
		},
		SET_RES(state, val) {
			state.searchRes = val
		},
		SET_ERRORSSINGLE(state, val) {
			state.errorsInSingle = val
		},
		SET_ERRORSBULK(state, val) {
			state.errorsInBulk = val
		},
		SET_ERRORSGETDATA(state, val) {
			state.errorsInGetData = val
		},
		SET_LEFTPONS(state, val){
			state.leftVlanId = val
		}
	},
	actions: {
		setDetails: async ({ commit,state }, payload) => {
			try{
				commit('SET_ERRORSSINGLE','')
			await feathersClient.service('/api/datas').create( {
				Name: payload.Name,
				Address: payload.Address,
				CaNo: payload.CaNo,
				TelNo: payload.TelNo,
				Plan: payload.Plan,
				TypeOfPlan: payload.TypeOfPlan,
				DateOfInstallation: payload.DateOfInstallation,
				TypeOfConnection: payload.TypeOfConnection,
				VoipIpAddress: payload.VoipIpAddress,
				OltId: payload.OltId,
				VlanId: payload.VlanId,
				OltName: payload.OltName,
				PonNo: payload.PonNo,
				Ont_Onu_Sn_Macadress: payload.Ont_Onu_Sn_Macadress,
				contactNumber: payload.contactNumber
			}, {})

		}catch(e){
			commit('SET_ERRORSSINGLE',e)
		}
		},

		setBulkDetails: async ({ commit, state },payload) => {
			try{
				commit('SET_ERRORSSINGLE','')

			await feathersClient.service('/api/datas').create(payload)
			}catch(e){
				commit('SET_ERRORSBULK',e)
			}
		},
		getData: async ({commit, state})=>{
			try{
				commit('SET_ERRORSSINGLE','')

			const res = await feathersClient.service('/api/datas').find({
				query:{
					$total : true
				}
			})
			commit('SET_DATA',res)
			console.log(res.data)
			}catch(e){
				commit('SET_ERRORSGETDATA',e)
			}
		},
		searchEntry: async ({commit, state}, payload)=>{
			commit('SET_RES','')
			const res = await feathersClient.service('/api/datas').find({
				query: payload,
				query: {
					OltId: payload.OltId,
					PonNo: payload.PonNo,
					TelNo: payload.TelNo,
					$total : true
				}
			})
			commit('SET_RES',res)
			const res2 = await feathersClient.service('/api/oltps').find({
				query: {
					OltId: payload.OltId,
					ponNo: payload.PonNo,
				}
			})
			let usedVlanId = []
			for(var i=0; i<res.length; i++){
				usedVlanId.push(parseInt(res[i].VlanId))
			}
			let leftVlanId = []
			for(var i=res2.data[0].startRange; i<=res2.data[0].endRange; i++){
				if (!usedVlanId.includes(i)){
					leftVlanId.push(i)
				}
			}
			commit('SET_LEFTPONS',leftVlanId)

		},
		configure: async ({commit, state}, payload)=>{
			await feathersClient.service('/api/oltps').create({
				OltName: payload.OltName,
				OltId: payload.OltId,
				ponNo: payload.ponNo,
				startRange: payload.startRange,
				endRange: payload.endRange
			})
		},
		optionsOlt: async ({commit,state},payload)=>{
			const res = await feathersClient.service('/api/oltps').find({
				query:{
					$total : true
				}
			})
			state.OltNameOptions = []
			state.OltIdOptions = []
			for(var i=0; i<res.length; i++){
				if(!state.OltNameOptions.includes(res[i].OltName)){
					state.OltNameOptions.push(res[i].OltName)
				}
				if(!state.OltIdOptions.includes(res[i].OltId)){
					state.OltIdOptions.push(res[i].OltId)
				}
			}
		},
		optionsPon: async ({commit,state},payload)=>{
			state.PonNoOptions = []
			const res = await feathersClient.service('/api/oltps').find({
				query:{
					$total : true,
					OltName: payload.OltName,
					OltId: payload.OltId
				}
			})
			for(var i=0; i<res.length; i++){
				state.PonNoOptions.push(res[i].ponNo)
			}
			for(var i=0; i<res.length; i++){
				if(!state.PonNoOptions.includes(res[i].ponNo)){
					state.PonNoOptions.push(res[i].ponNo)
				}
				
			}
		},
		addUser: async ({commit,state},payload)=>{
			if (payload.currRole!='ENDUSER'){
				await feathersClient.service('/api/users').create({
					firstName: payload.firstName,
					lastName: payload.lastName,
					phoneNumber: payload.phoneNumber,
					password: payload.password,
					role: payload.role,
					email: payload.email,
				})
			}
		},
		deleteEntry: async ({commit,state},payload)=>{
			if(payload.role!='ENDUSER'){

				await feathersClient.service('/api/datas').remove(payload.id,{})
			}
		},
		getConfigData: async ({commit,state},payload)=>{
			const res = await feathersClient.service('/api/oltps').find({
				query:{
					$total : true
				}
			})
			state.configData = res
		},
		deleteConfig: async ({commit,state},payload)=>{
			if(payload.role!='ENDUSER'){

				await feathersClient.service('/api/oltps').remove(payload.id,{})
			}
		}
	},
}
