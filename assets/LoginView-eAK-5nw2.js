import{r as o,a as g,o as u,c as m,b as e,d as p,w as x,e as M,f as h,v as b,g as f,t as y,h as _,_ as C,u as V,i as I}from"./index-T2RBepq2.js";const N={class:"dark"},S={class:"bg-gray-50 dark:bg-gray-900"},Z={class:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"},B=e("img",{class:"w-[100px] h-[50px]",src:C,alt:"logo"},null,-1),L={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},D={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},H=e("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Iniciar sesión ",-1),R=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Correo electrónico",-1),E=e("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Contraseña",-1),T=e("div",{class:"flex items-center justify-between"},[e("div",{class:"flex items-start"})],-1),U=e("button",{type:"submit",class:"w-full text-white bg-primary hover:bg-resaltar focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"Iniciar sesión",-1),j={class:"text-sm font-light text-gray-500 dark:text-gray-400"},q={key:0,class:"flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",role:"alert"},A=e("svg",{class:"flex-shrink-0 inline w-4 h-4 me-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1),F=e("span",{class:"sr-only"},"Info",-1),J={class:"font-medium"},O={key:1,class:"flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert"},$=e("svg",{class:"flex-shrink-0 inline w-4 h-4 me-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1),z={class:"font-medium"},P={__name:"LoginView",setup(G){const n=o(""),i=o(""),l=o(""),a=o(""),k=V(),v=async()=>{const r={username:n.value,password:i.value};try{const t=new FormData;t.append("username",r.username),t.append("password",r.password);const s=await I.post("token",t);if(s.status===200&&s.data.usuario&&s.data.access_token)if(s.data.usuario.admin)a.value="correo o contraseña incorrecto";else{console.log("submited");const d=w(s.data);localStorage.setItem("usuario",JSON.stringify(d)),localStorage.setItem("isLoggedIn",!0),l.value="Login successful!",k.push("/")}else a.value="correo o contraseña incorrecto"}catch(t){a.value="Error logging in",console.error("Error registering user:",t)}},w=r=>({id:r.usuario.id,nombre:r.usuario.nombre,apellido:r.usuario.apellido,correo:r.usuario.correo,admin:r.usuario.admin,token:r.access_token});return(r,t)=>{const s=g("router-link"),d=g("RouterLink");return u(),m("div",N,[e("section",S,[e("div",Z,[p(s,{to:"/",class:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"},{default:x(()=>[B]),_:1}),e("div",L,[e("div",D,[H,e("form",{onSubmit:M(v,["prevent"]),class:"space-y-4 md:space-y-6",action:"#"},[e("div",null,[R,h(e("input",{"onUpdate:modelValue":t[0]||(t[0]=c=>n.value=c),type:"email",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"nombre@empresa.com",required:""},null,512),[[b,n.value]])]),e("div",null,[E,h(e("input",{"onUpdate:modelValue":t[1]||(t[1]=c=>i.value=c),type:"password",name:"password",id:"password",placeholder:"••••••••",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[b,i.value]])]),T,U,e("p",j,[f("¿No tienes una cuenta aún? "),p(d,{to:"/register",class:"font-medium text-primary-600 hover:underline dark:text-primary-500"},{default:x(()=>[f("Regístrate")]),_:1})])],32),l.value?(u(),m("div",q,[A,F,e("span",J,y(l.value),1)])):_("",!0),a.value?(u(),m("div",O,[$,e("span",z,y(a.value),1)])):_("",!0)])])])])])}}};export{P as default};
