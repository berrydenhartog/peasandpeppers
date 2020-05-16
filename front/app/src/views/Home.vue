<template>
  <div class="home">
    <SearchBar/>
    <Products/>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'Home',
  components: {
    Products,
    SearchBar
  }
}
</script>
