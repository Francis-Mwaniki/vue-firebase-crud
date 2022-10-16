<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Edit City</h2>
          <form class="form-inline" @submit.prevent="updateCity">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="City"
                v-model="cityInfo.name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="County"
                v-model="cityInfo.county"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Country"
                v-model="cityInfo.country"
              />
            </div>
            <button type="submit" class="btn btn-success p-1 m-1">Update City</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "@/firebase";
import { getDoc, doc, setDoc } from "@firebase/firestore";
export default {
  data() {
    return {
      cityId: null,
      selectedCity: {},
      docRef: null,
      cityInfo: {
        name: null,
        county: null,
        country: null,
      },
    };
  },
  methods: {
    async getCity() {
      let cityRef = doc(citiesColRef, this.cityId);
      this.docRef = cityRef;
      let city = await getDoc(this.docRef);
      let cityData = city.data();
      this.cityInfo.name = cityData.name;
      this.cityInfo.county = cityData.county;
      this.cityInfo.country = cityData.country;
      console.log(city.data());
    },
    async updateCity() {
      await setDoc(this.docRef, this.cityInfo);
      alert(
        `${this.cityInfo.name} with id of ${this.cityId} has been updated successfully`
      );
      this.$router.push("/");
    },
  },
  created() {
    let cityId = this.$route.params.cityId;
    this.cityId = cityId;
    this.getCity();
  },
};
</script>

<style scoped></style>
