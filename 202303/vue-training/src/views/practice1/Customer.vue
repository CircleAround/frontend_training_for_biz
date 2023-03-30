<template>
  <div>
    <div class="search_field">
      <input type="text" v-model="searchCondtion.nameStr">
      <div>
      <input type="radio" id="other" v-model="searchCondtion.gender" value="none">
      <label for="other">指定なし</label>
      <input type="radio" id="male" v-model="searchCondtion.gender" value="男">
      <label for="male">男性</label>
      <input type="radio" id="female" v-model="searchCondtion.gender" value="女">
      <label for="female">女性</label>
      </div>
      <select v-model="searchCondtion.orgnizationId">
        <option value="none" selected>指定なし</option>
        <option
        v-for="organization in organizations"
        :value="organization.id"
        :key="organization.id">
          {{ organization.name }}
        </option>
      </select>
      <button @click="search">検索</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>氏名</th>
          <th>性別</th>
          <th>生年月日</th>
          <th>所属会社</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in results" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.gender }}</td>
          <td>{{ customer.birthday }}</td>
          <td>{{ organizationNameBy(customer.organizationId) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  name: 'AjaxSample',
  data: function() {
    return {
      searchCondtion: {
        nameStr: '',
        gender: 'none',
        orgnizationId: 'none'
      },
      customers: [],
      results: [],
      organizations: []
    }
  },
  async mounted() {
    const customers = await axios.get('http://localhost:8888/api/customers')
    this.customers = customers.data
    this.results = this.customers
    const organizations = await axios.get('http://localhost:8888/api/organizations')
    this.organizations = organizations.data
  },
  methods: {
    search() {
      let results = this.customers
      const nameStr = this.searchCondtion.nameStr
      const gender = this.searchCondtion.gender
      const orgnizationId = this.searchCondtion.orgnizationId

      results = results.filter(result => result.name.indexOf(nameStr) !== -1)
      if (gender !== 'none') {
        results = results.filter(result => result.gender === gender)
      }
      if (orgnizationId) {
        results = results.filter(result => result.organizationId === orgnizationId)
      }

      this.results = results
    },
    organizationNameBy(id) {
      const result = this.organizations.find(organization => organization.id === id);
      return result ? result.name : '該当なし'
    }
  }
})
</script>