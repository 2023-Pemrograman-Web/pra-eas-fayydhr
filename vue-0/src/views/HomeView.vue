<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const res = await fetch("http://localhost:3000/api/users/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.username,
            password: this.password,
          }),
        });

        if (res.status === 401) {
          console.error("Unauthorized: Invalid credentials");
        } else {
          const json = await res.json();
          console.log(json);
          // Use Vue Router to navigate to the dashboard route
          this.$router.push("/dashboard");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
