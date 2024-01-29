(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){const t=document.createElement("p");return t.textContent=e,t}e.d({},{C:()=>o});const n=function(){const e=document.getElementById("content");e.innerHTML="",o(),document.querySelector(".homeBtn").classList.toggle("is-active");const n=document.createElement("div");n.classList.add("home");const a=document.createElement("img");a.src="images/cartoon.png",a.alt="sushi chef cartoon",n.appendChild(t("Welcome to Blessed Sushi!")),n.appendChild(t("The most fresh & most chill in town!")),n.appendChild(a),n.appendChild(t("Visit us, or Order Online!")),e.appendChild(n)};function a(e,t,n){const a=document.createElement("div");a.classList.add("menu-item");const s=document.createElement("h3");s.textContent=e,s.classList.add("itemName");const i=document.createElement("img");i.src=n;const c=document.createElement("p");return c.textContent=t,c.classList.add("itemInfo"),a.appendChild(s),a.appendChild(i),a.appendChild(c),a}const s=document.querySelector(".homeBtn"),i=document.querySelector(".menuBtn"),c=document.querySelector(".aboutBtn");function o(){s.classList.contains("is-active")&&s.classList.toggle("is-active"),i.classList.contains("is-active")&&i.classList.toggle("is-active"),c.classList.contains("is-active")&&c.classList.toggle("is-active")}n(),s.addEventListener("click",n),i.addEventListener("click",(function(){const e=document.getElementById("content");e.innerHTML="",o(),document.querySelector(".menuBtn").classList.toggle("is-active");const t=document.createElement("div");t.classList.add("menu"),function(e){e.appendChild(a("Dragon Roll","A delectable fusion of shrimp tempura, avocado, and cucumber, topped with spicy mayo and eel sauce for a savory kick.","images/sushi/anthony-espinosa-InCMGusiAvA-unsplash.jpg")),e.appendChild(a("Rainbow Roll","A colorful assortment of fresh sashimi slices, including tuna, salmon, and avocado, rolled with crab and cucumber for a burst of flavors.","images/sushi/luc-bercoth-4ykELaXgeOM-unsplash.jpg")),e.appendChild(a("Spicy Tuna Roll","A zesty combination of spicy tuna, cucumber, and green onions, finished with a drizzle of spicy mayo for a bold and fiery taste.","images/sushi/roll2.jpg")),e.appendChild(a("California Roll","A classic roll featuring imitation crab, avocado, and cucumber, wrapped in seaweed and rice, perfect for those seeking a milder sushi experience.","images/sushi/suhi-roll.jpg")),e.appendChild(a("Crispy Tempura Roll","A delightful mix of tempura shrimp, avocado, and cucumber, complemented by a crunchy tempura coating and a touch of eel sauce.","images/sushi/rainbow.jpg")),e.appendChild(a("Mango Tango Roll","A tropical delight with shrimp tempura, mango slices, and cucumber, harmonized with a sweet mango sauce for a refreshing twist.","images/sushi/spicy.jpg"))}(t),e.appendChild(t)})),c.addEventListener("click",(function(){const e=document.getElementById("content");e.innerHTML="",o(),document.querySelector(".aboutBtn").classList.toggle("is-active");const n=document.createElement("div");n.classList.add("about");const a=document.createElement("img");a.src="images/map.png",n.appendChild(t("☎️: 123 - 456 - 7890")),n.appendChild(t("🏘️: 2323 Blessed Ave, Flagstaff AZ")),n.appendChild(a),e.appendChild(n)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTRSxpQkFBaUIsU0NUMUIsV0FDRSxNQUFNdkIsRUFBVUgsU0FBU0ksZUFBZSxXQUN4Q0QsRUFBUUUsVUFBWSxHQUVwQkMsSUFDaUJOLFNBQVNPLGNBQWMsYUFDL0JDLFVBQVVDLE9BQU8sYUFFMUIsTUFBTW9CLEVBQVE3QixTQUFTQyxjQUFjLE9BQ3JDNEIsRUFBTXJCLFVBQVVHLElBQUksU0FFcEIsTUFBTW1CLEVBQVM5QixTQUFTQyxjQUFjLE9BQ3RDNkIsRUFBT2pCLElBQU0saUJBRWJnQixFQUFNZCxZQUFZbEIsRUFBUSx5QkFDMUJnQyxFQUFNZCxZQUFZbEIsRUFBUSx3Q0FDMUJnQyxFQUFNZCxZQUFZZSxHQUVsQjNCLEVBQVFZLFlBQVljLEVBQ3RCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgZGV0ZXJtaW5lVW5kZXJsaW5lIH0gZnJvbSBcIi5cIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBkZXRlcm1pbmVVbmRlcmxpbmUoKTtcclxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lQnRuXCIpO1xyXG4gIGhvbWVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuXHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbWcuc3JjID0gXCJpbWFnZXMvY2FydG9vbi5wbmdcIjtcclxuICBpbWcuYWx0ID0gXCJzdXNoaSBjaGVmIGNhcnRvb25cIjtcclxuXHJcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQKFwiV2VsY29tZSB0byBCbGVzc2VkIFN1c2hpIVwiKSk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQKFwiVGhlIG1vc3QgZnJlc2ggJiBtb3N0IGNoaWxsIGluIHRvd24hXCIpKTtcclxuICBob21lLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQKFwiVmlzaXQgdXMsIG9yIE9yZGVyIE9ubGluZSFcIikpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQKGluZm8pIHtcclxuICBjb25zdCBwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBFbGVtZW50LnRleHRDb250ZW50ID0gaW5mbztcclxuICByZXR1cm4gcEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xyXG5leHBvcnQgeyBjcmVhdGVQIH07XHJcbiIsImltcG9ydCB7IGRldGVybWluZVVuZGVybGluZSB9IGZyb20gXCIuXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgZGV0ZXJtaW5lVW5kZXJsaW5lKCk7XHJcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUJ0blwiKTtcclxuICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcblxyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcblxyXG4gIGNyZWF0ZU1lbnVMaXN0KG1lbnUpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBpbmZvLCBzcmMpIHtcclxuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuXHJcbiAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJpdGVtTmFtZVwiKTtcclxuXHJcbiAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaXRlbUltZy5zcmMgPSBzcmM7XHJcblxyXG4gIGNvbnN0IGl0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaXRlbUluZm8udGV4dENvbnRlbnQgPSBpbmZvO1xyXG4gIGl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoXCJpdGVtSW5mb1wiKTtcclxuXHJcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xyXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xyXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1JbmZvKTtcclxuICByZXR1cm4gbWVudUl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVMaXN0KG1lbnUpIHtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiRHJhZ29uIFJvbGxcIixcclxuICAgICAgXCJBIGRlbGVjdGFibGUgZnVzaW9uIG9mIHNocmltcCB0ZW1wdXJhLCBhdm9jYWRvLCBhbmQgY3VjdW1iZXIsIHRvcHBlZCB3aXRoIHNwaWN5IG1heW8gYW5kIGVlbCBzYXVjZSBmb3IgYSBzYXZvcnkga2ljay5cIixcclxuICAgICAgXCJpbWFnZXMvc3VzaGkvYW50aG9ueS1lc3Bpbm9zYS1JbkNNR3VzaUF2QS11bnNwbGFzaC5qcGdcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIlJhaW5ib3cgUm9sbFwiLFxyXG4gICAgICBcIkEgY29sb3JmdWwgYXNzb3J0bWVudCBvZiBmcmVzaCBzYXNoaW1pIHNsaWNlcywgaW5jbHVkaW5nIHR1bmEsIHNhbG1vbiwgYW5kIGF2b2NhZG8sIHJvbGxlZCB3aXRoIGNyYWIgYW5kIGN1Y3VtYmVyIGZvciBhIGJ1cnN0IG9mIGZsYXZvcnMuXCIsXHJcbiAgICAgIFwiaW1hZ2VzL3N1c2hpL2x1Yy1iZXJjb3RoLTR5a0VMYVhnZU9NLXVuc3BsYXNoLmpwZ1wiXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiU3BpY3kgVHVuYSBSb2xsXCIsXHJcbiAgICAgIFwiQSB6ZXN0eSBjb21iaW5hdGlvbiBvZiBzcGljeSB0dW5hLCBjdWN1bWJlciwgYW5kIGdyZWVuIG9uaW9ucywgZmluaXNoZWQgd2l0aCBhIGRyaXp6bGUgb2Ygc3BpY3kgbWF5byBmb3IgYSBib2xkIGFuZCBmaWVyeSB0YXN0ZS5cIixcclxuICAgICAgXCJpbWFnZXMvc3VzaGkvcm9sbDIuanBnXCJcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJDYWxpZm9ybmlhIFJvbGxcIixcclxuICAgICAgXCJBIGNsYXNzaWMgcm9sbCBmZWF0dXJpbmcgaW1pdGF0aW9uIGNyYWIsIGF2b2NhZG8sIGFuZCBjdWN1bWJlciwgd3JhcHBlZCBpbiBzZWF3ZWVkIGFuZCByaWNlLCBwZXJmZWN0IGZvciB0aG9zZSBzZWVraW5nIGEgbWlsZGVyIHN1c2hpIGV4cGVyaWVuY2UuXCIsXHJcbiAgICAgIFwiaW1hZ2VzL3N1c2hpL3N1aGktcm9sbC5qcGdcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIkNyaXNweSBUZW1wdXJhIFJvbGxcIixcclxuICAgICAgXCJBIGRlbGlnaHRmdWwgbWl4IG9mIHRlbXB1cmEgc2hyaW1wLCBhdm9jYWRvLCBhbmQgY3VjdW1iZXIsIGNvbXBsZW1lbnRlZCBieSBhIGNydW5jaHkgdGVtcHVyYSBjb2F0aW5nIGFuZCBhIHRvdWNoIG9mIGVlbCBzYXVjZS5cIixcclxuICAgICAgXCJpbWFnZXMvc3VzaGkvcmFpbmJvdy5qcGdcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIk1hbmdvIFRhbmdvIFJvbGxcIixcclxuICAgICAgXCJBIHRyb3BpY2FsIGRlbGlnaHQgd2l0aCBzaHJpbXAgdGVtcHVyYSwgbWFuZ28gc2xpY2VzLCBhbmQgY3VjdW1iZXIsIGhhcm1vbml6ZWQgd2l0aCBhIHN3ZWV0IG1hbmdvIHNhdWNlIGZvciBhIHJlZnJlc2hpbmcgdHdpc3QuXCIsXHJcbiAgICAgIFwiaW1hZ2VzL3N1c2hpL3NwaWN5LmpwZ1wiXHJcbiAgICApXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XHJcbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcclxuXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVCdG5cIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVCdG5cIik7XHJcbmNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dEJ0blwiKTtcclxuXHJcbmxvYWRIb21lKCk7XHJcblxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkSG9tZSk7XHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRNZW51KTtcclxuYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRBYm91dCk7XHJcblxyXG5mdW5jdGlvbiBkZXRlcm1pbmVVbmRlcmxpbmUoKSB7XHJcbiAgaWYgKGhvbWVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtYWN0aXZlXCIpKSB7XHJcbiAgICBob21lQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgfVxyXG4gIGlmIChtZW51QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImlzLWFjdGl2ZVwiKSkge1xyXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gIH1cclxuICBpZiAoYWJvdXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtYWN0aXZlXCIpKSB7XHJcbiAgICBhYm91dEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZGV0ZXJtaW5lVW5kZXJsaW5lIH07XHJcbiIsImltcG9ydCB7IGRldGVybWluZVVuZGVybGluZSB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVAgfSBmcm9tIFwiLi9ob21lXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkQWJvdXQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGRldGVybWluZVVuZGVybGluZSgpO1xyXG4gIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dEJ0blwiKTtcclxuICBhYm91dEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG5cclxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xyXG5cclxuICBjb25zdCBtYXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG1hcEltZy5zcmMgPSBcImltYWdlcy9tYXAucG5nXCI7XHJcblxyXG4gIGFib3V0LmFwcGVuZENoaWxkKGNyZWF0ZVAoXCLimI7vuI86IDEyMyAtIDQ1NiAtIDc4OTBcIikpO1xyXG4gIGFib3V0LmFwcGVuZENoaWxkKGNyZWF0ZVAoXCLwn4+Y77iPOiAyMzIzIEJsZXNzZWQgQXZlLCBGbGFnc3RhZmYgQVpcIikpO1xyXG4gIGFib3V0LmFwcGVuZENoaWxkKG1hcEltZyk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQ7XHJcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNyZWF0ZVAiLCJpbmZvIiwicEVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImRldGVybWluZVVuZGVybGluZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJob21lIiwiYWRkIiwiaW1nIiwic3JjIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVNZW51SXRlbSIsIm5hbWUiLCJtZW51SXRlbSIsIml0ZW1OYW1lIiwiaXRlbUltZyIsIml0ZW1JbmZvIiwiaG9tZUJ0biIsIm1lbnVCdG4iLCJhYm91dEJ0biIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lbnUiLCJjcmVhdGVNZW51TGlzdCIsImFib3V0IiwibWFwSW1nIl0sInNvdXJjZVJvb3QiOiIifQ==