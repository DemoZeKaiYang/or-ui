import { defineComponent as o, computed as u, openBlock as s, createElementBlock as l, normalizeClass as p, unref as c, renderSlot as a } from "vue";
import "./style/index.css";
const m = o({ name: "or-button" }), d = /* @__PURE__ */ o({
  ...m,
  props: {
    type: null
  },
  setup(e) {
    const t = e, n = u(() => ({ [`or-button-${t.type}`]: t.type }));
    return (r, f) => (s(), l("button", {
      class: p(["or-button", c(n)])
    }, [
      a(r.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
