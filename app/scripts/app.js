import $ from 'jquery';
import 'babel-polyfill';
import selectbox from '../blocks/selectbox/selectbox';
import docCards from '../components/doc-cards/docСards';
import aboutBudgetPreparation from '../components/depfin_about_budget_preparation/depfin_about_budget_preparation';
import mediaMain from '../components/media-main/mediaMain';
import main from '../components/main/main';
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
import range from '../blocks/range/range';
import dragscroll from '../blocks/drag-scroll/drag-scroll'; // функция, позволяющая сделать любой блок скроллящимся через перетаскивание (добавить класс .js-drag-scroll-element)
import openCon from '../components/open-con/openCon';
import contest from '../components/contest/contest';
import mediaMaterials from '../components/depfin-budget-moscow-media-materials/mediaMaterials';
import openSlider from '../components/open-slider/openSlider';
import govDebt from '../components/gov-debt/govDebt';
import profileEdit from '../components/profile-edit/profileEdit';
import budgetaryPolicy from '../components/budgetary-policy/budgetaryPolicy';
import documentsform from '../components/documents/documents';
import pageHeader from '../components/page-header/pageHeader';
import modal from '../blocks/modal/modal';
import budget_moscow_gov_program from '../components/budget_moscow_gov_program/budget_moscow_gov_program';
import analitycGraphics from '../components/analityc-graphics/analityc-graphics'
import reset from '../components/reset/reset';
import profile from '../components/profile/profile';
import basic_budget_figures from '../components/basic_budget_figures/basic_budget_figures';
import menu from '../blocks/menu/menu'; // главное меню в навбаре
import searchNavbar from '../blocks/search-navbar/search-navbar'; // форма поиска в навбаре
import widgetCard from '../components/widget-card/widgetCard';
import header from '../components/header/header'; // навбар
import toppanel from '../blocks/toppanel/toppanel'; // верхняя панель, общая для сайтов Москвы
import tooltips from '../blocks/tooltip-icon/tooltip-icon'; // тултипы в калькуляторе бюджета
import search from '../components/search/search';
import news_one from '../components/news-one/news-one';
import analitycWidgethead from '../components/analityc-widgethead/analityc-widgethead';
import aboutBudget from '../components/depfin-about-budget/aboutBudget';
import openReit from '../components/depfin-budget-moscow-open-reit/openReit';
import depfinServices from '../components/depfin-services-main/depfin-services-main';
import dropdown from '../blocks/dropdown-block/dropdown';
import openFile from '../components/open-file/open-file';
import rangeUi from '../blocks/range-ui/range-ui';
import contestPopup from '../components/contest-popup/contestPopup';
import aip from '../components/budget_aip/budget_aip';
import classifyNew from '../components/classify-new/classifyNew';
import servicesVMO from '../components/depfin_services_VMO/depfin_services_VMO';

$(() => {

  // перезагрузка страниц при изменении разрешения
  $(document).ready(function(){
    window.winWidth = $(window).width();
    $(window).resize(function(){
      if (winWidth !== $(window).width()) {
        location.reload();
      }
    });
  });

  basic_budget_figures();
  aboutBudgetPreparation();
  selectbox();
  dragscroll();
  docCards();
  mediaMain();
  documentsform();
  widgetCard();
  depfinServices();
  main();
  dropdown();
  analitycWidgethead();
  pageHeader();
  question();
  questions();
  lkNav();
  search();
  openReit();
  regions();
  tabs();
  news_one();
  searchForm();
  sources();
  govProgram();
  analyticsMain();
  legend();
  budgetCalcPage();
  budgetCalcApp();
  newsFilter();
  range();
  openCon();
  contest();
  openSlider();
  mediaMaterials();
  govDebt();
  profileEdit();
  budgetaryPolicy();
  modal();
  budget_moscow_gov_program();
  analitycGraphics();
  reset();
  profile();
  menu();
  searchNavbar();
  header();
  toppanel();
  tooltips();
  aboutBudget();
  openFile();
  rangeUi();
  contestPopup();
  aip();
  classifyNew();
  servicesVMO();
});
