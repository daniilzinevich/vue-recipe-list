export default {
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    }
  }
}