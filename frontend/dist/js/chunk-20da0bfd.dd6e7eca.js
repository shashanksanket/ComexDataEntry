(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20da0bfd"],{"09c0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Navbar"),r("div",[r("div",{staticClass:"root4"},["largeDevices"===e.$mq||"mediumDevices"===e.$mq?[r("div",{staticClass:"d-flex justify-content-between align-items-center "},[r("h2",[r("center",[e._v("Search Any Entires")]),r("br")],1)]),r("b-button",{staticStyle:{"margin-bottom":"20px"},attrs:{variant:"primary"},on:{click:function(t){return e.searchByFunc()}}},[e._v(" "+e._s(e.text)+" ")]),e.searchByOlt?r("div",{},[r("b-form-group",{staticClass:"input",attrs:{id:"fieldset-14",label:"Select Olt Id","label-for":"input-14"}},[r("b-form-select",{staticClass:"d-inline-block mr-1",attrs:{options:e.optionsOltId,placeholder:"Enter OLT Id"},on:{change:e.optionPonNum},model:{value:e.searchQueryOLTP,callback:function(t){e.searchQueryOLTP=t},expression:"searchQueryOLTP"}})],1),r("b-form-group",{staticClass:"input",staticStyle:{display:"flex","flex-direction":"column"},attrs:{id:"fieldset-14",label:"Enter Pon No","label-for":"input-14"}},[r("b-form-select",{staticClass:"d-inline-block mr-1",attrs:{options:e.optionPons,placeholder:"Select Pon Number"},model:{value:e.searchQueryPON,callback:function(t){e.searchQueryPON=t},expression:"searchQueryPON"}})],1),r("b-button",{staticStyle:{"margin-top":"10px"},attrs:{variant:"primary"},on:{click:function(t){return e.searchByOltId()}}},[r("span",{staticClass:"text-nowrap"},[e._v("Search")])])],1):e._e(),e.searchByOlt?e._e():r("div",{staticClass:"d-flex align-items-center justify-content-end"},[r("div"),r("b-form-input",{staticClass:"d-inline-block mr-1",attrs:{placeholder:"Enter Telephone Number"},model:{value:e.searchQueryTelNo,callback:function(t){e.searchQueryTelNo=t},expression:"searchQueryTelNo"}}),r("b-button",{staticStyle:{"margin-top":"10px"},attrs:{variant:"primary"},on:{click:function(t){return e.searchByTelno()}}},[r("span",{staticClass:"text-nowrap"},[e._v("Search")])])],1),r("br"),r("br"),r("h3",[e._v("Search Results")]),r("b-table",{ref:"data",staticClass:"position-relative",staticStyle:{width:"100%"},attrs:{"current-page":e.currentPage,id:"table","per-page":e.perPage,items:e.searchRes,responsive:"",fields:e.tableColumns,"primary-key":"id","show-empty":"","empty-text":"No matching records found"},scopedSlots:e._u([{key:"cell(title)",fn:function(e){}},{key:"cell(Actions)",fn:function(t){return[r("b-dropdown",{attrs:{variant:"link","no-caret":"",right:e.$store.state.appConfig.isRTL},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("img",{staticClass:"align-middle text-body",attrs:{src:a("8052"),size:"16"}})]},proxy:!0}],null,!0)},["ENDUSER"!=e.role?r("b-dropdown-item",{on:{click:function(a){return e.deleteRow(t.item.id)}}},[r("img",{staticClass:"align-middle text-body",attrs:{src:a("f246"),size:"16"}}),r("span",{staticClass:"align-middle ml-50"},[e._v("Delete")])]):e._e()],1)]}}],null,!1,4045413434)}),r("b-pagination",{attrs:{"total-rows":e.searchRes.length,"per-page":e.perPage,"aria-controls":"table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("br"),r("br"),e.leftVlan&&e.showVlan?r("div",[r("h4",[e._v("These Vlan Ids are left for new connections in "+e._s(this.searchQueryPON)+":-")]),r("br"),r("br"),e._v(" Total:- "+e._s(e.leftVlan.length)+" "),r("br"),r("br"),r("table",{staticClass:"table"},[e._m(0),r("tbody",e._l(e.leftVlan,(function(t){return r("tr",[r("th",{attrs:{scope:"row"}},[e._v(e._s(e.leftVlan.indexOf(t)+1))]),r("td",[e._v(e._s(t))])])})),0)])]):e._e()]:e._e(),"smallDevices"===e.$mq?[r("div",{staticClass:" "},[r("h2",[r("center",[e._v("Search Any Entires")]),r("br")],1)]),r("b-button",{staticStyle:{"margin-bottom":"20px"},attrs:{variant:"primary"},on:{click:function(t){return e.searchByFunc()}}},[e._v(" "+e._s(e.text)+" ")]),e.searchByOlt?r("div",{},[r("b-form-group",{staticClass:"input",attrs:{id:"fieldset-14",label:"Select Olt Id","label-for":"input-14"}},[r("b-form-select",{staticClass:"d-inline-block mr-1",attrs:{options:e.optionsOltId,placeholder:"Enter OLT Id"},on:{change:e.optionPonNum},model:{value:e.searchQueryOLTP,callback:function(t){e.searchQueryOLTP=t},expression:"searchQueryOLTP"}})],1),r("b-form-group",{staticClass:"input",staticStyle:{display:"flex","flex-direction":"column"},attrs:{id:"fieldset-14",label:"Enter Pon No","label-for":"input-14"}},[r("b-form-select",{staticClass:"d-inline-block mr-1",attrs:{options:e.optionPons,placeholder:"Select Pon Number"},model:{value:e.searchQueryPON,callback:function(t){e.searchQueryPON=t},expression:"searchQueryPON"}})],1),r("b-button",{staticStyle:{"margin-top":"10px"},attrs:{variant:"primary"},on:{click:function(t){return e.searchByOltId()}}},[r("span",{staticClass:"text-nowrap"},[e._v("Search")])])],1):e._e(),e.searchByOlt?e._e():r("div",{staticClass:"d-flex align-items-center justify-content-end"},[r("div"),r("b-form-input",{staticClass:"d-inline-block mr-1",attrs:{placeholder:"Enter Telephone Number"},model:{value:e.searchQueryTelNo,callback:function(t){e.searchQueryTelNo=t},expression:"searchQueryTelNo"}}),r("b-button",{staticStyle:{"margin-top":"10px"},attrs:{variant:"primary"},on:{click:function(t){return e.searchByTelno()}}},[r("span",{staticClass:"text-nowrap"},[e._v("Search")])])],1),r("br"),r("br"),r("h3",[e._v("Search Results")]),r("b-table",{ref:"data",staticClass:"position-relative",staticStyle:{width:"100%"},attrs:{"current-page":e.currentPage,id:"table","per-page":e.perPage,items:e.searchRes,responsive:"",fields:e.tableColumns,"primary-key":"id","show-empty":"","empty-text":"No matching records found"},scopedSlots:e._u([{key:"cell(title)",fn:function(e){}},{key:"cell(Actions)",fn:function(t){return[r("b-dropdown",{attrs:{variant:"link","no-caret":"",right:e.$store.state.appConfig.isRTL},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("img",{staticClass:"align-middle text-body",attrs:{src:a("8052"),size:"16"}})]},proxy:!0}],null,!0)},["ENDUSER"!=e.role?r("b-dropdown-item",{on:{click:function(a){return e.deleteRow(t.item.id)}}},[r("img",{staticClass:"align-middle text-body",attrs:{src:a("f246"),size:"16"}}),r("span",{staticClass:"align-middle ml-50"},[e._v("Delete")])]):e._e()],1)]}}],null,!1,4045413434)}),r("b-pagination",{attrs:{"total-rows":e.searchRes.length,"per-page":e.perPage,"aria-controls":"table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("br"),r("br"),e.leftVlan&&e.showVlan?r("div",[r("h4",[e._v("These Vlan Ids are left for new connections in "+e._s(this.searchQueryPON)+":-")]),r("br"),r("br"),e._v(" Total:- "+e._s(e.leftVlan.length)+" "),r("br"),r("br"),r("table",{staticClass:"table"},[e._m(1),r("tbody",e._l(e.leftVlan,(function(t){return r("tr",[r("th",{attrs:{scope:"row"}},[e._v(e._s(e.leftVlan.indexOf(t)+1))]),r("td",[e._v(e._s(t))])])})),0)])]):e._e()]:e._e(),r("b-modal",{attrs:{"ok-only":"",title:"Entry Deleted"},model:{value:e.deleteModal,callback:function(t){e.deleteModal=t},expression:"deleteModal"}},[r("p",{staticClass:"my-4"},[e._v("Entry Deleted Successfully")])])],2),r("v-idle",{attrs:{duration:900},on:{idle:e.onidle}})],1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"row"}},[e._v("#")]),a("th",{attrs:{scope:"col"}},[e._v("VLAN ID")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"row"}},[e._v("#")]),a("th",{attrs:{scope:"col"}},[e._v("VLAN ID")])])])}],i=a("7bb1"),o=a("baa4"),s=a("11de"),l=a("c43f"),c=a("8226"),u=a("4797"),d=a("3010"),b=a("1947"),p=a("9eaa"),h=a("6aac"),f=a("29a1"),m=a("dd9a"),O=a("8361"),y=a("26d2"),v=(a("e009"),a("4a7a")),g=a.n(v),j=(a("4360"),a("f397")),P=a("7bec"),x=a.n(P),w=(a("4413"),a("2f62")),k=a("f20a"),_=a.n(k),S=a("2b0e"),N=a("660e"),B=a("4639"),C=a.n(B);S["default"].use(N["a"],{breakpoints:{smallDevices:600,mediumDevices:1200,largeDevices:1/0}});var T={components:{BSidebar:o["a"],BForm:s["a"],BFormFile:l["a"],Vidle:C.a,BFormGroup:c["a"],BFormInput:u["a"],BFormInvalidFeedback:d["a"],BButton:b["a"],BDropdownItem:p["a"],vSelect:g.a,BModal:h["a"],Navbar:j["a"],BTable:f["a"],BDropdown:m["a"],BFormSelect:O["a"],BPagination:y["a"],ValidationProvider:i["b"],ValidationObserver:i["a"],VuePhoneNumberInput:x.a,Password:_.a},model:{},props:{},data(){return{currentPage:1,perPage:10,deleteModal:!1,searchBy:"",optionPons:"",text:"Search By Telephone number",searchByOlt:!0,searchQueryPON:"",searchQueryOLTP:"",searchQueryTelNo:"",showVlan:!1,tableColumns:[{key:"Name"},{key:"Address"},{key:"CaNo"},{key:"TelNo"},{key:"VoipIpAddress"},{key:"PonNo"},{key:"VlanId"},{key:"TypeOfPlan"},{key:"DateOfInstallation"},{key:"TypeOfConnection"},{key:"OltId"},{key:"OltName"},{key:"Ont_Onu_Sn_Macadress"},{key:"contactNumber"},{key:"Ont_OnuProvidedBy"},{key:"instrumentBoxProvidedBy"},{key:"instrumentBoxProvided"},{key:"typeOfInstrumentBox"},{key:"Actions"}],leftVlanData:[{key:"VlanId"}]}},methods:{...Object(w["b"])({searchData:"comex/searchEntry",optionsOlt:"comex/optionsOlt",optionsPon:"comex/optionsPon",deleteEntry:"comex/deleteEntry",logoutUser:"auth/logoutUser"}),onidle(){alert("You have been logged out due to inactivity of 15 minutes"),this.$router.push({name:"login"}),this.logoutUser()},searchByFunc(){this.searchByOlt=!this.searchByOlt,this.searchByOlt?this.text="Search By Telephone Number":(this.text="Search By OLT",this.showVlan=!1)},async searchByTelno(){await this.searchData({TelNo:this.searchQueryTelNo})},onidle(){alert("You have been logged out due to inactivity of 15 minutes"),this.$router.push({name:"login"}),this.logoutUser()},async searchByOltId(){"All"!=this.searchQueryPON?(await this.searchData({OltId:this.searchQueryOLTP,PonNo:this.searchQueryPON}),this.showVlan=!0):(this.showVlan=!1,await this.searchData({OltId:this.searchQueryOLTP}))},async optionPonNum(){this.showVlan=!1,await this.optionsPon({OltId:this.searchQueryOLTP});let e=this.optionsPonNo,t=["All"];this.optionPons=t.concat(e),console.log(this.optionsPons)},async deleteRow(e){await this.deleteEntry({id:e,role:this.role}),this.searchByOlt?await this.searchByOltId():await this.searchByTelno(),this.deleteModal=!0}},async mounted(){await this.optionsOlt(),console.log(this.role)},computed:{...Object(w["d"])({searchRes:e=>e.comex.searchRes,leftVlan:e=>e.comex.leftVlanId,optionsOltId:e=>e.comex.OltIdOptions,optionsPonNo:e=>e.comex.PonNoOptions,role:e=>e.auth.currUser.role})}},V=T,D=(a("9469"),a("2877")),I=Object(D["a"])(V,r,n,!1,null,null,null);t["default"]=I.exports},"0fc6":function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return p}));var r=a("2b0e"),n=a("a723"),i=a("a874"),o=a("8690"),s=a("7b1e"),l=a("d82f"),c=a("cf75"),u=a("686b"),d='Setting prop "options" to an object is deprecated. Use the array format instead.',b=Object(c["c"])({disabledField:Object(c["b"])(n["u"],"disabled"),htmlField:Object(c["b"])(n["u"],"html"),options:Object(c["b"])(n["d"],[]),textField:Object(c["b"])(n["u"],"text"),valueField:Object(c["b"])(n["u"],"value")},"formOptionControls"),p=r["default"].extend({props:b,computed:{formOptions:function(){return this.normalizeOptions(this.options)}},methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(s["k"])(e)){var a=Object(i["a"])(e,this.valueField),r=Object(i["a"])(e,this.textField);return{value:Object(s["o"])(a)?t||r:a,text:Object(o["b"])(String(Object(s["o"])(r)?t:r)),html:Object(i["a"])(e,this.htmlField),disabled:Boolean(Object(i["a"])(e,this.disabledField))}}return{value:t||e,text:Object(o["b"])(String(e)),disabled:!1}},normalizeOptions:function(e){var t=this;return Object(s["a"])(e)?e.map((function(e){return t.normalizeOption(e)})):Object(s["k"])(e)?(Object(u["a"])(d,this.$options.name),Object(l["h"])(e).map((function(a){return t.normalizeOption(e[a]||{},a)}))):[]}}})},3354:function(e,t,a){},8361:function(e,t,a){"use strict";a.d(t,"a",(function(){return q}));var r=a("2b0e"),n=a("c637"),i=a("0056"),o=a("a723"),s=a("9b76"),l=a("2326"),c=a("906c"),u=a("8690"),d=a("7b1e"),b=a("d82f"),p=a("cf75"),h=a("dde7"),f=a("a953"),m=a("ad47"),O=a("d520"),y=a("90ef"),v=a("58f2"),g=Object(v["a"])("value"),j=g.mixin,P=g.props,x=g.prop,w=g.event,k=a("8c18"),_=a("a874"),S=a("0fc6");function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){C(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var T=Object(p["c"])(Object(b["m"])(B(B({},S["b"]),{},{labelField:Object(p["b"])(o["u"],"label"),optionsField:Object(p["b"])(o["u"],"options")})),"formOptions"),V=r["default"].extend({mixins:[S["a"]],props:T,methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(d["k"])(e)){var a=Object(_["a"])(e,this.valueField),r=Object(_["a"])(e,this.textField),n=Object(_["a"])(e,this.optionsField,null);return Object(d["g"])(n)?{value:Object(d["o"])(a)?t||r:a,text:String(Object(d["o"])(r)?t:r),html:Object(_["a"])(e,this.htmlField),disabled:Boolean(Object(_["a"])(e,this.disabledField))}:{label:String(Object(_["a"])(e,this.labelField)||r),options:this.normalizeOptions(n)}}return{value:t||e,text:String(e),disabled:!1}}}}),D=a("b42e"),I=Object(p["c"])({disabled:Object(p["b"])(o["g"],!1),value:Object(p["b"])(o["a"],void 0,!0)},n["A"]),Q=r["default"].extend({name:n["A"],functional:!0,props:I,render:function(e,t){var a=t.props,r=t.data,n=t.children,i=a.value,o=a.disabled;return e("option",Object(D["a"])(r,{attrs:{disabled:o},domProps:{value:i}}),n)}});function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){F(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var L=Object(p["c"])(Object(b["m"])(E(E({},S["b"]),{},{label:Object(p["b"])(o["u"],void 0,!0)})),n["B"]),$=r["default"].extend({name:n["B"],mixins:[k["a"],S["a"]],props:L,render:function(e){var t=this.label,a=this.formOptions.map((function(t,a){var r=t.value,n=t.text,i=t.html,o=t.disabled;return e(Q,{attrs:{value:r,disabled:o},domProps:Object(u["a"])(i,n),key:"option_".concat(a)})}));return e("optgroup",{attrs:{label:t}},[this.normalizeSlot(s["n"]),a,this.normalizeSlot()])}});function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){U(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function U(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var M=Object(p["c"])(Object(b["m"])(A(A(A(A(A(A(A({},y["b"]),P),h["b"]),f["b"]),m["b"]),O["b"]),{},{ariaInvalid:Object(p["b"])(o["j"],!1),multiple:Object(p["b"])(o["g"],!1),selectSize:Object(p["b"])(o["n"],0)})),n["z"]),q=r["default"].extend({name:n["z"],mixins:[y["a"],j,h["a"],m["a"],O["a"],f["a"],V,k["a"]],props:M,data:function(){return{localValue:this[x]}},computed:{computedSelectSize:function(){return this.plain||0!==this.selectSize?this.selectSize:null},inputClass:function(){return[this.plain?"form-control":"custom-select",this.size&&this.plain?"form-control-".concat(this.size):null,this.size&&!this.plain?"custom-select-".concat(this.size):null,this.stateClass]}},watch:{value:function(e){this.localValue=e},localValue:function(){this.$emit(w,this.localValue)}},methods:{focus:function(){Object(c["d"])(this.$refs.input)},blur:function(){Object(c["c"])(this.$refs.input)},onChange:function(e){var t=this,a=e.target,r=Object(l["f"])(a.options).filter((function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));this.localValue=a.multiple?r:r[0],this.$nextTick((function(){t.$emit(i["c"],t.localValue)}))}},render:function(e){var t=this.name,a=this.disabled,r=this.required,n=this.computedSelectSize,i=this.localValue,o=this.formOptions.map((function(t,a){var r=t.value,n=t.label,i=t.options,o=t.disabled,s="option_".concat(a);return Object(d["a"])(i)?e($,{props:{label:n,options:i},key:s}):e(Q,{props:{value:r,disabled:o},domProps:Object(u["a"])(t.html,t.text),key:s})}));return e("select",{class:this.inputClass,attrs:{id:this.safeId(),name:t,form:this.form||null,multiple:this.multiple||null,size:n,disabled:a,required:r,"aria-required":r?"true":null,"aria-invalid":this.computedAriaInvalid},on:{change:this.onChange},directives:[{name:"model",value:i}],ref:"input"},[this.normalizeSlot(s["n"]),o,this.normalizeSlot()])}})},9469:function(e,t,a){"use strict";a("3354")}}]);
//# sourceMappingURL=chunk-20da0bfd.dd6e7eca.js.map