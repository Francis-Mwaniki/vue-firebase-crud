<template>
  <div class="home">
    <h2>Cities</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              v-for="city in cities"
              :key="city.id"
            >
              {{ city.name }}
              <span class="badge badge-primary badge-pill">
                <router-link :to="{ path: `/cities/${city.id}` }"
                  ><button class="btn btn-primary">edit</button></router-link
                >

                <a href="#" class="btn btn-danger m-1" @click="deleteCity(city.id)"
                  >delete</a
                >
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import citiesColRef from "@/firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      cities: [],
    };
  },
  methods: {
    async fetchCities() {
      let fetchedCities = await getDocs(citiesColRef);
      let cities = [];
      fetchedCities.forEach((city) => {
        let singleCityData = city.data();
        singleCityData.id = city.id;
        cities.push(singleCityData);
        this.cities = cities;
      });
      console.log(cities);
    },
    async deleteCity(cityId) {
      let cityRef = doc(citiesColRef, cityId);
      await deleteDoc(cityRef);
      alert(`city of id ${cityId} has been deleted successfully`);
      this.$router.go();
    },
  },
  created() {
    this.fetchCities();
  },
};
</script>
