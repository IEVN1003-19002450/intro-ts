import './style.css'
import './temas-ts/PracticaDeHoy11_09_2024.ts';
//import '.01-tiposDat.ts/01-tiposDat'
//import '.02-interfaz.ts/02-interfaz'
//import '.03-funciones.ts/03-funciones'
//import '.04-desestructuracion-obj-arre.ts/04-desestructuracion-obj-arre'
//import '.05-desestructura-funcion.ts/05-desestructura-funcion'
//import '.06-Import-export.ts/06-Import-export'
//import '.07-classe.ts/07-classe'
//import '.08-herencia.ts/08-herencia'
//import '.09-polimorfismo.ts/09-polimorfismo'
//import '.10-genericos.ts/10-genericos'
//import '.11-decoradores.ts/11-decoradores'
//import '.12-decoradores-clases.ts/12-decoradores-clases'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
