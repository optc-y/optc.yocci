"use strict";

const options = {
  valueNames: [
    'scopeCharNo',
    'scopeCharimg',
    'scopeCharname',
    'scopeTypeimg',
    'scopeClassimg',
    'scopeCost',
    'scopeCombo',
    'scopeStars',
    { name: 'scopeCharNo', attr: 'data-price' },
  ],
};

// list.jsのインスタンス生成
const searchList = new List('tableList', options);