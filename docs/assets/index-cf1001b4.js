(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=()=>{const o=new Array(9);return{getBoard:()=>o,setBoard:(n,e)=>o[n]=e}},d=()=>{let o;return{setSign:n=>{o=n},getSigh:()=>o}},u=document.querySelector(".app"),a=document.querySelector(".modal"),g=document.querySelector(".btnX"),p=document.querySelector(".btnO"),m=()=>{const o=l(),r=d(),s=d();let n="playerOne";return{playerOne:r,playerTwo:s,makeMove:t=>{if(t.target.childNodes[0].innerText==""){if(n=="playerOne"){t.target.childNodes[0].innerText=r.getSigh(),o.setBoard(t.target.id,r.getSigh()),n="playerTwo";return}t.target.childNodes[0].innerText=s.getSigh(),o.setBoard(t.target.id,s.getSigh()),n="playerOne"}}}},c=m();window.onload=()=>{for(let o=0;o<9;o++){const r=document.createElement("div"),s=document.createElement("p");r.classList.add("board"),r.setAttribute("id",o),r.addEventListener("click",c.makeMove),r.appendChild(s),u.appendChild(r)}g.addEventListener("click",()=>{c.playerOne.setSign("X"),c.playerTwo.setSign("O"),a.remove()}),p.addEventListener("click",()=>{c.playerOne.setSign("O"),c.playerTwo.setSign("X"),a.remove()}),a.showModal()};