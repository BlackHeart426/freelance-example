import {createRouter, createWebHistory} from 'vue-router'
import New from "@/views/New";
import Task from "@/views/Task";
import Tasks from "@/views/Tasks";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/new', component: New },
    { path: '/task/:id', component: Task },
    { path: '/tasks', component: Tasks },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})