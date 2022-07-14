<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesModule } from "@/composables/usePlacesModule";

export default defineComponent({
  name: 'HomeView',
  components: { },
  setup(){
     usePlacesModule()
  }
});
</script>
