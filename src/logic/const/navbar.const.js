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
                Link:`/certificates/Watter Resume.pdf`,
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
                Link:`/certificates/Watter Resume.pdf`,
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