<template>
  <div v-if="role !== undefined">
    <u-divider :title="`دسترسی های ${role.title}`"/>

    <form @submit.prevent="SetPermissions" >
      <div class="grid grid-cols-3">
        <base-toggle class="permissionToggle" v-for="p in permissions" :title="p.title" :value="p.id"
                   :is-checked="calculateIsChecked(p)"/>
      </div>

      <base-button type="submit" class="flex w-1/2 justify-center mt-4 mx-auto"> ثبت تغییرات </base-button>
    </form>

  </div>
</template>

<script setup lang="ts">
import {PermissionDto, RoleDto} from "~/models/role/roleDto";
import {GetPermissions, GetRole, SetRolePermissions} from "~/services/roles.service";
import {SetRolePermissionsCommand} from "~/models/role/setRolePermissionsCommand";
import {successAlert} from "~/services/alert.service";

definePageMeta({
  layout:'admin'
})


const role = ref<RoleDto>();
const permissions = ref<PermissionDto>();

const route = useRoute();
const router = useRouter();
onMounted(async ()=>{
  const permissionsResult = await GetPermissions();
  if(permissionsResult.isSuccess)
    permissions.value = permissionsResult.data;

  const roleResult = await GetRole(route.params.roleId);
  if(roleResult.isSuccess)
    role.value = roleResult.data;
})

const setPermissionData:SetRolePermissionsCommand = reactive({
  roleId:route.params.roleId,
  permissions:[]
})

const SetPermissions = async ()=>{
  const permissionIds:number[] = [];
  const toggles = document.querySelectorAll(".permissionToggle input[type=checkbox]");
  toggles.forEach(t=>{
    if(t.checked)
    {
      permissionIds.push(t.value);
    }
  })

  setPermissionData.permissions = permissionIds;
  const result = await SetRolePermissions(setPermissionData);
  if(result.isSuccess) {
    successAlert();
    router.push("/admin/roles");
  }
}

const calculateIsChecked = (p) =>{
  return role.value?.permissions.some(t=>t.id == p.id);
}
</script>