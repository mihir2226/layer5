(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[4864],{26775:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var o=t(67294),r=t(69730),i=t(22626),a=t(70456).ZP.div.withConfig({displayName:"TocPaginationstyle__TocPaginationWrapper",componentId:"zco2fp-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]),l=function(){var e,n,t=(0,o.useState)(0),l=t[0],c=t[1];return(0,o.useEffect)((function(){var e=window.location.pathname,n=r.k.findIndex((function(n){return n.link===e}));c(n)}),[]),o.createElement(a,null,l>0?o.createElement(i.Z,{secondary:!0,url:null===(e=r.k[l-1])||void 0===e?void 0:e.link},"← Previous"):null,l<r.k.length-1?o.createElement(i.Z,{primary:!0,url:null===(n=r.k[l+1])||void 0===n?void 0:n.link},"Next →"):null)}},69730:function(e,n,t){"use strict";t.d(n,{k:function(){return o}});var o=[{id:0,link:"/community/handbook/about",text:"About"},{id:1,link:"/community/handbook/community",text:"Community"},{id:2,link:"/community/handbook/contributor-ladder",text:"Contributor Ladder"},{id:3,link:"/community/handbook/contribution",text:"Contribution"},{id:4,link:"/community/handbook/repository-overview",text:"Repository Overview"},{id:5,link:"/community/handbook/projects",text:"Projects"},{id:6,link:"/community/handbook/mentorship-programs",text:"Mentorship Programs"},{id:7,link:"/community/handbook/learn-layer5",text:"Learn Layer5"},{id:8,link:"/community/handbook/connect-with-us",text:"Connect with us"},{id:9,link:"/community/handbook/code-of-conduct",text:"Code of Conduct"}]},52455:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var o=t(67294),r=t(11521),i=t(25444),a=t(61424),l=t(70456).ZP.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"y1xb32-0"})(["\n\n  position: sticky;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width:15rem;\n  padding-bottom: 2rem;\n\n  .go-back {\n    margin-left: 1rem;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;   \n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color:#000000;\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n  \n  .toc-sub-inline{\n    display: inline-block;\n  }\n\n  .active{\n    font-weight:500;\n    color: ",";\n  }\n\n  ul{\n    display:flex;\n    flex-direction:column;\n    white-space: nowrap;\n  }\n\n  .toc-ul{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n   .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    margin-bottom: 2rem;\n    transition:all .4s !important;\n   }\n\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px){\n   position: initial;\n   margin-right: 3rem;\n   width: auto;\n   .toc-toggle-btn{\n    display:inline-block;\n   }\n   .go-back{\n      margin-left:0;\n   }\n\n   .toc-ul{\n    opacity:0;\n    height:0;\n    transition:none;\n    visibility:hidden;\n   }\n\n   .toc-ul-open{\n    visibility:visible;\n   }\n  }\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.secondaryColor})),c=t(69730),m=function(){var e=(0,o.useState)(!1),n=e[0],t=e[1];return o.createElement(l,null,o.createElement("div",{className:"go-back"},o.createElement(i.Link,{to:"/community/handbook"},o.createElement(r.PSe,null),o.createElement("h4",null,"Table of Content")),o.createElement("div",{className:"toc-toggle-btn"},n?o.createElement(a.QAE,{className:"toc-menu-icon",onClick:function(){t(!n)}}):o.createElement(a.Ejh,{className:"toc-menu-icon",onClick:function(){t(!n)}}))),o.createElement("div",{className:"toc-list"},o.createElement("ul",{className:"toc-ul "+(n?"toc-ul-open":"")},c.k.map((function(e){return o.createElement("li",{key:e.id},o.createElement(i.Link,{to:e.link,key:e.id,className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},e.text))})))))}},46908:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var o=t(67294),r=t(70456),i=t(20092),a=t(36179),l=t(57067),c=t(21101),m=t(52455),s=t(18381),u=t.p+"static/git-signoff-vscode-c37dfe891eec58fd407dfd15fe153b2f.png",d=t(26775),h=function(){return o.createElement(c.U,null,o.createElement("div",{className:"page-header-section"},o.createElement("h1",null,"Contribution")),o.createElement(m.Z,null),o.createElement("div",{className:"page-section"},o.createElement(l.W2,null,o.createElement("h2",null,"General contribution flow"),o.createElement("p",null,"Pull requests (PRs) are the best ways to propose changes to a project repository. At Layer5 org, we use the Github Flow:"),o.createElement("div",{className:"content"},o.createElement("h3",null,"Clone your fork to your local machine"),o.createElement("ul",null,o.createElement("li",null,"Fork the repository you are working on."),o.createElement("li",null,o.createElement("span",null,"Go to your GitHub account, open the forked repository, click on the code button and then click the “copy to clipboard” icon if you intend to use a command-line tool. ")),o.createElement("li",null,o.createElement("span",null,"Open the terminal and run the following git command:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git clone “URL you copied from the clipboard.”"}))))),o.createElement("h3",null,"Add 'upstream' repo to list of remotes"),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"Keeping your fork up to date while this isn't a necessary step. If you plan on doing anything more than a tiny quick fix, you'll want to make sure you keep your fork up to date by tracking the original \"upstream\" repo that you forked earlier.")),o.createElement("li",null,o.createElement("span",null,"To do this, you'll need to add a remote. An example of the command is given below:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git remote add upstream https://github.com/layer5io/meshery.git "})),'Here “meshery" is used as the example repo. Be sure to reference the actual repo you are contributing to.'))),o.createElement("h3",null,"Create and checkout a new branch"),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"Whenever you begin to work on a new feature or bugfix, it's important that you create a new branch. Not only is it a proper git workflow, but it also keeps your changes organized and separated from the master branch so that you can easily submit and manage multiple pull requests for every task completed.")),o.createElement("li",null,o.createElement("span",null,"Perform the flow:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:" git checkout -b your-new-branch-name"})),"For example,",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git checkout -b feature"})),"  (feature being a branch name)"))),o.createElement("h3",null,"Make the necessary changes to your file."),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"To add the changes you have made to your branch, use:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git add <file> "})))),o.createElement("li",null,o.createElement("span",null," If you add multiple file changes to the branch, you simply use:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:" git add ."}))))),o.createElement("h3",null,"Commit the changes made"),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"Now commit those changes using the git commit command:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git commit -s -m “This is my commit message”"}))))),o.createElement("h3",null,"Push changes to Github and submit a pull request (PR)"),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"To push your changes, run the git command:",o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"git push origin your_branch_name"})))))),o.createElement("h2",null,"Make sure to ",o.createElement("a",{href:"https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#signing-off-on-commits-developer-certificate-of-origin"},"Sign-off")," on your Commits (Developer Certificate of Origin)"),o.createElement("p",null,"To contribute to this project, you must agree to the Developer Certificate of Origin (DCO) for each commit you make. The DCO is a simple statement that you, as a contributor, have the legal right to contribute.          "),o.createElement("p",null,"To signify that you agree to the DCO for contributions, you simply add a line to each of your git commit messages:"),o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"Signed-off-by: Jane Smith <jane.smith@example.com>"})),o.createElement("p",null,"In most cases, you can add this signoff to your commit automatically with the -s or --signoff flag to git commit. You must use your real name and a reachable email address (sorry, no pseudonyms or anonymous contributions). An example of signing off on a commit:"),o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"$ commit -s -m “my commit message w/signoff”"})),o.createElement("p",null,"To ensure all your commits are signed, you may choose to add this alias to your global .gitconfig:"),o.createElement("div",{className:"codes"},o.createElement(s.ZP,{codeString:"[alias] amend = commit -s --amend cm = commit -s -m commit = commit -s\n"})),o.createElement("p",null,"Or you may configure your IDE, for example, Visual Studio Code to automatically sign-off commits for you:"),o.createElement("img",{src:u,width:"74%",id:"sign-off"})),o.createElement(d.Z,null)))},g=t(45027),p=t(34967),f=t(97956),y=t(38155),b=function(){return o.createElement(r.f6,{theme:y.Z},o.createElement(i.Z,null,o.createElement(f.Z,null),o.createElement(a.Z,{title:"Contribution",description:"The purpose of the handbook is to provide an overview of the Layer5 community"}),o.createElement(g.Z,null),o.createElement(h,null),o.createElement(p.Z,null)))}},21101:function(e,n,t){"use strict";t.d(n,{U:function(){return o}});var o=t(70456).ZP.div.withConfig({displayName:"Handbookstyle__HandbookWrapper",componentId:"l1w5w5-0"})(["\n    .highlight{\n      font-weight: 600;\n    }\n    .content{\n      width:100%;\n      padding-bottom: 2rem;\n    ul > li {\n        color: ",";\n      }\n    ol > li {\n        color: ",";\n      }\n    ul > li > span {\n        color: ",";\n      }\n    ol > li > span {\n      color: ",";\n    }\n    }\n    h2 h3{\n      margin: 0.5rem 0;\n      color: ",";\n    }\n    .page-section{\n      margin-top: -33rem;\n      margin-left: 20rem;\n    }\n\n    .sidebar {\n        margin: 0;\n        padding: 0;\n        width: 250px;\n        background-color:",";\n        position: absolute;\n        height: 150rem;\n        overflow: auto;\n    }\n    .sidebar a {\n        display: block;\n        color: black;\n        padding: 16px;\n        text-decoration: none;\n    }\n\n    .sidebar a.active {\n        background-color: ",";\n        color: white;\n    }\n    .sidebar a:hover:not(.active) {\n        background-color:",";\n        color: white;\n    }\n    .page-header-section {\n        height: 10rem;\n        text-align: center;\n        background: rgb(71,126,150);\n        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n        h1 {\n            line-height: 10rem;\n            color: white;\n        }\n    }\n\n    .community-home-subtitle {\n        text-align: center;\n        padding-top: 3rem;\n        padding-bottom: 1.5rem;\n    }\n\n    #sign-off{\n      padding-bottom: 4rem;\n    }\n    table {\n    border-collapse: collapse;\n    width: 98%;\n    margin: 1rem 0 2rem 0;\n    .github-icon{\n      height: 1.7rem;\n      width:auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    .site-icon{\n      height: 1.6rem;\n      width:auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n    }\n        }\n\n  td, th {\n    border: 0.05rem solid ",";\n    text-align: left;\n    padding: 0.5rem;\n        }\n      .linkscol{\n        text-align: center;\n        width:8%;\n      }\n  tbody:nth-child(even) {\n    background-color: ",';\n        }\n\n  .codes{\n    width:75%\n    margin-top:-2rem;\n  }\n\n    .community-home-container{\n        padding: 1rem 0;\n        padding-bottom: 4rem;\n        display: flex;\n        flex-wrap : wrap;\n        align-items : center;\n        justify-content: center;\n    }\n\n    p{\n      margin-top: 10px;\n    }\n    input[type=checkbox] + label {\n      display: block;\n      margin: 0.2em;\n      cursor: pointer;\n      padding: 0.2em;\n    }\n\n    input[type=checkbox] {\n      display: none;\n    }\n\n    input[type=checkbox] + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n      border: 0.1em solid #000;\n      border-radius: 0.2em;\n      display: inline-block;\n      width: 1.3em;\n      height: 1.3em;\n      padding-left: 0.2em;\n      padding-bottom: 0.3em;\n      margin-right: 0.5em;\n      margin-bottom: 0.15em;\n      vertical-align: bottom;\n      color: transparent;\n    }\n\n    input[type=checkbox] + label:active:before {\n      transform: scale(0);\n    }\n\n    input[type=checkbox]:checked + label:before {\n      background-color: ',";\n      border-color: ",";\n      color: #fff;\n    }\n\n    input[type=checkbox]:disabled + label:before {\n      transform: scale(1);\n      border-color: #aaa;\n    }\n\n    input[type=checkbox]:checked:disabled + label:before {\n      transform: scale(1);\n      background-color: ",";\n      border-color: ",";\n    }\n\n    @media only screen and (max-width: 750px){\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0;\n        padding: 1rem 2.5rem;\n      }\n      .codes{\n      width:100%\n      margin-top:-2rem;\n    }\n    }\n\n    @media only screen and (max-width: 475px){\n        .page-header-section h1{\n            padding: 0 1rem;\n            line-height: 3rem;\n            padding-top: 4rem;\n        }\n        .page-section{\n          margin-top: -2rem;\n          margin-left: 0rem;\n        }\n        table{\n          margin-left: -1.5rem;\n        }\n        .frontendTable{\n          margin-left: -2.8rem;\n        }\n    }\n  .channels-list {\n    padding-left: 40px;\n  }\n  .channels-img {\n    width: 30px;\n    height: 30px;\n  }\n  .channels-para {\n    display: flex;\n    align-items: flex-end;\n  }\n  .newcomers-journey{\n    text-align: center;\n    display: flex;\n    align-items: center;\n    margin: 2.5rem 5rem 3rem 0rem;\n    \n    h2{\n      margin-bottom: 2rem;\n    }\n}\n  .heading{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    h2{\n      margin-top: -5.5rem;\n    }\n  }\n  .heading-start{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    align-self: flex-end;\n    margin-right: 2rem;\n    margin-top: -2rem;\n    h5{\n    font-size: 1.125rem;\n    font-weight: 400;\n    margin-right: 1rem;\n    }\n    img{\n    height: 3rem;\n    width: 4rem;\n    transition: .5s;\n    }\n    img:hover{\n    padding-left: 1rem;\n    transition: .5s;\n    }\n  }\n"],(function(e){return e.theme.menuColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.black}),(function(e){return e.theme.black}),(function(e){return e.theme.tertiaryColor}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColor}),(function(e){return e.theme.secondaryLightColorTwo}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.secondaryLightColor}))}}]);
//# sourceMappingURL=component---src-pages-community-handbook-contribution-js-85ffcaaacf362ccf9367.js.map