import { CookieUtility } from './cookie.js';
export let user = {
  username: 'sahathat',
  load: function () {
    const loadingUser = CookieUtility.get('username');
    if (loadingUser !== null) {
        user.username = loadingUser
    }
    this.save()
  },
  save: function () {
    let d = new Date()
    d.setDate(d.getDate() + 30);
    CookieUtility.set('username', user.username, d);
  },
  set: function (username) {
    user.username = username;
  }
};

export let userBg = {
    selectedBg: 'bg-white',
    load: function () {
      const loadingColor = localStorage.getItem('yourBg');
      if (loadingColor !== undefined || loadingColor !== null)
        userBg.selectedBg = loadingColor;
    },
    save: function () {
      localStorage.setItem('yourBg', userBg.selectedBg);
    },
    set: function (activeColor) {
      userBg.selectedBg = 'bg-' + activeColor + '-200';
    }
};
