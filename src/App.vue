<template>
    <v-app>
        <v-app-bar app="app" color="primary" dark="dark">
            <site-title :title="title"></site-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-content>
            <router-view/>
        </v-content>
        <site-footer :footer="footer"></site-footer>
    </v-app>
</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteFooter from '@/views/site/footer'

export default {
  components: {
    SiteTitle,
    SiteFooter
  },
  name: 'App',
  data () {
    return {
      drawer: false,
      title: 'Welcome',
      footer: 'IMNUGU'
    }
  }
}
</script>
