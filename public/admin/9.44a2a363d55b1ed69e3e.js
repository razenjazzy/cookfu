(window.webpackJsonp = window.webpackJsonp || []).push([[9], {
    YuTi: function (n, e) {
        n.exports = function (n) {
            return n.webpackPolyfill || (n.deprecate = function () {
            }, n.paths = [], n.children || (n.children = []), Object.defineProperty(n, "loaded", {
                enumerable: !0,
                get: function () {
                    return n.l
                }
            }), Object.defineProperty(n, "id", {
                enumerable: !0, get: function () {
                    return n.i
                }
            }), n.webpackPolyfill = 1), n
        }
    }, tePd: function (n, e, t) {
        "use strict";
        t.r(e);
        var o = t("CcnG"), l = [{title: "Dashboard", icon: "nb-e-commerce", link: "/pages/dashboard", home: !0}, {
                title: "Users",
                icon: "fa fa-user",
                children: [{title: "Add New", link: "/pages/users/add"}, {title: "View All", link: "/pages/users/list"}]
            }, {
                title: "Delivery Profile",
                icon: "fa fa-car",
                children: [{
                    title: "Add New",
                    link: "/pages/users/add",
                    queryParams: {role: "delivery"}
                }, {title: "View All", link: "/pages/deliveryprofiles/list"}]
            }, {
                title: " Menu Items",
                icon: "fa fa-coffee",
                children: [{title: "View All", link: "/pages/menuitems/list"}]
            }, {
                title: "Orders",
                icon: "fa fa-shopping-cart",
                children: [{title: "View All", link: "/pages/orders/list"}]
            }, {
                title: "Transactions",
                icon: "fa fa-handshake",
                children: [{title: "View All", link: "/pages/transactions/list"}]
            }], i = [{title: "Dashboard", icon: "nb-e-commerce", link: "/pages/dashboard", home: !0}, {
                title: "Users",
                icon: "fa fa-user",
                children: [{title: "Add New", link: "/pages/users/add"}, {title: "View All", link: "/pages/users/list"}]
            }, {
                title: "Stores",
                icon: "fa fa-utensils",
                children: [{title: "Add New", link: "/pages/users/add", queryParams: {role: "owner"}}, {
                    title: "View All",
                    link: "/pages/stores/list"
                }]
            }, {
                title: "Delivery Profile",
                icon: "fa fa-car",
                children: [{
                    title: "Add New",
                    link: "/pages/users/add",
                    queryParams: {role: "delivery"}
                }, {title: "View All", link: "/pages/deliveryprofiles/list"}]
            }, {
                title: " Menu Items",
                icon: "fa fa-coffee",
                children: [{title: "View All", link: "/pages/menuitems/list"}]
            }, {
                title: "Orders",
                icon: "fa fa-shopping-cart",
                children: [{title: "View All", link: "/pages/orders/list"}]
            }, {
                title: "Transactions",
                icon: "fa fa-handshake",
                children: [{title: "View All", link: "/pages/transactions/list"}]
            }, {
                title: "Categories",
                icon: "fa fa-bookmark",
                children: [{title: "Add New", link: "/pages/categories/add"}, {
                    title: "View All",
                    link: "/pages/categories/list"
                }]
            }, {
                title: "Plans",
                icon: "fa fa-dollar-sign",
                children: [{title: "View All", link: "/pages/plans/list"}]
            },
                {
                    title: "Test",
                    icon: "fa fa-handshake",
                    children: [{title: "Details", link: "/pages/plans/list"}]
                },
                {
                title: "Settings",
                icon: "fa fa-cog",
                children: [{title: "App Settings", link: "/pages/settings/app"}, {
                    title: "System Settings",
                    link: "/pages/settings/env"
                }]
            }, {title: "Support", icon: "fa fa-life-ring", children: [{title: "View All", link: "/pages/support/list"}]}],
            a = function () {
                function n() {
                    this.menu = []
                }

                return n.prototype.ngOnInit = function () {
                    var n = localStorage.getItem("manage-as-admin");
                    this.menu = "true" === n ? i : l
                }, n
            }(), r = function () {
                return function () {
                }
            }(), s = t("pMnS"), c = t("5zDB"), d = t("7YNT"), u = t("S9Dc"), g = t("3bPa"), m = t("ZlY8"), h = t("SUpF"),
            b = t("ZYCi"), p = t("/PiY"), f = t("Sat5"), C = t("Vk7J"), O = t("EoTe"), P = t("V7zL"), M = t("nA+Y"),
            _ = t("wzBU"), x = t("Ip0R"), w = t("KWzY"), y = t("trYH"), v = t("NTD5"), k = t("BoUZ"), A = t("Ficc"),
            z = t("6FBX"), S = t("aR35"), L = o["\u0275crt"]({
                encapsulation: 0,
                styles: [[".nb-theme-default   [_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%}.nb-theme-default   [_nghost-%COMP%]   .left[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.nb-theme-default   [_nghost-%COMP%]   .right[_ngcontent-%COMP%]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.nb-theme-default   [_nghost-%COMP%]   .logo-containter[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:auto}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{font-size:2.5rem;text-decoration:none}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;font-weight:500;white-space:nowrap}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #ebeef2}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #ebeef2}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400}.nb-theme-default   [_nghost-%COMP%]   ngx-layout-direction-switcher[_ngcontent-%COMP%]{margin:0 1.5rem}.nb-theme-default   [_nghost-%COMP%]   ngx-theme-switcher[_ngcontent-%COMP%]{margin:0 2.25rem}.nb-theme-default   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]     a{display:block;text-decoration:none;line-height:1}.nb-theme-default   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]     a i{color:#40dc7e;font-size:2.25rem;border-radius:50%;position:relative;-webkit-animation-name:pulse-light;animation-name:pulse-light}.nb-theme-default   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]     a i::after{content:' ';background-image:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);border-radius:50%;pointer-events:none;position:absolute;top:52.3%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:13%;height:13%;-webkit-animation:3s linear infinite pulse-light;animation:3s linear infinite pulse-light}@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 1px 0 rgba(64,220,126,0);box-shadow:0 0 1px 0 rgba(64,220,126,0)}20%{-webkit-box-shadow:0 0 3px 10px rgba(64,220,126,.4);box-shadow:0 0 3px 10px rgba(64,220,126,.4)}100%{-webkit-box-shadow:0 0 5px 20px rgba(64,220,126,0);box-shadow:0 0 5px 20px rgba(64,220,126,0)}}@keyframes pulse{0%{-webkit-box-shadow:0 0 1px 0 rgba(64,220,126,0);box-shadow:0 0 1px 0 rgba(64,220,126,0)}20%{-webkit-box-shadow:0 0 3px 10px rgba(64,220,126,.4);box-shadow:0 0 3px 10px rgba(64,220,126,.4)}100%{-webkit-box-shadow:0 0 5px 20px rgba(64,220,126,0);box-shadow:0 0 5px 20px rgba(64,220,126,0)}}@media (max-width:991.98px){.nb-theme-default   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]:not(.toggle-layout){border:none}.nb-theme-default   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-default   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]{padding:0}.nb-theme-default   [_nghost-%COMP%]   ngx-layout-direction-switcher[_ngcontent-%COMP%]{display:none}.nb-theme-default   [_nghost-%COMP%]   ngx-theme-switcher[_ngcontent-%COMP%]{margin:0 .5rem}}@media (max-width:767.98px){.nb-theme-default   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]     .user-name{display:none}}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-default   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]{display:none}.nb-theme-default   [_nghost-%COMP%]   ngx-theme-switcher[_ngcontent-%COMP%]{display:none}.nb-theme-default   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]:not(.toggle-layout){padding:0}}@media (max-width:399.98px){.nb-theme-default   [_nghost-%COMP%]   .right[_ngcontent-%COMP%]    {display:none}}.nb-theme-default   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1.25rem;padding:.8rem 1.25rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;background-color:#ebeff5;border-radius:.375rem}.nb-theme-default   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]:hover{background-color:#f5f7fa}.nb-theme-default   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 1rem}.nb-theme-default   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:1.8rem;border-radius:50%;position:relative}.nb-theme-default   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1rem;padding:.6rem 1rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;background-color:#ff4c6a;border-radius:.375rem}.nb-theme-default   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]:hover{background-color:#f5f7fa}.nb-theme-default   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 .8rem}.nb-theme-default   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:1.6rem;border-radius:50%;position:relative}.nb-theme-cosmic   [_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   .left[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.nb-theme-cosmic   [_nghost-%COMP%]   .right[_ngcontent-%COMP%]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.nb-theme-cosmic   [_nghost-%COMP%]   .logo-containter[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:calc(16.25rem - 1.25rem)}.nb-theme-cosmic   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:auto}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{font-size:2.5rem;text-decoration:none}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;font-weight:500;white-space:nowrap}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #342e73}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #342e73}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400}.nb-theme-cosmic   [_nghost-%COMP%]   ngx-layout-direction-switcher[_ngcontent-%COMP%]{margin:0 1.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   ngx-theme-switcher[_ngcontent-%COMP%]{margin:0 2.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]     a{display:block;text-decoration:none;line-height:1}.nb-theme-cosmic   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]     a i{color:#00f9a6;font-size:2.25rem;border-radius:50%;position:relative;-webkit-animation-name:pulse-light;animation-name:pulse-light}.nb-theme-cosmic   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]     a i::after{content:' ';background-image:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);border-radius:50%;pointer-events:none;position:absolute;top:52.3%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:13%;height:13%;-webkit-animation:3s linear infinite pulse;animation:3s linear infinite pulse}@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 1px 0 rgba(0,249,166,0);box-shadow:0 0 1px 0 rgba(0,249,166,0)}20%{-webkit-box-shadow:0 0 3px 10px rgba(0,249,166,.4);box-shadow:0 0 3px 10px rgba(0,249,166,.4)}100%{-webkit-box-shadow:0 0 5px 20px rgba(0,249,166,0);box-shadow:0 0 5px 20px rgba(0,249,166,0)}}@keyframes pulse{0%{-webkit-box-shadow:0 0 1px 0 rgba(0,249,166,0);box-shadow:0 0 1px 0 rgba(0,249,166,0)}20%{-webkit-box-shadow:0 0 3px 10px rgba(0,249,166,.4);box-shadow:0 0 3px 10px rgba(0,249,166,.4)}100%{-webkit-box-shadow:0 0 5px 20px rgba(0,249,166,0);box-shadow:0 0 5px 20px rgba(0,249,166,0)}}@media (max-width:991.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]:not(.toggle-layout){border:none}.nb-theme-cosmic   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-cosmic   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   ngx-layout-direction-switcher[_ngcontent-%COMP%]{display:none}.nb-theme-cosmic   [_nghost-%COMP%]   ngx-theme-switcher[_ngcontent-%COMP%]{margin:0 .5rem}}@media (max-width:767.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]     .user-name{display:none}}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]{display:none}.nb-theme-cosmic   [_nghost-%COMP%]   ngx-theme-switcher[_ngcontent-%COMP%]{display:none}.nb-theme-cosmic   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]:not(.toggle-layout){padding:0}}@media (max-width:399.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .right[_ngcontent-%COMP%]    {display:none}}.nb-theme-cosmic   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1.25rem;padding:.8rem 1.25rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;background-color:#4e41a5;border-radius:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]:hover{background-color:#675cb2}.nb-theme-cosmic   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 1rem}.nb-theme-cosmic   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:1.8rem;border-radius:50%;position:relative}.nb-theme-cosmic   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1rem;padding:.6rem 1rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;background-color:#ff386a;border-radius:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]:hover{background-color:#675cb2}.nb-theme-cosmic   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 .8rem}.nb-theme-cosmic   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:1.6rem;border-radius:50%;position:relative}.nb-theme-corporate   [_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   .left[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.nb-theme-corporate   [_nghost-%COMP%]   .right[_ngcontent-%COMP%]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.nb-theme-corporate   [_nghost-%COMP%]   .logo-containter[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:auto}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{font-size:2.5rem;text-decoration:none}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;font-weight:500;white-space:nowrap}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #cdd5dc}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #cdd5dc}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{border-left-color:#3f4550}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{border-right-color:#3f4550}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border:none}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border:none}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]     ngx-theme-switcher .dropdown-toggle{color:#fff;background:0 0}.nb-theme-corporate   [_nghost-%COMP%]   ngx-layout-direction-switcher[_ngcontent-%COMP%]{margin:0 1.5rem}.nb-theme-corporate   [_nghost-%COMP%]   ngx-theme-switcher[_ngcontent-%COMP%]{margin:0 2.25rem}@media (max-width:1399.98px){.nb-theme-default   [_nghost-%COMP%]   ngx-layout-direction-switcher[_ngcontent-%COMP%]{display:none}.nb-theme-cosmic   [_nghost-%COMP%]   ngx-layout-direction-switcher[_ngcontent-%COMP%]{display:none}.nb-theme-corporate   [_nghost-%COMP%]   ngx-layout-direction-switcher[_ngcontent-%COMP%]{display:none}}.nb-theme-corporate   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]     a{display:block;text-decoration:none;line-height:1}.nb-theme-corporate   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]     a i{color:#a4abb3;font-size:2.25rem;border-radius:50%;position:relative;-webkit-animation-name:pulse-light;animation-name:pulse-light}.nb-theme-corporate   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]     a i::after{content:' ';background-image:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);border-radius:50%;pointer-events:none;position:absolute;top:52.3%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:13%;height:13%;-webkit-animation:3s linear infinite pulse;animation:3s linear infinite pulse}@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 1px 0 rgba(164,171,179,0);box-shadow:0 0 1px 0 rgba(164,171,179,0)}20%{-webkit-box-shadow:0 0 3px 10px rgba(164,171,179,.4);box-shadow:0 0 3px 10px rgba(164,171,179,.4)}100%{-webkit-box-shadow:0 0 5px 20px rgba(164,171,179,0);box-shadow:0 0 5px 20px rgba(164,171,179,0)}}@keyframes pulse{0%{-webkit-box-shadow:0 0 1px 0 rgba(164,171,179,0);box-shadow:0 0 1px 0 rgba(164,171,179,0)}20%{-webkit-box-shadow:0 0 3px 10px rgba(164,171,179,.4);box-shadow:0 0 3px 10px rgba(164,171,179,.4)}100%{-webkit-box-shadow:0 0 5px 20px rgba(164,171,179,0);box-shadow:0 0 5px 20px rgba(164,171,179,0)}}@-webkit-keyframes pulse-light{0%{-webkit-box-shadow:0 0 1px 0 rgba(115,255,208,0);box-shadow:0 0 1px 0 rgba(115,255,208,0)}20%{-webkit-box-shadow:0 0 3px 10px rgba(115,255,208,.4);box-shadow:0 0 3px 10px rgba(115,255,208,.4)}100%{-webkit-box-shadow:0 0 5px 20px rgba(115,255,208,0);box-shadow:0 0 5px 20px rgba(115,255,208,0)}}@keyframes pulse-light{0%{-webkit-box-shadow:0 0 1px 0 rgba(115,255,208,0);box-shadow:0 0 1px 0 rgba(115,255,208,0)}20%{-webkit-box-shadow:0 0 3px 10px rgba(115,255,208,.4);box-shadow:0 0 3px 10px rgba(115,255,208,.4)}100%{-webkit-box-shadow:0 0 5px 20px rgba(115,255,208,0);box-shadow:0 0 5px 20px rgba(115,255,208,0)}}@media (max-width:991.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]:not(.toggle-layout){border:none}.nb-theme-corporate   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-corporate   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]   ngx-layout-direction-switcher[_ngcontent-%COMP%]{display:none}.nb-theme-corporate   [_nghost-%COMP%]   ngx-theme-switcher[_ngcontent-%COMP%]{margin:0 .5rem}}@media (max-width:767.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]     .user-name{display:none}}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .toggle-layout[_ngcontent-%COMP%]{display:none}.nb-theme-corporate   [_nghost-%COMP%]   ngx-theme-switcher[_ngcontent-%COMP%]{display:none}.nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]:not(.toggle-layout){padding:0}}@media (max-width:399.98px){.nb-theme-corporate   [_nghost-%COMP%]   .right[_ngcontent-%COMP%]    {display:none}}.nb-theme-corporate   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1.25rem;padding:.8rem 1.25rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;background-color:#2b2d34;border-radius:.17rem}.nb-theme-corporate   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]:hover{background-color:#494a50}.nb-theme-corporate   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 1rem}.nb-theme-corporate   [_nghost-%COMP%]   .settings-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:1.8rem;border-radius:50%;position:relative}.nb-theme-corporate   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1rem;padding:.6rem 1rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;background-color:#ff6b83;border-radius:.17rem}.nb-theme-corporate   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]:hover{background-color:#494a50}.nb-theme-corporate   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 .8rem}.nb-theme-corporate   [_nghost-%COMP%]   .logout-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:1.6rem;border-radius:50%;position:relative}"]],
                data: {}
            });

        function j(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 3, "div", [["class", "settings-button"]], null, [[null, "click"]], function (n, e, t) {
                var o = !0;
                return "click" === e && (o = !1 !== n.component.goToSettings() && o), o
            }, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 0, "i", [["class", "nb-gear"]], null, null, null, null, null)), (n()(), o["\u0275eld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["Settings"]))], null, null)
        }

        function I(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 3, "div", [["class", "settings-button"]], null, [[null, "click"]], function (n, e, t) {
                var o = !0;
                return "click" === e && (o = !1 !== n.component.goToStore() && o), o
            }, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 0, "i", [["class", "fa fa-utensils"]], null, null, null, null, null)), (n()(), o["\u0275eld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["My Store"]))], null, null)
        }

        function V(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 9, "div", [["class", "header-container"]], [[2, "left", null], [2, "right", null]], null, null, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 4, "div", [["class", "logo-containter"]], null, null, null, null, null)), (n()(), o["\u0275eld"](2, 0, null, null, 1, "a", [["class", "navigation"], ["href", "#"]], null, [[null, "click"]], function (n, e, t) {
                var o = !0;
                return "click" === e && (o = !1 !== n.component.toggleSidebar() && o), o
            }, null, null)), (n()(), o["\u0275eld"](3, 0, null, null, 0, "i", [["class", "nb-menu"]], null, null, null, null, null)), (n()(), o["\u0275eld"](4, 0, null, null, 1, "div", [["class", "logo"]], null, [[null, "click"]], function (n, e, t) {
                var o = !0;
                return "click" === e && (o = !1 !== n.component.goToHome() && o), o
            }, null, null)), (n()(), o["\u0275ted"](5, null, ["", ""])), (n()(), o["\u0275and"](16777216, null, null, 1, null, j)), o["\u0275did"](7, 16384, null, 0, x.l, [o.ViewContainerRef, o.TemplateRef], {ngIf: [0, "ngIf"]}, null), (n()(), o["\u0275and"](16777216, null, null, 1, null, I)), o["\u0275did"](9, 16384, null, 0, x.l, [o.ViewContainerRef, o.TemplateRef], {ngIf: [0, "ngIf"]}, null), (n()(), o["\u0275eld"](10, 0, null, null, 4, "div", [["class", "header-container"]], null, null, null, null, null)), (n()(), o["\u0275eld"](11, 0, null, null, 3, "div", [["class", "logout-button"]], null, [[null, "click"]], function (n, e, t) {
                var o = !0;
                return "click" === e && (o = !1 !== n.component.logout() && o), o
            }, null, null)), (n()(), o["\u0275eld"](12, 0, null, null, 0, "i", [["class", "nb-power"]], null, null, null, null, null)), (n()(), o["\u0275eld"](13, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["Logout"]))], function (n, e) {
                var t = e.component;
                n(e, 7, 0, !t.storeId), n(e, 9, 0, t.storeId)
            }, function (n, e) {
                var t = e.component;
                n(e, 0, 0, "normal" === t.position, "inverse" === t.position), n(e, 5, 0, t.appName)
            })
        }

        var R = t("o6Jp"), T = o["\u0275crt"]({
            encapsulation: 0,
            styles: [["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden;z-index:auto;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden;-webkit-box-flex:1;-ms-flex:1;flex:1}[_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[_nghost-%COMP%]   .main-container-fixed[_ngcontent-%COMP%]{position:fixed}.right[_nghost-%COMP%]{margin-right:0;margin-left:auto}[dir=ltr]   .right[_nghost-%COMP%]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}[dir=rtl]   .right[_nghost-%COMP%]{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.end[_nghost-%COMP%]{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}[dir=ltr]   .end[_nghost-%COMP%]{margin-right:0;margin-left:auto}[dir=rtl]   .end[_nghost-%COMP%]{margin-left:0;margin-right:auto}.fixed[_nghost-%COMP%]{position:fixed;height:100%;z-index:999;top:0;bottom:0;left:0}.fixed.right[_nghost-%COMP%]{right:0}[dir=ltr]   .fixed.start[_nghost-%COMP%]{left:0}[dir=rtl]   .fixed.start[_nghost-%COMP%]{right:0}[dir=ltr]   .fixed.end[_nghost-%COMP%]{right:0}[dir=rtl]   .fixed.end[_nghost-%COMP%]{left:0}[_nghost-%COMP%]     nb-sidebar-footer{margin-top:auto;display:block}[_nghost-%COMP%]     nb-sidebar-header{display:block}"]],
            data: {}
        });

        function D(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 4, "div", [["class", "main-container"]], [[2, "main-container-fixed", null]], null, null, null, null)), o["\u0275ncd"](null, 0), (n()(), o["\u0275eld"](2, 0, null, null, 1, "div", [["class", "scrollable"]], null, [[null, "click"]], function (n, e, t) {
                var o = !0;
                return "click" === e && (o = !1 !== n.component.onClick(t) && o), o
            }, null, null)), o["\u0275ncd"](null, 1), o["\u0275ncd"](null, 2)], null, function (n, e) {
                n(e, 0, 0, e.component.containerFixedValue)
            })
        }

        var N = t("SXPc"), F = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:2rem}.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4rem;color:#a4abb3;-webkit-transition:color .1s ease-out;transition:color ease-out .1s}.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#2a2a2a}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-cosmic   [_nghost-%COMP%]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:2rem}.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4rem;color:#a1a1e5;-webkit-transition:color .1s ease-out;transition:color ease-out .1s}.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-corporate   [_nghost-%COMP%]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:2rem}.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4rem;color:#a4abb3;-webkit-transition:color .1s ease-out;transition:color ease-out .1s}.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#181818}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}"]],
            data: {}
        });

        function G(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 5, "span", [["class", "created-by"]], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["Developed by "])), (n()(), o["\u0275eld"](2, 0, null, null, 2, "b", [], null, null, null, null, null)), (n()(), o["\u0275eld"](3, 0, null, null, 1, "a", [["href", "http://verbosetechlabs.com/"], ["target", "_blank"]], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["Verbose TechLabs"])), (n()(), o["\u0275ted"](-1, null, [" 2019"]))], null, null)
        }

        var B = t("uPX2"), X = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;margin:0}.nb-theme-default   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.nb-theme-default   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]{padding:0}.nb-theme-default   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{margin-top:.5em}.nb-theme-default   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:600;-webkit-transition:opacity .3s;transition:opacity .3s ease;color:#a4abb3}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.first[_ngcontent-%COMP%]{padding-right:10px}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.first[_ngcontent-%COMP%]{padding-left:10px}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.second[_ngcontent-%COMP%]{padding-left:10px}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.second[_ngcontent-%COMP%]{padding-right:10px}.nb-theme-default   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.active[_ngcontent-%COMP%]{color:#4b4b4b}.nb-theme-default   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:active{opacity:.78}.nb-theme-default   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:3rem;height:1.5rem;margin:0}.nb-theme-default   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]::before{-webkit-transform:translateX(1.5rem);transform:translateX(1.5rem)}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]::before{-webkit-transform:translateX(-1.5rem);transform:translateX(-1.5rem)}.nb-theme-default   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:1.75rem;background-color:#ebeff5}.nb-theme-default   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]::before{position:absolute;content:'';height:1.5rem;width:1.5rem;border-radius:50%;background-color:#40dc7e;-webkit-transition:.2s;transition:.2s;-webkit-box-shadow:0 0 .25rem 0 rgba(164,171,179,.4);box-shadow:0 0 .25rem 0 rgba(164,171,179,.4)}@media (max-width:399.98px){.nb-theme-default   [_nghost-%COMP%]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}}.nb-theme-cosmic   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;margin:0}.nb-theme-cosmic   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.nb-theme-cosmic   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{margin-top:.5em}.nb-theme-cosmic   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:600;-webkit-transition:opacity .3s;transition:opacity .3s ease;color:#a1a1e5}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.first[_ngcontent-%COMP%]{padding-right:10px}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.first[_ngcontent-%COMP%]{padding-left:10px}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.second[_ngcontent-%COMP%]{padding-left:10px}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.second[_ngcontent-%COMP%]{padding-right:10px}.nb-theme-cosmic   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.active[_ngcontent-%COMP%]{color:#fff}.nb-theme-cosmic   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:active{opacity:.78}.nb-theme-cosmic   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:3rem;height:1.5rem;margin:0}.nb-theme-cosmic   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]::before{-webkit-transform:translateX(1.5rem);transform:translateX(1.5rem)}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]::before{-webkit-transform:translateX(-1.5rem);transform:translateX(-1.5rem)}.nb-theme-cosmic   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:1.75rem;background-color:#2f296b}.nb-theme-cosmic   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]::before{position:absolute;content:'';height:1.5rem;width:1.5rem;border-radius:50%;background-color:#00d977;-webkit-transition:.2s;transition:.2s;-webkit-box-shadow:0 0 .25rem 0 rgba(161,161,229,.4);box-shadow:0 0 .25rem 0 rgba(161,161,229,.4);background-image:-webkit-gradient(linear,left top,right top,from(#ad59ff),to(#7659ff));background-image:linear-gradient(to right,#ad59ff,#7659ff)}@media (max-width:399.98px){.nb-theme-cosmic   [_nghost-%COMP%]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}}.nb-theme-corporate   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;margin:0}.nb-theme-corporate   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.nb-theme-corporate   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]   .switch-label.vertical[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{margin-top:.5em}.nb-theme-corporate   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:600;-webkit-transition:opacity .3s;transition:opacity .3s ease;color:#a4abb3}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.first[_ngcontent-%COMP%]{padding-right:10px}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.first[_ngcontent-%COMP%]{padding-left:10px}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.second[_ngcontent-%COMP%]{padding-left:10px}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.second[_ngcontent-%COMP%]{padding-right:10px}.nb-theme-corporate   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span.active[_ngcontent-%COMP%]{color:#4b4b4b}.nb-theme-corporate   [_nghost-%COMP%]   .switch-label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:active{opacity:.78}.nb-theme-corporate   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:3rem;height:1.5rem;margin:0}.nb-theme-corporate   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]::before{-webkit-transform:translateX(1.5rem);transform:translateX(1.5rem)}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]::before{-webkit-transform:translateX(-1.5rem);transform:translateX(-1.5rem)}.nb-theme-corporate   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:1.75rem;background-color:#f1f5f8}.nb-theme-corporate   [_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]::before{position:absolute;content:'';height:1.5rem;width:1.5rem;border-radius:50%;-webkit-transition:.2s;transition:.2s;-webkit-box-shadow:0 0 .25rem 0 rgba(164,171,179,.4);box-shadow:0 0 .25rem 0 rgba(164,171,179,.4);background-color:#73a1ff}@media (max-width:399.98px){.nb-theme-corporate   [_nghost-%COMP%]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}}"]],
            data: {}
        });

        function W(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 1, "span", [["class", "second"]], [[2, "active", null]], null, null, null, null)), (n()(), o["\u0275ted"](1, null, [" ", " "]))], null, function (n, e) {
                var t = e.component;
                n(e, 0, 0, t.isSecondValue()), n(e, 1, 0, t.secondValueLabel)
            })
        }

        function E(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 7, "label", [["class", "switch-label"]], [[2, "vertical", null]], null, null, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 1, "span", [["class", "first"]], [[2, "active", null]], null, null, null, null)), (n()(), o["\u0275ted"](2, null, [" ", " "])), (n()(), o["\u0275eld"](3, 0, null, null, 2, "div", [["class", "switch"]], null, null, null, null, null)), (n()(), o["\u0275eld"](4, 0, null, null, 0, "input", [["type", "checkbox"]], [[8, "checked", 0]], [[null, "change"]], function (n, e, t) {
                var o = !0;
                return "change" === e && (o = !1 !== n.component.changeValue() && o), o
            }, null, null)), (n()(), o["\u0275eld"](5, 0, null, null, 0, "span", [["class", "slider"]], null, null, null, null, null)), (n()(), o["\u0275and"](16777216, null, null, 1, null, W)), o["\u0275did"](7, 16384, null, 0, x.l, [o.ViewContainerRef, o.TemplateRef], {ngIf: [0, "ngIf"]}, null)], function (n, e) {
                n(e, 7, 0, !e.component.vertical)
            }, function (n, e) {
                var t = e.component;
                n(e, 0, 0, t.vertical), n(e, 1, 0, t.vertical || t.isFirstValue()), n(e, 2, 0, t.vertical ? t.currentValueLabel() : t.firstValueLabel), n(e, 4, 0, t.isSecondValue())
            })
        }

        var Z = t("x/J1"), U = o["\u0275crt"]({encapsulation: 2, styles: [], data: {}});

        function $(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 1, "ngx-switcher", [], null, [[null, "valueChange"]], function (n, e, t) {
                var o = !0;
                return "valueChange" === e && (o = !1 !== n.component.toggleDirection(t) && o), o
            }, E, X)), o["\u0275did"](1, 49152, null, 0, B.a, [], {
                firstValue: [0, "firstValue"],
                secondValue: [1, "secondValue"],
                firstValueLabel: [2, "firstValueLabel"],
                secondValueLabel: [3, "secondValueLabel"],
                vertical: [4, "vertical"],
                value: [5, "value"]
            }, {valueChange: "valueChange"})], function (n, e) {
                var t = e.component;
                n(e, 1, 0, t.directions.RTL, t.directions.LTR, "RTL", "LTR", t.vertical, t.currentDirection)
            }, null)
        }

        var K = t("KuNN"), q = t("5MUS"), J = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]   h6[_ngcontent-%COMP%]{margin-bottom:.5rem}.nb-theme-default   [_nghost-%COMP%]   .settings-row[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;width:90%;margin:0 0 1rem}.nb-theme-default   [_nghost-%COMP%]   .settings-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:2.25rem;color:#a4abb3}.nb-theme-default   [_nghost-%COMP%]   .settings-row[_ngcontent-%COMP%]   a.selected[_ngcontent-%COMP%]{color:#40dc7e}.nb-theme-default   [_nghost-%COMP%]   .settings[_ngcontent-%COMP%]{margin-bottom:1em}.nb-theme-default   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-default   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch-label span{font-size:1em;font-weight:400}.nb-theme-default   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch{height:1.5em;width:3em}.nb-theme-default   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch .slider::before{height:1.5em;width:1.5em}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch input:checked+.slider::before{-webkit-transform:translateX(1.5rem)!important;transform:translateX(1.5rem)!important}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch input:checked+.slider::before{-webkit-transform:translateX(-1.5rem)!important;transform:translateX(-1.5rem)!important}.nb-theme-cosmic   [_nghost-%COMP%]   h6[_ngcontent-%COMP%]{margin-bottom:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .settings-row[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;width:90%;margin:0 0 1rem}.nb-theme-cosmic   [_nghost-%COMP%]   .settings-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:2.25rem;color:#a1a1e5}.nb-theme-cosmic   [_nghost-%COMP%]   .settings-row[_ngcontent-%COMP%]   a.selected[_ngcontent-%COMP%]{color:#00f9a6}.nb-theme-cosmic   [_nghost-%COMP%]   .settings[_ngcontent-%COMP%]{margin-bottom:1em}.nb-theme-cosmic   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-cosmic   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch-label span{font-size:1em;font-weight:400}.nb-theme-cosmic   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch{height:1.5em;width:3em}.nb-theme-cosmic   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch .slider::before{height:1.5em;width:1.5em}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch input:checked+.slider::before{-webkit-transform:translateX(1.5rem)!important;transform:translateX(1.5rem)!important}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch input:checked+.slider::before{-webkit-transform:translateX(-1.5rem)!important;transform:translateX(-1.5rem)!important}.nb-theme-cosmic   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch .slider{background-color:#3d3780}.nb-theme-corporate   [_nghost-%COMP%]   h6[_ngcontent-%COMP%]{margin-bottom:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .settings-row[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;width:90%;margin:0 0 1rem}.nb-theme-corporate   [_nghost-%COMP%]   .settings-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:2.25rem;color:#a4abb3}.nb-theme-corporate   [_nghost-%COMP%]   .settings-row[_ngcontent-%COMP%]   a.selected[_ngcontent-%COMP%]{color:#5dcfe3}.nb-theme-corporate   [_nghost-%COMP%]   .settings[_ngcontent-%COMP%]{margin-bottom:1em}.nb-theme-corporate   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-corporate   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch-label span{font-size:1em;font-weight:400}.nb-theme-corporate   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch{height:1.5em;width:3em}.nb-theme-corporate   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch .slider::before{height:1.5em;width:1.5em}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch input:checked+.slider::before{-webkit-transform:translateX(1.5rem)!important;transform:translateX(1.5rem)!important}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]     ngx-switcher .switch input:checked+.slider::before{-webkit-transform:translateX(-1.5rem)!important;transform:translateX(-1.5rem)!important}"]],
            data: {}
        });

        function H(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 1, "a", [["href", "#"]], [[2, "selected", null], [1, "title", 0]], [[null, "click"]], function (n, e, t) {
                var o = !0;
                return "click" === e && (o = !1 !== n.component.layoutSelect(n.context.$implicit) && o), o
            }, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 0, "i", [], [[1, "class", 0]], null, null, null, null))], null, function (n, e) {
                n(e, 0, 0, e.context.$implicit.selected, e.context.$implicit.name), n(e, 1, 0, e.context.$implicit.icon)
            })
        }

        function Y(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 1, "a", [["href", "#"]], [[2, "selected", null], [1, "title", 0]], [[null, "click"]], function (n, e, t) {
                var o = !0;
                return "click" === e && (o = !1 !== n.component.sidebarSelect(n.context.$implicit) && o), o
            }, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 0, "i", [], [[1, "class", 0]], null, null, null, null))], null, function (n, e) {
                n(e, 0, 0, e.context.$implicit.selected, e.context.$implicit.name), n(e, 1, 0, e.context.$implicit.icon)
            })
        }

        function Q(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 1, "h6", [], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["LAYOUTS"])), (n()(), o["\u0275eld"](2, 0, null, null, 2, "div", [["class", "settings-row"]], null, null, null, null, null)), (n()(), o["\u0275and"](16777216, null, null, 1, null, H)), o["\u0275did"](4, 278528, null, 0, x.k, [o.ViewContainerRef, o.TemplateRef, o.IterableDiffers], {ngForOf: [0, "ngForOf"]}, null), (n()(), o["\u0275eld"](5, 0, null, null, 1, "h6", [], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["SIDEBAR"])), (n()(), o["\u0275eld"](7, 0, null, null, 2, "div", [["class", "settings-row"]], null, null, null, null, null)), (n()(), o["\u0275and"](16777216, null, null, 1, null, Y)), o["\u0275did"](9, 278528, null, 0, x.k, [o.ViewContainerRef, o.TemplateRef, o.IterableDiffers], {ngForOf: [0, "ngForOf"]}, null), (n()(), o["\u0275eld"](10, 0, null, null, 2, "div", [["class", "switcher"]], null, null, null, null, null)), (n()(), o["\u0275eld"](11, 0, null, null, 1, "ngx-layout-direction-switcher", [], null, null, null, $, U)), o["\u0275did"](12, 180224, null, 0, Z.a, [C.c], {vertical: [0, "vertical"]}, null)], function (n, e) {
                var t = e.component;
                n(e, 4, 0, t.layouts), n(e, 9, 0, t.sidebars), n(e, 12, 0, !0)
            }, null)
        }

        var nn = t("IAMq"), en = t("U1+q"), tn = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]   nb-layout-column.small[_ngcontent-%COMP%]{-webkit-box-flex:.15!important;-ms-flex:.15!important;flex:.15!important}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.settings-sidebar[_ngcontent-%COMP%]{-webkit-transition:width .3s;transition:width .3s ease;width:7.5rem;overflow:hidden}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.settings-sidebar.collapsed[_ngcontent-%COMP%]{width:0}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.settings-sidebar.collapsed[_ngcontent-%COMP%]     .main-container{width:0}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.settings-sidebar.collapsed[_ngcontent-%COMP%]     .main-container .scrollable{width:7.5rem;padding:1.25rem}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.settings-sidebar[_ngcontent-%COMP%]     .main-container{width:7.5rem;background:#fff;-webkit-transition:width .3s;transition:width .3s ease;overflow:hidden}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.settings-sidebar[_ngcontent-%COMP%]     .main-container .scrollable{width:7.5rem}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]{margin-top:2rem;background:0 0}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{height:calc(100vh - 4.75rem - 2rem)!important}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-right-radius:.375rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-left-radius:.375rem}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     nb-sidebar-header{padding-bottom:.5rem;text-align:center}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{padding:.75rem 2.5rem;margin-top:-2rem;font-weight:700;-webkit-transition:padding .3s cubic-bezier(.18,.89,.32,1.48);transition:padding .3s cubic-bezier(.18,.89,.32,1.48)}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2rem;text-shadow:0 1px 1px rgba(0,0,0,.2)}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:.25rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:.25rem}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:middle}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     nb-menu .nb-e-commerce{font-size:2rem}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar.compacted[_ngcontent-%COMP%]     nb-sidebar-header{padding-left:0;padding-right:0}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar.compacted[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{width:46px;height:44px;padding:.375rem;border-radius:5px;-webkit-transition:none;transition:none}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar.compacted[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}@media (max-width:767.98px){.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]{margin-top:0}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{height:calc(100vh - 4.75rem)!important}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-right-radius:0}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-left-radius:0}.nb-theme-default   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container .scrollable{padding-top:0}.nb-theme-default   [_nghost-%COMP%]   .main-btn[_ngcontent-%COMP%]{display:none}}.nb-theme-cosmic   [_nghost-%COMP%]   nb-layout-column.small[_ngcontent-%COMP%]{-webkit-box-flex:.15!important;-ms-flex:.15!important;flex:.15!important}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.settings-sidebar[_ngcontent-%COMP%]{-webkit-transition:width .3s;transition:width .3s ease;width:7.5rem;overflow:hidden}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.settings-sidebar.collapsed[_ngcontent-%COMP%]{width:0}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.settings-sidebar.collapsed[_ngcontent-%COMP%]     .main-container{width:0}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.settings-sidebar.collapsed[_ngcontent-%COMP%]     .main-container .scrollable{width:7.5rem;padding:1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.settings-sidebar[_ngcontent-%COMP%]     .main-container{width:7.5rem;background:#2f296b;-webkit-transition:width .3s;transition:width .3s ease;overflow:hidden}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.settings-sidebar[_ngcontent-%COMP%]     .main-container .scrollable{width:7.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]{margin-top:2rem;background:0 0}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{height:calc(100vh - 4.75rem - 2rem)!important}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-right-radius:.5rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-left-radius:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     nb-sidebar-header{padding-bottom:.5rem;text-align:center}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{padding:.75rem 2.5rem;margin-top:-2rem;font-weight:700;-webkit-transition:padding .3s cubic-bezier(.18,.89,.32,1.48);transition:padding .3s cubic-bezier(.18,.89,.32,1.48)}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2rem;text-shadow:0 1px 1px rgba(0,0,0,.2)}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:.25rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:middle}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     nb-menu .nb-e-commerce{font-size:2rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar.compacted[_ngcontent-%COMP%]     nb-sidebar-header{padding-left:0;padding-right:0}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar.compacted[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{width:46px;height:44px;padding:.375rem;border-radius:5px;-webkit-transition:none;transition:none}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar.compacted[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}@media (max-width:767.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]{margin-top:0}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{height:calc(100vh - 4.75rem)!important}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-right-radius:0}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-left-radius:0}.nb-theme-cosmic   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container .scrollable{padding-top:0}.nb-theme-cosmic   [_nghost-%COMP%]   .main-btn[_ngcontent-%COMP%]{display:none}}.nb-theme-corporate   [_nghost-%COMP%]   nb-layout-column.small[_ngcontent-%COMP%]{-webkit-box-flex:.15!important;-ms-flex:.15!important;flex:.15!important}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.settings-sidebar[_ngcontent-%COMP%]{-webkit-transition:width .3s;transition:width .3s ease;width:7.5rem;overflow:hidden}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.settings-sidebar.collapsed[_ngcontent-%COMP%]{width:0}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.settings-sidebar.collapsed[_ngcontent-%COMP%]     .main-container{width:0}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.settings-sidebar.collapsed[_ngcontent-%COMP%]     .main-container .scrollable{width:7.5rem;padding:1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.settings-sidebar[_ngcontent-%COMP%]     .main-container{width:7.5rem;background:#fff;-webkit-transition:width .3s;transition:width .3s ease;overflow:hidden}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.settings-sidebar[_ngcontent-%COMP%]     .main-container .scrollable{width:7.5rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]{margin-top:0;background:0 0}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border:1px solid #cdd5dc;height:calc(100vh - 4.75rem)!important}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-right-radius:.17rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-left-radius:.17rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:0}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .scrollable .menu-item:first-child{border-top:none}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     nb-sidebar-header{padding-bottom:.5rem;text-align:center}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{padding:.75rem 2.5rem;margin-top:-2rem;font-weight:700;-webkit-transition:padding .3s cubic-bezier(.18,.89,.32,1.48);transition:padding .3s cubic-bezier(.18,.89,.32,1.48);border-radius:.17rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2rem;text-shadow:0 1px 1px rgba(0,0,0,.2)}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:.25rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:.25rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:middle}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     nb-menu .nb-e-commerce{font-size:2rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar.compacted[_ngcontent-%COMP%]     nb-sidebar-header{padding-left:0;padding-right:0}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar.compacted[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{width:46px;height:44px;padding:.375rem;border-radius:5px;-webkit-transition:none;transition:none}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar.compacted[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}@media (max-width:399.98px){.nb-theme-default   [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]{padding:.75rem!important}.nb-theme-cosmic   [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]{padding:.75rem!important}.nb-theme-corporate   [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%]{padding:.75rem!important}}@media (max-width:767.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]{margin-top:0}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{height:calc(100vh - 4.75rem)!important}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-right-radius:0}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container{border-top-left-radius:0}.nb-theme-corporate   [_nghost-%COMP%]   nb-sidebar.menu-sidebar[_ngcontent-%COMP%]     .main-container .scrollable{padding-top:0}.nb-theme-corporate   [_nghost-%COMP%]   .main-btn[_ngcontent-%COMP%]{display:none}}"]],
            data: {}
        });

        function on(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 3, "nb-layout-column", [["class", "small"], ["start", ""]], [[2, "left", null], [2, "start", null]], null, null, c.e, c.a)), o["\u0275did"](1, 49152, null, 0, d.a, [], {start: [0, "start"]}, null), (n()(), o["\u0275eld"](2, 0, null, 0, 1, "nb-menu", [], [[2, "inverse", null]], null, null, u.b, u.a)), o["\u0275did"](3, 4440064, null, 0, g.a, [m.f, h.a, b.l], {items: [0, "items"]}, null)], function (n, e) {
                var t = e.component;
                n(e, 1, 0, ""), n(e, 3, 0, t.subMenu)
            }, function (n, e) {
                n(e, 0, 0, o["\u0275nov"](e, 1).leftValue, o["\u0275nov"](e, 1).startValue), n(e, 2, 0, o["\u0275nov"](e, 3).inverseValue)
            })
        }

        function ln(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 3, "nb-layout-column", [["class", "small"]], [[2, "left", null], [2, "start", null]], null, null, c.e, c.a)), o["\u0275did"](1, 49152, null, 0, d.a, [], null, null), (n()(), o["\u0275eld"](2, 0, null, 0, 1, "nb-menu", [], [[2, "inverse", null]], null, null, u.b, u.a)), o["\u0275did"](3, 4440064, null, 0, g.a, [m.f, h.a, b.l], {items: [0, "items"]}, null)], function (n, e) {
                n(e, 3, 0, e.component.subMenu)
            }, function (n, e) {
                n(e, 0, 0, o["\u0275nov"](e, 1).leftValue, o["\u0275nov"](e, 1).startValue), n(e, 2, 0, o["\u0275nov"](e, 3).inverseValue)
            })
        }

        function an(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 23, "nb-layout", [["windowMode", ""]], [[2, "window-mode", null], [2, "with-scroll", null], [2, "with-subheader", null]], [["window", "scroll"], ["window", "resize"]], function (n, e, t) {
                var l = !0;
                return "window:scroll" === e && (l = !1 !== o["\u0275nov"](n, 1).onScroll(t) && l), "window:resize" === e && (l = !1 !== o["\u0275nov"](n, 1).onResize(t) && l), l
            }, c.f, c.b)), o["\u0275did"](1, 4374528, null, 0, d.b, [p.a, f.a, o.ElementRef, o.Renderer2, m.f, m.b, o.PLATFORM_ID, C.c, O.a, P.a, M.a, _.a], {
                center: [0, "center"],
                windowMode: [1, "windowMode"]
            }, null), (n()(), o["\u0275eld"](2, 0, null, 0, 3, "nb-layout-header", [["fixed", ""]], [[2, "fixed", null], [2, "subheader", null]], null, null, c.h, c.d)), o["\u0275did"](3, 49152, null, 0, d.d, [d.b], {fixed: [0, "fixed"]}, null), (n()(), o["\u0275eld"](4, 0, null, 0, 1, "ngx-header", [], null, null, null, V, L)), o["\u0275did"](5, 114688, null, 0, w.a, [y.a, h.b, v.a, k.a, A.a, b.l, z.a, S.a], {position: [0, "position"]}, null), (n()(), o["\u0275eld"](6, 0, null, 1, 2, "nb-sidebar", [["class", "menu-sidebar"], ["responsive", ""], ["tag", "menu-sidebar"]], [[2, "fixed", null], [2, "right", null], [2, "left", null], [2, "start", null], [2, "end", null], [2, "expanded", null], [2, "collapsed", null], [2, "compacted", null]], null, null, D, T)), o["\u0275did"](7, 770048, null, 0, R.a, [y.a, p.a, o.ElementRef], {
                end: [0, "end"],
                responsive: [1, "responsive"],
                tag: [2, "tag"]
            }, null), o["\u0275ncd"](1, 0), (n()(), o["\u0275eld"](9, 0, null, 3, 2, "nb-layout-column", [["class", "main-content"]], [[2, "left", null], [2, "start", null]], null, null, c.e, c.a)), o["\u0275did"](10, 49152, null, 0, d.a, [], null, null), o["\u0275ncd"](0, 1), (n()(), o["\u0275and"](16777216, null, 3, 1, null, on)), o["\u0275did"](13, 16384, null, 0, x.l, [o.ViewContainerRef, o.TemplateRef], {ngIf: [0, "ngIf"]}, null), (n()(), o["\u0275and"](16777216, null, 3, 1, null, ln)), o["\u0275did"](15, 16384, null, 0, x.l, [o.ViewContainerRef, o.TemplateRef], {ngIf: [0, "ngIf"]}, null), (n()(), o["\u0275eld"](16, 0, null, 4, 3, "nb-layout-footer", [["fixed", ""]], [[2, "fixed", null]], null, null, c.g, c.c)), o["\u0275did"](17, 49152, null, 0, d.c, [], {fixed: [0, "fixed"]}, null), (n()(), o["\u0275eld"](18, 0, null, 0, 1, "ngx-footer", [], null, null, null, G, F)), o["\u0275did"](19, 49152, null, 0, N.a, [], null, null), (n()(), o["\u0275eld"](20, 0, null, 1, 3, "nb-sidebar", [["class", "settings-sidebar"], ["fixed", ""], ["state", "collapsed"], ["tag", "settings-sidebar"]], [[2, "fixed", null], [2, "right", null], [2, "left", null], [2, "start", null], [2, "end", null], [2, "expanded", null], [2, "collapsed", null], [2, "compacted", null]], null, null, D, T)), o["\u0275did"](21, 770048, null, 0, R.a, [y.a, p.a, o.ElementRef], {
                end: [0, "end"],
                fixed: [1, "fixed"],
                state: [2, "state"],
                tag: [3, "tag"]
            }, null), (n()(), o["\u0275eld"](22, 0, null, 1, 1, "ngx-theme-settings", [], null, null, null, Q, J)), o["\u0275did"](23, 49152, null, 0, K.a, [q.a], null, null)], function (n, e) {
                var t = e.component;
                n(e, 1, 0, "center-column" === t.layout.id, ""), n(e, 3, 0, ""), n(e, 5, 0, "start" === t.sidebar.id ? "normal" : "inverse"), n(e, 7, 0, "end" === t.sidebar.id, "", "menu-sidebar"), n(e, 13, 0, "two-column" === t.layout.id || "three-column" === t.layout.id), n(e, 15, 0, "three-column" === t.layout.id), n(e, 17, 0, ""), n(e, 21, 0, "end" !== t.sidebar.id, "", "collapsed", "settings-sidebar")
            }, function (n, e) {
                n(e, 0, 0, o["\u0275nov"](e, 1).windowModeValue, o["\u0275nov"](e, 1).withScrollValue, o["\u0275nov"](e, 1).withSubheader), n(e, 2, 0, o["\u0275nov"](e, 3).fixedValue, o["\u0275nov"](e, 3).subheaderValue), n(e, 6, 0, o["\u0275nov"](e, 7).fixedValue, o["\u0275nov"](e, 7).rightValue, o["\u0275nov"](e, 7).leftValue, o["\u0275nov"](e, 7).startValue, o["\u0275nov"](e, 7).endValue, o["\u0275nov"](e, 7).expanded, o["\u0275nov"](e, 7).collapsed, o["\u0275nov"](e, 7).compacted), n(e, 9, 0, o["\u0275nov"](e, 10).leftValue, o["\u0275nov"](e, 10).startValue), n(e, 16, 0, o["\u0275nov"](e, 17).fixedValue), n(e, 20, 0, o["\u0275nov"](e, 21).fixedValue, o["\u0275nov"](e, 21).rightValue, o["\u0275nov"](e, 21).leftValue, o["\u0275nov"](e, 21).startValue, o["\u0275nov"](e, 21).endValue, o["\u0275nov"](e, 21).expanded, o["\u0275nov"](e, 21).collapsed, o["\u0275nov"](e, 21).compacted)
            })
        }

        var rn = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]     nb-datepicker-container .arrow::after, .nb-theme-default   [_nghost-%COMP%]     nb-popover .arrow::after{border-left-width:calc(11px - 2px);border-right-width:calc(11px - 2px);border-bottom-width:calc(11px - 2px)}.nb-theme-default   [_nghost-%COMP%]   .nb-theme-cosmic[_ngcontent-%COMP%]   nb-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{font-size:2rem!important}.nb-theme-cosmic   [_nghost-%COMP%]     nb-datepicker-container .arrow::after, .nb-theme-cosmic   [_nghost-%COMP%]     nb-popover .arrow::after{border-left-width:calc(11px - 2px);border-right-width:calc(11px - 2px);border-bottom-width:calc(11px - 2px)}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-theme-cosmic[_ngcontent-%COMP%]   nb-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{font-size:2rem!important}.nb-theme-corporate   [_nghost-%COMP%]     nb-datepicker-container .arrow::after, .nb-theme-corporate   [_nghost-%COMP%]     nb-popover .arrow::after{border-left-width:calc(11px - 2px);border-right-width:calc(11px - 2px);border-bottom-width:calc(11px - 2px)}.nb-theme-corporate   [_nghost-%COMP%]   .nb-theme-cosmic[_ngcontent-%COMP%]   nb-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{font-size:2rem!important}"]],
            data: {}
        });

        function sn(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 5, "ngx-sample-layout", [], null, null, null, an, tn)), o["\u0275did"](1, 180224, null, 0, nn.a, [q.a, h.b, p.a, en.b, y.a], null, null), (n()(), o["\u0275eld"](2, 0, null, 0, 1, "nb-menu", [], [[2, "inverse", null]], null, null, u.b, u.a)), o["\u0275did"](3, 4440064, null, 0, g.a, [m.f, h.a, b.l], {items: [0, "items"]}, null), (n()(), o["\u0275eld"](4, 16777216, null, 1, 1, "router-outlet", [], null, null, null, null, null)), o["\u0275did"](5, 212992, null, 0, b.o, [b.b, o.ViewContainerRef, o.ComponentFactoryResolver, [8, null], o.ChangeDetectorRef], null, null)], function (n, e) {
                n(e, 3, 0, e.component.menu), n(e, 5, 0)
            }, function (n, e) {
                n(e, 2, 0, o["\u0275nov"](e, 3).inverseValue)
            })
        }

        function cn(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 1, "ngx-pages", [], null, null, null, sn, rn)), o["\u0275did"](1, 114688, null, 0, a, [], null, null)], function (n, e) {
                n(e, 1, 0)
            }, null)
        }

        var dn = o["\u0275ccf"]("ngx-pages", a, cn, {}, {}, []), un = t("4bAE"), gn = t("mc3f"), mn = t("CVdl"),
            hn = t("jvbL"), bn = t("vubp"), pn = (t("TtU4"), t("l84p")), fn = function () {
                return (fn = Object.assign || function (n) {
                    for (var e, t = 1, o = arguments.length; t < o; t++) for (var l in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, l) && (n[l] = e[l]);
                    return n
                }).apply(this, arguments)
            }, Cn = function () {
                function n(n, e, t) {
                    var o = this;
                    this.theme = n, this.layoutService = e, this.dashboardClient = t, this.alive = !0, this.labels = [], this.layoutService.onChangeLayoutSize().pipe(Object(hn.a)(function () {
                        return o.alive
                    })).subscribe(function () {
                        return o.resizeChart()
                    }), this.getChartData()
                }

                return n.prototype.getChartData = function () {
                    var n = this;
                    this.dashboardClient.userAnalytics().subscribe(function (e) {
                        n.data = e.chart.linesData[0].map(function (n, t) {
                            return {label: e.chart.chartLabel[t], value: n}
                        });
                        var t = n.option, o = n.getNewSeries(t.series, n.data), l = n.getNewXAxis(t.xAxis, n.data);
                        n.option = fn({}, t, {xAxis: l, series: o})
                    })
                }, n.prototype.ngAfterViewInit = function () {
                    var n = this;
                    this.theme.getJsTheme().pipe(Object(bn.a)(1), Object(hn.a)(function () {
                        return n.alive
                    })).subscribe(function (e) {
                        n.setOptions(e.variables.visitors)
                    })
                }, n.prototype.setOptions = function (n) {
                    this.option = {
                        grid: {left: 40, top: 20, right: 0, bottom: 60},
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {type: "line", lineStyle: {color: n.tooltipLineColor, width: n.tooltipLineWidth}},
                            textStyle: {color: n.tooltipTextColor, fontSize: 20, fontWeight: n.tooltipFontWeight},
                            position: "top",
                            backgroundColor: n.tooltipBg,
                            borderColor: n.tooltipBorderColor,
                            borderWidth: 3,
                            formatter: function (n) {
                                return Math.round(parseInt(n[0].value, 10))
                            },
                            extraCssText: n.tooltipExtraCss
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: !1,
                            offset: 25,
                            data: [],
                            axisTick: {show: !1},
                            axisLabel: {color: n.axisTextColor, fontSize: n.axisFontSize},
                            axisLine: {lineStyle: {color: n.axisLineColor, width: "2"}}
                        },
                        yAxis: {
                            type: "value",
                            boundaryGap: !1,
                            axisLine: {lineStyle: {color: n.axisLineColor, width: "1"}},
                            axisLabel: {color: n.axisTextColor, fontSize: n.axisFontSize},
                            axisTick: {show: !1},
                            splitLine: {lineStyle: {color: n.yAxisSplitLine, width: "1"}}
                        },
                        series: [this.getOuterLine(n)]
                    }
                }, n.prototype.getOuterLine = function (n) {
                    return {
                        type: "line",
                        smooth: !0,
                        symbolSize: 20,
                        itemStyle: {
                            normal: {opacity: 0},
                            emphasis: {color: "#ffffff", borderColor: n.itemBorderColor, borderWidth: 2, opacity: 1}
                        },
                        lineStyle: {
                            normal: {
                                width: n.lineWidth,
                                type: n.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: n.lineGradFrom
                                }, {offset: 1, color: n.lineGradTo}]),
                                shadowColor: n.lineShadow,
                                shadowBlur: 6,
                                shadowOffsetY: 12
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: n.areaGradFrom
                                }, {offset: 1, color: n.areaGradTo}])
                            }
                        },
                        data: []
                    }
                }, n.prototype.onChartInit = function (n) {
                    this.echartsIntance = n
                }, n.prototype.resizeChart = function () {
                    this.echartsIntance && this.echartsIntance.resize()
                }, n.prototype.ngOnDestroy = function () {
                    this.alive = !1
                }, n.prototype.getNewSeries = function (n, e) {
                    var t = this;
                    return n.map(function (n, e) {
                        return fn({}, n, {
                            data: t.data.map(function (n) {
                                return n.value
                            })
                        })
                    })
                }, n.prototype.getNewXAxis = function (n, e) {
                    return n.data = this.data.map(function (n) {
                        return n.label
                    }), n
                }, n
            }(), On = o["\u0275crt"]({
                encapsulation: 0,
                styles: [[".nb-theme-default   [_nghost-%COMP%]{display:block;height:290px;width:100%}.nb-theme-default   [_nghost-%COMP%]   .echart[_ngcontent-%COMP%]{display:block;height:100%;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]{display:block;height:290px;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   .echart[_ngcontent-%COMP%]{display:block;height:100%;width:100%}.nb-theme-corporate   [_nghost-%COMP%]{display:block;height:290px;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   .echart[_ngcontent-%COMP%]{display:block;height:100%;width:100%}"]],
                data: {}
            });

        function Pn(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 1, "div", [["class", "echart"], ["echarts", ""]], null, [[null, "chartInit"], ["window", "resize"]], function (n, e, t) {
                var l = !0, i = n.component;
                return "window:resize" === e && (l = !1 !== o["\u0275nov"](n, 1).onWindowResize(t) && l), "chartInit" === e && (l = !1 !== i.onChartInit(t) && l), l
            }, null, null)), o["\u0275did"](1, 5128192, null, 0, mn.b, [o.ElementRef, o.NgZone], {options: [0, "options"]}, {chartInit: "chartInit"})], function (n, e) {
                n(e, 1, 0, e.component.option)
            }, null)
        }

        var Mn = function () {
            function n() {
                this.showVisitorsStatistics = !1
            }

            return n.prototype.toggleStatistics = function () {
                this.showVisitorsStatistics = !this.showVisitorsStatistics
            }, n
        }(), _n = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]   .show-hide-toggle[_ngcontent-%COMP%]{position:absolute;display:block;font-size:2rem;font-weight:600;top:1.5rem;right:1.5rem;cursor:pointer;color:#a4abb3;background-color:transparent;z-index:2}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .show-hide-toggle[_ngcontent-%COMP%]{right:auto;left:1.5rem}.nb-theme-default   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]{position:absolute;padding:1.5rem;width:30%}.nb-theme-default   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]::before{display:block;height:100%;top:0;overflow:hidden;-webkit-transition:.5s ease-out;transition:all .5s ease-out}.nb-theme-default   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]::before{content:'';right:0;width:100%;position:absolute;background:-webkit-gradient(linear,right top,left top,from(#f7fafb),to(#ecf2f5));background:linear-gradient(270deg,#f7fafb 0,#ecf2f5 100%);-webkit-box-shadow:0 4px 14px 0 #a2d2c8;box-shadow:0 4px 14px 0 #a2d2c8;-webkit-filter:blur(3px);filter:blur(3px);opacity:.9;z-index:1}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]::before{right:auto;left:0;-webkit-box-shadow:0 4px 14px 0 #a2d2c8;box-shadow:0 4px 14px 0 #a2d2c8}.nb-theme-default   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{left:calc(100% - 6rem)}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{left:auto;right:calc(100% - 6rem)}.nb-theme-default   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:calc(100% - 30%)}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:auto;right:calc(100% - 30%)}.nb-theme-default   [_nghost-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{z-index:1;position:relative;width:100%;margin:0 6rem;-webkit-transition:.5s ease-out;transition:all .5s ease-out}.nb-theme-default   [_nghost-%COMP%]   .expanded[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin:0}@media (max-width:991.98px){.nb-theme-default   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]{width:50%}.nb-theme-default   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:calc(100% - 50%)}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{right:calc(100% - 50%)}}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   .show-hide-toggle[_ngcontent-%COMP%]{right:.5rem}.nb-theme-default   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]{width:100%}.nb-theme-default   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{left:calc(100% - 3rem)}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{right:calc(100% - 3rem)}.nb-theme-default   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:calc(100% - 100%)}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{right:calc(100% - 100%)}}.nb-theme-cosmic   [_nghost-%COMP%]   .show-hide-toggle[_ngcontent-%COMP%]{position:absolute;display:block;font-size:2rem;font-weight:600;top:1.5rem;right:1.5rem;cursor:pointer;color:#a1a1e5;background-color:transparent;z-index:2}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .show-hide-toggle[_ngcontent-%COMP%]{right:auto;left:1.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]{position:absolute;padding:1.5rem;width:30%}.nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]::before{display:block;height:100%;top:0;overflow:hidden;-webkit-transition:.5s ease-out;transition:all .5s ease-out}.nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]::before{content:'';right:0;width:100%;position:absolute;background:radial-gradient(circle,#302c6e 0,#423f8c 100%);-webkit-box-shadow:2px 0 3px rgba(19,19,94,.9);box-shadow:2px 0 3px rgba(19,19,94,.9);-webkit-filter:blur(3px);filter:blur(3px);opacity:.9;z-index:1}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]::before{right:auto;left:0;-webkit-box-shadow:-2px 0 3px rgba(19,19,94,.9);box-shadow:-2px 0 3px rgba(19,19,94,.9)}.nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{left:calc(100% - 6rem)}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{left:auto;right:calc(100% - 6rem)}.nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:calc(100% - 30%)}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:auto;right:calc(100% - 30%)}.nb-theme-cosmic   [_nghost-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{z-index:1;position:relative;width:100%;margin:0 6rem;-webkit-transition:.5s ease-out;transition:all .5s ease-out}.nb-theme-cosmic   [_nghost-%COMP%]   .expanded[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin:0}@media (max-width:991.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]{width:50%}.nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:calc(100% - 50%)}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{right:calc(100% - 50%)}}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .show-hide-toggle[_ngcontent-%COMP%]{right:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]{width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{left:calc(100% - 3rem)}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{right:calc(100% - 3rem)}.nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:calc(100% - 100%)}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{right:calc(100% - 100%)}}.nb-theme-corporate   [_nghost-%COMP%]   .show-hide-toggle[_ngcontent-%COMP%]{position:absolute;display:block;font-size:2rem;font-weight:600;top:1.5rem;right:1.5rem;cursor:pointer;color:#a4abb3;background-color:transparent;z-index:2}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .show-hide-toggle[_ngcontent-%COMP%]{right:auto;left:1.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]{position:absolute;padding:1.5rem;width:30%}.nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]::before{display:block;height:100%;top:0;overflow:hidden;-webkit-transition:.5s ease-out;transition:all .5s ease-out}.nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]::before{content:'';right:0;width:100%;position:absolute;background:-webkit-gradient(linear,right top,left top,from(#f7fafb),to(#ecf2f5));background:linear-gradient(270deg,#f7fafb 0,#ecf2f5 100%);-webkit-box-shadow:0 4px 14px 0 #a2d2c8;box-shadow:0 4px 14px 0 #a2d2c8;-webkit-filter:blur(3px);filter:blur(3px);opacity:.9;z-index:1}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]::before{right:auto;left:0;-webkit-box-shadow:0 4px 14px 0 #a2d2c8;box-shadow:0 4px 14px 0 #a2d2c8}.nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{left:calc(100% - 6rem)}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{left:auto;right:calc(100% - 6rem)}.nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:calc(100% - 30%)}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:auto;right:calc(100% - 30%)}.nb-theme-corporate   [_nghost-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{z-index:1;position:relative;width:100%;margin:0 6rem;-webkit-transition:.5s ease-out;transition:all .5s ease-out}.nb-theme-corporate   [_nghost-%COMP%]   .expanded[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin:0}@media (max-width:991.98px){.nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]{width:50%}.nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:calc(100% - 50%)}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{right:calc(100% - 50%)}}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   .show-hide-toggle[_ngcontent-%COMP%]{right:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container[_ngcontent-%COMP%]{width:100%}.nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{left:calc(100% - 3rem)}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container.collapsed[_ngcontent-%COMP%]{right:calc(100% - 3rem)}.nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{left:calc(100% - 100%)}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .slide-out-container.expanded[_ngcontent-%COMP%]{right:calc(100% - 100%)}}"]],
            data: {}
        });

        function xn(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 0, "i", [["class", "show-hide-toggle"]], [[2, "nb-arrow-thin-left", null], [2, "nb-arrow-thin-right", null]], [[null, "click"]], function (n, e, t) {
                var o = !0;
                return "click" === e && (o = !1 !== n.component.toggleStatistics() && o), o
            }, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 2, "div", [["class", "slide-out-container"]], [[2, "expanded", null], [2, "collapsed", null]], null, null, null, null)), (n()(), o["\u0275eld"](2, 0, null, null, 1, "div", [["class", "content-wrapper"]], null, null, null, null, null)), o["\u0275ncd"](null, 0)], null, function (n, e) {
                var t = e.component;
                n(e, 0, 0, !t.showVisitorsStatistics, t.showVisitorsStatistics), n(e, 1, 0, t.showVisitorsStatistics, !t.showVisitorsStatistics)
            })
        }

        var wn = function () {
            return function () {
                this.legendItems = []
            }
        }(), yn = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]   .legends[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;color:#a4abb3;padding:0 0 0 2.85rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .legends[_ngcontent-%COMP%]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.nb-theme-default   [_nghost-%COMP%]   .legend[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;margin-left:4rem}.nb-theme-default   [_nghost-%COMP%]   .legend[_ngcontent-%COMP%]:first-child{margin-left:0}.nb-theme-default   [_nghost-%COMP%]   .legend-item-color[_ngcontent-%COMP%]{min-width:15px;min-height:15px;border-radius:.2rem}.nb-theme-default   [_nghost-%COMP%]   .legend-title[_ngcontent-%COMP%]{padding:0 .75rem;white-space:nowrap}@media (max-width:991.98px){.nb-theme-default   [_nghost-%COMP%]   .legend[_ngcontent-%COMP%]{margin-left:1.5rem}}.nb-theme-cosmic   [_nghost-%COMP%]   .legends[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;color:#a1a1e5;padding:0 0 0 2.85rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .legends[_ngcontent-%COMP%]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.nb-theme-cosmic   [_nghost-%COMP%]   .legend[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;margin-left:4rem}.nb-theme-cosmic   [_nghost-%COMP%]   .legend[_ngcontent-%COMP%]:first-child{margin-left:0}.nb-theme-cosmic   [_nghost-%COMP%]   .legend-item-color[_ngcontent-%COMP%]{min-width:15px;min-height:15px;border-radius:.2rem}.nb-theme-cosmic   [_nghost-%COMP%]   .legend-title[_ngcontent-%COMP%]{padding:0 .75rem;white-space:nowrap}@media (max-width:991.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .legend[_ngcontent-%COMP%]{margin-left:1.5rem}}.nb-theme-corporate   [_nghost-%COMP%]   .legends[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;color:#a4abb3;padding:0 0 0 2.85rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .legends[_ngcontent-%COMP%]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.nb-theme-corporate   [_nghost-%COMP%]   .legend[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;margin-left:4rem}.nb-theme-corporate   [_nghost-%COMP%]   .legend[_ngcontent-%COMP%]:first-child{margin-left:0}.nb-theme-corporate   [_nghost-%COMP%]   .legend-item-color[_ngcontent-%COMP%]{min-width:15px;min-height:15px;border-radius:.2rem}.nb-theme-corporate   [_nghost-%COMP%]   .legend-title[_ngcontent-%COMP%]{padding:0 .75rem;white-space:nowrap}@media (max-width:991.98px){.nb-theme-corporate   [_nghost-%COMP%]   .legend[_ngcontent-%COMP%]{margin-left:1.5rem}}"]],
            data: {}
        });

        function vn(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 3, "div", [["class", "legend"]], null, null, null, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 0, "div", [["class", "legend-item-color"]], [[4, "background", null]], null, null, null, null)), (n()(), o["\u0275eld"](2, 0, null, null, 1, "div", [["class", "legend-title"]], null, null, null, null, null)), (n()(), o["\u0275ted"](3, null, ["", ""]))], null, function (n, e) {
                n(e, 1, 0, e.context.$implicit.iconColor), n(e, 3, 0, e.context.$implicit.title)
            })
        }

        function kn(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 2, "div", [["class", "legends"]], null, null, null, null, null)), (n()(), o["\u0275and"](16777216, null, null, 1, null, vn)), o["\u0275did"](2, 278528, null, 0, x.k, [o.ViewContainerRef, o.TemplateRef, o.IterableDiffers], {ngForOf: [0, "ngForOf"]}, null)], function (n, e) {
                n(e, 2, 0, e.component.legendItems)
            }, null)
        }

        var An = function () {
            function n(n, e, t) {
                var o = this;
                this.theme = n, this.dashboardClient = e, this.layoutService = t, this.alive = !0, this.value = 75, this.option = {}, this.total = 0, this.customersPercent = 0, this.storesPercent = 0, this.layoutService.onChangeLayoutSize().pipe(Object(hn.a)(function () {
                    return o.alive
                })).subscribe(function () {
                    return o.resizeChart()
                })
            }

            return n.prototype.ngAfterViewInit = function () {
                this.getChartData()
            }, n.prototype.getChartData = function () {
                var n = this;
                this.dashboardClient.userStatitics().subscribe(function (e) {
                    n.total = e.total, n.customersPercent = e.customers / e.total * 100, n.storesPercent = e.stores / e.total * 100, n.theme.getJsTheme().pipe(Object(hn.a)(function () {
                        return n.alive
                    }), Object(bn.a)(1)).subscribe(function (e) {
                        var t = e.variables.visitorsPieLegend;
                        n.setOptions(e.variables), n.setLegendItems(t)
                    })
                })
            }, n.prototype.setLegendItems = function (n) {
                this.chartLegend = [{iconColor: n.firstSection, title: "Customers"}, {
                    iconColor: n.secondSection,
                    title: "Others"
                }]
            }, n.prototype.setOptions = function (n) {
                var e = n.visitorsPie;
                this.option = {
                    tooltip: {trigger: "item", formatter: ""},
                    series: [{
                        name: " ",
                        clockWise: !0,
                        hoverAnimation: !0,
                        type: "pie",
                        center: ["50%", "50%"],
                        radius: e.firstPieRadius,
                        data: [{
                            value: this.customersPercent,
                            name: " ",
                            label: {
                                normal: {
                                    position: "center",
                                    formatter: "",
                                    textStyle: {
                                        fontSize: "22",
                                        fontFamily: n.fontSecondary,
                                        fontWeight: "600",
                                        color: n.fgHeading
                                    }
                                }
                            },
                            tooltip: {show: !0},
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: e.secondPieGradientLeft
                                    }, {offset: 1, color: e.secondPieGradientRight}]),
                                    shadowColor: e.secondPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: e.shadowOffsetX,
                                    shadowOffsetY: e.shadowOffsetY
                                }
                            },
                            hoverAnimation: !0
                        }, {
                            value: 100 - this.customersPercent,
                            name: " ",
                            tooltip: {show: !0},
                            label: {normal: {position: "inner"}},
                            itemStyle: {normal: {color: n.layoutBg}}
                        }]
                    }, {
                        name: " ",
                        clockWise: !0,
                        hoverAnimation: !0,
                        type: "pie",
                        center: ["50%", "50%"],
                        radius: e.secondPieRadius,
                        data: [{
                            value: this.customersPercent,
                            name: " ",
                            label: {
                                normal: {
                                    position: "center",
                                    formatter: "",
                                    textStyle: {
                                        fontSize: "22",
                                        fontFamily: n.fontSecondary,
                                        fontWeight: "600",
                                        color: n.fgHeading
                                    }
                                }
                            },
                            tooltip: {show: !1},
                            itemStyle: {normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1)}},
                            hoverAnimation: !1
                        }, {
                            value: 100 - this.customersPercent,
                            name: " ",
                            tooltip: {show: !0},
                            label: {normal: {position: "inner"}},
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: e.firstPieGradientLeft
                                    }, {offset: 1, color: e.firstPieGradientRight}]),
                                    shadowColor: e.firstPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3
                                }
                            }
                        }]
                    }]
                }
            }, n.prototype.onChartInit = function (n) {
                this.echartsIntance = n
            }, n.prototype.resizeChart = function () {
                this.echartsIntance && this.echartsIntance.resize()
            }, n.prototype.ngOnDestroy = function () {
                this.alive = !1
            }, n.prototype.roundNumber = function (n) {
                return Math.round(n)
            }, n
        }(), zn = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]   .visitors-value[_ngcontent-%COMP%]{font-size:3rem;font-weight:300;color:#2a2a2a;line-height:.8}.nb-theme-default   [_nghost-%COMP%]   .visitors-title[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.25rem;color:#a4abb3}.nb-theme-default   [_nghost-%COMP%]   .visitors-statistics[_ngcontent-%COMP%]{width:100%}.nb-theme-default   [_nghost-%COMP%]   .statistics-chart[_ngcontent-%COMP%]{margin-top:3.5rem;margin-bottom:1.5rem;width:100%}.nb-theme-default   [_nghost-%COMP%]   .statistics-chart[_ngcontent-%COMP%]   .echart[_ngcontent-%COMP%]{display:block;height:190px;width:100%}.nb-theme-default   [_nghost-%COMP%]   .chart-values[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}.nb-theme-default   [_nghost-%COMP%]   .chart-value[_ngcontent-%COMP%]{color:#2a2a2a;font-size:2rem;font-weight:600;margin-bottom:1rem;-webkit-box-flex:1;-ms-flex:1;flex:1}.nb-theme-default   [_nghost-%COMP%]   .visitors-statistics-legend[_ngcontent-%COMP%]     .legends{padding:0;margin-left:0}.nb-theme-default   [_nghost-%COMP%]   .visitors-statistics-legend[_ngcontent-%COMP%]     .legend{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.nb-theme-cosmic   [_nghost-%COMP%]   .visitors-value[_ngcontent-%COMP%]{font-size:3rem;font-weight:300;color:#fff;line-height:.8}.nb-theme-cosmic   [_nghost-%COMP%]   .visitors-title[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.25rem;color:#a1a1e5}.nb-theme-cosmic   [_nghost-%COMP%]   .visitors-statistics[_ngcontent-%COMP%]{width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   .statistics-chart[_ngcontent-%COMP%]{margin-top:3.5rem;margin-bottom:1.5rem;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   .statistics-chart[_ngcontent-%COMP%]   .echart[_ngcontent-%COMP%]{display:block;height:190px;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   .chart-values[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}.nb-theme-cosmic   [_nghost-%COMP%]   .chart-value[_ngcontent-%COMP%]{color:#fff;font-size:2rem;font-weight:600;margin-bottom:1rem;-webkit-box-flex:1;-ms-flex:1;flex:1}.nb-theme-cosmic   [_nghost-%COMP%]   .visitors-statistics-legend[_ngcontent-%COMP%]     .legends{padding:0;margin-left:0}.nb-theme-cosmic   [_nghost-%COMP%]   .visitors-statistics-legend[_ngcontent-%COMP%]     .legend{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.nb-theme-corporate   [_nghost-%COMP%]   .visitors-value[_ngcontent-%COMP%]{font-size:3rem;font-weight:300;color:#181818;line-height:.8}.nb-theme-corporate   [_nghost-%COMP%]   .visitors-title[_ngcontent-%COMP%]{margin-top:1rem;font-size:1.25rem;color:#a4abb3}.nb-theme-corporate   [_nghost-%COMP%]   .visitors-statistics[_ngcontent-%COMP%]{width:100%}.nb-theme-corporate   [_nghost-%COMP%]   .statistics-chart[_ngcontent-%COMP%]{margin-top:3.5rem;margin-bottom:1.5rem;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   .statistics-chart[_ngcontent-%COMP%]   .echart[_ngcontent-%COMP%]{display:block;height:190px;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   .chart-values[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}.nb-theme-corporate   [_nghost-%COMP%]   .chart-value[_ngcontent-%COMP%]{color:#181818;font-size:2rem;font-weight:600;margin-bottom:1rem;-webkit-box-flex:1;-ms-flex:1;flex:1}.nb-theme-corporate   [_nghost-%COMP%]   .visitors-statistics-legend[_ngcontent-%COMP%]     .legends{padding:0;margin-left:0}.nb-theme-corporate   [_nghost-%COMP%]   .visitors-statistics-legend[_ngcontent-%COMP%]     .legend{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}"]],
            data: {}
        });

        function Sn(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 16, "div", [["class", "visitors-statistics"]], null, null, null, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 4, "div", [["class", "statistics-header"]], null, null, null, null, null)), (n()(), o["\u0275eld"](2, 0, null, null, 1, "div", [["class", "visitors-value"]], null, null, null, null, null)), (n()(), o["\u0275ted"](3, null, ["", ""])), (n()(), o["\u0275eld"](4, 0, null, null, 1, "div", [["class", "visitors-title"]], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["Users"])), (n()(), o["\u0275eld"](6, 0, null, null, 2, "div", [["class", "statistics-chart"]], null, null, null, null, null)), (n()(), o["\u0275eld"](7, 0, null, null, 1, "div", [["class", "echart"], ["echarts", ""]], null, [[null, "chartInit"], ["window", "resize"]], function (n, e, t) {
                var l = !0, i = n.component;
                return "window:resize" === e && (l = !1 !== o["\u0275nov"](n, 8).onWindowResize(t) && l), "chartInit" === e && (l = !1 !== i.onChartInit(t) && l), l
            }, null, null)), o["\u0275did"](8, 5128192, null, 0, mn.b, [o.ElementRef, o.NgZone], {options: [0, "options"]}, {chartInit: "chartInit"}), (n()(), o["\u0275eld"](9, 0, null, null, 7, "div", [["class", "statistics-footer"]], null, null, null, null, null)), (n()(), o["\u0275eld"](10, 0, null, null, 4, "div", [["class", "chart-values"]], null, null, null, null, null)), (n()(), o["\u0275eld"](11, 0, null, null, 1, "span", [["class", "chart-value"]], null, null, null, null, null)), (n()(), o["\u0275ted"](12, null, ["", "%"])), (n()(), o["\u0275eld"](13, 0, null, null, 1, "span", [["class", "chart-value"]], null, null, null, null, null)), (n()(), o["\u0275ted"](14, null, ["", "%"])), (n()(), o["\u0275eld"](15, 0, null, null, 1, "ngx-legend-chart", [["class", "visitors-statistics-legend"]], null, null, null, kn, yn)), o["\u0275did"](16, 49152, null, 0, wn, [], {legendItems: [0, "legendItems"]}, null)], function (n, e) {
                var t = e.component;
                n(e, 8, 0, t.option), n(e, 16, 0, t.chartLegend)
            }, function (n, e) {
                var t = e.component;
                n(e, 3, 0, t.total), n(e, 12, 0, t.roundNumber(t.customersPercent)), n(e, 14, 0, 100 - t.roundNumber(t.customersPercent))
            })
        }

        var Ln = function () {
            function n(n) {
                var e = this;
                this.themeService = n, this.alive = !0, this.themeService.getJsTheme().pipe(Object(hn.a)(function () {
                    return e.alive
                })).subscribe(function (n) {
                    e.setLegendItems(n.variables.visitorsLegend)
                })
            }

            return n.prototype.setLegendItems = function (n) {
                this.chartLegend = [{iconColor: n.firstIcon, title: "New Users"}]
            }, n.prototype.ngOnDestroy = function () {
                this.alive = !1
            }, n
        }(), jn = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]{position:relative;display:block;overflow:hidden}.nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{position:relative}.nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{color:#a4abb3}.nb-theme-default   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.nb-theme-default   [_nghost-%COMP%]   .chart-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden;position:relative}.nb-theme-default   [_nghost-%COMP%]   .chart-header[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:2.125rem}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   ngx-legend-chart[_ngcontent-%COMP%]     .legends{padding-left:0;font-size:.875rem}}.nb-theme-cosmic   [_nghost-%COMP%]{position:relative;display:block;overflow:hidden}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{position:relative}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{color:#a1a1e5}.nb-theme-cosmic   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.nb-theme-cosmic   [_nghost-%COMP%]   .chart-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden;position:relative}.nb-theme-cosmic   [_nghost-%COMP%]   .chart-header[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:2.125rem}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   ngx-legend-chart[_ngcontent-%COMP%]     .legends{padding-left:0;font-size:.875rem}}.nb-theme-corporate   [_nghost-%COMP%]{position:relative;display:block;overflow:hidden}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{position:relative}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{color:#a4abb3}.nb-theme-corporate   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.nb-theme-corporate   [_nghost-%COMP%]   .chart-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden;position:relative}.nb-theme-corporate   [_nghost-%COMP%]   .chart-header[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:2.125rem}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   ngx-legend-chart[_ngcontent-%COMP%]     .legends{padding-left:0;font-size:.875rem}}"]],
            data: {}
        });

        function In(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 16, "nb-card", [["size", "medium"]], [[2, "xxsmall-card", null], [2, "xsmall-card", null], [2, "small-card", null], [2, "medium-card", null], [2, "large-card", null], [2, "xlarge-card", null], [2, "xxlarge-card", null], [2, "active-card", null], [2, "disabled-card", null], [2, "primary-card", null], [2, "info-card", null], [2, "success-card", null], [2, "warning-card", null], [2, "danger-card", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-active", null], [2, "accent-disabled", null]], null, null, un.e, un.b)), o["\u0275did"](1, 49152, null, 0, gn.b, [], {setSize: [0, "setSize"]}, null), (n()(), o["\u0275eld"](2, 0, null, 0, 5, "nb-card-header", [], null, null, null, un.f, un.c)), o["\u0275did"](3, 49152, null, 0, gn.d, [], null, null), (n()(), o["\u0275eld"](4, 0, null, 0, 1, "div", [["class", "title"]], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["New User Analytics"])), (n()(), o["\u0275eld"](6, 0, null, 0, 1, "div", [["class", "sub-title"]], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["New Users registered in given period of time"])), (n()(), o["\u0275eld"](8, 0, null, 1, 4, "nb-card-body", [], null, null, null, un.d, un.a)), o["\u0275did"](9, 49152, null, 0, gn.a, [], null, null), (n()(), o["\u0275eld"](10, 0, null, 0, 2, "div", [["class", "chart-container"]], null, null, null, null, null)), (n()(), o["\u0275eld"](11, 0, null, null, 1, "ngx-visitors-analytics-chart", [], null, null, null, Pn, On)), o["\u0275did"](12, 4374528, null, 0, Cn, [p.a, A.a, pn.a], null, null), (n()(), o["\u0275eld"](13, 0, null, 2, 3, "ngx-slide-out", [], null, null, null, xn, _n)), o["\u0275did"](14, 49152, null, 0, Mn, [], {showVisitorsStatistics: [0, "showVisitorsStatistics"]}, null), (n()(), o["\u0275eld"](15, 0, null, 0, 1, "ngx-visitors-statistics", [], null, null, null, Sn, zn)), o["\u0275did"](16, 4374528, null, 0, An, [p.a, pn.a, A.a], null, null)], function (n, e) {
                n(e, 1, 0, "medium"), n(e, 14, 0, !0)
            }, function (n, e) {
                n(e, 0, 1, [o["\u0275nov"](e, 1).xxsmall, o["\u0275nov"](e, 1).xsmall, o["\u0275nov"](e, 1).small, o["\u0275nov"](e, 1).medium, o["\u0275nov"](e, 1).large, o["\u0275nov"](e, 1).xlarge, o["\u0275nov"](e, 1).xxlarge, o["\u0275nov"](e, 1).active, o["\u0275nov"](e, 1).disabled, o["\u0275nov"](e, 1).primary, o["\u0275nov"](e, 1).info, o["\u0275nov"](e, 1).success, o["\u0275nov"](e, 1).warning, o["\u0275nov"](e, 1).danger, o["\u0275nov"](e, 1).hasAccent, o["\u0275nov"](e, 1).primaryAccent, o["\u0275nov"](e, 1).infoAccent, o["\u0275nov"](e, 1).successAccent, o["\u0275nov"](e, 1).warningAccent, o["\u0275nov"](e, 1).dangerAccent, o["\u0275nov"](e, 1).activeAccent, o["\u0275nov"](e, 1).disabledAccent])
            })
        }

        var Vn = t("D2gF"), Rn = t("j5V/"), Tn = t("3FdN"), Dn = t("TXfF"), Nn = t("zKQG"),
            Fn = o["\u0275crt"]({encapsulation: 2, styles: [], data: {}});

        function Gn(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 1, "div", [["class", "agm-info-window-content"]], null, null, null, null, null)), o["\u0275ncd"](null, 0)], null, null)
        }

        var Bn = t("2K56"), Xn = t("+IUk"), Wn = t("uaGE"), En = t("jeoQ"), Zn = t("jJjB"), Un = t("6bMv"),
            $n = t("y+xJ"), Kn = t("fNGB"), qn = t("4Jtj"), Jn = t("rX1C"), Hn = t("Izlp"), Yn = t("7W/L"),
            Qn = (t("9SHn"), function () {
                function n(n) {
                    this.dashboardClient = n, this.lat = 51.678418, this.lng = 7.809007, this.activeOrders = [], this.activeDelivery = []
                }

                return n.prototype.ngAfterViewInit = function () {
                }, n.prototype.onMapReady = function (n) {
                    var e = this;
                    this.dashboardClient.activeOrders().subscribe(function (t) {
                        e.activeOrders = t;
                        for (var o = new google.maps.LatLngBounds, l = 0, i = e.activeOrders; l < i.length; l++) {
                            var a = i[l];
                            o.extend(new google.maps.LatLng(a.address.latitude, a.address.longitude))
                        }
                        n.fitBounds(o)
                    })
                }, n.prototype.onDeliveryMapReady = function (n) {
                    var e = this;
                    this.dashboardClient.activeDelivery().subscribe(function (t) {
                        e.activeDelivery = t;
                        for (var o = new google.maps.LatLngBounds, l = 0, i = e.activeDelivery; l < i.length; l++) {
                            var a = i[l];
                            o.extend(new google.maps.LatLng(a.latitude, a.longitude))
                        }
                        n.fitBounds(o)
                    })
                }, n
            }()), ne = o["\u0275crt"]({
                encapsulation: 0,
                styles: [[".nb-theme-default   [_nghost-%COMP%]{position:relative;display:block;overflow:hidden}.nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{position:relative;height:600px}.nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{color:#a4abb3}.nb-theme-default   [_nghost-%COMP%]     agm-map{width:100%;height:576px}.nb-theme-cosmic   [_nghost-%COMP%]{position:relative;display:block;overflow:hidden}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{position:relative;height:600px}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{color:#a1a1e5}.nb-theme-cosmic   [_nghost-%COMP%]     agm-map{width:100%;height:576px}.nb-theme-corporate   [_nghost-%COMP%]{position:relative;display:block;overflow:hidden}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{position:relative;height:600px}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{color:#a4abb3}.nb-theme-corporate   [_nghost-%COMP%]     agm-map{width:100%;height:576px}"]],
                data: {}
            });

        function ee(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 38, "agm-marker", [["label", "C"]], null, null, null, null, null)), o["\u0275prd"](6144, null, Vn.a, null, [Rn.a]), o["\u0275did"](2, 1720320, null, 1, Rn.a, [Tn.a], {
                latitude: [0, "latitude"],
                longitude: [1, "longitude"],
                label: [2, "label"]
            }, null), o["\u0275qud"](603979776, 4, {infoWindow: 1}), (n()(), o["\u0275eld"](4, 0, null, null, 34, "agm-info-window", [], null, null, null, Gn, Fn)), o["\u0275did"](5, 770048, [[4, 4]], 0, Dn.a, [Nn.a, o.ElementRef], {disableAutoPan: [0, "disableAutoPan"]}, null), (n()(), o["\u0275eld"](6, 0, null, 0, 32, "div", [["class", "container col-xs-10"]], null, null, null, null, null)), (n()(), o["\u0275eld"](7, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (n()(), o["\u0275eld"](8, 0, null, null, 6, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (n()(), o["\u0275eld"](9, 0, null, null, 5, "div", [["class", "page-header"]], null, null, null, null, null)), (n()(), o["\u0275eld"](10, 0, null, null, 4, "h3", [], null, null, null, null, null)), (n()(), o["\u0275eld"](11, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, e, t) {
                var l = !0;
                return "click" === e && (l = !1 !== o["\u0275nov"](n, 12).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l), l
            }, null, null)), o["\u0275did"](12, 671744, null, 0, b.m, [b.l, b.a, x.i], {routerLink: [0, "routerLink"]}, null), o["\u0275pad"](13, 2), (n()(), o["\u0275ted"](14, null, ["Order #", ""])), (n()(), o["\u0275eld"](15, 0, null, null, 8, "div", [["class", "row form-group"]], null, null, null, null, null)), (n()(), o["\u0275eld"](16, 0, null, null, 2, "div", [["class", "col-xs-1 pull-left"]], null, null, null, null, null)), (n()(), o["\u0275eld"](17, 0, null, null, 0, "i", [["class", "fa fa-utensils"]], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["\xa0"])), (n()(), o["\u0275eld"](19, 0, null, null, 4, "div", [["class", "col-xs-9 pull-left"]], null, null, null, null, null)), (n()(), o["\u0275eld"](20, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, e, t) {
                var l = !0;
                return "click" === e && (l = !1 !== o["\u0275nov"](n, 21).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l), l
            }, null, null)), o["\u0275did"](21, 671744, null, 0, b.m, [b.l, b.a, x.i], {routerLink: [0, "routerLink"]}, null), o["\u0275pad"](22, 2), (n()(), o["\u0275ted"](23, null, ["", ""])), (n()(), o["\u0275eld"](24, 0, null, null, 8, "div", [["class", "row form-group"]], null, null, null, null, null)), (n()(), o["\u0275eld"](25, 0, null, null, 2, "div", [["class", "col-xs-1 pull-left"]], null, null, null, null, null)), (n()(), o["\u0275eld"](26, 0, null, null, 0, "i", [["class", "fa fa-user"]], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["\xa0"])), (n()(), o["\u0275eld"](28, 0, null, null, 4, "div", [["class", "col-xs-9 pull-left"]], null, null, null, null, null)), (n()(), o["\u0275eld"](29, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, e, t) {
                var l = !0;
                return "click" === e && (l = !1 !== o["\u0275nov"](n, 30).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l), l
            }, null, null)), o["\u0275did"](30, 671744, null, 0, b.m, [b.l, b.a, x.i], {routerLink: [0, "routerLink"]}, null), o["\u0275pad"](31, 2), (n()(), o["\u0275ted"](32, null, ["", ""])), (n()(), o["\u0275eld"](33, 0, null, null, 5, "div", [["class", "row form-group"]], null, null, null, null, null)), (n()(), o["\u0275eld"](34, 0, null, null, 2, "div", [["class", "col-xs-1 pull-left"]], null, null, null, null, null)), (n()(), o["\u0275eld"](35, 0, null, null, 1, "i", [["class", "fa fa-bookmark"]], null, null, null, null, null)), (n()(), o["\u0275ted"](-1, null, ["\xa0"])), (n()(), o["\u0275eld"](37, 0, null, null, 1, "div", [["class", "col-xs-9 pull-left"]], null, null, null, null, null)), (n()(), o["\u0275ted"](38, null, ["", ""]))], function (n, e) {
                n(e, 2, 0, e.context.$implicit.address.latitude, e.context.$implicit.address.longitude, "C"), n(e, 5, 0, !1);
                var t = n(e, 13, 0, "/pages/orders/edit", e.context.$implicit.id);
                n(e, 12, 0, t);
                var o = n(e, 22, 0, "/pages/stores/edit", e.context.$implicit.store.id);
                n(e, 21, 0, o);
                var l = n(e, 31, 0, "/pages/users/edit", e.context.$implicit.user.id);
                n(e, 30, 0, l)
            }, function (n, e) {
                n(e, 11, 0, o["\u0275nov"](e, 12).target, o["\u0275nov"](e, 12).href), n(e, 14, 0, e.context.$implicit.id), n(e, 20, 0, o["\u0275nov"](e, 21).target, o["\u0275nov"](e, 21).href), n(e, 23, 0, e.context.$implicit.store.name), n(e, 29, 0, o["\u0275nov"](e, 30).target, o["\u0275nov"](e, 30).href), n(e, 32, 0, e.context.$implicit.user.email), n(e, 38, 0, e.context.$implicit.status)
            })
        }

        function te(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 14, "agm-marker", [["label", "D"]], null, null, null, null, null)), o["\u0275prd"](6144, null, Vn.a, null, [Rn.a]), o["\u0275did"](2, 1720320, null, 1, Rn.a, [Tn.a], {
                latitude: [0, "latitude"],
                longitude: [1, "longitude"],
                label: [2, "label"]
            }, null), o["\u0275qud"](603979776, 5, {infoWindow: 1}), (n()(), o["\u0275eld"](4, 0, null, null, 10, "agm-info-window", [], null, null, null, Gn, Fn)), o["\u0275did"](5, 770048, [[5, 4]], 0, Dn.a, [Nn.a, o.ElementRef], {disableAutoPan: [0, "disableAutoPan"]}, null), (n()(), o["\u0275eld"](6, 0, null, 0, 8, "div", [["class", "container col-xs-10"]], null, null, null, null, null)), (n()(), o["\u0275eld"](7, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (n()(), o["\u0275eld"](8, 0, null, null, 6, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (n()(), o["\u0275eld"](9, 0, null, null, 5, "div", [["class", "page-header"]], null, null, null, null, null)), (n()(), o["\u0275eld"](10, 0, null, null, 4, "h3", [], null, null, null, null, null)), (n()(), o["\u0275eld"](11, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (n, e, t) {
                var l = !0;
                return "click" === e && (l = !1 !== o["\u0275nov"](n, 12).onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey) && l), l
            }, null, null)), o["\u0275did"](12, 671744, null, 0, b.m, [b.l, b.a, x.i], {routerLink: [0, "routerLink"]}, null), o["\u0275pad"](13, 2), (n()(), o["\u0275ted"](14, null, ["Delivery Person #", ""]))], function (n, e) {
                n(e, 2, 0, e.context.$implicit.latitude, e.context.$implicit.longitude, "D"), n(e, 5, 0, !1);
                var t = n(e, 13, 0, "/pages/deliveryprofiles/edit", e.context.$implicit.id);
                n(e, 12, 0, t)
            }, function (n, e) {
                n(e, 11, 0, o["\u0275nov"](e, 12).target, o["\u0275nov"](e, 12).href), n(e, 14, 0, e.context.$implicit.id)
            })
        }

        function oe(n) {
            return o["\u0275vid"](0, [o["\u0275qud"](402653184, 1, {agmMap: 0}), o["\u0275qud"](402653184, 2, {deliveryAgmMap: 0}), (n()(), o["\u0275eld"](2, 0, null, null, 36, "nb-card", [["size", "medium"]], [[2, "xxsmall-card", null], [2, "xsmall-card", null], [2, "small-card", null], [2, "medium-card", null], [2, "large-card", null], [2, "xlarge-card", null], [2, "xxlarge-card", null], [2, "active-card", null], [2, "disabled-card", null], [2, "primary-card", null], [2, "info-card", null], [2, "success-card", null], [2, "warning-card", null], [2, "danger-card", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-active", null], [2, "accent-disabled", null]], null, null, un.e, un.b)), o["\u0275did"](3, 49152, null, 0, gn.b, [], {setSize: [0, "setSize"]}, null), (n()(), o["\u0275eld"](4, 0, null, 2, 34, "nb-tabset", [["fullWidth", ""]], [[2, "full-width", null]], null, null, Bn.d, Bn.b)), o["\u0275did"](5, 1097728, null, 1, Xn.b, [b.a, o.ChangeDetectorRef], {fullWidth: [0, "fullWidth"]}, null), o["\u0275qud"](603979776, 3, {tabs: 1}), (n()(), o["\u0275eld"](7, 0, null, 0, 15, "nb-tab", [["tabTitle", "Order Locations"]], [[2, "content-active", null]], null, null, Bn.c, Bn.a)), o["\u0275did"](8, 49152, [[3, 4]], 0, Xn.a, [], {tabTitle: [0, "tabTitle"]}, null), (n()(), o["\u0275eld"](9, 0, null, 0, 13, "agm-map", [], [[2, "sebm-google-map-container", null]], [[null, "mapReady"]], function (n, e, t) {
                var o = !0;
                return "mapReady" === e && (o = !1 !== n.component.onMapReady(t) && o), o
            }, Wn.b, Wn.a)), o["\u0275prd"](4608, null, Tn.a, Tn.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, Nn.a, Nn.a, [En.a, o.NgZone, Tn.a]), o["\u0275prd"](4608, null, Zn.a, Zn.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, Un.a, Un.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, $n.a, $n.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, Kn.a, Kn.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, qn.a, qn.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, Jn.a, Jn.a, [En.a, o.NgZone]), o["\u0275prd"](512, null, En.a, En.a, [Hn.a, o.NgZone]), o["\u0275prd"](512, null, Vn.b, Vn.b, [Hn.a]), o["\u0275did"](20, 770048, [[1, 4], ["AgmMap", 4]], 0, Yn.a, [o.ElementRef, En.a, Vn.b], {
                longitude: [0, "longitude"],
                latitude: [1, "latitude"]
            }, {mapReady: "mapReady"}), (n()(), o["\u0275and"](16777216, null, 0, 1, null, ee)), o["\u0275did"](22, 278528, null, 0, x.k, [o.ViewContainerRef, o.TemplateRef, o.IterableDiffers], {ngForOf: [0, "ngForOf"]}, null), (n()(), o["\u0275eld"](23, 0, null, 0, 15, "nb-tab", [["tabTitle", "Delivery Locations"]], [[2, "content-active", null]], null, null, Bn.c, Bn.a)), o["\u0275did"](24, 49152, [[3, 4]], 0, Xn.a, [], {tabTitle: [0, "tabTitle"]}, null), (n()(), o["\u0275eld"](25, 0, null, 0, 13, "agm-map", [], [[2, "sebm-google-map-container", null]], [[null, "mapReady"]], function (n, e, t) {
                var o = !0;
                return "mapReady" === e && (o = !1 !== n.component.onDeliveryMapReady(t) && o), o
            }, Wn.b, Wn.a)), o["\u0275prd"](4608, null, Tn.a, Tn.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, Nn.a, Nn.a, [En.a, o.NgZone, Tn.a]), o["\u0275prd"](4608, null, Zn.a, Zn.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, Un.a, Un.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, $n.a, $n.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, Kn.a, Kn.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, qn.a, qn.a, [En.a, o.NgZone]), o["\u0275prd"](4608, null, Jn.a, Jn.a, [En.a, o.NgZone]), o["\u0275prd"](512, null, En.a, En.a, [Hn.a, o.NgZone]), o["\u0275prd"](512, null, Vn.b, Vn.b, [Hn.a]), o["\u0275did"](36, 770048, [[2, 4], ["DeliveryAgmMap", 4]], 0, Yn.a, [o.ElementRef, En.a, Vn.b], {
                longitude: [0, "longitude"],
                latitude: [1, "latitude"]
            }, {mapReady: "mapReady"}), (n()(), o["\u0275and"](16777216, null, 0, 1, null, te)), o["\u0275did"](38, 278528, null, 0, x.k, [o.ViewContainerRef, o.TemplateRef, o.IterableDiffers], {ngForOf: [0, "ngForOf"]}, null)], function (n, e) {
                var t = e.component;
                n(e, 3, 0, "medium"), n(e, 5, 0, ""), n(e, 8, 0, "Order Locations"), n(e, 20, 0, t.lng, t.lat), n(e, 22, 0, t.activeOrders), n(e, 24, 0, "Delivery Locations"), n(e, 36, 0, t.lng, t.lat), n(e, 38, 0, t.activeDelivery)
            }, function (n, e) {
                n(e, 2, 1, [o["\u0275nov"](e, 3).xxsmall, o["\u0275nov"](e, 3).xsmall, o["\u0275nov"](e, 3).small, o["\u0275nov"](e, 3).medium, o["\u0275nov"](e, 3).large, o["\u0275nov"](e, 3).xlarge, o["\u0275nov"](e, 3).xxlarge, o["\u0275nov"](e, 3).active, o["\u0275nov"](e, 3).disabled, o["\u0275nov"](e, 3).primary, o["\u0275nov"](e, 3).info, o["\u0275nov"](e, 3).success, o["\u0275nov"](e, 3).warning, o["\u0275nov"](e, 3).danger, o["\u0275nov"](e, 3).hasAccent, o["\u0275nov"](e, 3).primaryAccent, o["\u0275nov"](e, 3).infoAccent, o["\u0275nov"](e, 3).successAccent, o["\u0275nov"](e, 3).warningAccent, o["\u0275nov"](e, 3).dangerAccent, o["\u0275nov"](e, 3).activeAccent, o["\u0275nov"](e, 3).disabledAccent]), n(e, 4, 0, o["\u0275nov"](e, 5).fullWidthValue), n(e, 7, 0, o["\u0275nov"](e, 8).activeValue), n(e, 9, 0, !0), n(e, 23, 0, o["\u0275nov"](e, 24).activeValue), n(e, 25, 0, !0)
            })
        }

        var le = function () {
            return function () {
            }
        }(), ie = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:#ecf2f5;-webkit-box-shadow:none;box-shadow:none;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1.5rem 4rem 1rem;margin-bottom:1rem;border:1px solid #ebeff1;border-left:none;border-right:none}.nb-theme-default   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-size:2rem;color:#2a2a2a}@media (max-width:767.98px){.nb-theme-default   [_nghost-%COMP%]   .title[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-weight:600}.nb-theme-default   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-size:.875rem}.nb-theme-default   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.25rem}}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]{padding-left:1.25rem;padding-right:1.25rem}.nb-theme-default   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{margin-top:.5rem}}.nb-theme-cosmic   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:rgba(0,0,0,.1);-webkit-box-shadow:none;box-shadow:none;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1.5rem 4rem 1rem;margin-bottom:1rem;border:1px solid #332e73;border-left:none;border-right:none}.nb-theme-cosmic   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-size:2rem;color:#fff}@media (max-width:767.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .title[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-weight:600}.nb-theme-cosmic   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-size:.875rem}.nb-theme-cosmic   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.25rem}}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]{padding-left:1.25rem;padding-right:1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{margin-top:.5rem}}.nb-theme-corporate   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:#f7fafb;-webkit-box-shadow:none;box-shadow:none;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1.5rem 4rem 1rem;margin-bottom:1rem;border:1px solid #ebeff1;border-left:none;border-right:none}.nb-theme-corporate   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-size:2rem;color:#181818}@media (max-width:767.98px){.nb-theme-corporate   [_nghost-%COMP%]   .title[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-weight:600}.nb-theme-corporate   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-size:.875rem}.nb-theme-corporate   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.25rem}}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   .summary-container[_ngcontent-%COMP%]{padding-left:1.25rem;padding-right:1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{margin-top:.5rem}}"]],
            data: {}
        });

        function ae(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 4, "div", [["class", "summory"]], null, null, null, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (n()(), o["\u0275ted"](2, null, ["", ""])), (n()(), o["\u0275eld"](3, 0, null, null, 1, "div", [["class", "value"]], null, null, null, null, null)), (n()(), o["\u0275ted"](4, null, ["", ""]))], null, function (n, e) {
                n(e, 2, 0, e.context.$implicit.title), n(e, 4, 0, e.context.$implicit.value)
            })
        }

        function re(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 2, "div", [["class", "summary-container"]], null, null, null, null, null)), (n()(), o["\u0275and"](16777216, null, null, 1, null, ae)), o["\u0275did"](2, 278528, null, 0, x.k, [o.ViewContainerRef, o.TemplateRef, o.IterableDiffers], {ngForOf: [0, "ngForOf"]}, null)], function (n, e) {
                n(e, 2, 0, e.component.summary)
            }, null)
        }

        var se = function () {
            return (se = Object.assign || function (n) {
                for (var e, t = 1, o = arguments.length; t < o; t++) for (var l in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, l) && (n[l] = e[l]);
                return n
            }).apply(this, arguments)
        }, ce = function () {
            function n(n, e) {
                var t = this;
                this.theme = n, this.layoutService = e, this.alive = !0, this.layoutService.onChangeLayoutSize().pipe(Object(hn.a)(function () {
                    return t.alive
                })).subscribe(function () {
                    return t.resizeChart()
                })
            }

            return n.prototype.ngOnChanges = function () {
                this.option && this.updateOrdersChartOptions(this.ordersChartData)
            }, n.prototype.ngAfterViewInit = function () {
                var n = this;
                this.theme.getJsTheme().pipe(Object(hn.a)(function () {
                    return n.alive
                }), Object(bn.a)(1)).subscribe(function (e) {
                    n.setOptions(e.variables.orders), n.updateOrdersChartOptions(n.ordersChartData)
                })
            }, n.prototype.setOptions = function (n) {
                this.option = {
                    grid: {left: 40, top: 20, right: 0, bottom: 40},
                    tooltip: {
                        trigger: "item",
                        axisPointer: {type: "line", lineStyle: {color: n.tooltipLineColor, width: n.tooltipLineWidth}},
                        textStyle: {
                            color: n.tooltipTextColor,
                            fontSize: n.tooltipFontSize,
                            fontWeight: n.tooltipFontWeight
                        },
                        position: "top",
                        backgroundColor: n.tooltipBg,
                        borderColor: n.tooltipBorderColor,
                        borderWidth: 3,
                        formatter: function (n) {
                            return Math.round(parseInt(n.value, 10))
                        },
                        extraCssText: n.tooltipExtraCss
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: !1,
                        offset: 5,
                        data: [],
                        axisTick: {show: !1},
                        axisLabel: {color: n.axisTextColor, fontSize: n.axisFontSize},
                        axisLine: {lineStyle: {color: n.axisLineColor, width: "2"}}
                    },
                    yAxis: {
                        type: "value",
                        boundaryGap: !1,
                        axisLine: {lineStyle: {color: n.axisLineColor, width: "1"}},
                        axisLabel: {color: n.axisTextColor, fontSize: n.axisFontSize},
                        axisTick: {show: !1},
                        splitLine: {lineStyle: {color: n.yAxisSplitLine, width: "1"}}
                    },
                    series: [this.getSecondLine(n)]
                }
            }, n.prototype.getFirstLine = function (n) {
                return {
                    type: "line",
                    smooth: !0,
                    symbolSize: 20,
                    itemStyle: {normal: {opacity: 0}, emphasis: {opacity: 0}},
                    lineStyle: {normal: {width: 0}},
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: n.firstAreaGradFrom
                            }, {offset: 1, color: n.firstAreaGradTo}]), opacity: 1
                        }
                    },
                    data: []
                }
            }, n.prototype.getSecondLine = function (n) {
                return {
                    type: "line",
                    smooth: !0,
                    symbolSize: 20,
                    itemStyle: {
                        normal: {opacity: 0},
                        emphasis: {color: "#ffffff", borderColor: n.itemBorderColor, borderWidth: 2, opacity: 1}
                    },
                    lineStyle: {
                        normal: {
                            width: n.lineWidth,
                            type: n.lineStyle,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: n.secondLineGradFrom
                            }, {offset: 1, color: n.secondLineGradTo}])
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: n.secondAreaGradFrom
                            }, {offset: 1, color: n.secondAreaGradTo}])
                        }
                    },
                    data: []
                }
            }, n.prototype.getThirdLine = function (n) {
                return {
                    type: "line",
                    smooth: !0,
                    symbolSize: 20,
                    itemStyle: {
                        normal: {opacity: 0},
                        emphasis: {color: "#ffffff", borderColor: n.itemBorderColor, borderWidth: 2, opacity: 1}
                    },
                    lineStyle: {
                        normal: {
                            width: n.lineWidth,
                            type: n.lineStyle,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: n.thirdLineGradFrom
                            }, {offset: 1, color: n.thirdLineGradTo}])
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: n.thirdAreaGradFrom
                            }, {offset: 1, color: n.thirdAreaGradTo}])
                        }
                    },
                    data: []
                }
            }, n.prototype.updateOrdersChartOptions = function (n) {
                if (n) {
                    var e = this.option, t = this.getNewSeries(e.series, n.linesData),
                        o = this.getNewXAxis(e.xAxis, n.chartLabel);
                    this.option = se({}, e, {xAxis: o, series: t})
                }
            }, n.prototype.getNewSeries = function (n, e) {
                return n.map(function (n, t) {
                    return se({}, n, {data: e[t]})
                })
            }, n.prototype.getNewXAxis = function (n, e) {
                return se({}, n, {data: e})
            }, n.prototype.onChartInit = function (n) {
                this.echartsIntance = n
            }, n.prototype.resizeChart = function () {
                var n = this;
                this.echartsIntance && setTimeout(function () {
                    n.echartsIntance.resize()
                }, 0)
            }, n.prototype.ngOnDestroy = function () {
                this.alive = !1
            }, n
        }(), de = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]{display:block;height:100%;width:100%}.nb-theme-default   [_nghost-%COMP%]   .echart[_ngcontent-%COMP%]{display:block;height:100%;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]{display:block;height:100%;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   .echart[_ngcontent-%COMP%]{display:block;height:100%;width:100%}.nb-theme-corporate   [_nghost-%COMP%]{display:block;height:100%;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   .echart[_ngcontent-%COMP%]{display:block;height:100%;width:100%}"]],
            data: {}
        });

        function ue(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 1, "div", [["class", "echart"], ["echarts", ""]], null, [[null, "chartInit"], ["window", "resize"]], function (n, e, t) {
                var l = !0, i = n.component;
                return "window:resize" === e && (l = !1 !== o["\u0275nov"](n, 1).onWindowResize(t) && l), "chartInit" === e && (l = !1 !== i.onChartInit(t) && l), l
            }, null, null)), o["\u0275did"](1, 5128192, null, 0, mn.b, [o.ElementRef, o.NgZone], {options: [0, "options"]}, {chartInit: "chartInit"})], function (n, e) {
                n(e, 1, 0, e.component.option)
            }, null)
        }

        var ge = function () {
            function n(n) {
                var e = this;
                this.dashboardClient = n, this.alive = !0, this.period = "week", this.dashboardClient.orderAnalytics().subscribe(function (n) {
                    e.orderPanelSummary = n.summary, e.orderChartData = n.chart
                })
            }

            return n.prototype.ngOnDestroy = function () {
                this.alive = !1
            }, n
        }(), me = o["\u0275crt"]({
            encapsulation: 0,
            styles: [[".nb-theme-default   [_nghost-%COMP%]     nb-tabset{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1}.nb-theme-default   [_nghost-%COMP%]     nb-tabset ul{border-bottom:none}.nb-theme-default   [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-bottom:1.25rem}.nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{height:580px}.nb-theme-default   [_nghost-%COMP%]   .chart-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.nb-theme-default   [_nghost-%COMP%]   ngx-chart-panel-header[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-orders-chart[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-profit-chart[_ngcontent-%COMP%]{padding:0 1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]     nb-tabset{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1}.nb-theme-cosmic   [_nghost-%COMP%]     nb-tabset ul{border-bottom:none}.nb-theme-cosmic   [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-bottom:1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{height:580px}.nb-theme-cosmic   [_nghost-%COMP%]   .chart-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.nb-theme-cosmic   [_nghost-%COMP%]   ngx-chart-panel-header[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-orders-chart[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-profit-chart[_ngcontent-%COMP%]{padding:0 1.25rem}.nb-theme-corporate   [_nghost-%COMP%]     nb-tabset{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1}.nb-theme-corporate   [_nghost-%COMP%]     nb-tabset ul{border-bottom:none}.nb-theme-corporate   [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-bottom:1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{height:580px}.nb-theme-corporate   [_nghost-%COMP%]   .chart-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.nb-theme-corporate   [_nghost-%COMP%]   ngx-chart-panel-header[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-orders-chart[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-profit-chart[_ngcontent-%COMP%]{padding:0 1.25rem}"]],
            data: {}
        });

        function he(n) {
            return o["\u0275vid"](0, [o["\u0275qud"](402653184, 1, {ordersChart: 0}), (n()(), o["\u0275eld"](1, 0, null, null, 11, "nb-card", [["size", "medium"]], [[2, "xxsmall-card", null], [2, "xsmall-card", null], [2, "small-card", null], [2, "medium-card", null], [2, "large-card", null], [2, "xlarge-card", null], [2, "xxlarge-card", null], [2, "active-card", null], [2, "disabled-card", null], [2, "primary-card", null], [2, "info-card", null], [2, "success-card", null], [2, "warning-card", null], [2, "danger-card", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-active", null], [2, "accent-disabled", null]], null, null, un.e, un.b)), o["\u0275did"](2, 49152, null, 0, gn.b, [], {setSize: [0, "setSize"]}, null), (n()(), o["\u0275eld"](3, 0, null, 2, 9, "nb-tabset", [["fullWidth", ""]], [[2, "full-width", null]], null, null, Bn.d, Bn.b)), o["\u0275did"](4, 1097728, null, 1, Xn.b, [b.a, o.ChangeDetectorRef], {fullWidth: [0, "fullWidth"]}, null), o["\u0275qud"](603979776, 2, {tabs: 1}), (n()(), o["\u0275eld"](6, 0, null, 0, 6, "nb-tab", [["tabTitle", "Order Analytics"]], [[2, "content-active", null]], null, null, Bn.c, Bn.a)), o["\u0275did"](7, 49152, [[2, 4]], 0, Xn.a, [], {tabTitle: [0, "tabTitle"]}, null), (n()(), o["\u0275eld"](8, 0, null, 0, 4, "div", [["class", "chart-container"]], null, null, null, null, null)), (n()(), o["\u0275eld"](9, 0, null, null, 1, "ngx-chart-panel-summary", [], null, null, null, re, ie)), o["\u0275did"](10, 49152, null, 0, le, [], {summary: [0, "summary"]}, null), (n()(), o["\u0275eld"](11, 0, null, null, 1, "ngx-orders-chart", [], null, null, null, ue, de)), o["\u0275did"](12, 4898816, [[1, 4], ["ordersChart", 4]], 0, ce, [p.a, A.a], {ordersChartData: [0, "ordersChartData"]}, null)], function (n, e) {
                var t = e.component;
                n(e, 2, 0, "medium"), n(e, 4, 0, ""), n(e, 7, 0, "Order Analytics"), n(e, 10, 0, t.orderPanelSummary), n(e, 12, 0, t.orderChartData)
            }, function (n, e) {
                n(e, 1, 1, [o["\u0275nov"](e, 2).xxsmall, o["\u0275nov"](e, 2).xsmall, o["\u0275nov"](e, 2).small, o["\u0275nov"](e, 2).medium, o["\u0275nov"](e, 2).large, o["\u0275nov"](e, 2).xlarge, o["\u0275nov"](e, 2).xxlarge, o["\u0275nov"](e, 2).active, o["\u0275nov"](e, 2).disabled, o["\u0275nov"](e, 2).primary, o["\u0275nov"](e, 2).info, o["\u0275nov"](e, 2).success, o["\u0275nov"](e, 2).warning, o["\u0275nov"](e, 2).danger, o["\u0275nov"](e, 2).hasAccent, o["\u0275nov"](e, 2).primaryAccent, o["\u0275nov"](e, 2).infoAccent, o["\u0275nov"](e, 2).successAccent, o["\u0275nov"](e, 2).warningAccent, o["\u0275nov"](e, 2).dangerAccent, o["\u0275nov"](e, 2).activeAccent, o["\u0275nov"](e, 2).disabledAccent]), n(e, 3, 0, o["\u0275nov"](e, 4).fullWidthValue), n(e, 6, 0, o["\u0275nov"](e, 7).activeValue)
            })
        }

        var be = function () {
            function n() {
                this.isAdmin = !1
            }

            return n.prototype.ngOnInit = function () {
                var n = localStorage.getItem("manage-as-admin");
                this.isAdmin = "true" === n
            }, n
        }(), pe = o["\u0275crt"]({encapsulation: 2, styles: [], data: {}});

        function fe(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 2, "div", [["class", "col-md-12"]], null, null, null, null, null)), (n()(), o["\u0275eld"](2, 0, null, null, 1, "newusers-analytics", [], null, null, null, In, jn)), o["\u0275did"](3, 180224, null, 0, Ln, [p.a], null, null)], null, null)
        }

        function Ce(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (n()(), o["\u0275eld"](1, 0, null, null, 2, "div", [["class", "col-md-12"]], null, null, null, null, null)), (n()(), o["\u0275eld"](2, 0, null, null, 1, "orders-map", [], null, null, null, oe, ne)), o["\u0275did"](3, 4243456, null, 0, Qn, [pn.a], null, null), (n()(), o["\u0275eld"](4, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (n()(), o["\u0275eld"](5, 0, null, null, 2, "div", [["class", "col-md-12"]], null, null, null, null, null)), (n()(), o["\u0275eld"](6, 0, null, null, 1, "order-analytics", [], null, null, null, he, me)), o["\u0275did"](7, 180224, null, 0, ge, [pn.a], null, null), (n()(), o["\u0275and"](16777216, null, null, 1, null, fe)), o["\u0275did"](9, 16384, null, 0, x.l, [o.ViewContainerRef, o.TemplateRef], {ngIf: [0, "ngIf"]}, null)], function (n, e) {
                n(e, 9, 0, e.component.isAdmin)
            }, null)
        }

        function Oe(n) {
            return o["\u0275vid"](0, [(n()(), o["\u0275eld"](0, 0, null, null, 1, "ngx-ecommerce", [], null, null, null, Ce, pe)), o["\u0275did"](1, 114688, null, 0, be, [], null, null)], function (n, e) {
                n(e, 1, 0)
            }, null)
        }

        var Pe = o["\u0275ccf"]("ngx-ecommerce", be, Oe, {}, {}, []), Me = t("fdPT"), _e = t("MoCo"), xe = t("cdOV"),
            we = t("9AJC"), ye = t("8VM6"), ve = t("Xoj0"), ke = t("4/Py"), Ae = t("8DeE"), ze = t("y9XU"),
            Se = t("y1sj"), Le = t("tThw"), je = t("Ti/5"), Ie = t("AS1V"), Ve = t("cMIS"), Re = t("H1uz"),
            Te = t("H6Y4"), De = t("byrr"), Ne = t("0HQI"), Fe = t("81d9"), Ge = t("7Z8E"), Be = t("gIcY"),
            Xe = t("eDkP"), We = t("Fzqc"), Ee = t("U4uc"), Ze = t("4GxJ"), Ue = t("AKna"), $e = t("Bvtr"),
            Ke = t("gpGP"), qe = t("Se1k"), Je = t("k/Rj"), He = t("BBZF"), Ye = t("Ry/H"), Qe = t("t/Na"),
            nt = t("G9wV"), et = t("L6ID"), tt = function () {
                return function () {
                }
            }(), ot = t("P8+w"), lt = t("Ku2q"), it = t("w//a"), at = t("niCt"), rt = t("UIEa"), st = t("o0Gp"),
            ct = t("M18m"), dt = t("zTyf"), ut = t("TcUH"), gt = t("4c35"), mt = t("dWZg"), ht = t("qAlS"),
            bt = t("hle7"), pt = t("lOUe"), ft = t("yHPJ"), Ct = t("wZaT"), Ot = t("GGqN"), Pt = t("rNHn"),
            Mt = t("tSKX"), _t = t("uLH1"), xt = t("WCnA"), wt = t("DiBj"), yt = t("6wBL"), vt = t("TvC7"),
            kt = t("7qhI"), At = t("aTFX"), zt = t("7fDR"), St = t("y3Bk"), Lt = t("IR2U"), jt = t("sE+l"),
            It = t("V6uK"), Vt = t("9mtI"), Rt = t("1zNU"), Tt = t("SdSL"), Dt = t("GF5i"), Nt = t("3Zza"),
            Ft = t("ZMzl"), Gt = t("tt4K"), Bt = t("eBEu"), Xt = t("kmuJ"), Wt = t("MMI5"), Et = t("vTDv"),
            Zt = t("AE88"), Ut = t("/qvy"), $t = t("b3E/"), Kt = t("w6+6"), qt = t("IZET"), Jt = t("1jDe"),
            Ht = t("T8sE"), Yt = t("skic"), Qt = t("KeWI"), no = t("UsZU"), eo = t("50k4"), to = t("o56U"),
            oo = t("U3vz"), lo = t("r6ye"), io = t("KktT"), ao = t("eby4"), ro = t("/fSM"), so = function () {
                return function () {
                }
            }();
        t.d(e, "PagesModuleNgFactory", function () {
            return co
        });
        var co = o["\u0275cmf"](r, [], function (n) {
            return o["\u0275mod"]([o["\u0275mpd"](512, o.ComponentFactoryResolver, o["\u0275CodegenComponentFactoryResolver"], [[8, [s.a, dn, Pe, Me.a, _e.a, xe.a, we.a, we.b, we.g, we.c, we.d, we.e, we.f, ye.a, ve.a, ke.a, Ae.a, Ae.b, ze.a, Se.a, Le.a, je.a, Ie.a, Ve.a, Re.a, Te.a, De.a, Ne.a, Fe.a, Ge.a]], [3, o.ComponentFactoryResolver], o.NgModuleRef]), o["\u0275mpd"](4608, x.n, x.m, [o.LOCALE_ID, [2, x.D]]), o["\u0275mpd"](4608, Be.E, Be.E, []), o["\u0275mpd"](4608, Be.f, Be.f, []), o["\u0275mpd"](4608, M.a, M.a, [b.l]), o["\u0275mpd"](4608, x.i, x.s, [x.t, [2, x.a]]), o["\u0275mpd"](4608, x.h, x.h, [x.i]), o["\u0275mpd"](4608, Xe.d, Xe.d, [Xe.k, Xe.f, o.ComponentFactoryResolver, Xe.i, Xe.g, o.Injector, o.NgZone, x.c, We.b, [2, x.h]]), o["\u0275mpd"](5120, Xe.l, Xe.m, [Xe.d]), o["\u0275mpd"](4608, Ee.a, Ee.a, []), o["\u0275mpd"](4608, Ze.t, Ze.t, [o.ComponentFactoryResolver, o.Injector, Ze.R, Ze.u]), o["\u0275mpd"](4608, Ue.a, $e.a, [o.LOCALE_ID]), o["\u0275mpd"](4608, x.d, x.d, [o.LOCALE_ID]), o["\u0275mpd"](4608, Ke.a, Ke.a, [Ue.a]), o["\u0275mpd"](4608, qe.a, qe.a, [o.ApplicationRef, o.ComponentFactoryResolver, o.Injector]), o["\u0275mpd"](4608, Je.a, Je.a, [qe.a]), o["\u0275mpd"](4608, He.c, He.c, []), o["\u0275mpd"](4608, He.b, He.b, []), o["\u0275mpd"](4608, Hn.a, Ye.b, [[2, Ye.a], He.c, He.b]), o["\u0275mpd"](5120, Qe.a, function (n, e) {
                return [new nt.a(n, e)]
            }, [o.Injector, et.e]), o["\u0275mpd"](1073742336, b.n, b.n, [[2, b.t], [2, b.l]]), o["\u0275mpd"](1073742336, tt, tt, []), o["\u0275mpd"](1073742336, x.b, x.b, []), o["\u0275mpd"](1073742336, Be.C, Be.C, []), o["\u0275mpd"](1073742336, Be.l, Be.l, []), o["\u0275mpd"](1073742336, Be.x, Be.x, []), o["\u0275mpd"](1073742336, ot.a, ot.a, []), o["\u0275mpd"](1073742336, lt.a, lt.a, []), o["\u0275mpd"](1073742336, it.a, it.a, []), o["\u0275mpd"](1073742336, at.a, at.a, []), o["\u0275mpd"](1073742336, rt.a, rt.a, []), o["\u0275mpd"](1073742336, st.a, st.a, []), o["\u0275mpd"](1073742336, ct.a, ct.a, []), o["\u0275mpd"](1073742336, dt.a, dt.a, []), o["\u0275mpd"](1073742336, ut.a, ut.a, []), o["\u0275mpd"](1073742336, We.a, We.a, []), o["\u0275mpd"](1073742336, gt.f, gt.f, []), o["\u0275mpd"](1073742336, mt.b, mt.b, []), o["\u0275mpd"](1073742336, ht.b, ht.b, []), o["\u0275mpd"](1073742336, Xe.h, Xe.h, []), o["\u0275mpd"](1073742336, bt.a, bt.a, []), o["\u0275mpd"](1073742336, pt.a, pt.a, []), o["\u0275mpd"](1073742336, ft.a, ft.a, []), o["\u0275mpd"](1073742336, Ct.a, Ct.a, []), o["\u0275mpd"](1073742336, Ot.a, Ot.a, []), o["\u0275mpd"](1073742336, Pt.a, Pt.a, []), o["\u0275mpd"](1073742336, Mt.a, Mt.a, []), o["\u0275mpd"](1073742336, _t.a, _t.a, []), o["\u0275mpd"](1073742336, Ze.c, Ze.c, []), o["\u0275mpd"](1073742336, Ze.f, Ze.f, []), o["\u0275mpd"](1073742336, Ze.g, Ze.g, []), o["\u0275mpd"](1073742336, Ze.k, Ze.k, []), o["\u0275mpd"](1073742336, Ze.l, Ze.l, []), o["\u0275mpd"](1073742336, Ze.q, Ze.q, []), o["\u0275mpd"](1073742336, Ze.r, Ze.r, []), o["\u0275mpd"](1073742336, Ze.v, Ze.v, []), o["\u0275mpd"](1073742336, Ze.z, Ze.z, []), o["\u0275mpd"](1073742336, Ze.A, Ze.A, []), o["\u0275mpd"](1073742336, Ze.D, Ze.D, []), o["\u0275mpd"](1073742336, Ze.G, Ze.G, []), o["\u0275mpd"](1073742336, Ze.J, Ze.J, []), o["\u0275mpd"](1073742336, Ze.N, Ze.N, []), o["\u0275mpd"](1073742336, Ze.O, Ze.O, []), o["\u0275mpd"](1073742336, Ze.P, Ze.P, []), o["\u0275mpd"](1073742336, Ze.w, Ze.w, []), o["\u0275mpd"](1073742336, xt.a, xt.a, []), o["\u0275mpd"](1073742336, wt.a, wt.a, []), o["\u0275mpd"](1073742336, yt.a, yt.a, []), o["\u0275mpd"](1073742336, vt.a, vt.a, []), o["\u0275mpd"](1073742336, kt.a, kt.a, []), o["\u0275mpd"](1073742336, At.a, At.a, []), o["\u0275mpd"](1073742336, zt.a, zt.a, []), o["\u0275mpd"](1073742336, St.a, St.a, []), o["\u0275mpd"](1073742336, Lt.a, Lt.a, []), o["\u0275mpd"](1073742336, jt.a, jt.a, []), o["\u0275mpd"](1073742336, It.a, It.a, []), o["\u0275mpd"](1073742336, Vt.a, Vt.a, []), o["\u0275mpd"](1073742336, Rt.a, Rt.a, []), o["\u0275mpd"](1073742336, Tt.a, Tt.a, []), o["\u0275mpd"](1073742336, Dt.a, Dt.a, []), o["\u0275mpd"](1073742336, Nt.a, Nt.a, []), o["\u0275mpd"](1073742336, Ft.a, Ft.a, []), o["\u0275mpd"](1073742336, Gt.a, Gt.a, []), o["\u0275mpd"](1073742336, Bt.a, Bt.a, []), o["\u0275mpd"](1073742336, Xt.a, Xt.a, []), o["\u0275mpd"](1073742336, Wt.a, Wt.a, []), o["\u0275mpd"](1073742336, Et.a, Et.a, []), o["\u0275mpd"](1073742336, Zt.ChartModule, Zt.ChartModule, []), o["\u0275mpd"](1073742336, mn.a, mn.a, []), o["\u0275mpd"](1073742336, Ut.a, Ut.a, []), o["\u0275mpd"](1073742336, $t.a, $t.a, []), o["\u0275mpd"](1073742336, Kt.a, Kt.a, []), o["\u0275mpd"](1073742336, qt.a, qt.a, []), o["\u0275mpd"](1073742336, Jt.a, Jt.a, []), o["\u0275mpd"](1073742336, Ht.a, Ht.a, []), o["\u0275mpd"](1073742336, Yt.a, Yt.a, []), o["\u0275mpd"](1073742336, Qt.a, Qt.a, []), o["\u0275mpd"](1073742336, no.a, no.a, []), o["\u0275mpd"](1073742336, eo.a, eo.a, []), o["\u0275mpd"](1073742336, to.a, to.a, []), o["\u0275mpd"](1073742336, oo.a, oo.a, []), o["\u0275mpd"](1073742336, lo.a, lo.a, []), o["\u0275mpd"](1073742336, io.a, io.a, []), o["\u0275mpd"](1073742336, ao.a, ao.a, []), o["\u0275mpd"](1073742336, ro.a, ro.a, []), o["\u0275mpd"](1073742336, so, so, []), o["\u0275mpd"](1073742336, r, r, []), o["\u0275mpd"](1024, b.j, function () {
                return [[{
                    path: "",
                    component: a,
                    children: [{path: "dashboard", component: be}, {
                        path: "categories",
                        loadChildren: "./categories/module#CategoriesModule"
                    }, {path: "users", loadChildren: "./users/module#UsersModule"}, {
                        path: "stores",
                        loadChildren: "./stores/module#StoresModule"
                    }, {
                        path: "deliveryprofiles",
                        loadChildren: "./deliveryprofiles/module#DeliveryprofilesModule"
                    }, {path: "menuitems", loadChildren: "./menuitems/module#MenuitemsModule"}, {
                        path: "orders",
                        loadChildren: "./orders/module#OrdersModule"
                    }, {path: "transactions", loadChildren: "./transactions/module#TransactionsModule"}, {
                        path: "plans",
                        loadChildren: "./plans/module#PlansModule"
                    }, {path: "settings", loadChildren: "./settings/module#SettingsModule"}, {
                        path: "support",
                        loadChildren: "./support/module#SupportModule"
                    }, {path: "", redirectTo: "dashboard", pathMatch: "full"}]
                }]]
            }, []), o["\u0275mpd"](256, Ye.a, {
                apiKey: "AIzaSyDBZjAUb_BqMgaE6ZanWXaSgWP_VX-NynQ",
                libraries: ["places"]
            }, [])])
        })
    }
}]);