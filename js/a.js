'use strict';

const options = {
    valueNames: ['scopeCharNo', 'scopeCharname', 'scopeCharType', 'scopeCharClass', 'scopeCost', 'scopeCombo', 'scopeStars', 'abilitySort'],};

  
  // list.jsのインスタンス生成
  const sortList = new List('tableList', options);
  
  // チェックボックスの変更を監視
  const checkboxes = document.getElementsByClassName('check-box');
  for (const checkbox of checkboxes) {
    checkbox.addEventListener('change', applyFilters);
  }
  
  function applyFilters() {
    // 選択されたフィルタの値を取得
    const filter = [];
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
         const value = checkbox.getAttribute('data-filter');
         filter.push(value);
      }
    }
  
    // フィルタを適用してリストを更新
    searchList.filter(function (item) {
      const itemGenres = item.values().genre;
      const filterMatched = filter.length === 0 || filter.some(filterItem => itemGenres.includes(filterItem));
      return filterMatched;
    });
  }