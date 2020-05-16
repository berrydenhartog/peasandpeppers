<template>
  <div class="searchbar">
    <div class="container">     
      <div class="section">
        <div class="box">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input class="input has-text-centered" type="search" placeholder="Zoek Product">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    msg: String
  }
}
</script>