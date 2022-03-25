'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Modals

  var rootEl = document.documentElement;
  var $productDesc = document.getElementById('desc')
  var $chat = document.getElementById('modal-chat')
  var $chatButton = document.getElementById('open-chat')
  var $modals = getAll('.modal');
  var $modalButtons = getAll('.modal-button');
  var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');
  
  console.log($chat)
  $chatButton.addEventListener('click', function() {
    console.log('open-chat clicked')
    console.log("$chat is "+ $chat.id)
    openChat()
  })

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        console.log('$target:' + $target)
        rootEl.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  if ($modalCloses.length > 0) {
    console.log($modalCloses)
    $modalCloses.forEach(function ($el) {
      console.log("if$modalCloses.length -> $el: " + $el)
      $el.addEventListener('click', function () {
        console.log("$el.dataset.id: " + $el.dataset.id)
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
    }
  });

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }
  
  function openChat() {
    console.log('called openChat')
    $productDesc.classList.remove('is-active')
    $productDesc.classList.add('inactive')
    $chat.classList.add('is-active')
  }
  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

});