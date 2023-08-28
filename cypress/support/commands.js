
Cypress.Commands.add('cookies_banner', () => {
    cy.contains('Utilizamos cookies propias y de terceros con finalidades analíticas y para mostrarte publicidad relacionada con tus preferencias a partir de tus hábitos de navegación y tu perfil. Puedes configurar o rechazar las cookies haciendo click en “Configuración de cookies”. También puedes aceptar todas las cookies pulsando el botón “Aceptar todas las cookies”. Para más información puedes visitar nuestra').should('be.visible');
    cy.get('.cookie-setting-link', { timeout: 50000 });
    cy.get('.cookie-setting-link').contains('Configuración de cookies');
    cy.get('#onetrust-accept-btn-handler').contains('Aceptar todas las cookies').should('be.visible');
    cy.get('#onetrust-accept-btn-handler').click();
});



//Parametros Header
Cypress.Commands.add('Cookie', () =>{
    'ITXSESSIONID=2d7ef02e10a9bd129f8833d950b3ea0a; OYSSESSION=dc6034b303014f3c7917969e58d8d7a9; _abck=6EF2BB612E9AEA2B377F5A76D9D64735~-1~YAAQVNXdWMXBUiOKAQAADGl4PArgG+iSkoZ+9mj8mLj7dqJEocuxgwnlBNby7yEgQRV+jTy/Jt3CCReWxT7/5ArhW4e8JQncwpr/gZKO+UJH5zRb1EJ7sIF0e5m0DfIxc5CV0sVxkPaFvqqXqDVQTs0rGTD340OBc0hyQFKaxUYdfGDZmLIr9YG11L40L4ZJMN9LjQuSICheH9mzWntIJ+v0iIv3PIy4XqqkOw2/w+MlQ8sLVtNOOJkrHCaA1Bv7rzjXccdROzQOCBAyEdWKSvAfASYEzwN7WTjEfG//4IkXjcuZunI9g/3Rppysu0l2EUEC01pxkK0Fcr9OXv0OILbxcwaXGgNm8GmGj9cBKtdr9qnF/zhuZZiZmw==~-1~-1~-1; bm_sz=C29AADE781BF1E63288F47BAD10F72A3~YAAQVNXdWMfBUiOKAQAADGl4PBQSPg/QUBqMR1jo7MK40P4s73uRdUTIrj4WHHLBKnkk4CyIpgSr4/yKtG3PBoxiPHtqvtSQjODlpveWIdJ3ezK3Af2wq4lE+DQ2aRhtV3FsBUMigf9hvoNOznOhbJPIGMzbP3y7OV4I8fpRAH6oPThQF41RacsD/GXy83YJ2eB5XO9DBOdx98sts6/gaTdHbF8zslPzOBdyNbZDqKFZyl3+3BMbkAlM/J/KViMWPSsTFQu/5hgHBtxyQIOtbPRQkc3oaQBQPBj5BuWGntUpKQ==~3617079~4343089; AKA_A2=A; ak_bmsc=BE24E702E6D8C6AECF17A5012F53C59F~000000000000000000000000000000~YAAQVNXdWHvCUiOKAQAAuHl4PBTZd5vV6WIjX/YSXxj/RXMoJ/7EnVAfLIkTw+yanq/up3ySshLJJ/UrS/zF+GDvEMvHjfsj+Iaa6NQ/fQorffmoQZH7gexmcLmy8Zy2N7Mayxh4NU0YhS5lcCltA10L/yhs2dkBx27AyZGHWKNTuhtKYhuH2LuAUN/Rle4I36QbjsRdoR4oQ9CWczRL2BIGoGVGhVD1foXCfYGAiekdBOpE7tukiWAW1hfUoZJVIsk2aCrV9t+G73p4VLbkecnYwyvhS/3lGMCbKs7OiyuozgtV90v9Nh7E8Uhq96PNAFGb6J7rMGoNNANMJkhk/kchPAw4gHUGGvyd/c3IHGekv8gJyJQH07bV4ZmeA7LASCAvhovvzh4vTEdF2eDV3R/5lQ0GWZeDQj8UrClOaig8SOT6a99F0OhAg8aZjd8=; bm_mi=8F915DDB3F7C350C387B1B4F507A38D4~YAAQVNXdWKnCUiOKAQAAIn14PBTOGVydxo50SErp19uwE7CPHYsidO4zH5ZZ3A+DBPXJ5kVxhRJ37KtrShlQocLUQ12vjZl9LnhArUg/LCYdm3qXEFcI6kq9VPXfOZwjjg/jBePxXU++/if6a5su6vdIH7uIyTORtPNfyN2cjBAbEEgcylufFB69z7LpAyLZZwGFxufuteHl+XaGnvwmPwwNTb7D92LNeq0oJ5XJB7NiAQvuR7jDvBzB3qnb+tBEDj2NkZdjHe8uGBOSi3U9fTWqDDS3UpgXS0mJCXpbZD0UYDJojBJX0+14xOQ=~1; TS0105c744=011f37387c5c51f59ca40da57fb7b0917ab9787c4cd37fd1d3e0b251a4d3c0f0921effac214031e8c1cc56b0d7d4ab2ce5a8528a67; bm_sv=1FEE1037817AC432AFD98F1FC97F7254~YAAQVNXdWNrDUiOKAQAAGJ54PBRVggTzuS/jKGeBAdEWL5ixGG/WjrXB+oF3rj2gHRCFgWFnc1frY4GvTZL4dBpHaJEfT7kFQGtfdxJSEP9vy6+2J6GWOy/NXO4YdyLyHSyrJBgkJ1bGDi4P2U+K0LkWG/mFPtNVWTSdYh58Qr5cXMMlkG6nNk/2RnqrDpQHvyaej9abLOmztwaKDaeIEtzob7O/eVILYCk3gS7+xGncN020WTMllsxlOR/0OvA=~1'
})

Cypress.Commands.add('logged_cookie', () => {
    'OptanonAlertBoxClosed=2023-08-24T17:26:30.996Z; _imutc=022819aebd8c4d8017e514cdc64bb7ab1ccabccc1f512adeb6987536199b42d4; _gcl_au=1.1.1688659912.1692897991; _fbp=fb.1.1692897991371.9932116653; _tt_enable_cookie=1; _ttp=OznHqfmG0p53GPIFpUALh9PsrOh; ORA_FPC=id=aa9f2bd0-e729-4292-9fdd-3709fbd4bf28; ITXSESSIONID=c2450d16d1e6333199a2c25942242d02; OYSSESSION=c4be5506bc550e4543019f7b91675487; AKA_A2=A; bm_sz=267B2BBF5C6FA064F9BDA7E1743C11E2~YAAQVNXdWBcqYSOKAQAAy2o+PRTZ/yqCFKf20h98HnMygJ1e+D3D6YHclXbzya3H0IVU7ot5DT+tjeAcoeDPRvWttkKZrlIUFvtVSbpipCbMXOOTukj6XCkbZi9O8z28Ip160Hra72aW3x+UbA9/lT/grcpPwQkqKfwHSYN6jFn7iVJTnP3+58/lDiNUWbxcWyUhmeunYIfudAjs5U5wIX+ICoSK6Tt5HRB+r7zuLfuhX/Q2V7znJKSKMUUFwrU5nbkHxC4XCiwwGD6u6PAoTpujbtPKaEAYDKClwY85dwN1KQ==~4337721~3485753; _gid=GA1.2.2084870545.1693244618; _clck=yn0orw|2|fej|0|1331; cto_bundle=Cd0nDV9VY1A4Uk80VXpwd0swdGg2RjAlMkJ3amNzUXh3RVlpMnBGOGNQJTJCUFFFREklMkZudEM5ZVlqdEhncHNyenROYVJJZGtkWGVaaDc5cnhuTWpkSWRpSXNRWHBHSHJjQTN5OUtNdlp5SXhpaUk2RXpzemo4N1dFJTJCdWJYTHE3Mk10eWh3V1B3SzJ5RFJFdnZXb2FZaW1ZRlRsZmZGZyUzRCUzRA; JSESSIONID=0000-z1NXHKxAYjgWpoWvVc79FX:1bb1azby7; ak_bmsc=F07EFC4DC68DC821A26624D011945F73~000000000000000000000000000000~YAAQNNXdWDeavPOJAQAA4/NIPRSTCX+KX5uJvwbKVCXxKEU41QY/i4lpD/Oul2k6S4xAYRUnt/+Y37GZ1dIm/byfdB7nGOK6+h9bmvtCGPJhIuP+uba0ZlgjxJ3ud/Hgu3uHugXtdc1msEtHD3kVooJ9RPLfscYZ5M6osnWbD0av29TflfO8aqml3O16xU9k9IqGP14I8Kdw1YM8eW66gxepzlBJG5YFIMwmnDx4/EIPGvdteoIXxUOhOTKh4knQgVJ3G16GFG/XwRNVfyKETDUGRUupFrgWltMs/e7W1lfTeOgZJu/F5nUir9ximbSSsiY1OhCuketzdECTILCerFUitp1FESpW/kcrB9pWXoJbWN57998L5UcVcjBxA6sLN/0ZYgaF67KGlUBu0G1SuXfez+BNrX2lti6S1ppGfIywt/ablGhl5CcvF3RY9dPf5o6N99Qm/VMHJoAd4apOYIBqb9DpUSif3pwa1a9WhDI7MuJdut6S/p68r37IB7A/AxryV1EE4fHvtQROLTOf3Hg4bcDSSCVCqKScnVmzSDMgHrT23MR4vguW9h/MrQ==; OptanonConsent=isGpcEnabled=0&datestamp=Mon+Aug+28+2023+19%3A55%3A20+GMT%2B0200+(hora+de+verano+de+Europa+central)&version=202210.1.0&isIABGlobal=false&hosts=&consentId=f226da71-8fcb-4e3f-8fbb-6b279d379481&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&geolocation=ES%3BCT&AwaitingReconsent=false; _ga=GA1.2.1502706973.1692897991; _dc_gtm_UA-2867281-14=1; WC_AUTH_64009600=600004986449:Bearer$R$qsn1vQJQGG1-8zCtpJlEJcf16q6ItLzqnA8OU2o-b7VbTT3UCjksr1ihiFSbIviczatXoHLBGTkNJTd6TYnC8OtWF6qqLcZ085KY0spuVHdZ_B_B1aZV8irhqhY6jJNX:Bearer$R$qsn1vQJQGG1-8zCtpJlEJcf16q6ItLzqnA8OU2o-b7VbTT3UCjksr1ihiFSbIviczatXoHLBGTkNJTd6TYnC8OtWF6qqLcZ085KY0spuVHdZ_B_B1aZV8irhqhY6jJNX; _abck=BA108337CFE6D89183D888A5B4000D1C~0~YAAQNNXdWFydvPOJAQAATtVJPQpfKXO6Ho4//3B1aS2nCncyRuf/gPvggvds/QzNEKI+idaMBD7khsrvOWipJseCpjrg8xya94IOYsZDMjQwTr3OvgwhzgSd6aFcgKdjcSK85l1C8N/64AfLFOOjLfIPSrURY9w9lZ3SFS62ZIxH4vBEbYaPbOJzpUX6v09UpwrCex5aYxux7nStVytUbRuZNX+NfcoDd/1vkxAa+/Ve456xexyI8oQMUWPZl1cVKcscHz+Oe6/2nr75LGbbV4Ec4qPMb4AyY0JiAlOhq3ZRGjFwAq/KsXlVJb2WeFEzuavdI7ULJIZRGGSZEjB99BahN1vRhbvS7BkG8pS1YnO//iFVzpT71zvBw5bjMjuYAlLE6nN1Qq/rwpKlKyux0YQ+mPd8Wzw=~-1~-1~-1; TS0105c744=0165eae04fe915d495b10fc934a603ae7867dabf3d26d0f7161f90ea0bdf44f045bb6963538b51cfe5eab779af9be31a83abe295e5; _ga_6ZYB48CKY8=GS1.1.1693244617.8.1.1693245363.0.0.0; _clsk=1uicgks|1693245364177|20|1|x.clarity.ms/collect; _uetsid=6b3da2d045ca11ee99f367eef13edd66; _uetvid=5dc75cc042a311ee83efedca1e06f64f; bm_sv=5380686FF95A9AE2A7A02754173D409B~YAAQNNXdWIOdvPOJAQAA5dhJPRQAu1nnRNBK/poGnC3BoM8vv2+FWyaZOoVeavAdPiYfVA6V8w3UDOyVY0aghEKb14g70WB+bjUyYqkJ7Fp6oQV3iaSrgxsW35Bxsq5sPBePSk9gYkmMcs0wsQIrcbHAgcuQxhjeiiJ7T4F9bf6ear5fdBQsJ96wiqtf82sSxoWezOM110zXIA3eNGztFg1LjWG8l/n4+UUWyuomhMWJ0xewMYzlMHpvyL5JwGcm~1; RT="z=1&dm=oysho.com&si=fb6c2f50-b82a-4d94-ab3a-6fa097b6f41f&ss=llv64irr&sl=s&tt=u4c&bcn=%2F%2F684dd311.akstat.io%2F&ld=g1p3&ul=g2oy"'
})

Cypress.Commands.add('accept', () =>{
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
})

Cypress.Commands.add('user-Agent', () =>{
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
})
Cypress.Commands.add('encoding', () =>{
    'gzip, deflate, br'
})
Cypress.Commands.add('language', () =>{
    'es-ES,es;q=0.9'
})
Cypress.Commands.add('cachecontrol', () =>{
    'max-age=0'
})
Cypress.Commands.add('connection', () =>{
    'keep-alive'
})

Cypress.Commands.add('sec-Ch-Ua', () =>{
    '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"'
})
