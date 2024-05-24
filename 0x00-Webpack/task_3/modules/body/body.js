import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<main></main>')
$('main').append('<p>Dashboard data for the students</p>');
$('main').append('<button>Click here to get started</button>');
$('main').append("<p id='count'></p>");

let count = 0;
function updateCounter () {
  count++;
  $('#count').html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
