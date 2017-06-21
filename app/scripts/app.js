import $ from 'jquery';
import selectbox from '../blocks/selectbox/selectbox';
import tabs from '../blocks/tabs/tabs';
import question from '../blocks/question/question';
import questions from '../components/questions/questions';
import lkNav from '../blocks/lk-nav/lkNav';
import regions from '../components/regions/regions';
import searchForm from '../components/searchForm/searchForm';
import sources from '../components/budget_moscow_sources/budget_moscow_sources';
import govProgram from '../components/services_gov_program/services_gov_program';
import analyticsMain from '../components/depfin-analytics-main/depfin-analytics-main';
import budgetCalcPage from '../pages/depfin_services_budget_calc/depfin_services_budget_calc';
import legend from '../blocks/legend/legend';
import budgetCalcApp from '../components/budget-calc-app/budget-calc-app';
import newsFilter from '../components/news/newsFilter';
import mediaMain from '../components/media-main/mediaMain';
import aboutBudgetPreparation from '../components/depfin_about_budget_preparation/depfin_about_budget_preparation';
import range from '../blocks/range/range'; // range-slider input для калькулятора бюджета
import dragscroll from '../blocks/drag-scroll/drag-scroll'; // функция, позволяющая сделать любой блок скроллящимся через перетаскивание (добавить класс .js-drag-scroll-element)

$(() => {
  selectbox();
  question();
  questions();
  lkNav();
  regions();
  tabs();
  searchForm();
  sources();
  govProgram();
  analyticsMain();
  legend();
  budgetCalcPage();
  budgetCalcApp();
  aboutBudgetPreparation();
  newsFilter();
  mediaMain();
  range();
  dragscroll();
});
