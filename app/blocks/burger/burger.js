import $ from 'jquery';

export default () => {
  const burgerClass = '.js-burger';
  const activeBurgerClass = 'burger_active';

  $(burgerClass).on('click', (e) => {
    const burger = $(burgerClass);
    e.preventDefault();
    burger.toggleClass(activeBurgerClass);
  });
};
