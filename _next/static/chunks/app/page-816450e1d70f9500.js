(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6392:function(e,r,t){Promise.resolve().then(t.t.bind(t,5878,23)),Promise.resolve().then(t.bind(t,6677))},6677:function(e,r,t){"use strict";t.d(r,{Carousel:function(){return m},CarouselContent:function(){return x},CarouselItem:function(){return p},CarouselNext:function(){return g},CarouselPrevious:function(){return b}});var n=t(7437),o=t(2265),a=t(653),s=t(9467),l=t(1994),i=t(3335);function u(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,i.m6)((0,l.W)(r))}var d=t(5293);let c=(0,t(7712).j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),f=o.forwardRef((e,r)=>{let{className:t,variant:o,size:a,asChild:s=!1,...l}=e,i=s?d.g7:"button";return(0,n.jsx)(i,{className:u(c({variant:o,size:a,className:t})),ref:r,...l})});f.displayName="Button";let h=o.createContext(null);function v(){let e=o.useContext(h);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let m=o.forwardRef((e,r)=>{let{orientation:t="horizontal",opts:a,setApi:l,plugins:i,className:d,children:c,...f}=e,[v,m]=(0,s.Z)({...a,axis:"horizontal"===t?"x":"y"},i),[x,p]=o.useState(!1),[b,g]=o.useState(!1),w=o.useCallback(e=>{e&&(p(e.canScrollPrev()),g(e.canScrollNext()))},[]),y=o.useCallback(()=>{null==m||m.scrollPrev()},[m]),C=o.useCallback(()=>{null==m||m.scrollNext()},[m]),N=o.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),C())},[y,C]);return o.useEffect(()=>{m&&l&&l(m)},[m,l]),o.useEffect(()=>{if(m)return w(m),m.on("reInit",w),m.on("select",w),()=>{null==m||m.off("select",w)}},[m,w]),(0,n.jsx)(h.Provider,{value:{carouselRef:v,api:m,opts:a,orientation:t||((null==a?void 0:a.axis)==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:C,canScrollPrev:x,canScrollNext:b},children:(0,n.jsx)("div",{ref:r,onKeyDownCapture:N,className:u("relative",d),role:"region","aria-roledescription":"carousel",...f,children:c})})});m.displayName="Carousel";let x=o.forwardRef((e,r)=>{let{className:t,...o}=e,{carouselRef:a,orientation:s}=v();return(0,n.jsx)("div",{ref:a,className:"overflow-hidden",children:(0,n.jsx)("div",{ref:r,className:u("flex","horizontal"===s?"-ml-4":"-mt-4 flex-col",t),...o})})});x.displayName="CarouselContent";let p=o.forwardRef((e,r)=>{let{className:t,...o}=e,{orientation:a}=v();return(0,n.jsx)("div",{ref:r,role:"group","aria-roledescription":"slide",className:u("min-w-0 shrink-0 grow-0 basis-full","horizontal"===a?"pl-4":"pt-4",t),...o})});p.displayName="CarouselItem";let b=o.forwardRef((e,r)=>{let{className:t,variant:o="outline",size:s="icon",...l}=e,{orientation:i,scrollPrev:d,canScrollPrev:c}=v();return(0,n.jsxs)(f,{ref:r,variant:o,size:s,className:u("absolute  h-8 w-8 rounded-full","horizontal"===i?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!c,onClick:d,...l,children:[(0,n.jsx)(a.Y4O,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});b.displayName="CarouselPrevious";let g=o.forwardRef((e,r)=>{let{className:t,variant:o="outline",size:s="icon",...l}=e,{orientation:i,scrollNext:d,canScrollNext:c}=v();return(0,n.jsxs)(f,{ref:r,variant:o,size:s,className:u("absolute h-8 w-8 rounded-full","horizontal"===i?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!c,onClick:d,...l,children:[(0,n.jsx)(a.LZ3,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Next slide"})]})});g.displayName="CarouselNext"}},function(e){e.O(0,[310,401,971,117,744],function(){return e(e.s=6392)}),_N_E=e.O()}]);