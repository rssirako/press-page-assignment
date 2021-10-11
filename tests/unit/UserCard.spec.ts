import { shallowMount } from "@vue/test-utils";
import UserCard from "@/components/UserCard.vue";

const mockUser = {
  id: 1,
  login: "mockUser1",
  avatar_url: "mock/url1",
  repos_url: "mock/repo/url1",
};

describe("UserCard", () => {
  const wrapper = shallowMount(UserCard, {
    props: { userInfo: mockUser },
  });
  it("should render a card", () => {
    console.log(wrapper.html());
    expect(wrapper.find(".user-card").exists()).toBe(true);
  });
  it("should have users' username", () => {
    expect(wrapper.find(".user-card__name").text()).toBe("Username: mockUser1");
  });
  it("should have two delete buttons", () => {
    expect(wrapper.find(".user-card__icon-button").exists()).toBe(true);
    expect(wrapper.find(".user-card__button").exists()).toBe(true);
  });
  it("should emit an event on click of the button", async () => {
    wrapper.find(".user-card__icon-button").trigger("click");
    expect(wrapper.emitted().deleteUser[0]).toEqual([mockUser]);
  });
});
