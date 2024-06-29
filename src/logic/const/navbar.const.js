export const NavbarInit = {
    ES:{
        NavBrand : {
            Title: 'Inicio',
            Link:'/'
        },
        ButtonSearch:'Buscar',
        Links:[
            {
                IsDropDown: false,
                Title: 'Hoja de Vida',
                Link:`http://localhost:5173/src/assets/certificates/Watter Resume.pdf`,
                Drops:[] 
             },
             {
                IsDropDown: false,
                Title: 'Certificados',
                Link:'#Certificates',
                Drops:[] 
             }
        ]
    },
    EN:{
        NavBrand : {
            Title: 'Home',
            Link:'/'
        },
        ButtonSearch:'Home',
        Links:[
            {
                IsDropDown: false,
                Title: 'Resume',
                Link:`http://localhost:5173/src/assets/certificates/Watter Resume.pdf`,
                Drops:[] 
             },
             {
                IsDropDown: false,
                Title: 'Certificates',
                Link:'#Certificates',
                Drops:[] 
             }
        ]
    }
}