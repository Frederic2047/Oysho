# Prueba Técnica Oysho website con Cypress

## Descarga e Instalación:
### Para clonar el repositorio se deberán de realizar los siguientes pasos: 
* Escribir en la terminal: `git clone <https://urlproyecto>`. 
* Nos situamos en el directorio del proyecto a través de la terminal e instalamos las dependencias: `npm intall` 
* Una vez clonado el repositorio, lo abrimos a través del IDE correspondiente (Visual Studio Code).

## Estructura del Proyecto:
* `cypress/` Contiene las pruebas y configuración de cypress
    * `e2e/` Contiene las pruebas e2e del proyecto
        * `tests/` Contiene archivos de prueba. 
        * `tests_optional/` Contiene archivos de prueba.
    * `fixtures/`
    * `support/`
        * `commands.js` Contiene los comandos creados en cypress.
        * `e2e.js`
* `node_modules/`
* `cypress.config.js`
* `package-lock.json` Contiene información sobre dependencias de node.
* `package.json` Contiene  información sobre el proyecto y las dependencias.
* `README.md` Información acerca de la descarga y puesta en marcha del proyecto.


## Ejecución de Pruebas: 
#### Opción 1: Mediante el cypress runner:
* Para ejecutar las pruebas a través del cypress runner, escribir en la terminal : `npm run oysho:open` 
* Una vez abierto, el seleccionar la opción `E2E Testing con Chrome` -> `Start E2E Testing in Chrome`.
* Al hacer click sobre cualquier test, se nos ejecutará automáticamente pudiendo visualizar si todo ha ido correctamente o por el contrario tenemos algún error en las pruebas. 

### Opción 2: Prueba crossbrowser sin el cypress runner por Terminal:
* Ejecutar la prueba de <visit_Oysho.cy.js> crossbrowser a través de la terminal, deberemos escribir uno de los siguientes comandos en función del navegador que queramos:
    * `npm run test-edge`
    * `npm run test-electron`
    * `npm run test-chrome`

* El resultado de la prueba nos aparecerá en la propia terminal

## Errores: 
* En caso de suceder un error, podremos ver un vídeo que genera automáticamente la herramienta en el punto en el que ha fallado y se generán screenshots de los errores
* Este video se aloja en la carpeta `cypress/videos`
* Las Screenshots se alojarán en la carpeta `cypress/screenshots`

