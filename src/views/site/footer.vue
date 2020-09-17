<template>
    <v-footer app color="gray" dark="dark"
        :footer="footer">
        <v-spacer></v-spacer>
        <div>&copy;
            {{ new Date().getFullYear() + ' ' + footer}}
        </div>
    </v-footer>
</template>
<script>
export default {
  props: ['footer']
}
</script>
