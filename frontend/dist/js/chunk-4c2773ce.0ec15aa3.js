(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c2773ce"],{"0fc6":function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return b}));var o=n("2b0e"),i=n("a723"),a=n("a874"),r=n("8690"),s=n("7b1e"),l=n("d82f"),u=n("cf75"),d=n("686b"),c='Setting prop "options" to an object is deprecated. Use the array format instead.',p=Object(u["d"])({disabledField:Object(u["c"])(i["u"],"disabled"),htmlField:Object(u["c"])(i["u"],"html"),options:Object(u["c"])(i["d"],[]),textField:Object(u["c"])(i["u"],"text"),valueField:Object(u["c"])(i["u"],"value")},"formOptionControls"),b=o["default"].extend({props:p,computed:{formOptions:function(){return this.normalizeOptions(this.options)}},methods:{normalizeOption:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(s["k"])(t)){var n=Object(a["a"])(t,this.valueField),o=Object(a["a"])(t,this.textField);return{value:Object(s["o"])(n)?e||o:n,text:Object(r["b"])(String(Object(s["o"])(o)?e:o)),html:Object(a["a"])(t,this.htmlField),disabled:Boolean(Object(a["a"])(t,this.disabledField))}}return{value:e||t,text:Object(r["b"])(String(t)),disabled:!1}},normalizeOptions:function(t){var e=this;return Object(s["a"])(t)?t.map((function(t){return e.normalizeOption(t)})):Object(s["k"])(t)?(Object(d["a"])(c,this.$options.name),Object(l["h"])(t).map((function(n){return e.normalizeOption(t[n]||{},n)}))):[]}}})},2723:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),n("div",[n("div",{staticClass:"root1"},[[n("div",{},[n("br"),n("br"),n("center",[n("h2",{staticClass:"mainTitle  "},[t._v(" Add Single Entries ")])]),n("br"),n("br")],1),n("validation-observer",{ref:"registerForm"},[n("b-form",{staticClass:"form",on:{submit:function(t){t.preventDefault()}}},[n("br"),n("br"),1==t.currentStep?n("div",{attrs:{id:"#step1"}},[n("h3",[n("center",[t._v(" Personal Details ")])],1),n("b-form-group",{attrs:{id:"fieldset-1",label:"Name","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1"},model:{value:t.Name,callback:function(e){t.Name=e},expression:"Name"}})],1),n("b-form-group",{attrs:{id:"fieldset-2",label:"Address","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2"},model:{value:t.Address,callback:function(e){t.Address=e},expression:"Address"}})],1),n("b-form-group",{attrs:{id:"fieldset-7",label:"Contact Number","label-for":"input-7"}},[n("b-form-input",{attrs:{id:""},model:{value:t.contactNumber,callback:function(e){t.contactNumber=e},expression:"contactNumber"}})],1),n("b-button",{attrs:{variant:"primary",type:"button"},on:{click:function(e){return e.preventDefault(),t.goToStep(2)}}},[t._v("Continue")])],1):t._e(),2==t.currentStep?n("div",{attrs:{id:"step2"}},[n("h3",[n("center",[t._v(" Plan Details ")])],1),n("b-form-group",{attrs:{id:"fieldset-5",label:"Plan","label-for":"input-5"}},[n("b-form-input",{attrs:{id:"input-5"},model:{value:t.Plan,callback:function(e){t.Plan=e},expression:"Plan"}})],1),n("b-form-group",{attrs:{id:"fieldset-6",label:"Type Of Plan","label-for":"input-6"}},[n("b-form-input",{attrs:{id:"input-6"},model:{value:t.TypeOfPlan,callback:function(e){t.TypeOfPlan=e},expression:"TypeOfPlan"}})],1),n("b-form-group",{attrs:{id:"fieldset-7",label:"Date Of Installation","label-for":"input-7"}},[n("b-form-input",{attrs:{type:"date",id:""},model:{value:t.DateOfInstallation,callback:function(e){t.DateOfInstallation=e},expression:"DateOfInstallation"}})],1),n("b-form-group",{attrs:{id:"fieldset-3",label:"CA NO","label-for":"input-3"}},[n("b-form-input",{attrs:{id:"input-3"},model:{value:t.CaNo,callback:function(e){t.CaNo=e},expression:"CaNo"}})],1),n("b-form-group",{attrs:{id:"fieldset-8",label:"Type Of Connection","label-for":"input-8"}},[n("b-form-input",{attrs:{id:"input-8"},model:{value:t.TypeOfConnection,callback:function(e){t.TypeOfConnection=e},expression:"TypeOfConnection"}})],1),n("div",{staticClass:"d-flex justify-content-between flex-wrap"},[n("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.goToStep(3)}}},[t._v("Continue")]),n("b-button",{attrs:{variant:"primary",type:"button"},on:{click:function(e){return e.preventDefault(),t.goToStep(1)}}},[t._v("Go Back")])],1)],1):t._e(),3==t.currentStep?n("div",{attrs:{id:"step3"}},[n("h3",[n("center",[t._v(" Telephone Details ")])],1),n("b-form-group",{attrs:{id:"fieldset-4",label:"Tel No","label-for":"input-4"}},[n("b-form-input",{attrs:{id:"input-4"},model:{value:t.TelNo,callback:function(e){t.TelNo=e},expression:"TelNo"}})],1),n("b-form-group",{attrs:{id:"fieldset-4",label:"Instrument Box Provided?","label-for":"input-4"}},[n("b-form-select",{attrs:{options:["Yes","No"],id:"input-4"},model:{value:t.instrumentBoxProvided,callback:function(e){t.instrumentBoxProvided=e},expression:"instrumentBoxProvided"}})],1),n("b-form-group",{attrs:{id:"fieldset-4",label:"Type of Instrument Box","label-for":"input-4"}},[n("b-form-select",{attrs:{options:["Non-Caller Id","Caller Id"],id:"input-4"},model:{value:t.typeOfInstrumentBox,callback:function(e){t.typeOfInstrumentBox=e},expression:"typeOfInstrumentBox"}})],1),n("b-form-group",{attrs:{id:"fieldset-4",label:"Instrument Box provided by","label-for":"input-4"}},[n("b-form-select",{attrs:{options:["MTNL","Comex","Customer"],id:"input-4"},model:{value:t.instrumentBoxProvidedBy,callback:function(e){t.instrumentBoxProvidedBy=e},expression:"instrumentBoxProvidedBy"}})],1),n("b-form-group",{attrs:{id:"fieldset-4",label:"Ont/Onu provided by","label-for":"input-4"}},[n("b-form-select",{attrs:{options:["MTNL","Comex","Customer"],id:"input-4"},model:{value:t.Ont_OnuProvidedBy,callback:function(e){t.Ont_OnuProvidedBy=e},expression:"Ont_OnuProvidedBy"}})],1),n("div",{staticClass:"d-flex justify-content-between flex-wrap"},[n("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.goToStep(4)}}},[t._v("Continue")]),n("b-button",{attrs:{variant:"primary",type:"button"},on:{click:function(e){return e.preventDefault(),t.goToStep(2)}}},[t._v("Go Back")])],1)],1):t._e(),4==t.currentStep?n("div",{attrs:{id:"step4"}},[n("h3",[n("center",[t._v(" Connection Details ")])],1),n("b-form-group",{attrs:{id:"fieldset-9",label:"Voip Ip Address","label-for":"input-9"}},[n("b-form-input",{attrs:{id:"input-9"},model:{value:t.VoipIpAddress,callback:function(e){t.VoipIpAddress=e},expression:"VoipIpAddress"}})],1),n("b-form-group",{attrs:{id:"fieldset-11",label:"OLT Id","label-for":"input-11"}},[n("b-form-select",{attrs:{id:"input-13",options:t.optionsOltId},on:{change:function(e){return t.onSelectOltId(t.OltId)}},model:{value:t.OltId,callback:function(e){t.OltId=e},expression:"OltId"}})],1),n("b-form-group",{attrs:{id:"fieldset-13",label:"OLT Name","label-for":"input-13"}},[n("b-form-select",{attrs:{id:"input-13",options:t.optionsOltName},on:{change:function(e){return t.onSelectOltName(t.OltName)}},model:{value:t.OltName,callback:function(e){t.OltName=e},expression:"OltName"}})],1),n("b-form-group",{attrs:{id:"fieldset-14",label:"Pon No","label-for":"input-14"}},[n("b-form-select",{attrs:{id:"input-13",options:t.optionsPonNo},model:{value:t.PonNo,callback:function(e){t.PonNo=e},expression:"PonNo"}})],1),n("b-form-group",{attrs:{id:"fieldset-10",label:"VLAN ID","label-for":"input-10"}},[n("b-form-input",{attrs:{id:"input-10"},model:{value:t.VlanId,callback:function(e){t.VlanId=e},expression:"VlanId"}})],1),n("b-form-group",{attrs:{id:"fieldset-14",label:"Ont/Onu S/n MacAddress","label-for":"input-14"}},[n("b-form-input",{attrs:{id:"input-14"},model:{value:t.Ont_Onu_Sn_Macadress,callback:function(e){t.Ont_Onu_Sn_Macadress=e},expression:"Ont_Onu_Sn_Macadress"}})],1),n("div",{staticClass:"d-flex justify-content-between flex-wrap"},[n("b-button",{attrs:{variant:"primary",type:"button"},on:{click:function(e){return e.preventDefault(),t.goToStep(3)}}},[t._v("Go Back")]),n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:function(e){return t.onSubmit()}}},[t._v("Submit")])],1)],1):t._e(),n("br"),n("div")]),n("b-modal",{attrs:{"ok-only":""},model:{value:t.success,callback:function(e){t.success=e},expression:"success"}},[t.error?n("p",[t._v(t._s(t.error))]):n("p",[t._v("Your Data is uploaded!")])])],1)],n("v-idle",{staticStyle:{display:"none"},attrs:{duration:900},on:{idle:t.onidle}}),n("br")],2)])],1)},i=[],a=n("7bb1"),r=n("baa4"),s=n("11de"),l=n("8361"),u=n("c43f"),d=n("8226"),c=n("4797"),p=n("3010"),b=n("1947"),f=n("6aac"),m=n("c2f1"),O=(n("e009"),n("4a7a")),v=n.n(O),h=(n("4360"),n("f397")),y=n("7bec"),N=n.n(y),x=(n("4413"),n("2f62")),P=n("f20a"),I=n.n(P),B=n("2b0e"),_=n("4639"),g=n.n(_),k=n("660e");B["default"].use(k["a"],{breakpoints:{smallDevices:600,mediumDevices:1200,largeDevices:1/0}}),B["default"].component("step3",{div:"#step3",props:["currentStep","step1","step2"]}),B["default"].component("step2",{div:"#step2",props:["currentStep","step2"]}),B["default"].component("step1",{div:"#step1",props:["currentStep","step1"]});var S={components:{BSidebar:r["a"],Vidle:g.a,BForm:s["a"],BFormSelect:l["a"],BFormFile:u["a"],BFormGroup:d["a"],BFormInput:c["a"],BFormInvalidFeedback:p["a"],BButton:b["a"],vSelect:v.a,BModal:f["a"],Navbar:h["a"],BFormDatepicker:m["a"],ValidationProvider:a["b"],ValidationObserver:a["a"],VuePhoneNumberInput:N.a,Password:I.a},model:{},data(){return{Name:"",Address:"",CaNo:"",TelNo:"",Plan:"",TypeOfPlan:"",DateOfInstallation:"",TypeOfConnection:"",VoipIpAddress:"",VlanId:"",OltId:"",OltName:"",PonNo:"",success:!1,Ont_Onu_Sn_Macadress:"",Ont_OnuProvidedBy:"",instrumentBoxProvidedBy:"",instrumentBoxProvided:!1,typeOfInstrumentBox:"",contactNumber:"",currentStep:1,step1:{name:"",email:""},step2:{city:"",state:""}}},ready:function(){console.log("ready")},async mounted(){await this.optionsOlt()},methods:{...Object(x["b"])({addData:"comex/setDetails",optionsOlt:"comex/optionsOlt",optionsPon:"comex/optionsPon",logoutUser:"auth/logoutUser"}),goToStep:function(t){this.currentStep=t},async onSelectOltName(t){await this.optionsPon({OltName:t});let e=this.optionsOltName.indexOf(t);this.OltId=this.optionsOltId[e]},async onSelectOltId(t){let e=this.optionsOltId.indexOf(t);this.OltName=this.optionsOltName[e],await this.optionsPon({OltName:this.OltName})},onidle(){alert("You have been logged out due to inactivity of 15 minutes"),this.$router.push({name:"login"}),this.logoutUser()},async onSubmit(){await this.addData({Ont_OnuProvidedBy:this.Ont_OnuProvidedBy,instrumentBoxProvidedBy:this.instrumentBoxProvidedBy,instrumentBoxProvided:this.instrumentBoxProvided,typeOfInstrumentBox:this.typeOfInstrumentBox,contactNumber:this.contactNumber,Name:this.Name,Address:this.Address,CaNo:this.CaNo,TelNo:this.TelNo,Plan:this.Plan,TypeOfPlan:this.TypeOfPlan,DateOfInstallation:this.DateOfInstallation,TypeOfConnection:this.TypeOfConnection,VoipIpAddress:this.VoipIpAddress,VlanId:this.VlanId,OltId:this.OltId,OltName:this.OltName,PonNo:this.PonNo,Ont_Onu_Sn_Macadress:this.Ont_Onu_Sn_Macadress}),this.reset(),this.success=!0},reset(){this.Name="",this.Address="",this.CaNo="",this.contactNumber="",this.TelNo="",this.Plan="",this.TypeOfPlan="",this.Month="",this.DateOfInstallation="",this.TypeOfConnection="",this.VoipIpAddress="",this.VlanId="",this.OltId="",this.OltName="",this.PonNo="",this.Ont_Onu_Sn_Macadress="",this.Ont_OnuProvidedBy="",this.instrumentBoxProvidedBy="",this.instrumentBoxProvided=!1,this.typeOfInstrumentBox=""}},computed:{...Object(x["d"])({error:t=>t.comex.errorsInSingle,optionsOltId:t=>t.comex.OltIdOptions,optionsOltName:t=>t.comex.OltNameOptions,optionsPonNo:t=>t.comex.PonNoOptions})}},T=S,C=(n("fb1a"),n("2877")),j=Object(C["a"])(T,o,i,!1,null,null,null);e["default"]=j.exports},"599b":function(t,e,n){},"89d6":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("992e"),i=n("2326"),a=n("fa73"),r=["ar","az","ckb","fa","he","ks","lrc","mzn","ps","sd","te","ug","ur","yi"].map((function(t){return t.toLowerCase()})),s=function(t){var e=Object(a["g"])(t).toLowerCase().replace(o["A"],"").split("-"),n=e.slice(0,2).join("-"),s=e[0];return Object(i["a"])(r,n)||Object(i["a"])(r,s)}},fb1a:function(t,e,n){"use strict";n("599b")}}]);
//# sourceMappingURL=chunk-4c2773ce.0ec15aa3.js.map