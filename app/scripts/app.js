import $ from 'jquery';
import selectbox from '../blocks/selectbox/selectbox';
import tabs from '../blocks/tabs/tabs';
import question from '../blocks/question/question';
import questions from '../components/questions/questions';
import lkNav from '../blocks/lk-nav/lkNav';
import regions from '../components/regions/regions';
import searchPage from '../components/search/searchPage';
import sources from '../components/budget_moscow_sources/budget_moscow_sources';
import govProgram from '../components/services_gov_program/services_gov_program';

$(() => {
  selectbox();
  question();
  questions();
  lkNav();
  regions();
  tabs();
  searchPage();
  sources();
  govProgram();
});
