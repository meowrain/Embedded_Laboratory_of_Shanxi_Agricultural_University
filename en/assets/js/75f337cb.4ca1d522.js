"use strict";(self.webpackChunkEmbedded_Laboratory_of_Shanxi_Agricultural_University=self.webpackChunkEmbedded_Laboratory_of_Shanxi_Agricultural_University||[]).push([[1356],{6545:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>t});var s=i(2676),d=i(9313);const c={id:"windows-custom-right-click-menu",slug:"/windows-custom-right-click-menu",title:"Windows\u81ea\u5b9a\u4e49\u53f3\u952e\u83dc\u5355",date:new Date("2020-09-08T00:00:00.000Z"),authors:"kuizuo",tags:["\u5de5\u5177"],keywords:["\u5de5\u5177"]},o=void 0,l={id:"tools/windows-custom-right-click-menu",title:"Windows\u81ea\u5b9a\u4e49\u53f3\u952e\u83dc\u5355",description:"\u4e3a\u4ec0\u4e48\u5199\u8fd9\u7bc7\u6587\u7ae0\u5462\uff0c\u56e0\u4e3a\u6211\u6bcf\u6b21\u90fd\u8981\u66f4\u6539\u9f20\u6807\u53f3\u952e\u83dc\u5355\u90fd\u8981\u53bb\u767e\u5ea6\u76f8\u5173\u7684\uff0c\u7136\u540e\u5728\u7167\u7740\u4e00\u6b65\u4e00\u6b65\u64cd\u4f5c\u3002\u751a\u81f3\u6211\u5728\u5199\u8fd9\u7bc7\u6587\u7ae0\u7684\u65f6\u5019\u4e5f\u767e\u5ea6\u4e86\u76f8\u5173\u7684\u5185\u5bb9\u3002\u5230\u65f6\u5019\u5fd8\u8bb0\u4e86\u76f4\u63a5\u770b\u6211\u81ea\u5df1\u5199\u7684\u5c31\u5b8c\u4e8b\u4e86\uff08\u53ef\u80fd\u5199\u4e86\u4e4b\u540e\u5c31\u8bb0\u5f97\u4f4f\u4e86\u3002\uff09",source:"@site/docs/tools/Windows\u81ea\u5b9a\u4e49\u53f3\u952e\u83dc\u5355.md",sourceDirName:"tools",slug:"/windows-custom-right-click-menu",permalink:"/en/docs/windows-custom-right-click-menu",draft:!1,unlisted:!1,tags:[{inline:!0,label:"\u5de5\u5177",permalink:"/en/docs/tags/\u5de5\u5177"}],version:"current",frontMatter:{id:"windows-custom-right-click-menu",slug:"/windows-custom-right-click-menu",title:"Windows\u81ea\u5b9a\u4e49\u53f3\u952e\u83dc\u5355",date:"2020-09-08T00:00:00.000Z",authors:"kuizuo",tags:["\u5de5\u5177"],keywords:["\u5de5\u5177"]},sidebar:"tools",previous:{title:"Wappalyzer\u8bc6\u522b\u7f51\u7ad9\u4e0a\u7684\u6280\u672f",permalink:"/en/docs/wappalyzer-recognize-technology"},next:{title:"VScode\u76f8\u5173\u914d\u7f6e",permalink:"/en/docs/vscode-config"}},r={},t=[{value:"\u5f00\u59cb\u64cd\u4f5c",id:"\u5f00\u59cb\u64cd\u4f5c",level:2},{value:"\u6253\u5f00\u6ce8\u518c\u8868",id:"\u6253\u5f00\u6ce8\u518c\u8868",level:3},{value:"\u53f3\u952e\u6253\u5f00 Cmd",id:"\u53f3\u952e\u6253\u5f00-cmd",level:3},{value:"\u53f3\u952e\u7a7a\u767d\u533a\u57df\u7684\u83dc\u5355",id:"\u53f3\u952e\u7a7a\u767d\u533a\u57df\u7684\u83dc\u5355",level:3},{value:"\u53f3\u952e\u6587\u4ef6\u5939\u83dc\u5355",id:"\u53f3\u952e\u6587\u4ef6\u5939\u83dc\u5355",level:3},{value:"\u53f3\u952e\u7a0b\u5e8f\u83dc\u5355",id:"\u53f3\u952e\u7a0b\u5e8f\u83dc\u5355",level:3},{value:"\u53f3\u952e\u624b\u52a8\u65b0\u5efa",id:"\u53f3\u952e\u624b\u52a8\u65b0\u5efa",level:3},{value:"\u8fd9\u91cc\u8865\u5145\u4e00\u4e2a",id:"\u8fd9\u91cc\u8865\u5145\u4e00\u4e2a",level:2},{value:"1.\u9996\u5148\u6253\u5f00\u6ce8\u518c\u8868",id:"1\u9996\u5148\u6253\u5f00\u6ce8\u518c\u8868",level:4},{value:"2.\u5b9a\u4f4d\u5230<code>\u8ba1\u7b97\u673a\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer</code>",id:"2\u5b9a\u4f4d\u5230\u8ba1\u7b97\u673ahkey_local_machinesoftwaremicrosoftwindowscurrentversionpoliciesexplorer",level:4},{value:"3.\u7136\u540e\u53f3\u952e\u65b0\u5efa DWORD\uff0c\u540d\u79f0\u4e3a<code>NoCustomizeWebView</code>\uff0c\u6570\u503c\u4e3a 1\u3002",id:"3\u7136\u540e\u53f3\u952e\u65b0\u5efa-dword\u540d\u79f0\u4e3anocustomizewebview\u6570\u503c\u4e3a-1",level:4},{value:"4.\u6253\u5f00\u4efb\u52a1\u7ba1\u7406\u5668\uff0c\u627e\u5230 Windows \u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u53f3\u952e\u91cd\u65b0\u542f\u52a8\uff0c\u518d\u6b21\u6253\u5f00\u5c31\u4f1a\u53d1\u73b0\u53f3\u952e\u4e0d\u5728\u6709\u81ea\u5b9a\u4e49\u6587\u4ef6\u5939\u4e86\u3002",id:"4\u6253\u5f00\u4efb\u52a1\u7ba1\u7406\u5668\u627e\u5230-windows-\u8d44\u6e90\u7ba1\u7406\u5668\u53f3\u952e\u91cd\u65b0\u542f\u52a8\u518d\u6b21\u6253\u5f00\u5c31\u4f1a\u53d1\u73b0\u53f3\u952e\u4e0d\u5728\u6709\u81ea\u5b9a\u4e49\u6587\u4ef6\u5939\u4e86",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u4e3a\u4ec0\u4e48\u5199\u8fd9\u7bc7\u6587\u7ae0\u5462\uff0c\u56e0\u4e3a\u6211\u6bcf\u6b21\u90fd\u8981\u66f4\u6539\u9f20\u6807\u53f3\u952e\u83dc\u5355\u90fd\u8981\u53bb\u767e\u5ea6\u76f8\u5173\u7684\uff0c\u7136\u540e\u5728\u7167\u7740\u4e00\u6b65\u4e00\u6b65\u64cd\u4f5c\u3002\u751a\u81f3\u6211\u5728\u5199\u8fd9\u7bc7\u6587\u7ae0\u7684\u65f6\u5019\u4e5f\u767e\u5ea6\u4e86\u76f8\u5173\u7684\u5185\u5bb9\u3002\u5230\u65f6\u5019\u5fd8\u8bb0\u4e86\u76f4\u63a5\u770b\u6211\u81ea\u5df1\u5199\u7684\u5c31\u5b8c\u4e8b\u4e86\uff08\u53ef\u80fd\u5199\u4e86\u4e4b\u540e\u5c31\u8bb0\u5f97\u4f4f\u4e86\u3002\uff09"}),"\n",(0,s.jsx)(n.h2,{id:"\u5f00\u59cb\u64cd\u4f5c",children:"\u5f00\u59cb\u64cd\u4f5c"}),"\n",(0,s.jsx)(n.h3,{id:"\u6253\u5f00\u6ce8\u518c\u8868",children:"\u6253\u5f00\u6ce8\u518c\u8868"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u4fee\u6539\u53f3\u952e\u83dc\u5355\u7684\u5185\u5bb9\uff0c\u5c31\u9700\u8981\u6253\u5f00\u6ce8\u518c\u8868\u3002\u4fee\u6539\u6ce8\u518c\u8868\u7684\u5185\u5bb9\uff0c\u6765\u4e3a\u53f3\u952e\u83dc\u5355\u589e\u6dfb\u4e00\u4e9b\u5185\u5bb9\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6253\u5f00\u8fd0\u884c(Windows \u952e\uff0b R)\uff0c\u8f93\u5165 regedit\uff0c\u70b9\u51fb\u786e\u5b9a\u6253\u5f00\u6ce8\u518c\u8868\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u200b ",(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20200908114639158.png",alt:"image-20200908114639158"})]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u5efa\u8bae\u53f3\u952e \u6587\u4ef6->\u5bfc\u51fa\uff0c\u4ee5\u9632\u4e0d\u5c0f\u5fc3\u8bef\u64cd\u4f5c\u8fd8\u539f\u4e3a\u539f\u5148\u914d\u7f6e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u7740\u53ef\u4ee5\u5728 \u7f16\u8f91 -> \u67e5\u627e (Ctrl+F)\uff0c\u63a5\u7740\u641c\u7d22\u5bf9\u5e94\u7684\u5173\u952e\u8bcd\u3002\u8f93\u5165\u8981\u67e5\u627e\u7684\u76ee\u6807\u7684\u503c\uff0c\u5177\u4f53\u64cd\u4f5c\u4f1a\u5728\u540e\u9762\u8be6\u7ec6\u8bf4\u660e\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20200908154701753.png",alt:"image-20200908154701753"})}),"\n",(0,s.jsx)(n.h3,{id:"\u53f3\u952e\u6253\u5f00-cmd",children:"\u53f3\u952e\u6253\u5f00 Cmd"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u7ec8\u6548\u679c\uff0c\u53f3\u952e\u7a7a\u767d\u5904\uff0c\u53ef\u4ee5\u4f7f\u7528\u6253\u5f00 CMD\uff0c\u5982\u56fe"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20200908152557371.png",alt:"image-20200908152557371"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7528\u4e8e\u4f60\u5728\u5bf9\u5e94\u7684\u6587\u4ef6\u5939\u4e0b\u8f93\u5165 cmd \u547d\u4ee4\uff0c\u514d\u53bb cd \u7b49\u7e41\u6742\u64cd\u4f5c\u3002\u4e2a\u4eba\u5efa\u8bae\u8bbe\u7f6e\u4e00\u4e0b\uff0c\u5c06\u4e0b\u9762\u7684\u4ee3\u7801\u590d\u5236\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"1.reg"}),"\u6587\u4ef6\uff08\u6587\u4ef6\u540d\u65e0\u6240\u8c13\uff0c\u540e\u7f00\u540d\u662f reg \u5c31\u884c\uff0c",(0,s.jsx)(n.strong,{children:"\u6ce8\u610f\u4fdd\u5b58\u4e3a ANSI"}),"\uff0c\u4e0d\u7136\u5e26\u4e2d\u6587\u4f1a\u4e71\u7801\uff09,\u70b9\u51fb\u8fd0\u884c\uff0c\u4f1a\u6709\u63d0\u793a\uff0c\u653e\u5fc3\uff0c\u7edd\u5bf9\u5b89\u5168\u3002\u63a5\u7740\u53f3\u952e\u7a7a\u767d\u5904\uff0c\u5c31\u53ef\u4e5f\u770b\u5230\u6253\u5f00 CMD \u7684\u5b57\u6837\uff0c\u70b9\u51fb\u5c31\u80fd\u6253\u5f00 cmd \u7a97\u53e3\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\cmd_here]\n\n@="\u6253\u5f00 CMD"\n"Icon"="cmd.exe"\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\cmd_here\\command]\n\n@="\\"C:\\\\Windows\\\\System32\\\\cmd.exe\\""\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Folder\\shell\\cmdPrompt]\n\n@="\u6253\u5f00 CMD"\n"Icon"="cmd.exe"\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Folder\\shell\\cmdPrompt\\command]\n\n@="\\"C:\\\\Windows\\\\System32\\\\cmd.exe\\" \\"cd %1\\""\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\shell\\cmd_here]\n\n@="\u6253\u5f00 CMD"\n"Icon"="cmd.exe"\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\shell\\cmd_here\\command]\n\n@="\\"C:\\\\Windows\\\\System32\\\\cmd.exe\\""\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u53f3\u952e\u7a7a\u767d\u533a\u57df\u7684\u83dc\u5355",children:"\u53f3\u952e\u7a7a\u767d\u533a\u57df\u7684\u83dc\u5355"}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u7684\u65f6\u5019\u5b89\u88c5\u4e86\u4e00\u4e2a\u5f00\u53d1\u8f6f\u4ef6\uff0c\u4e0d\u5c0f\u5fc3\u52fe\u4e0a\u4e86\u4ec0\u4e48",(0,s.jsx)(n.code,{children:"open Folder as \u2026"}),"\u7136\u540e\u5c31\u51fa\u73b0\u4e0b\u56fe\u60c5\u51b5"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20200908115455647.png",alt:"image-20200908115455647"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u6709\u65f6\u5019\u6211\u5e76\u4e0d\u9700\u8981\u8fd9\u4e48\u957f\u7684\u9009\u9879\uff0c\u6216\u8005\u8bf4\u6211\u60f3\u6539\u4e00\u4e0b\u540d\u5b57\uff0c\u8ba9\u4ed6\u4e0d\u90a3\u4e48\u957f\u3002\u8fd9\u65f6\u5019\u6211\u4eec\u540c\u6837\u6253\u5f00\u6ce8\u518c\u8868\uff0c\u9996\u5148\u8fd9\u662f",(0,s.jsx)(n.em,{children:"\u53f3\u952e\u5728\u6587\u4ef6\u5939\u7a7a\u767d\u5904\u4e0b"}),"\u7684\uff08\u684c\u9762\u4e5f\u662f\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u8def\u5f84\u662f C:\\User\\\u7528\u6237\u540d\\Desktop\uff09\u90a3\u4e48\u5bf9\u5e94\u7684\u6ce8\u518c\u8868\u7684\u4f4d\u7f6e\u662f ",(0,s.jsx)(n.code,{children:"\u8ba1\u7b97\u673a\\HKEY_CLASSES_ROOT\\Directory\\Background\\shell"})," \uff08\u6216\u641c\u7d22\u5bf9\u5e94\u7684\u5173\u952e\u8bcd\uff09\uff0c\u8f93\u5165\u5b8c\u5b9a\u4f4d\u76ee\u5f55\u4e3a\u4e0b\u56fe",(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20200908151408855.png",alt:"image-20200908151408855"})]}),"\n",(0,s.jsx)(n.p,{children:"\u770b\u5230\u753b\u6846\u7684 IDEA \u6ca1\uff0c\u90a3\u5c31\u662f IDEA \u5b89\u88c5\u7684\u65f6\u5019\u4e3a\u7528\u6237\u6dfb\u52a0\u7684\u53f3\u952e\u83dc\u5355\uff0c\u73b0\u5728\u6211\u4e0d\u8981\u8fd9\u4e2a\u53f3\u952e\u83dc\u5355\uff0c\u90a3\u5c31\u628a\u8fd9\u4e2a\u6587\u4ef6\u5939\u6574\u4e2a\u5220\u4e86\u5c31\u884c\uff08\u8fd9\u91cc\u63a8\u8350\u4f60\u5220\u4e86\uff0c\u592a\u5360\u7a7a\u95f4\u4e86\uff09\u3002\u4f46\u8fd9\u65f6\u6211\u53ea\u60f3\u6539\u4e00\u4e0b\u53f3\u952e\u83dc\u5355\u7684\u6587\u4ef6\u540d\uff0c\u4e0d\u60f3\u8ba9\u4ed6\u8fd9\u4e48\u957f\uff0c\u90a3\u4e48\u4f60\u5728\u9ed8\u8ba4\u54ea\u91cc\u9f20\u6807\u53f3\u952e\uff0c\u9009\u62e9\u4fee\u6539\uff0c\u7136\u540e\u8f93\u5165\u4fee\u6539\u540e\u7684\u6587\u4ef6\u540d\u5373\u53ef\u3002\u800c\u4e0b\u9762\u7684 Icon \u5219\u662f\u56fe\u6807\u8def\u5f84\uff0c\u5bf9\u5e94\u7684\u4e5f\u5c31\u662f exe \u8def\u5f84\u3002\u5982\u679c\u56fe\u6807\u6ca1\u4e86\uff0c\u90a3\u4e48\u591a\u534a\u5c31\u662f\u8fd9\u91cc\u7684\u95ee\u9898\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u5728",(0,s.jsx)(n.code,{children:"IntelliJ IDEA"}),"\u4e0b\u8fd8\u6709\u4e00\u4e2a command \u76ee\u5f55\uff0c\u8fd9\u4e2a\u76ee\u5f55\u5c31\u4e00\u4e2a\u9ed8\u8ba4\uff0c\u5bf9\u5e94\u7684\u662f\u6267\u884c\u6587\u4ef6\u7684\u547d\u4ee4\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u662f\u6587\u4ef6\u8def\u5f84 \u53ef\u80fd\u8fd8\u6709\u4e00\u4e2a\u53c2\u6570\u662f ",(0,s.jsx)(n.code,{children:"\u201d%V\u201c"})," \uff0c\u610f\u601d\u5c31\u662f\u5982\u679c\u4f60\u8fd9\u4e2a\u8fd0\u884c\u65f6\u6ca1\u6709\u4f20\u53c2\u9ed8\u8ba4\u5c31\u662f\u4f60\u5de5\u4f5c\u76ee\u5f55\u3002\u53ef\u4ee5\u67e5\u770b ",(0,s.jsx)(n.a,{href:"https://superuser.com/questions/136838/which-special-variables-are-available-when-writing-a-shell-command-for-a-context",children:"windows \u5e2e\u52a9"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u53f3\u952e\u6587\u4ef6\u5939\u83dc\u5355",children:"\u53f3\u952e\u6587\u4ef6\u5939\u83dc\u5355"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20200908152835802.png",alt:"image-20200908152835802"})}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u4ee5\u4e3a\u4e0a\u9762\u8bbe\u7f6e\u597d\u5220\u9664\u4e86",(0,s.jsx)(n.code,{children:"Open Folder as IntelliJ IDEA Project"})," \u8fd9\u4e2a\u957f\u7684\u8981\u6b7b\u7684\u6587\u4ef6\u5939\uff0c\u6ca1\u60f3\u5230\u53f3\u952e\u6587\u4ef6\u5939\u7adf\u7136\u4e5f\u6709\uff0c\u4e0d\u7ba1\u4e86\u5b9a\u4f4d\u5728\u5bf9\u5e94\u7684\u4f4d\u7f6e\u518d\u8bf4\uff0c\u8def\u5f84 ",(0,s.jsx)(n.code,{children:"\u8ba1\u7b97\u673a\\HKEY_CLASSES_ROOT\\Directory\\shell"}),"\uff0c\u6211\u64e6\uff0c\u539f\u6765\u5c31\u5728\u4e0a\u4e00\u6b65\u64cd\u4f5c\u7684\u6587\u4ef6\u5939\u7684\u4e0b\u9762\u4e00\u70b9\u3002\u5b9a\u4f4d\u7684\u7ed3\u679c\u5982\u4e0b"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20200908153930520.png",alt:"image-20200908153930520"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u540c\u4e0a\u4e00\u6b65\u64cd\u4f5c\uff0c\u8fd9\u91cc\u4fee\u6539\u4e00\u4e0b\u540d\u5b57\u5c31\u884c\uff0c\u6211\u5c31\u8bbe\u7f6e\u77ed\u70b9\u540d\u5b57",(0,s.jsx)(n.code,{children:"Open Folder as IDEA"}),"\u3002\u7ed3\u679c\u5982\u4e0b"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20200908154339744.png",alt:"image-20200908154339744"})}),"\n",(0,s.jsx)(n.h3,{id:"\u53f3\u952e\u7a0b\u5e8f\u83dc\u5355",children:"\u53f3\u952e\u7a0b\u5e8f\u83dc\u5355"}),"\n",(0,s.jsxs)(n.p,{children:["\u65e2\u7136\u4e0a\u4e24\u6b65\u7684\u64cd\u4f5c\u4f60\u90fd\u4f1a\u4e86\uff0c\u90a3\u4e48\u53f3\u952e\u7a0b\u5e8f\u83dc\u5355\u4e5f\u662f\u4e00\u6837\uff0c\u5b9a\u4f4d\u5230\u5bf9\u5e94\u7684\u8def\u5f84",(0,s.jsx)(n.code,{children:"\u8ba1\u7b97\u673a\\HKEY_CLASSES_ROOT\\*\\shell\\"})," \u6211\u5c31\u653e\u4e00\u5f20\u5b9a\u4f4d\u8def\u5f84\u56fe\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20200908164515142.png",alt:"image-20200908164515142"})}),"\n",(0,s.jsx)(n.h3,{id:"\u53f3\u952e\u624b\u52a8\u65b0\u5efa",children:"\u53f3\u952e\u624b\u52a8\u65b0\u5efa"}),"\n",(0,s.jsx)(n.p,{children:"\u73b0\u5728\u4f60\u5e94\u8be5\u77e5\u9053\u5982\u4f55\u5b9a\u4f4d\u5230\u5df2\u6709\u7684\u53f3\u952e\u83dc\u5355\uff0c\u5e76\u4e14\u77e5\u9053\u4e86\u5982\u4f55\u4fee\u6539\u6216\u8005\u5220\u9664\u3002\u90a3\u4e48\u73b0\u5728\uff0c\u5c31\u624b\u52a8\u6765\u65b0\u5efa\u4e00\u4e2a\u53f3\u952e\u83dc\u5355\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f5c\u4e3a\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"vscode"}),"\u4f7f\u7528\u8005\uff0c\u53f3\u952e\u4e0d\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"\u901a\u8fc7 Code \u6253\u5f00"}),"\u600e\u4e48\u884c\uff0c\u800c\u4f60\u5b89\u88c5\u4e86",(0,s.jsx)(n.code,{children:"vscode"}),"\u5374\u6ca1\u6709",(0,s.jsx)(n.code,{children:"Open with Code"}),"\uff0c\u90a3\u5c31\u662f\u4f60\u5b89\u88c5\u65f6\u6ca1\u6709\u52fe\u4e0a\u8fd9\u4e24\u9879\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/20190530203030700.png",alt:"20190530203030700"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u767e\u5ea6 \u53f3\u952e\u83dc\u5355\u6dfb\u52a0 vscode\uff0c\u4f1a\u6709\u76f8\u5173\u50cf\u6211\u63d0\u4f9b\u7684\u53f3\u952e",(0,s.jsx)(n.code,{children:"\u6253\u5f00 Cmd"}),"\u8fd9\u6837\u7684\u64cd\u4f5c\u3002\u8fd9\u91cc\u4e5f\u5c06\u5bf9\u5e94\u4ee3\u7801\u8d34\u51fa\u6765\uff0c\u4f46",(0,s.jsx)(n.em,{children:"\u9700\u8981\u66f4\u6539\u4e00\u4e0b\u7684 vscode \u7684\u8def\u5f84"}),"\u4e0e\u53f3\u952e\u83dc\u5355\u540d\uff0c\u5e76\u4e14\u8981\u5c06\u5355\u53cd\u659c\u6760\u90fd\u6362\u6210\u53cc\u53cd\u659c\u6760 \u9632\u6b62\u8f6c\u4e49\u3002\u4f8b\u5982\uff0c\u8fd9\u91cc\u53f3\u952e\u83dc\u5355\u540d\u4e3a",(0,s.jsx)(n.code,{children:"Open with Code"}),"\uff0c\u800c\u6211\u7684",(0,s.jsx)(n.code,{children:"Code.exe"}),"\u8def\u5f84\u4e3a",(0,s.jsx)(n.code,{children:"E:\\VSCode\\Code.exe"}),"\u90a3\u4e48\u6211\u5c31\u8981\u6539\u4e3a",(0,s.jsx)(n.code,{children:"E:\\\\VSCode\\\\Code.exe"}),"\uff0c\u4f60\u53ea\u9700\u8981\u6539\u4e3a\u4f60\u7684\u8def\u5f84\u5373\u53ef\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["zhuyi \u4e0b\u9762\u6709\u7684\u8def\u5f84\u662f\u5728",(0,s.jsx)(n.code,{children:"Code.exe"}),"\u540e\u9762\u6709\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"\\"}),"\u8fd9\u91cc\u662f\u8f6c\u4e49",(0,s.jsx)(n.code,{children:"\u201c"}),"\u7684\uff0c\u4e0d\u8981\u5220\u9664\u3002\u6240\u4ee5\u8fd9\u4e48\u9ebb\u70e6\uff0c\u8fd8\u4e0d\u5982\u91cd\u65b0\u5378\u8f7d\u5b89\u88c5\u52fe\u4e0a\u8fd9\u4e24\u4e2a\u9009\u9879\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6309\u540c\u6837\u7684\u5b58\u4e3a",(0,s.jsx)(n.code,{children:"1.reg"}),"\u6587\u4ef6\uff0c\u53cc\u51fb\u6267\u884c\u5373\u53ef"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Windows Registry Editor Version 5.00\n\n[HKEY_CLASSES_ROOT\\*\\shell\\VSCode]\n@="Open with Code"\n"Icon"="E:\\\\VSCode\\\\Code.exe"\n\n[HKEY_CLASSES_ROOT\\*\\shell\\VSCode\\command]\n@="\\"E:\\\\VSCode\\\\Code.exe" \\"%1\\""\n\n[HKEY_CLASSES_ROOT\\Directory\\shell\\VSCode]\n@="Open with Code"\n"Icon"="E:\\\\VSCode\\\\Code.exe"\n\n[HKEY_CLASSES_ROOT\\Directory\\shell\\VSCode\\command]\n@="\\"E:\\\\VSCode\\\\Code.exe\\" \\"%V\\""\n\n[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\VSCode]\n@="Open with Code"\n"Icon"="E:\\\\VSCode\\\\Code.exe"\n\n[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\VSCode\\command]\n@="\\"E:\\\\VSCode\\\\Code.exe\\" \\"%V\\""\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0d\u8fc7\u8fd9\u91cc\u8fd8\u662f\u8bf4\u4e0b\u624b\u52a8\u7684\u64cd\u4f5c\uff0c\u8bdd\u4e0d\u591a\u8bf4\u5148\u770b gif \u64cd\u4f5c"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/demo.gif",alt:"demo"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e\u6211\u8bbe\u7f6e\u8fc7\u4e86 VSCode\uff0c\u8fd9\u91cc\u6211\u5c06 S \u6539\u6210 B\uff0c\u5bf9\u5e94\u7684\u64cd\u4f5c\u5c31\u662f\u8fd9\u6837\u3002\u5bf9\u5e94\u7684\u6570\u636e\u6211\u5728\u4e0a\u9762\u4e5f\u5df2\u7ecf\u8bf4\u8fc7\u4e86\u3002\u4e00\u822c\u6765\u8bf4\u4e5f\u6ca1\u5fc5\u8981\u624b\u52a8\u64cd\u4f5c\u6dfb\u52a0\uff0c\u90fd\u4f1a\u6709\u5bf9\u5e94\u7684",(0,s.jsx)(n.code,{children:".reg"}),"\u6587\u4ef6\uff0c\u70b9\u51fb\u8fd0\u884c\u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd9\u91cc\u8865\u5145\u4e00\u4e2a",children:"\u8fd9\u91cc\u8865\u5145\u4e00\u4e2a"}),"\n",(0,s.jsx)(n.p,{children:"\u53f3\u952e\u83dc\u5355\u6709\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6587\u4ef6\u5939\uff0c\u8fd9\u4e2a\u6ca1\u4ec0\u4e48\u7528\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u8868\u6765\u8fdb\u884c\u5220\u9664\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"1\u9996\u5148\u6253\u5f00\u6ce8\u518c\u8868",children:"1.\u9996\u5148\u6253\u5f00\u6ce8\u518c\u8868"}),"\n",(0,s.jsxs)(n.h4,{id:"2\u5b9a\u4f4d\u5230\u8ba1\u7b97\u673ahkey_local_machinesoftwaremicrosoftwindowscurrentversionpoliciesexplorer",children:["2.\u5b9a\u4f4d\u5230",(0,s.jsx)(n.code,{children:"\u8ba1\u7b97\u673a\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer"})]}),"\n",(0,s.jsxs)(n.h4,{id:"3\u7136\u540e\u53f3\u952e\u65b0\u5efa-dword\u540d\u79f0\u4e3anocustomizewebview\u6570\u503c\u4e3a-1",children:["3.\u7136\u540e\u53f3\u952e\u65b0\u5efa DWORD\uff0c\u540d\u79f0\u4e3a",(0,s.jsx)(n.code,{children:"NoCustomizeWebView"}),"\uff0c\u6570\u503c\u4e3a 1\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20200908163225915.png",alt:"image-20200908163225915"})}),"\n",(0,s.jsx)(n.h4,{id:"4\u6253\u5f00\u4efb\u52a1\u7ba1\u7406\u5668\u627e\u5230-windows-\u8d44\u6e90\u7ba1\u7406\u5668\u53f3\u952e\u91cd\u65b0\u542f\u52a8\u518d\u6b21\u6253\u5f00\u5c31\u4f1a\u53d1\u73b0\u53f3\u952e\u4e0d\u5728\u6709\u81ea\u5b9a\u4e49\u6587\u4ef6\u5939\u4e86",children:"4.\u6253\u5f00\u4efb\u52a1\u7ba1\u7406\u5668\uff0c\u627e\u5230 Windows \u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u53f3\u952e\u91cd\u65b0\u542f\u52a8\uff0c\u518d\u6b21\u6253\u5f00\u5c31\u4f1a\u53d1\u73b0\u53f3\u952e\u4e0d\u5728\u6709\u81ea\u5b9a\u4e49\u6587\u4ef6\u5939\u4e86\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20200908163415434.png",alt:"image-20200908163415434"})}),"\n",(0,s.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53f3\u952e\u6587\u4ef6\u5939\u7a7a\u767d\u5904\u6240\u5bf9\u5bf9\u5e94\u7684\u76ee\u5f55\u8def\u5f84\u662f",(0,s.jsx)(n.code,{children:"\u8ba1\u7b97\u673a\\HKEY_CLASSES_ROOT\\Directory\\Background\\shell"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53f3\u952e\u6587\u4ef6\u5939\u7684\u76ee\u5f55\u8def\u5f84\u662f",(0,s.jsx)(n.code,{children:"\u8ba1\u7b97\u673a\\HKEY_CLASSES_ROOT\\Directory\\shell"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53f3\u952e\u7a0b\u5e8f\u7684\u76ee\u5f55\u8def\u5f84\u662f ",(0,s.jsx)(n.code,{children:"\u8ba1\u7b97\u673a\\HKEY_CLASSES_ROOT\\*\\shell"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8981\u6dfb\u52a0\uff0c\u8981\u4fee\u6539\u5c31\u56e0\u4eba\u800c\u5f02\u4e86\u3002"})})]})}function a(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9313:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var s=i(5271);const d={},c=s.createContext(d);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);