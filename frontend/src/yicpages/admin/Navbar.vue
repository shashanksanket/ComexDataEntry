<template>
<div>
	<b-navbar toggleable="lg" type="light" variant="">
	  <b-navbar-brand style="margin-top:15px;" href="#"><img height="70px" src="./logo.png"></b-navbar-brand>
  
	  <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
  
	  <b-collapse id="nav-collapse" is-nav>
	
		<b-navbar-nav style="margin-top:40px; margin-left: 10%; margin-right: auto;">
		  <b-nav-item @click="redirect('addSingle')">Add Single Entry</b-nav-item>
		  <b-nav-item @click="redirect('addBulk')">Add Bulk Entries</b-nav-item>
		  <b-nav-item @click="redirect('downloadLatest')">Download Latest Entries</b-nav-item>
		  <b-nav-item @click="redirect('search')">Search Entries</b-nav-item>
		  <b-nav-item @click="redirect('configure')">Configure</b-nav-item>

		</b-navbar-nav>
	  </b-collapse>
	  <b-navbar-nav style="">
		<!-- <img style="width:65px;" src="./Mtnl.svg"/> -->
	  </b-navbar-nav>
	</b-navbar>
  </div>
  </template>
  <script>

  import { ValidationProvider, ValidationObserver } from 'vee-validate'
  import {
	  BSidebar, BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
	  BNavbar, BTooltip, BNavItemDropdown, BDropdownItem,
  BNavbarToggle,
  BCollapse, BNavItem,
  BNavbarBrand,BNav, BNavbarNav, SidebarRight
  } from 'bootstrap-vue'
  import { ref } from '@vue/composition-api'
  import Ripple from 'vue-ripple-directive'
  import vSelect from 'vue-select'
  import store from '@/store'
  import VuePhoneNumberInput from 'vue-phone-number-input';
  import 'vue-phone-number-input/dist/vue-phone-number-input.css';
  import Password from "vue-password-strength-meter";
import { mapMutations, mapActions, mapState } from "vuex";

  
  
  export default {
	  components: {
		  BForm,
		  BFormFile,
		  BFormGroup,
		  BFormInput,
		  BFormInvalidFeedback,
		  BModal,
		  BNavbarBrand,
    BNavbar, BTooltip, BNavItemDropdown, BDropdownItem,
    BNavbarToggle,
    BCollapse,
    BButton,
    BNav,
    BNavItem,
    BNavbarNav,
    BSidebar,
    SidebarRight,
  
		  // Form Validation
		  ValidationProvider,
		  ValidationObserver,
	  },
	  model: {
  
	  },
	  props: {
  
  
	  },
	  data() {
		  return {
			 }
	  },
	  methods: {
		redirect(val){
			this.$router.push('/'+val)
		}
	  },
	  computed: {
		  ...mapState({
  
  
		  }),
	  },
	  
  }
  
  </script>
  <style>
*{
	font-weight:bolder ;
}
.navbar{
	height: 90px;


/* Primary / Light blue */

background: #e1e5f1;
}
</style>