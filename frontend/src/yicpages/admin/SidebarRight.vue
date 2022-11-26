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
		  
		  <a @click="ToggleAccountSetting" class="sidebar-text">
			Add Single Entry</a
		  >
		</li>

		<br />
		<li
		  class="sidebar-list"
		  @click="ToggleAccountSetting"
		  
		>
		  <!-- <img class="icon" :src="icon1" /> -->
		  
		  <a @click="redirect('addBulk')" class="sidebar-text">
			Add Bulk Entries</a
		  >
		</li>
		<br />
		<li
		  class="sidebar-list"
		  @click="ToggleAccountSetting"
		  
		>
		  <!-- <img class="icon" :src="icon1" /> -->
		  
		  <a @click="redirect('downloadLatest')" class="sidebar-text">
			Download Latest Entries</a
		  >
		</li>
		<br />
		<li
		  class="sidebar-list"
		  @click="ToggleAccountSetting"
		  
		>
		  <!-- <img class="icon" :src="icon1" /> -->
		  
		  <a @click="redirect('search')" class="sidebar-text">
			Search Entries</a
		  >
		</li>
		<br />
		<li
		  class="sidebar-list"
		  @click="ToggleAccountSetting"
		  
		>
		  <!-- <img class="icon" :src="icon1" /> -->
		  
		  <a @click="redirect('configure')" class="sidebar-text">
			Configure</a
		  >
		</li>
		
	  </ul>
	</div>
  </template>
  
  <script>
  import { BSpinner, BDropdown, BDropdownItem } from "bootstrap-vue";
  import { mapState, mapActions } from "vuex";
  
  export default {
	components: {
	  BSpinner,
	  BDropdown,
	  BDropdownItem
	},
	directives: {},
	data() {
	  return {
		isLoading: false,
	  };
	},
	computed: mapState({
	  
	}),
	methods: {
	  ...mapActions({
		
	  }),
	  redirect(val){
			this.$router.push('/'+val)
		}
	  
	},
	async mounted() {
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