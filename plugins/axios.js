export default function ({ $axios }) {
  $axios.onRequest(() => {
    $axios.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.NUXT_ENV_API_TOKEN;
  })
}