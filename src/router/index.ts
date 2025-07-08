import { createRouter, createWebHistory } from 'vue-router';
const modules = import.meta.glob('@/views/*/index.vue');

const routes = Object.entries(modules).map(([path, module]) => {
  const name = path.match(/\/views\/(.*)\/index.vue/)?.[1];
  return {
    path: `/${name === 'Home' ? '' : name}`,
    name: name as string,
    component: module,
  };
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
