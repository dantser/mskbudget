import $ from 'jquery';
import selectbox from '../blocks/selectbox/selectbox';
import question from '../blocks/question/question';
import questions from '../components/questions/questions';
import burger from '../blocks/burger/burger';
import lkNav from '../blocks/lk-nav/lkNav';
import regions from '../components/regions/regions';

$(() => {
  selectbox();
  question();
  questions();
  burger();
  lkNav();
  regions();
});
