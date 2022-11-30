<template>
	<div class="sidebar-root">
	  <div style="display: flex; margin: 40px 40px 15px 55px">
		<h3>Comex Data Entry</h3>
	  </div>
	  <br />
	  <ul class="sidebar-nav" style="list-style: none">
		<br /><br />
		<li
		  class="sidebar-list"
		  @click="redirect('addSingle')"
		  
		>
		  <!-- <img class="icon" :src="icon1" /> -->
		  
		  <a  class="sidebar-text">
			Add Single Entry</a
		  >
		</li>

		<br />
		<li
		  class="sidebar-list"
		  
		  
		>
		  <!-- <img class="icon" :src="icon1" /> -->
		  
		  <a @click="redirect('addBulk')" class="sidebar-text">
			Add Bulk Entries</a
		  >
		</li>
		<br />
		<li
		  class="sidebar-list"
		  
		  
		>
		  <!-- <img class="icon" :src="icon1" /> -->
		  
		  <a @click="redirect('downloadLatest')" class="sidebar-text">
			Download Latest Entries</a
		  >
		</li>
		<br />
		<li
		  class="sidebar-list"
		  
		  
		>
		  <!-- <img class="icon" :src="icon1" /> -->
		  
		  <a @click="redirect('search')" class="sidebar-text">
			Search Entries</a
		  >
		</li>
		<br />
		<li
		  class="sidebar-list"
		  
		  
		>
		  <!-- <img class="icon" :src="icon1" /> -->
		  
		  <a @click="redirect('configure')" class="sidebar-text">
			Configure</a
		  >
		</li>
		<li
		style="margin-top:20px"
		  class="sidebar-list"
		  v-if="isLoggedIn"
		
		  
		>
		  <!-- <img class="icon" :src="icon1" /> -->
		  
		  <b-button variant="primary" @click="logout">
          Logout
        </b-button>
		  
		</li>
	  </ul>
	</div>
  </template>
  
  <script>
  import { BSpinner, BDropdown, BDropdownItem, BButton } from "bootstrap-vue";
  import { mapState, mapActions } from "vuex";
  
  export default {
	components: {
	  BSpinner,
	  BDropdown,
	  BDropdownItem,
	  BButton
	},
	directives: {},
	data() {
	  return {
		isLoggedIn: false,

	  };
	},
	computed: mapState({
//   isLoggedIn: (state)=>{
//     return state.auth.isAuthenticated
//   }
	}),
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
	  this.isLoggedIn = false
    },
	  
	},
	async mounted() {
		let token = localStorage.getItem('feathers-jwt')
		if(token){
			this.isLoggedIn = true
		}else{
			this.isLoggedIn = false
		}

	}
  };

  </script>
  
  <style scoped>
  .sidebar-root {
	color: black;
	margin: 1rem;
  }
  .sidebar-text {
	font-size: 1rem;
  }
  .sidebar-list {
	padding: 0.5rem;
  }
  .bttn-1 {
	  background: white;
	  background-color: white;
	  color: black;
  }
  .myorders-button {
	  padding: 0;
  }
  .myorders-button > .btn {
	padding: 0rem;
  }
  </style>