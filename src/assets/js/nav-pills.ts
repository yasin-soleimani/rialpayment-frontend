/* eslint-disable */

export default function setNavPills() {
  var total = document.querySelectorAll('.nav-pills');

  function initNavs() {
    total.forEach(function (item: any, i) {
      var moving_div = document.createElement('div');
      var first_li = item.querySelector('li:first-child .nav-link') as Element;
      var tab = first_li.cloneNode() as any;
      tab.innerHTML = "-";

      moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
      moving_div.appendChild(tab);
      item.appendChild(moving_div);

      var list_length = item.getElementsByTagName("li").length;

      moving_div.style.padding = '0px';
      moving_div.style.width = (item.querySelector('li:nth-child(1)') as any).offsetWidth + 'px';
      moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
      moving_div.style.transition = '.5s ease';

      item.onmouseover = function (event: any) {
        let target = getEventTarget(event);
        let li = target.closest('li'); // get reference
        if (li) {
          let nodes = Array.from(li.closest('ul').children); // get array
          let index = nodes.indexOf(li) + 1;
          item.querySelector('li:nth-child(' + index + ') .nav-link').onclick = function () {
            moving_div = item.querySelector('.moving-tab');
            let sum = 0;
            if (item.classList.contains('flex-column')) {
              for (var j = 1; j <= nodes.indexOf(li); j++) {
                sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
              }
              moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
              moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
            } else {
              for (var j = 1; j <= nodes.indexOf(li); j++) {
                sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
              }
              moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
              moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
            }
          }
        }
      }
    });
  }

  setTimeout(function () {
    initNavs();
  }, 100);

  // Tabs navigation resize

  window.addEventListener('resize', function (event) {
    total.forEach(function (item, i) {
      (item.querySelector('.moving-tab') as Element).remove();
      var moving_div = document.createElement('div');
      var tab: any = (item.querySelector(".nav-link.active") as Element).cloneNode();
      tab.innerHTML = "-";

      moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
      moving_div.appendChild(tab);

      item.appendChild(moving_div);

      moving_div.style.padding = '0px';
      moving_div.style.transition = '.5s ease';

      let li = (item.querySelector(".nav-link.active") as Element).parentElement;

      if (li) {
        let nodes = Array.from((li.closest('ul') as HTMLUListElement).children); // get array
        let index = nodes.indexOf(li) + 1;

        let sum = 0;
        if (item.classList.contains('flex-column')) {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += (item.querySelector('li:nth-child(' + j + ')') as any).offsetHeight;
          }
          moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
          moving_div.style.width = (item.querySelector('li:nth-child(' + index + ')') as any).offsetWidth + 'px';
          moving_div.style.height = (item.querySelector('li:nth-child(' + j + ')') as any).offsetHeight;
        } else {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += (item.querySelector('li:nth-child(' + j + ')') as any).offsetWidth;
          }
          moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
          moving_div.style.width = (item.querySelector('li:nth-child(' + index + ')') as any).offsetWidth + 'px';

        }
      }
    });

    if (window.innerWidth < 991) {
      total.forEach(function (item, i) {
        if (!item.classList.contains('flex-column')) {
          item.classList.remove('flex-row');
          item.classList.add('flex-column', 'on-resize');
          let li = (item.querySelector(".nav-link.active") as any).parentElement;
          let nodes = Array.from(li.closest('ul').children); // get array
          let index = nodes.indexOf(li) + 1;
          let sum = 0;
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += (item.querySelector('li:nth-child(' + j + ')') as any).offsetHeight;
          }
          var moving_div = document.querySelector('.moving-tab') as any;
          moving_div.style.width = (item.querySelector('li:nth-child(1)') as any).offsetWidth + 'px';
          moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';

        }
      });
    } else {
      total.forEach(function (item, i) {
        if (item.classList.contains('on-resize')) {
          item.classList.remove('flex-column', 'on-resize');
          item.classList.add('flex-row');
          let li = (item.querySelector(".nav-link.active") as any).parentElement;
          let nodes = Array.from(li.closest('ul').children); // get array
          let index = nodes.indexOf(li) + 1;
          let sum = 0;
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += (item.querySelector('li:nth-child(' + j + ')') as any).offsetWidth;
          }
          var moving_div = document.querySelector('.moving-tab') as any;
          moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
          moving_div.style.width = (item.querySelector('li:nth-child(' + index + ')') as any).offsetWidth + 'px';
        }
      })
    }
  });

  // Function to remove flex row on mobile devices
  if (window.innerWidth < 991) {
    total.forEach(function (item, i) {
      if (item.classList.contains('flex-row')) {
        item.classList.remove('flex-row');
        item.classList.add('flex-column', 'on-resize');
      }
    });
  }

  function getEventTarget(e: any) {
    e = e || window.event;
    return e.target || e.srcElement;
  }
}