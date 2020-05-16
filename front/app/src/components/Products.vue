<template>
  <div class="products">
    <div class="container">
      <div class="row columns is-multiline">
        <div v-for="item in items" :key="item.message" class="column is-one-third">
          <div class="card large round">
            <div class="card-image ">
              <figure class="image">
                <img src="https://source.unsplash.com/Jy6luiLBsrk" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                  {{item.message}}
              </div>
            </div>

            <router-link :to="{ name: 'Product', params: { name: item.message }}">TEST</router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data: () => ({
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
      { message: 'Hal' },
      { message: 'Sok' },
      { message: 'Mat' },
    ]
  }),
}
</script>
