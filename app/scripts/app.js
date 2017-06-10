import $ from 'jquery';
import selectbox from '../blocks/selectbox/selectbox';
import tabs from '../blocks/tabs/tabs';
import question from '../blocks/question/question';
import questions from '../components/questions/questions';
import burger from '../blocks/burger/burger';
import lkNav from '../blocks/lk-nav/lkNav';
import regions from '../components/regions/regions';
import searchPage from '../components/search/searchPage';
import budget_income from '../components/budget_income/budget_income';

$(() => {
  selectbox();
  question();
  questions();
  burger();
  lkNav();
  regions();
  tabs();
  searchPage();
  budget_income();
});
