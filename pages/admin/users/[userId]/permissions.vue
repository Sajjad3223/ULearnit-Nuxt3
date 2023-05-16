<template>
  <div v-if="user !== undefined">
    <Head>
      <Title>
        دسترسی های {{user.fullName}}
      </Title>
    </Head>

    <u-divider :title="`دسترسی های ${user.fullName}`"/>

    <form @submit.prevent="SetPermissions" >
      <div class="grid grid-cols-3">
        <base-toggle class="roleToggle" v-for="r in roles" :title="r.title" :value="r.id"
                     :is-checked="calculateIsChecked(r)"/>
      </div>

      <base-button type="submit" class="flex w-1/2 justify-center mt-4 mx-auto"> ثبت تغییرات </base-button>
    </form>

  </div>
</template>

<script setup lang="ts">
import {RoleDto} from "~/models/role/roleDto";
import {GetRoles} from "~/services/admin/roles.service";
import {successAlert} from "~/services/alert.service";
import {UserDto} from "~/models/user/userDto";
import {SetUserRolesCommand} from "~/models/user/setUserRolesCommand";
import {GetUser, SetUserRoles} from "~/services/admin/users.admin.service";

definePageMeta({
  layout:'admin'
})


const user = ref<UserDto>();
const roles = ref<RoleDto>();

const route = useRoute();
const router = useRouter();
onMounted(async ()=>{
  const rolesResult = await GetRoles();
  if(rolesResult.isSuccess)
    roles.value = rolesResult.data;

  const userResult = await GetUser(route.params.userId);
  if(userResult.isSuccess)
    user.value = userResult.data;
})

const setUserRolesData:SetUserRolesCommand = reactive({
  userId:Number(route.params.userId),
  roles:[]
})

const SetPermissions = async ()=>{
  const roleIds:number[] = [];
  const toggles = document.querySelectorAll(".roleToggle input[type=checkbox]");
  toggles.forEach(t=>{
    if(t.checked)
    {
      roleIds.push(Number(t.value));
    }
  })

  setUserRolesData.roles = roleIds;
  const result = await SetUserRoles(setUserRolesData);
  if(result.isSuccess) {
    successAlert();
    router.push("/admin/users");
  }
}

const calculateIsChecked = (p) =>{
  return user.value?.roles.some(t=>t.roleId == p.id);
}
</script>