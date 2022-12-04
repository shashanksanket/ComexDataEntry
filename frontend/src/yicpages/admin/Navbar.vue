<template>
<div>
	<b-navbar   toggleable="lg" type="light" variant="">
    
    <!-- <b-navbar-toggle  target="nav-collapse" style="position: absolute; right:0px;"></b-navbar-toggle> -->
    
    <b-navbar-nav style="margin-top:5px;" href="#"><img height="60rm" src="./logo.png"></b-navbar-nav>
	  <b-collapse id="nav-collapse" is-nav v-if="$mq === 'largeDevices'">
        <b-navbar-nav v-if="isLoggedIn" id="navMain" style="margin-left: auto; margin-right: auto;">
          <b-nav-item @click="redirect('dashboard')">Dashboard</b-nav-item>
          <b-nav-item @click="redirect('addSingle')">Single Entry</b-nav-item>
          <b-nav-item @click="redirect('addBulk')">Bulk Entry</b-nav-item>
          <b-nav-item @click="redirect('downloadLatest')">Download Entries</b-nav-item>
          <b-nav-item @click="redirect('search')">Search Entries</b-nav-item>
          <b-nav-item @click="redirect('configure')">Configure</b-nav-item>
          <b-nav-item v-if="(role!='ENDUSER')" @click="redirect('createUsers')">Create users</b-nav-item>
        </b-navbar-nav>
        <p v-if="isLoggedIn" style="margin:30px"> <b>Hello {{firstName}}!</b></p>
        <b-navbar-nav v-if="isLoggedIn" id="navMain" style="">
          <b-nav-item>
            <b-button variant="primary" @click="logout">
              Logout
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <div v-if="(($mq === 'smallDevices' || $mq === 'mediumDevices') && isLoggedIn)">
        <div class="user" v-b-toggle.sidebar-right>
          <svg viewBox="0 0 100 80" width="30" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
        <b-sidebar
        id="sidebar-right"
        bg-variant="white"
        right
        backdrop
        shadow
        >
        <SidebarRight />
      </b-sidebar>
    </div>
	</b-navbar>
</div>
</template>
  <script>

  import { ValidationProvider, ValidationObserver } from 'vee-validate'
  import {
	  BSidebar, BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
	  BNavbar, BTooltip, BNavItemDropdown, BDropdownItem, VBToggle,
  BNavbarToggle,
  BCollapse, BNavItem,
  BNavbarBrand,BNav, BNavbarNav,
  } from 'bootstrap-vue'
  import { ref } from '@vue/composition-api'
  import Ripple from 'vue-ripple-directive'
  import vSelect from 'vue-select'
  import store from '@/store'
import Vue from 'vue'

import VueMq from 'vue-mq'
import SidebarRight from './SidebarRight.vue'

  import VuePhoneNumberInput from 'vue-phone-number-input';
  import 'vue-phone-number-input/dist/vue-phone-number-input.css';
  import Password from "vue-password-strength-meter";
import { mapMutations, mapActions, mapState } from "vuex";
Vue.use(VueMq, {
  breakpoints: {
    smallDevices: 600,
    mediumDevices: 1200,
    largeDevices: Infinity,
  }
})
  
  
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
	  directives: {
    'b-toggle': VBToggle,
    Ripple,
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
      

      ...mapActions({
        logoutUser: "auth/logoutUser"
		}),
		redirect(val){
			this.$router.push('/'+val)
		},
    logout() {
      this.$router.push({ name: "login" });
      this.logoutUser();
    },
	  },
	  computed: {
		  ...mapState({
  isLoggedIn: (state)=>{
    return state.auth.isAuthenticated
  },
  role: (state) =>{
    return state.auth.currUser.role
  },
  firstName: (state) =>{
    return state.auth.currUser.firstName
  }
  
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