import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("UserCard", () => {
  const wrapper = shallowMount(Home, {});
  it("should render a child component", () => {
    expect(wrapper.find("HomeBanner")).toBeTruthy();
  });
});
