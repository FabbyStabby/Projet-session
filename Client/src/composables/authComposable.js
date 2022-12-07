import { ref, computed, provide, inject, watch } from 'vue';
import { useRouter } from 'vue-router'

export function setupAuthLogin() {
  const userInfo = ref(JSON.parse(localStorage.getItem('user-info')));
  const router = useRouter();

  watch(userInfo, () => localStorage.setItem('user-info', JSON.stringify(userInfo.value)));

  function logout() {
    userInfo.value = null
    router.push({ name: 'Home'})
  }

  function login(newUserInfo) {
    if (newUserInfo) {
      userInfo.value = newUserInfo;
      router.push({ name: 'Profil' })
    }
  }

  provide('user-info', {
    userInfo,
    login,
    logout
  });

  return {
    userInfo,
  };
}

export function useAuthedUser() {
  const { userInfo, login, logout } = inject('user-info');
  const isLoggedIn = computed(() => !!userInfo.value);

  return { userInfo, login, logout, isLoggedIn };
}
