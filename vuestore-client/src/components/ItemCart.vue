<template>
  <div class="product-container">
    <img
      :src="`http://localhost:8000${item.imageUrl}`"
      alt="nothing"
      class="product-image"
    />
    <div class="details-wrap">
      <h3>{{ item.name }}</h3>
      <p>Rp. {{ item.price }}</p>
    </div>
    <button class="remove-button" @click="$emit('remove-item', item.code)">Remove</button>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.product-container {
  align-content: "center";
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}
.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.details-wrap {
  padding: 0 16px;
  flex: 3;
}
.remove-button {
  flex: 1;
  margin: auto;
}
</style>
