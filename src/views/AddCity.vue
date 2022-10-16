<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Add City</h2>
          <form class="form-inline" @submit.prevent="createCity">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="City" v-model="name" />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="County"
                v-model="county"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Country"
                v-model="country"
              />
            </div>
            <button type="submit" class="btn btn-success p-1 m-1">Add City</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "../firebase";
import { addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      name: null,
      county: null,
      country: null,
    };
  },
  methods: {
    async createCity() {
      const addedDocs = await addDoc(citiesColRef, this.$data);
      console.log(addedDocs);
      alert(`documents added successfully`);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
