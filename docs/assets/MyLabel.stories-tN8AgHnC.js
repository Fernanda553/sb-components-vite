import{j as g}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const u=({label:l,size:y="normal",allCaps:C=!1,color:b,fontColor:f=""})=>g.jsx("span",{className:`${y} ${b}`,style:{color:f},children:C?l.toUpperCase():l});u.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary'| 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Label color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font Color",defaultValue:{value:"''",computed:!1}}}};const h={title:"UI/labels/MyLabel",component:u,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"All caps label",size:"normal",allCaps:!0}},a={args:{label:"Secondary label",color:"text-secondary"}},r={args:{label:"Custom Colors label",fontColor:"#ddd"}};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'All caps label',
    size: 'normal',
    allCaps: true
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-secondary'
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Custom Colors label',
    fontColor: '#ddd'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const S=["AllCaps","Secondary","CustomColors"];export{e as AllCaps,r as CustomColors,a as Secondary,S as __namedExportsOrder,h as default};
