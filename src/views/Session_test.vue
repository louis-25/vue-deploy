<template>
  <div class="about2">
    <h1>About2</h1><br>
      <div>{{ session() }}</div>
      <div>{{session_token}}</div><br>
      <v-btn @click=previous>돌아가기</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    session () {
      console.log(this.$session.getAll())
    },
    previous () {
      this.$router.push('/about')
    }
  },
  data () {
    return {
      session_token: this.$session.getAll()
    }
  }
}
</script>
