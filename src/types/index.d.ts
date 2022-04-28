// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue'
import { accessorType } from '~/store'

declare module 'vue/types/vue' {
  interface Vue {
    $test(message: string): void
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}
