/* =========================
   (1) change-location-links-for-news.js
   ========================= */
function changeLocationLinks() {
  const tagsList = document.querySelectorAll('.news-category__tags-list');
  const generalListOfLinks = document.querySelector('[data-name="general-list-of-links"]');
  const linkSeparate = document.querySelector('[data-name="separate-link"]');
  const linkSeparateSecondary = document.querySelector('[data-name="separate-link-secondary"]');
  if (generalListOfLinks && linkSeparate && !linkSeparateSecondary) {
    generalListOfLinks.prepend(linkSeparate);
  }
  if (linkSeparateSecondary) {
    if (generalListOfLinks.childNodes.length > 1) {
      generalListOfLinks.parentNode.remove();
    } else {
      generalListOfLinks.append(linkSeparateSecondary);
      generalListOfLinks.prepend(linkSeparate);
    }
  }

  tagsList.forEach((list) => {
    const parentCard = list.closest('.news-category__item');
    const parentCardFooter = parentCard.querySelector('.news-category__item-footer');
    parentCardFooter.prepend(list);
    const tagsWrapper = parentCard.querySelector('.news-category__tags-wrapper');
    if (tagsWrapper) {
      tagsWrapper.remove();
    }
  });
}
function checkImportantCondition() {
  const paginationContainer = document.querySelector('.pagination-container');

  if (!paginationContainer) {
    changeLocationLinks();
  } else {
    const targetEl = paginationContainer;
    function callback() {
      if (targetEl.querySelector('.fs-pagination')) {
        changeLocationLinks();
      }
    }
    const observer = new MutationObserver(callback);
    observer.observe(targetEl, {
      childList: true,
      subtree: true,
      addedNodes: true,
    });
  }
}
checkImportantCondition();

/* =========================
   (2) observer-pagination.js
   ========================= */
function checkPaginationBox() {
  const targetEl = document.querySelector('body');
  function callback() {
    if (targetEl.querySelector('.fs-pagination ul')
      && targetEl.querySelector('.fs-pagination ul').childNodes.length === 1) {
      const po = document.querySelector('.pagination-outer');
      if (po) po.remove();
    } else if (targetEl.querySelector('.fs-pagination ul')
      && !targetEl.querySelector('.fs-pagination ul .fs-pagination-active a').hasAttribute('aria-current')) {
      targetEl.querySelector('.fs-pagination ul .fs-pagination-active a').setAttribute('aria-current', 'page');
      // console.log call from original left as-is
      console.log(targetEl.querySelector('.fs-pagination ul .fs-pagination-active a').setAttribute('aria-current', 'page'));
    }
  }
  const observer = new MutationObserver(callback);
  observer.observe(targetEl, {
    attributes: true,
    childList: true,
    subtree: true,
  });
}
checkPaginationBox();

/* =========================
   (4) init-cms-pagination-blog-page.js
   (Relies on window.FsLibrary from script #3)
   ========================= */
function initCmsPagination() {
  // eslint-disable-next-line no-undef
  const projectsGrid = new FsLibrary('.blog-collection__list');

  projectsGrid.loadmore({
    button: '.load-more-button',
    resetIx: true,
    loadAll: true,
    paginate: {
      enable: true,
      itemsPerPage:
        // eslint-disable-next-line no-nested-ternary
        window.innerWidth > 1279 ? 6 : window.innerWidth > 768 ? 6 : 6,
      insertPagination: '.pagination-container',
      bgColor: 'transpaerent',
      bgColorActive: 'transpaerent',
      textColor: '#626C7C',
      textColorActive: '#831B15',
      borderColor: 'transparent',
    },
    animation: {
      enable: true,
      effects: 'fade',
      duration: 400,
    },
  });
}
initCmsPagination();

/* =========================
   (5) pagination-change-focus.js
   ========================= */
function focusOnFirstActiveElement(e) {
  if (e.target.tagName === 'A' && e.target.parentNode.classList.contains('fs-pagination-page')) {
    const paginationBox = this;
    const currentCollection = paginationBox.previousElementSibling;
    const currentActiveElement = currentCollection && currentCollection.querySelector('.w-dyn-item[style=""] a');
    if (currentActiveElement) currentActiveElement.focus();
  }
}
document.querySelectorAll('.pagination-outer').forEach((paginationBox) => {
  paginationBox.addEventListener('click', focusOnFirstActiveElement);
});

/* =========================
   (6) change-position-search-box.js
   (Relies on global BREAKPOINTS.tablet if present)
   ========================= */
function changePositionSearchBox() {
  const searchForm = document.querySelector('.search-form');
  const blogNavigation = document.querySelector('.blog-navigation__inner');
  const newsNavigation = document.querySelector('.news-navigation');
  const screenWidth = window.innerWidth;

  // eslint-disable-next-line no-undef
  if (screenWidth >= (window.BREAKPOINTS ? BREAKPOINTS.tablet : 991)) {
    if (blogNavigation && searchForm) blogNavigation.prepend(searchForm);
  } else {
    if (newsNavigation && searchForm) newsNavigation.after(searchForm);
  }
}
changePositionSearchBox();
window.addEventListener('resize', changePositionSearchBox);
