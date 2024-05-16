import { shallowMount, mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  /* test("debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(Counter);

    expect(wrapper.html()).toMatchSnapshot();
  });
  */

  test('h2 debe de tener el valor por defecto "Counter"', () => {
    // const wrapper = shallowMount(Counter);

    expect(wrapper.find("h2").exists()).toBeTruthy();
    const h2 = wrapper.find("h2");
    console.log(h2.text());

    expect(h2.text()).toBe("Counter!!!");
  });

  test("el valor por defeco debe ser 100 en el p", async () => {
    // wrapper
    // const wrapper = shallowMount(Counter);

    //pTags
    const pTags = wrapper.find('[data-testid="counter"]').text();
    console.log(pTags);

    // expec segundo p === 100
    expect(pTags).toBe("100");
  });

  test("debe de incrementar y decrementar el contador", async () => {
    // const wrapper = shallowMount(Counter);
    const [increaseBtn, decreaseBtn] = wrapper.findAll("button");

    await increaseBtn.trigger("click");
    await increaseBtn.trigger("click");
    await increaseBtn.trigger("click");
    await decreaseBtn.trigger("click");
    await decreaseBtn.trigger("click");

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe("101");
  });

  test("debe de establecer el valor por defecto", () => {
    const { start } = wrapper.props();

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(Number(value)).toBe(start);
  });

  test("debe de mostrar la prop title", () => {
    const title = "Hola Mundo!!!!!!";

    const wrapper = shallowMount(Counter, {
      props: {
        title,
        // start: '5'
      },
    });

    expect(wrapper.find("h2").text()).toBe(title);
  });
});
