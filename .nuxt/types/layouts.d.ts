import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "centered" | "default" | "plain"
declare module "/home/quantumben/Desktop/VueSchool/laravel-frontend-for-vuejs-3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}