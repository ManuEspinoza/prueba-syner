(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+MCA":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("CB3U"),d=u("K9Ia"),a=u("ny24"),c=u("ZtWP"),i=function(){function l(l,n,u,e){this.router=l,this.afAuth=n,this.route=u,this.companyService=e,this.ngUnsubscribe=new d.a,this.companyDetail={},this.company=this.route.snapshot.paramMap.get("id"),this.getCompany()}return l.prototype.ngOnInit=function(){},l.prototype.ngOnDestroy=function(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()},l.prototype.getCompany=function(){var l=this;this.companyService.getCompany(this.company).pipe(Object(a.a)(this.ngUnsubscribe)).subscribe(function(n){l.companyDetail=n})},l}(),s=function(){},o=u("pMnS"),r=u("ZYCi"),g=e["\u0275crt"]({encapsulation:0,styles:[[".grid[_ngcontent-%COMP%]   .grid-title[_ngcontent-%COMP%]{color:#e07e27;font-size:22px;font-weight:300;letter-spacing:2.3px;margin-bottom:20px;margin-top:0}.grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-bottom:40px;min-height:155px}.grid[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.grid[_ngcontent-%COMP%]   .flex-container.flex-container-full[_ngcontent-%COMP%]{width:100%}.grid[_ngcontent-%COMP%]   .flex-container.flex-container-half[_ngcontent-%COMP%]{width:calc(50% - (30px / 2))}.grid.grid-0[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.grid.grid-0[_ngcontent-%COMP%]   .card-1[_ngcontent-%COMP%]{margin-right:30px;min-height:740px;width:calc(50% - (30px / 2))}.grid.grid-0[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]{min-height:350px;width:100%}.grid.grid-0[_ngcontent-%COMP%]   .card-3[_ngcontent-%COMP%]{margin-left:30px;min-height:350px;width:calc(50% - (30px / 2))}.grid.grid-0[_ngcontent-%COMP%]   .card-4[_ngcontent-%COMP%]{min-height:155px;width:100%}.grid.grid-0[_ngcontent-%COMP%]   .card-5[_ngcontent-%COMP%]{margin-right:30px;min-height:155px;width:calc(50% - (30px / 2))}.grid.grid-0[_ngcontent-%COMP%]   .card-6[_ngcontent-%COMP%], .grid.grid-0[_ngcontent-%COMP%]   .card-7[_ngcontent-%COMP%]{min-height:58px;width:calc(100% - (30px / 2))}.grid.grid-1[_ngcontent-%COMP%]   .card-3[_ngcontent-%COMP%], .grid.grid-2[_ngcontent-%COMP%]   .card-3[_ngcontent-%COMP%]{min-height:350px}.grid.grid-3[_ngcontent-%COMP%]   .card-4[_ngcontent-%COMP%]{min-height:545px}.grid.grid-4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{min-height:350px}.grid.grid-5[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]{margin-right:30px}.grid.grid-5[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%], .grid.grid-5[_ngcontent-%COMP%]   .card-3[_ngcontent-%COMP%]{display:inline-block;min-height:350px;width:calc(50% - 17px)}.grid.grid-5[_ngcontent-%COMP%]   .card-4[_ngcontent-%COMP%]{min-height:545px}.grid.grid-7[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%], .grid.grid-7[_ngcontent-%COMP%]   .card-3[_ngcontent-%COMP%], .grid.grid-8[_ngcontent-%COMP%]   .card-1[_ngcontent-%COMP%], .grid.grid-8[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%], .grid.grid-8[_ngcontent-%COMP%]   .card-3[_ngcontent-%COMP%]{min-height:350px}.grid.grid-9[_ngcontent-%COMP%]   .card-1[_ngcontent-%COMP%], .grid.grid-9[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%], .grid.grid-9[_ngcontent-%COMP%]   .card-3[_ngcontent-%COMP%], .grid.grid-9[_ngcontent-%COMP%]   .card-4[_ngcontent-%COMP%]{min-height:250px}label[_ngcontent-%COMP%]{padding-right:20px;margin-bottom:20px}span[_ngcontent-%COMP%]{color:#182f58}.mar[_ngcontent-%COMP%]{margin-bottom:10px}"]],data:{}});function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,210,"div",[["class","row grid grid-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"h2",[["class","grid-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,["",""])),(l()(),e["\u0275eld"](4,0,null,null,56,"div",[["class","col-xs-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,55,"div",[["class","card card-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,4,"header",[["class","row title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,3,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"h2",[["class","main-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Quote"])),(l()(),e["\u0275eld"](10,0,null,null,0,"hr",[["class","line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Symbol: "])),(l()(),e["\u0275eld"](15,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](16,null,["",""])),(l()(),e["\u0275eld"](17,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Sector: "])),(l()(),e["\u0275eld"](20,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](21,null,["",""])),(l()(),e["\u0275eld"](22,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Exchange: "])),(l()(),e["\u0275eld"](26,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](27,null,["",""])),(l()(),e["\u0275eld"](28,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Open: "])),(l()(),e["\u0275eld"](31,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](32,null,["",""])),(l()(),e["\u0275eld"](33,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Close: "])),(l()(),e["\u0275eld"](37,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](38,null,["",""])),(l()(),e["\u0275eld"](39,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["High: "])),(l()(),e["\u0275eld"](42,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](43,null,["",""])),(l()(),e["\u0275eld"](44,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Low: "])),(l()(),e["\u0275eld"](48,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](49,null,["",""])),(l()(),e["\u0275eld"](50,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](51,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Lastest price: "])),(l()(),e["\u0275eld"](53,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](54,null,["",""])),(l()(),e["\u0275eld"](55,0,null,null,5,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["MarketCap: "])),(l()(),e["\u0275eld"](59,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](60,null,["",""])),(l()(),e["\u0275eld"](61,0,null,null,149,"div",[["class","col-xs-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](62,0,null,null,148,"div",[["class","card card-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,4,"header",[["class","row title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,3,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](65,0,null,null,1,"h2",[["class","main-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Stats"])),(l()(),e["\u0275eld"](67,0,null,null,0,"hr",[["class","line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](68,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](69,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](70,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Beta: "])),(l()(),e["\u0275eld"](72,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](73,null,["",""])),(l()(),e["\u0275eld"](74,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](75,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Week 52 High: "])),(l()(),e["\u0275eld"](77,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](78,null,["",""])),(l()(),e["\u0275eld"](79,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](80,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](81,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Week 52 low: "])),(l()(),e["\u0275eld"](83,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](84,null,["",""])),(l()(),e["\u0275eld"](85,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](86,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Week 52 change: "])),(l()(),e["\u0275eld"](88,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](89,null,["",""])),(l()(),e["\u0275eld"](90,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](91,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](92,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Dividend Rate: "])),(l()(),e["\u0275eld"](94,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](95,null,["",""])),(l()(),e["\u0275eld"](96,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](97,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Dividend Yield: "])),(l()(),e["\u0275eld"](99,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](100,null,["",""])),(l()(),e["\u0275eld"](101,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](102,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](103,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Latest EPS: "])),(l()(),e["\u0275eld"](105,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](106,null,["",""])),(l()(),e["\u0275eld"](107,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](108,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Shares Outstanding: "])),(l()(),e["\u0275eld"](110,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](111,null,["",""])),(l()(),e["\u0275eld"](112,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](113,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](114,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Float: "])),(l()(),e["\u0275eld"](116,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](117,null,["",""])),(l()(),e["\u0275eld"](118,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](119,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Return On Equity: "])),(l()(),e["\u0275eld"](121,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](122,null,["",""])),(l()(),e["\u0275eld"](123,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](124,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](125,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Consensus EPS: "])),(l()(),e["\u0275eld"](127,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](128,null,["",""])),(l()(),e["\u0275eld"](129,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](130,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Number Of Estimates: "])),(l()(),e["\u0275eld"](132,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](133,null,["",""])),(l()(),e["\u0275eld"](134,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](135,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](136,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["EPS: "])),(l()(),e["\u0275eld"](138,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](139,null,["",""])),(l()(),e["\u0275eld"](140,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](141,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["P/E ratio high: "])),(l()(),e["\u0275eld"](143,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](144,null,["",""])),(l()(),e["\u0275eld"](145,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](146,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](147,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["P/E ratio low: "])),(l()(),e["\u0275eld"](149,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](150,null,["",""])),(l()(),e["\u0275eld"](151,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](152,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Return on Assets: "])),(l()(),e["\u0275eld"](154,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](155,null,["",""])),(l()(),e["\u0275eld"](156,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](157,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](158,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Profit Margin: "])),(l()(),e["\u0275eld"](160,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](161,null,["",""])),(l()(),e["\u0275eld"](162,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](163,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Price to sales: "])),(l()(),e["\u0275eld"](165,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](166,null,["",""])),(l()(),e["\u0275eld"](167,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](168,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](169,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Price to book: "])),(l()(),e["\u0275eld"](171,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](172,null,["",""])),(l()(),e["\u0275eld"](173,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](174,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Day 200 moving Avg: "])),(l()(),e["\u0275eld"](176,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](177,null,["",""])),(l()(),e["\u0275eld"](178,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](179,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](180,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Institution Percent: "])),(l()(),e["\u0275eld"](182,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](183,null,["",""])),(l()(),e["\u0275eld"](184,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](185,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Insider Percent: "])),(l()(),e["\u0275eld"](187,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](188,null,["",""])),(l()(),e["\u0275eld"](189,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](190,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](191,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Year 5 change percent: "])),(l()(),e["\u0275eld"](193,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](194,null,["",""])),(l()(),e["\u0275eld"](195,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](196,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Year 2 change percent: "])),(l()(),e["\u0275eld"](198,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](199,null,["",""])),(l()(),e["\u0275eld"](200,0,null,null,10,"div",[["class","row mar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](201,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](202,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Year 1 change percent: "])),(l()(),e["\u0275eld"](204,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](205,null,["",""])),(l()(),e["\u0275eld"](206,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](207,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["YTD change percent: "])),(l()(),e["\u0275eld"](209,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](210,null,["",""]))],null,function(l,n){var u=n.component;l(n,3,0,u.companyDetail.name),l(n,16,0,u.companyDetail.symbol),l(n,21,0,u.companyDetail.sector),l(n,27,0,u.companyDetail.exchange),l(n,32,0,u.companyDetail.open),l(n,38,0,u.companyDetail.close),l(n,43,0,u.companyDetail.high),l(n,49,0,u.companyDetail.low),l(n,54,0,u.companyDetail.latestPrice),l(n,60,0,u.companyDetail.marketCap),l(n,73,0,u.companyDetail.beta),l(n,78,0,u.companyDetail.week52high),l(n,84,0,u.companyDetail.week52low),l(n,89,0,u.companyDetail.week52change),l(n,95,0,u.companyDetail.dividendRate),l(n,100,0,u.companyDetail.dividendYield),l(n,106,0,u.companyDetail.latestEPS),l(n,111,0,u.companyDetail.sharesOutstanding),l(n,117,0,u.companyDetail.float),l(n,122,0,u.companyDetail.returnOnEquity),l(n,128,0,u.companyDetail.consensusEPS),l(n,133,0,u.companyDetail.numberOfEstimates),l(n,139,0,u.companyDetail.ttmEps),l(n,144,0,u.companyDetail.peRatioHigh),l(n,150,0,u.companyDetail.peRatioLow),l(n,155,0,u.companyDetail.returnOnAssets),l(n,161,0,u.companyDetail.profitMargin),l(n,166,0,u.companyDetail.priceToSales),l(n,172,0,u.companyDetail.priceToBook),l(n,177,0,u.companyDetail.day200MovingAvg),l(n,183,0,u.companyDetail.institutionPercent),l(n,188,0,u.companyDetail.insiderPercent),l(n,194,0,u.companyDetail.year5ChangePercent),l(n,199,0,u.companyDetail.year2ChangePercent),l(n,205,0,u.companyDetail.year1ChangePercent),l(n,210,0,u.companyDetail.ytdChangePercent)})}var m=e["\u0275ccf"]("company",i,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"company",[],null,null,null,p,g)),e["\u0275did"](1,245760,null,0,i,[r.l,t.a,r.a,c.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]);u.d(n,"CompanyModuleNgFactory",function(){return h});var h=e["\u0275cmf"](s,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,m]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](135680,i,i,[r.l,t.a,r.a,c.a]),e["\u0275mpd"](1073742336,r.o,r.o,[[2,r.u],[2,r.l]]),e["\u0275mpd"](1073742336,s,s,[]),e["\u0275mpd"](1024,r.j,function(){return[[{path:"",component:i}]]},[])])})}}]);