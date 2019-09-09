// 入力キー(Enter, Ctrl)のイベント受け取り
window.addEventListener('keydown', handleKeydown);
window.addEventListener('keyup', handleKeyup);

// 各種フラグ系
let sambaNow = false;
let enterFlg = false;
let ctrFlg = false;

/**
 * キーが押された時の処理
 * @param {*} event 
 */
function handleKeydown(event) {
  if (event.key === 'Enter') {
    enterFlg = true;
  } else if (event.key === 'Control') {
    ctrFlg = true;
  }
  if (!enterFlg || !ctrFlg) {
    return;
  }
  if (sambaNow) {
    sambaStop();
  } else {
    sambaStart();
  }
  sambaNow = !sambaNow;
}

/**
 * キーが離れた時の処理
 * @param {*} event 
 */
function handleKeyup(event) {
  if (event.key === 'Enter') {
    enterFlg = false;
  } else if (event.key === 'Control') {
    ctrFlg = false;
  }
}

// sambaの子コンポーネント(データが格納される箱)を作成
const SambaPerson = {
  props: ['mouth'],
  template: '<div class="samba-person">' +
    '<span class="left-hand">＼</span>' +
    '<span class="face">({{ mouth }})</span>' +
    '<span class="right-hand">／</span>' +
    '</div>'
};

let sambaApp = new Vue({
  el: '#sambaApp',
  data: {
    customSambaPerson: '',
    sambaNowDoing: false,
  },
  components: {
    'samba-person-component': SambaPerson,
  },
  methods: {
    addSumbaPerson: function (event) {
      console.log(this.sambaPersonMouth.val);
    }
  }
});



function sambaStart() {
  // サンバダンサーズが踊り始める: 手や顔の動き
  addClassToArrayByClassName('left-hand', 'shake-left');
  addClassToArrayByClassName('face', 'shake');
  addClassToArrayByClassName('right-hand', 'shake-right');

  // サンバダンサーズが踊り始める: 横に
  document.getElementById('Row1').classList.add('shake-type-left');
  document.getElementById('Row2').classList.add('shake-type-right');
  document.getElementById('Row3').classList.add('shake-type-left');
  document.getElementById('RowEx').classList.add('shake-type-right');

  // サンバダンサーズが入場(opacity:1)
  document.getElementById('samba-people').classList.add('samba-people-show');
  document.getElementById('samba-people').classList.remove('samba-people-snake');

  // ついでにメッセージと墓も(opacity:1)
  document.getElementById('haka').classList.add('shake');
  document.getElementById('message').classList.remove('msg');
  document.getElementById('message').classList.add('msg07');
}

function sambaStop() {
  // サンバダンサーズが踊りをやめる: 手や顔の動き
  removeClassToArrayByClassName('left-hand', 'shake-left');
  removeClassToArrayByClassName('face', 'shake');
  removeClassToArrayByClassName('right-hand', 'shake-right');

  // サンバダンサーズが踊りをやめる: 横に
  document.getElementById('Row1').classList.remove('shake-type-left');
  document.getElementById('Row1').classList.add('not-shake');
  document.getElementById('Row2').classList.remove('shake-type-right');
  document.getElementById('Row2').classList.add('not-shake');
  document.getElementById('Row3').classList.remove('shake-type-left');
  document.getElementById('Row3').classList.add('not-shake');
  document.getElementById('RowEx').classList.remove('shake-type-right');
  document.getElementById('RowEx').classList.add('not-shake');

  // サンバダンサーズが退場(opacity:0)
  document.getElementById("samba-people").classList.remove('samba-people-show');
  document.getElementById("samba-people").classList.add('samba-people-snake');

  // ついでにメッセージと墓も(opacity:0)
  document.getElementById('haka').classList.remove('shake');
  document.getElementById('message').classList.add('msg');
  document.getElementById('message').classList.remove('msg07');
}


/**
 * 指定したクラス名を持つDOM要素に指定したクラス名を追加します。
 * @param {string} targetClassName 対象のDOM要素が持つクラス名
 * @param {string} addClassName 対象のDOM要素に追加したいクラス名
 */
function addClassToArrayByClassName(targetClassName, addClassName) {
  let array = document.getElementsByClassName(targetClassName);
  for (let i = 0; i < array.length; i++) {
    array[i].classList.add(addClassName);
  }
  return;
}

/**
 * 指定したクラス名を持つDOM要素から指定したクラス名を消去します。
 * @param {string} targetClassName 対象のDOM要素が持つクラス名
 * @param {string} removeClassName 対象のDOM要素から消去したいクラス名
 */
function removeClassToArrayByClassName(targetClassName, removeClassName) {
  let array = document.getElementsByClassName(targetClassName);
  for (let i = 0; i < array.length; i++) {
    array[i].classList.remove(removeClassName);
  }
  return;
}
