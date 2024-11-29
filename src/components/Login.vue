<template>
    <div id ='wrap'>
        <div id ='input-container'>
             <form @submit.prevent="onSubmit">
                <input class="e-input" type="text" placeholder="Login" />
                <input class="e-input" type="text" placeholder="Senha" />
                <ejs-dropdownlist v-if="authStore.isAuthenticated" id='dropdownlist' :dataSource='tentans'></ejs-dropdownlist>
                <ejs-button content="Entrar" @click="handleClick"></ejs-button>
              </form>
        </div>
    </div>
</template>
<script setup>
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import {ref} from "vue";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { useAuthStore } from "../stores/authStore";
import { useAuthMutation } from "../api/hooks/useAuthMutation";

const authStore = useAuthStore();
const { authMutate, authData, authError, isAuthError, logged } = useAuthMutation(); 

const fields = { text: 'FirstName', value: 'EmployeeID' }
const userEmail = ref('');
const password = ref('');
const tentans = ref(["asda","fasdas"]);

const credentials = {
    email: "eduprog@gmail.com",
    password: "123Pa$$word!",
    tenantId: "eduprog",
  };

const handleClick = (request) => {
  authMutate({data: credentials});
  authStore.setIsAuthenticated(logged);
};
</script>
<style>
    #input-container{
        margin: 0 auto;
        width: 300px;
    }
    .wrap {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 20px 10px;
        width: 340px;
    }

    .e-input-group-icon.e-input-popup-date:before {
  content: "\e901";
}
</style>