<template>
    <div id="app">
      <div v-if="!$store.state.fireUser">
          <v-btn color="red" dark @click="singInWithGoogle"><v-icon left>mdi-google</v-icon>google login</v-btn>
      </div>
      <div v-else>
          <v-btn color="" dark @click="signOut">로그아웃</v-btn>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async singInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      this.loading = true
      try {
        // 탭이나 창이 닫힐때까지 로그인정보 유지
        const test = this.$firebase.auth().setPersistence(this.$firebase.auth.Auth.Persistence.SESSION)
        const sn = await this.$firebase.auth().signInWithPopup(provider)
        console.log(test)
        console.log(sn.user)
        if (this.$store.state.fireUser) {
          this.success_login()
        }
      } catch (e) {
        console.log('error : ' + e)
      } finally {
        this.loding = false
      }
    },
    signOut () {
      this.$firebase.auth().signOut()
      this.$session.destroy() // 세션파괴
      console.log(this.$session.getAll())
      this.$router.push('/')
    },
    success_login () {
      // this.$router.push('/about')
      // console.log(this.$session.getAll())
      this.$session.start() // 세션시작
      this.$session.set('name', this.$store.state.fireUser.displayName)
      this.$session.set('email', this.$store.state.fireUser.email)
      console.log(this.$session.getAll())
      this.$router.push('/about')
    }
  }
}
</script>
<style>
#app{
  text-align: center;
  margin-top: 40px;
}
</style>
