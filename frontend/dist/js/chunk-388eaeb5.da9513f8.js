(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-388eaeb5"],{"42aa":function(t,e,a){"use strict";a("cec2")},7729:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("div",[a("div",{staticClass:"root5"},[[a("div",{staticClass:"d-flex justify-content-between align-items-center "},[a("h2",[a("center",[t._v("Configure")]),a("br")],1)]),a("validation-observer",{ref:"registerForm"},[a("b-form",{staticClass:"form",on:{submit:function(t){t.preventDefault()}}},[a("b-form-group",{staticStyle:{"margin-left":"20px",display:"flex","flex-direction":"column"},attrs:{id:"fieldset-1",label:"Enter OLT Id","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-2"},model:{value:t.OltId,callback:function(e){t.OltId=e},expression:"OltId"}})],1),a("b-form-group",{staticStyle:{"margin-left":"20px",display:"flex","flex-direction":"column"},attrs:{id:"fieldset-1",label:"Enter OLT Name","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-2"},model:{value:t.OltName,callback:function(e){t.OltName=e},expression:"OltName"}})],1),a("b-form-group",{staticStyle:{"margin-left":"20px",display:"flex","flex-direction":"column"},attrs:{id:"fieldset-2",label:"Pon Number","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2"},model:{value:t.ponNo,callback:function(e){t.ponNo=e},expression:"ponNo"}})],1),a("b-form-group",{staticStyle:{"margin-left":"20px",display:"flex","flex-direction":"column"},attrs:{id:"fieldset-2",label:"Start Range","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2"},model:{value:t.startRange,callback:function(e){t.startRange=e},expression:"startRange"}})],1),a("b-form-group",{staticStyle:{"margin-left":"20px",display:"flex","flex-direction":"column"},attrs:{id:"fieldset-2",label:"End Range","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2"},model:{value:t.endRange,callback:function(e){t.endRange=e},expression:"endRange"}})],1),a("b-button",{staticStyle:{margin:"20px",width:"300px"},attrs:{type:"submit",variant:"primary"},on:{click:function(e){return t.onSubmit()}}},[t._v("Submit")])],1),a("b-modal",{attrs:{"ok-only":""},model:{value:t.success,callback:function(e){t.success=e},expression:"success"}},[t.error?a("p",[t._v(t._s(t.error))]):a("p",[t._v("Your Data is uploaded!")])])],1)]],2)])],1)},i=[],r=a("7bb1"),l=a("baa4"),o=a("11de"),s=a("c43f"),c=a("8226"),u=a("4797"),d=a("3010"),p=a("1947"),f=a("6aac"),m=(a("e009"),a("4a7a")),b=a.n(m),g=(a("4360"),a("f397")),x=a("7bec"),v=a.n(x),h=(a("4413"),a("2f62")),O=a("f20a"),N=a.n(O),y={components:{BSidebar:l["a"],BForm:o["a"],BFormFile:s["a"],BFormGroup:c["a"],BFormInput:u["a"],BFormInvalidFeedback:d["a"],BButton:p["a"],vSelect:b.a,BModal:f["a"],Navbar:g["a"],ValidationProvider:r["b"],ValidationObserver:r["a"],VuePhoneNumberInput:v.a,Password:N.a},model:{},props:{},data(){return{OltName:"",OltId:"",ponNo:"",success:!1,startRange:0,endRange:0}},methods:{...Object(h["b"])({Configure:"comex/configure"}),async onSubmit(){await this.Configure({OltName:this.OltName,OltId:this.OltId,ponNo:this.ponNo,startRange:this.startRange,endRange:this.endRange}),this.reset(),this.success=!0},reset(){this.OltName="",this.OltId="",this.ponNo="",this.startRange="",this.endRange=""}},computed:{...Object(h["c"])({error:t=>t.comex.errorsInSingle})}},R=y,S=(a("42aa"),a("2877")),k=Object(S["a"])(R,n,i,!1,null,null,null);e["default"]=k.exports},cec2:function(t,e,a){}}]);
//# sourceMappingURL=chunk-388eaeb5.da9513f8.js.map