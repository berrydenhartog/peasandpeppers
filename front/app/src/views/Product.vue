<template>
  <div class="product">
    <h1>This is an product page {{ $route.params.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['name'],
}
</script>
